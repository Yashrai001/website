# Hotel Luxe - Premium Event Venue & Marriage Hall

A production-ready, highly optimized Next.js application designed for a luxury wedding and event venue.

## Architecture & Tech Stack
- **Framework**: Next.js 16 (App Router, Turbopack)
- **Language**: TypeScript (Strict Mode)
- **Styling**: Tailwind CSS v4
- **UI Components**: Curated accessible components & Lucide Icons
- **Animations**: Framer Motion
- **Persistence**: Hybrid in-memory & `/tmp` serverless fallback with optional Postgres/Supabase integration
- **SEO**: Dynamic Sitemap (`/sitemap.xml`), Robots.txt (`/robots.txt`), Schema.org JSON-LD (`EventVenue`), OpenGraph, and Twitter Cards

---

## Local Development

### 1. Install Dependencies
```bash
npm install
```

### 2. Configure Environment Variables
Copy `.env.example` to `.env.local`:
```bash
cp .env.example .env.local
```
Set `ADMIN_PASSWORD` to your desired password for accessing `/admin`.

### 3. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view the site locally.

---

## Environment Variables

| Variable | Required | Default | Description |
|---|---|---|---|
| `ADMIN_PASSWORD` | Recommended | `luxe_admin_2026` | Password protecting the `/admin` lead management dashboard |
| `NEXT_PUBLIC_SITE_URL` | Optional | Auto-detected from Vercel (`https://<project>.vercel.app`) | Canonical URL for SEO sitemaps and Open Graph cards |
| `DATABASE_URL` | Optional | *None* | Connection string if integrating an external Postgres / Supabase database |

---

## Deploying to Vercel

### Step 1: Push Code to Git
Initialize git (if not already done) and push to GitHub, GitLab, or Bitbucket:
```bash
git add .
git commit -m "Prepare Hotel Luxe for Vercel deployment"
git push origin main
```

### Step 2: Import Project in Vercel
1. Log in to [Vercel](https://vercel.com).
2. Click **Add New...** -> **Project**.
3. Select and import your Hotel Luxe repository.

### Step 3: Configure Project Settings on Vercel
- **Framework Preset**: `Next.js` (automatically detected)
- **Root Directory**: `./` (leave default)
- **Build Command**: `npm run build` (leave default)
- **Output Directory**: `.next` (leave default)
- **Install Command**: `npm install` (leave default)
- **Node.js Version**: `20.x` or higher (configured in `package.json`)

### Step 4: Add Environment Variables
Under the **Environment Variables** section in the Vercel deployment wizard, add:
1. **Key**: `ADMIN_PASSWORD`  
   **Value**: *Your custom secure password for the admin dashboard*
2. **Key**: `NEXT_PUBLIC_SITE_URL` (Optional)  
   **Value**: `https://your-custom-domain.com` (or your `.vercel.app` domain)

### Step 5: Click Deploy
Click **Deploy**. Vercel will run the build, optimize static routes, and deploy the application worldwide on Vercel's edge network.

---

## Lead Management & Serverless Persistence

- **Booking & Enquiry Forms**: The website contains fully functional lead generation and visit booking forms (`/book` and `/contact`).
- **Serverless Compatibility**: In a Vercel serverless environment, enquiries are safely handled in memory and saved to `/tmp` to ensure submissions never return 500 errors.
- **Permanent Database Integration**: For permanent storage across lambda lifecycles, connect any PostgreSQL provider (Vercel Postgres, Supabase, Neon) using the `DATABASE_URL` environment variable.

---

## Admin Dashboard

- **URL**: `/admin`
- **Login**: `/admin/login`
- **Features**: Real-time enquiry list, status updates (New, Contacted, Confirmed, Completed, Cancelled), and event KPI statistics.
