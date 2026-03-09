import { Project, Education, Experience, Tool } from "@/types";

export const mockProjects: Project[] = [
  {
    id: "1",
    title: "Website Admin Hikepass",
    description: "Aplikasi CRUD untuk memonitoring aplikasi mobile hikepass user",
    image_url: "",
    tech_stack: ["Vue JS", "Laravel", "MySQL", "Bootstrap"],
    project_url: "#",
    created_at: new Date().toISOString(),
  },
  {
    id: "2",
    title: "Hikepass Mobile",
    description: "Aplikasi tiket pendakian untuk para pendaki di Indonesia",
    image_url: "",
    tech_stack: ["Flutter", "Supabase", "Dart"],
    project_url: "#",
    created_at: new Date().toISOString(),
  },
  {
    id: "3",
    title: "Hamim Mobile App",
    description: "Aplikasi Penghafal Al-Qur'an",
    image_url: "",
    tech_stack: ["Figma"],
    project_url: "#",
    created_at: new Date().toISOString(),
  },
];

export const mockEducation: Education[] = [
  {
    id: "1",
    institution: "Telkom University",
    degree: "S1 Rekayasa Perangkat Lunak",
    location: "Bandung",
    start_year: 2023,
    end_year: null,
  },
  {
    id: "2",
    institution: "MA BAITUL ARQOM",
    degree: "Madrasah Aliyah",
    location: "Bandung",
    start_year: 2019,
    end_year: 2023,
  },
  {
    id: "3",
    institution: "SMPN 1 Cimaung",
    degree: "Sekolah Menengah Pertama",
    location: "Bandung",
    start_year: 2017,
    end_year: 2019,
  },
];

export const mockExperiences: Experience[] = [
  {
    id: "1",
    role: "Asisten Praktikum Informatic Lab",
    company: "Telkom University",
    start_date: "2023-09-01",
    end_date: null,
    description: "Membantu mahasiswa dalam praktikum ilmu komputer dan informatika.",
  },
  {
    id: "2",
    role: "Asisten Dosen Mata Kuliah Struktur Data",
    company: "Telkom University",
    start_date: "2023-09-01",
    end_date: "2024-01-31",
    description: "Membantu dosen dalam mengajar mata kuliah Struktur Data.",
  },
  {
    id: "3",
    role: "Internship UI/UX Designer",
    company: "Yayasan Masjid Bandung",
    start_date: "2023-07-01",
    end_date: "2023-11-30",
    description: "Merancang antarmuka aplikasi mobile untuk yayasan.",
  },
];

export const mockTools: Tool[] = [
  { id: "1", name: "Visual Studio Code", category: "Code Editor", icon_url: "vscode" },
  { id: "2", name: "Vue JS", category: "Framework", icon_url: "vuejs" },
  { id: "3", name: "React JS", category: "Framework", icon_url: "react" },
  { id: "4", name: "Next JS", category: "Framework", icon_url: "nextjs" },
  { id: "5", name: "Antigravity", category: "Code Editor", icon_url: "antigravity" },
  { id: "6", name: "Laravel", category: "Framework", icon_url: "laravel" },
  { id: "7", name: "Supabase", category: "Database PostgreSQL", icon_url: "supabase" },
  { id: "8", name: "Express JS", category: "Framework", icon_url: "express" },
  { id: "9", name: "Flutter", category: "Framework", icon_url: "flutter" },
  { id: "10", name: "Figma", category: "Design App", icon_url: "figma" },
  { id: "11", name: "Github", category: "Repository", icon_url: "github" },
  { id: "12", name: "Bootstrap", category: "Framework CSS", icon_url: "bootstrap" },
];
