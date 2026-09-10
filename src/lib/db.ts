import fs from 'fs/promises';
import path from 'path';
import os from 'os';

export type EnquiryStatus = 'New' | 'Contacted' | 'Confirmed' | 'Completed' | 'Cancelled';

export interface Enquiry {
  id: string;
  name: string;
  phone: string;
  email: string;
  eventType: string;
  date: string;
  guests: string | number;
  venue?: string;
  message: string;
  status: EnquiryStatus;
  createdAt: string;
}

const LOCAL_DB_PATH = path.join(process.cwd(), 'data', 'enquiries.json');
const TMP_DB_PATH = path.join(os.tmpdir(), 'enquiries.json');

// In-memory cache for serverless execution contexts
let memoryCache: Enquiry[] | null = null;

async function writeSafely(data: Enquiry[]) {
  const jsonStr = JSON.stringify(data, null, 2);
  
  // Try writing to local project path first (works in local dev)
  try {
    await fs.mkdir(path.dirname(LOCAL_DB_PATH), { recursive: true });
    await fs.writeFile(LOCAL_DB_PATH, jsonStr);
    return;
  } catch {
    // Expected in Vercel serverless (read-only filesystem)
  }

  // Fallback to /tmp (writable in AWS Lambda / Vercel Serverless)
  try {
    await fs.writeFile(TMP_DB_PATH, jsonStr);
  } catch (error) {
    console.warn('Could not write enquiries to /tmp:', error);
  }
}

export async function getEnquiries(): Promise<Enquiry[]> {
  if (memoryCache !== null) {
    return [...memoryCache];
  }

  // 1. Try reading from /tmp if previously written
  try {
    const tmpData = await fs.readFile(TMP_DB_PATH, 'utf-8');
    memoryCache = JSON.parse(tmpData) as Enquiry[];
    return [...memoryCache];
  } catch {
    // tmp does not exist yet
  }

  // 2. Try reading from bundled static data
  try {
    const localData = await fs.readFile(LOCAL_DB_PATH, 'utf-8');
    memoryCache = JSON.parse(localData) as Enquiry[];
    return [...memoryCache];
  } catch {
    // bundled file not found
  }

  // 3. Fallback to empty array
  memoryCache = [];
  return [...memoryCache];
}

export async function saveEnquiry(enquiryData: Omit<Enquiry, 'id' | 'status' | 'createdAt'>): Promise<Enquiry> {
  const enquiries = await getEnquiries();
  
  const newEnquiry: Enquiry = {
    ...enquiryData,
    id: Math.random().toString(36).substring(2, 11),
    status: 'New',
    createdAt: new Date().toISOString()
  };
  
  enquiries.push(newEnquiry);
  memoryCache = enquiries;
  await writeSafely(enquiries);
  
  return newEnquiry;
}

export async function updateEnquiryStatus(id: string, status: EnquiryStatus): Promise<Enquiry | null> {
  const enquiries = await getEnquiries();
  const index = enquiries.findIndex(e => e.id === id);
  
  if (index === -1) return null;
  
  enquiries[index].status = status;
  memoryCache = enquiries;
  await writeSafely(enquiries);
  
  return enquiries[index];
}
