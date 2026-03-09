-- ============================================
-- SUPABASE DATABASE SCHEMA
-- Portfolio Dewanta Rahma Satria
-- Run this in your Supabase SQL Editor
-- ============================================

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- ============================================
-- TABLE: projects
-- ============================================
CREATE TABLE IF NOT EXISTS projects (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title TEXT NOT NULL,
  description TEXT,
  image_url TEXT,
  tech_stack TEXT[] DEFAULT '{}',
  project_url TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- ============================================
-- TABLE: education
-- ============================================
CREATE TABLE IF NOT EXISTS education (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  institution TEXT NOT NULL,
  degree TEXT NOT NULL,
  location TEXT,
  start_year INTEGER NOT NULL,
  end_year INTEGER,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- ============================================
-- TABLE: experiences
-- ============================================
CREATE TABLE IF NOT EXISTS experiences (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  role TEXT NOT NULL,
  company TEXT NOT NULL,
  start_date DATE NOT NULL,
  end_date DATE,
  description TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- ============================================
-- TABLE: tools
-- ============================================
CREATE TABLE IF NOT EXISTS tools (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  category TEXT,
  icon_url TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- ============================================
-- ROW LEVEL SECURITY (public read)
-- ============================================
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE education ENABLE ROW LEVEL SECURITY;
ALTER TABLE experiences ENABLE ROW LEVEL SECURITY;
ALTER TABLE tools ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public read" ON projects FOR SELECT USING (true);
CREATE POLICY "Allow public read" ON education FOR SELECT USING (true);
CREATE POLICY "Allow public read" ON experiences FOR SELECT USING (true);
CREATE POLICY "Allow public read" ON tools FOR SELECT USING (true);

-- ============================================
-- SEED DATA: Education
-- ============================================
INSERT INTO education (institution, degree, location, start_year, end_year) VALUES
  ('Telkom University', 'S1 Rekayasa Perangkat Lunak', 'Bandung', 2023, NULL),
  ('MA BAITUL ARQOM', 'Madrasah Aliyah', 'Bandung', 2019, 2023),
  ('SMPN 1 Cimaung', 'Sekolah Menengah Pertama', 'Bandung', 2017, 2019);

-- ============================================
-- SEED DATA: Experiences
-- ============================================
INSERT INTO experiences (role, company, start_date, end_date, description) VALUES
  ('Asisten Praktikum Informatic Lab', 'Telkom University', '2023-09-01', NULL, 'Membantu mahasiswa dalam praktikum ilmu komputer dan matakuliah terkait informatika.'),
  ('Asisten Dosen Mata Kuliah Struktur Data', 'Telkom University', '2023-09-01', '2024-01-31', 'Membantu dosen dalam proses pengajaran mata kuliah Struktur Data kepada mahasiswa.'),
  ('Internship UI/UX Designer', 'Yayasan Masjid Bandung', '2023-07-01', '2023-11-30', 'Merancang antarmuka aplikasi mobile untuk kebutuhan yayasan.');

-- ============================================
-- SEED DATA: Tools
-- ============================================
INSERT INTO tools (name, category, icon_url) VALUES
  ('Visual Studio Code', 'Code Editor', 'vscode'),
  ('Vue JS', 'Framework', 'vuejs'),
  ('React JS', 'Framework', 'react'),
  ('Next JS', 'Framework', 'nextjs'),
  ('Antigravity', 'Code Editor', 'antigravity'),
  ('Laravel', 'Framework', 'laravel'),
  ('Supabase', 'Database PostgreSQL', 'supabase'),
  ('Express JS', 'Framework', 'express'),
  ('Flutter', 'Framework', 'flutter'),
  ('Figma', 'Design App', 'figma'),
  ('Github', 'Repository', 'github'),
  ('Bootstrap', 'Framework CSS', 'bootstrap');

-- ============================================
-- SEED DATA: Projects
-- ============================================
INSERT INTO projects (title, description, image_url, tech_stack, project_url) VALUES
  (
    'Website Admin Hikepass',
    'Aplikasi CRUD untuk memonitoring aplikasi mobile hikepass user dengan fitur manajemen pengguna, pendakian, dan laporan lengkap.',
    '',
    ARRAY['Vue JS', 'Laravel', 'MySQL', 'Bootstrap'],
    '#'
  ),
  (
    'Hikepass Mobile',
    'Aplikasi tiket pendakian untuk para pendaki di Indonesia dengan fitur booking, tracking, dan informasi jalur pendakian.',
    '',
    ARRAY['Flutter', 'Supabase', 'Dart'],
    '#'
  ),
  (
    'Hamim Mobile App',
    'Aplikasi Penghafal Al-Qur''an dengan fitur hafalan, muraja''ah, dan progress tracking untuk membantu pengguna dalam menghafal.',
    '',
    ARRAY['Figma'],
    '#'
  );

-- ============================================
-- STORAGE BUCKET: project-images
-- ============================================
-- Run in Supabase Dashboard > Storage:
-- Create bucket named "project-images" with public access enabled
