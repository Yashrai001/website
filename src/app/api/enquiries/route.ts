import { NextResponse } from 'next/server';
import { getEnquiries, saveEnquiry } from '@/lib/db';

export async function GET() {
  try {
    const enquiries = await getEnquiries();
    // Return sorted by newest first
    const sorted = enquiries.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
    return NextResponse.json(sorted);
  } catch (error) {
    console.error('Failed to fetch enquiries:', error);
    return NextResponse.json({ error: 'Failed to fetch enquiries' }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    
    // Sanitize inputs
    const name = body.name?.trim();
    const phone = body.phone?.trim();
    const email = body.email?.trim().toLowerCase();
    const eventType = body.eventType?.trim();
    const date = body.date?.trim();
    const guests = body.guests;
    const message = body.message?.trim();
    const venue = body.venue?.trim();

    // Basic Validation
    if (!name || !phone || !email || !date || !guests) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // Duplicate submission check (same email, same date)
    const existing = await getEnquiries();
    const isDuplicate = existing.some(e => e.email === email && e.date === date);
    if (isDuplicate) {
      return NextResponse.json({ error: 'An enquiry for this date and email already exists' }, { status: 409 });
    }

    const newEnquiry = await saveEnquiry({
      name,
      phone,
      email,
      eventType: eventType || 'Other',
      date,
      guests,
      message: message || '',
      venue
    });

    return NextResponse.json({ success: true, data: newEnquiry }, { status: 201 });
  } catch (error) {
    console.error('Failed to save enquiry:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
