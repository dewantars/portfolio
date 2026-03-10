"use client";

import { createContext, useContext, useState, ReactNode } from "react";

export type Lang = "id" | "en";

interface LanguageContextType {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (key: string) => string;
}

const translations: Record<Lang, Record<string, string>> = {
  id: {
    // Navbar
    "nav.home": "Beranda",
    "nav.about": "Tentang Saya",
    "nav.projects": "Proyek",
    "nav.contact": "Kontak",

    // Hero
    "hero.greeting": "Hi, Saya Dewanta Rahma Satria",
    "hero.desc": "Saya memiliki ketertarikan dalam bidang pengembangan perangkat lunak, terutama pada pembuatan aplikasi sebagai web dan mobile developer yang telah saya tekuni selama beberapa tahun terakhir.",
    "hero.cv": "Unduh CV",
    "hero.available": "Tersedia untuk bekerja",
    "hero.stat.years": "Tahun Pengalaman",
    "hero.stat.projects": "Proyek Selesai",
    "hero.stat.tech": "Teknologi",
    "hero.scroll": "gulir ke bawah",

    // About
    "about.tag": "Mengenal Lebih Dekat",
    "about.title": "Tentang",
    "about.title2": "Saya",
    "about.p1": "Saya adalah mahasiswa tahun ketiga jurusan rekayasa perangkat lunak di",
    "about.p1b": ", saya memiliki visi untuk menjadi seorang profesional yang berkontribusi pada pengembangan teknologi melalui solusi perangkat lunak yang inovatif dan bermanfaat.",
    "about.p2": "Dengan keterampilan teknis dalam pengembangan perangkat lunak dan keterampilan lunak dalam desain grafis, saya mengarahkan minat karir saya ke pengembangan aplikasi sebagai",
    "about.p2b": "pengembang front-end dan back-end",
    "about.p2c": ".",
    "about.p3": "Saya berkomitmen untuk belajar, mengembangkan diri, dan memberikan dampak positif melalui teknologi yang saya kembangkan.",

    // Education
    "edu.tag": "Background",
    "edu.title": "Pendidikan",
    "edu.seeAll": "Lihat Semua",

    // Experience
    "exp.tag": "Journey",
    "exp.title": "Pengalaman",
    "exp.seeAll": "Lihat Semua",

    // Projects
    "proj.tag": "Portfolio",
    "proj.title": "Proyek",
    "proj.title2": "Saya",
    "proj.subtitle": "Berikut ini project yang telah saya buat",
    "proj.seeAll": "Lihat Semua",
    "proj.btn": "Selengkapnya",

    // Tools
    "tools.tag": "Stack",
    "tools.title": "Tools yang",
    "tools.title2": "dipakai",
    "tools.subtitle": "Berikut ini Beberapa tools yang biasa saya pakai untuk pembuatan website ataupun mobile",

    // Footer
    "footer.contact": "Kontak",
    "footer.social": "Sosial Media",
    "footer.rights": "Hak cipta dilindungi.",
    "footer.built": "Dibuat dengan Next.js · Tailwind CSS · Supabase",
  },
  en: {
    // Navbar
    "nav.home": "Home",
    "nav.about": "About Me",
    "nav.projects": "Projects",
    "nav.contact": "Contact",

    // Hero
    "hero.greeting": "Hi, I'm Dewanta Rahma Satria",
    "hero.desc": "I have a strong interest in software development, particularly in building applications as a web and mobile developer, which I have been dedicated to for the past few years.",
    "hero.cv": "Download CV",
    "hero.available": "Available for work",
    "hero.stat.years": "Years Experience",
    "hero.stat.projects": "Projects Done",
    "hero.stat.tech": "Technologies",
    "hero.scroll": "scroll down",

    // About
    "about.tag": "Get to Know Me",
    "about.title": "About",
    "about.title2": "Me",
    "about.p1": "I am a third-year software engineering student at",
    "about.p1b": ", with a vision to become a professional who contributes to technology development through innovative and beneficial software solutions.",
    "about.p2": "With technical skills in software development and soft skills in graphic design, I am directing my career interest toward application development as a",
    "about.p2b": "front-end and back-end developer",
    "about.p2c": ".",
    "about.p3": "I am committed to learning, growing, and making a positive impact through the technology I build.",

    // Education
    "edu.tag": "Background",
    "edu.title": "Education",
    "edu.seeAll": "See All",

    // Experience
    "exp.tag": "Journey",
    "exp.title": "Experience",
    "exp.seeAll": "See All",

    // Projects
    "proj.tag": "Portfolio",
    "proj.title": "My",
    "proj.title2": "Projects",
    "proj.subtitle": "Here are some projects I have built",
    "proj.seeAll": "See All",
    "proj.btn": "View More",

    // Tools
    "tools.tag": "Stack",
    "tools.title": "Tools I",
    "tools.title2": "Use",
    "tools.subtitle": "Here are some tools I regularly use for building websites and mobile apps",

    // Footer
    "footer.contact": "Contact",
    "footer.social": "Social Media",
    "footer.rights": "All rights reserved.",
    "footer.built": "Built with Next.js · Tailwind CSS · Supabase",
  },
};

const LanguageContext = createContext<LanguageContextType>({
  lang: "id",
  setLang: () => {},
  t: (key) => key,
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("id");

  const t = (key: string): string => {
    return translations[lang][key] ?? translations["id"][key] ?? key;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
