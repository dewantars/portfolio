"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Code2 } from "lucide-react";
import { Project } from "@/types";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

interface ProjectsProps { data: Project[]; }

const techColors: Record<string, string> = {
  "Vue JS":      "background:rgba(74,222,128,0.1);color:#4ade80;border-color:rgba(74,222,128,0.25)",
  "React JS":    "background:rgba(34,211,238,0.1);color:#22d3ee;border-color:rgba(34,211,238,0.25)",
  "Next JS":     "background:rgba(156,163,175,0.1);color:#9ca3af;border-color:rgba(156,163,175,0.25)",
  "Laravel":     "background:rgba(248,113,113,0.1);color:#f87171;border-color:rgba(248,113,113,0.25)",
  "Flutter":     "background:rgba(96,165,250,0.1);color:#60a5fa;border-color:rgba(96,165,250,0.25)",
  "MySQL":       "background:rgba(251,146,60,0.1);color:#fb923c;border-color:rgba(251,146,60,0.25)",
  "Bootstrap":   "background:rgba(168,85,247,0.1);color:#a855f7;border-color:rgba(168,85,247,0.25)",
  "Supabase":    "background:rgba(52,211,153,0.1);color:#34d399;border-color:rgba(52,211,153,0.25)",
  "Dart":        "background:rgba(56,189,248,0.1);color:#38bdf8;border-color:rgba(56,189,248,0.25)",
  "Figma":       "background:rgba(244,114,182,0.1);color:#f472b6;border-color:rgba(244,114,182,0.25)",
  "TypeScript":  "background:rgba(96,165,250,0.1);color:#60a5fa;border-color:rgba(96,165,250,0.25)",
};

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const { t } = useLanguage();

  return (
    <motion.div ref={ref}
      initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -8, scale: 1.01 }}
      className="project-card card-glass rounded-3xl overflow-hidden flex flex-col transition-all duration-500 group">

      {/* Image */}
      <div className="project-img-bg relative h-48 overflow-hidden"
        style={{ background: "linear-gradient(135deg, rgba(124,58,237,0.12), var(--bg-card))" }}>
        {project.image_url ? (
          <Image src={project.image_url} alt={project.title} fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <div className="text-center">
              <div className="w-14 h-14 rounded-2xl mx-auto mb-2 flex items-center justify-center"
                style={{ background: "rgba(124,58,237,0.12)", border: "1px solid rgba(124,58,237,0.2)" }}>
                <Code2 size={24} className="text-purple-500" />
              </div>
              <p className="text-xs font-mono" style={{ color: "var(--text-muted)" }}>{project.title}</p>
            </div>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 rounded-full text-xs font-mono backdrop-blur-sm"
            style={{ background: "rgba(124,58,237,0.5)", color: "#E9D5FF", border: "1px solid rgba(168,85,247,0.3)" }}>
            Project
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1" style={{ background: "var(--bg-card)" }}>
        <h3 className="font-bold text-lg mb-2 transition-colors group-hover:text-purple-500" style={{ color: "var(--text-primary)" }}>
          {project.title}
        </h3>
        <p className="text-sm leading-relaxed mb-4 flex-1 line-clamp-3" style={{ color: "var(--text-secondary)" }}>
          {project.description}
        </p>

        {/* Tech badges */}
        <div className="flex flex-wrap gap-2 mb-5">
          {project.tech_stack?.map((tech) => (
            <span key={tech} className="px-2.5 py-1 rounded-lg text-xs font-medium border"
              style={techColors[tech]
                ? Object.fromEntries(techColors[tech].split(";").map(s => s.split(":").map(v => v.trim()))) as React.CSSProperties
                : { background: "rgba(124,58,237,0.08)", color: "#A855F7", borderColor: "rgba(124,58,237,0.2)" }}>
              {tech}
            </span>
          ))}
        </div>

        <motion.a href={project.project_url || "#"} target="_blank" rel="noopener noreferrer"
          whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
          className="w-full py-3 rounded-xl text-white text-sm font-semibold text-center flex items-center justify-center gap-2 transition-all duration-300"
          style={{ background: "linear-gradient(135deg,#7C3AED,#9333EA,#A855F7)", boxShadow: "0 4px 15px rgba(124,58,237,0.3)" }}>
          <ExternalLink size={13} /> {t("proj.btn")}
        </motion.a>
      </div>
    </motion.div>
  );
}

function ProjectSkeleton() {
  return (
    <div className="rounded-3xl overflow-hidden" style={{ border: "1px solid var(--border-color)" }}>
      <div className="h-48 skeleton" />
      <div className="p-6 space-y-3" style={{ background: "var(--bg-card)" }}>
        <div className="h-5 w-3/4 skeleton rounded-lg" />
        <div className="h-3 skeleton rounded" />
        <div className="h-3 w-5/6 skeleton rounded" />
        <div className="flex gap-2 mt-4">{[1,2,3].map(i => <div key={i} className="h-6 w-16 skeleton rounded-lg" />)}</div>
        <div className="h-10 skeleton rounded-xl mt-2" />
      </div>
    </div>
  );
}

export default function Projects({ data }: ProjectsProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useLanguage();

  return (
    <section id="proyek" className="py-24 relative" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}
          className="flex items-end justify-between mb-12">
          <div>
            <span className="section-tag text-xs font-mono text-purple-500 tracking-widest uppercase">{t("proj.tag")}</span>
            <h2 className="text-4xl font-extrabold mt-1" style={{ color: "var(--text-primary)" }}>
              {t("proj.title")} <span className="gradient-text">{t("proj.title2")}</span>
            </h2>
            <p className="text-sm mt-2" style={{ color: "var(--text-secondary)" }}>{t("proj.subtitle")}</p>
          </div>
          <a href="#" className="text-sm font-mono pb-1 text-purple-500 hover:text-purple-400 transition-colors">
            {t("proj.seeAll")} →
          </a>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.length === 0
            ? [1,2,3].map(i => <ProjectSkeleton key={i} />)
            : data.map((p, i) => <ProjectCard key={p.id} project={p} index={i} />)}
        </div>
      </div>
    </section>
  );
}
