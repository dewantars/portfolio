# 🚀 Portfolio Dewanta Rahma Satria

Website portfolio modern dengan Next.js 14, Tailwind CSS, Framer Motion, dan Supabase.

## ✨ Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion** (animasi)
- **Supabase** (database & storage)

## 🛠️ Setup

### 1. Install Dependencies

```bash
npm install
```

### 2. Setup Supabase

1. Buat akun di [supabase.com](https://supabase.com)
2. Buat project baru
3. Buka SQL Editor dan jalankan `supabase-migration.sql`
4. Buka Storage, buat bucket `project-images` (public)

### 3. Environment Variables

Salin `.env.local.example` menjadi `.env.local`:

```bash
cp .env.local.example .env.local
```

Isi dengan credentials dari Supabase Dashboard > Settings > API:

```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
```

### 4. Jalankan Development Server

```bash
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000)

## 📁 Struktur Project

```
├── app/
│   ├── globals.css        # Global styles, CSS variables
│   ├── layout.tsx         # Root layout + fonts
│   └── page.tsx           # Main page (Server Component)
├── components/
│   ├── Navbar.tsx         # Navigation + dark mode toggle
│   ├── Hero.tsx           # Hero section + typing animation
│   ├── About.tsx          # Tentang Saya section
│   ├── EduExp.tsx         # Education + Experience (side by side)
│   ├── Projects.tsx       # Project grid cards
│   ├── Tools.tsx          # Tools/skills grid
│   └── Footer.tsx         # Footer + contact
├── lib/
│   ├── supabase.ts        # Supabase client
│   ├── utils.ts           # Utility functions
│   └── data.ts            # Mock/fallback data
├── types/
│   └── index.ts           # TypeScript interfaces
└── supabase-migration.sql # Database schema + seed data
```

## 🎨 Design System

| Token | Value |
|-------|-------|
| Background | `#0B0B0F` |
| Card | `#111118` |
| Primary | `#7C3AED` |
| Mid | `#9333EA` |
| Light | `#A855F7` |

## 📤 Deploy ke Vercel

```bash
npm i -g vercel
vercel
```

Tambahkan environment variables di Vercel Dashboard.

## 📸 Foto Profil

Ganti placeholder di `components/Hero.tsx` dengan komponen `<Image>` yang mengarah ke foto Anda. Upload foto ke Supabase Storage atau folder `public/`.

## 🗄️ Tambah Project Baru

1. Upload gambar ke Supabase Storage bucket `project-images`
2. Salin URL gambar
3. Insert ke tabel `projects` via Supabase Dashboard atau SQL

```sql
INSERT INTO projects (title, description, image_url, tech_stack, project_url)
VALUES ('Nama Project', 'Deskripsi', 'https://...image_url', ARRAY['React', 'Node.js'], 'https://github.com/...');
```
