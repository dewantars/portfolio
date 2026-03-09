"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Code2, ImageIcon } from "lucide-react";
import { Project } from "@/types";
import Image from "next/image";

interface ProjectsProps {
  data: Project[];
}

const techColors: Record<string, string> = {
  "Vue JS": "bg-green-900/30 text-green-400 border-green-700/30",
  "React JS": "bg-cyan-900/30 text-cyan-400 border-cyan-700/30",
  "Next JS": "bg-gray-800 text-gray-300 border-gray-600/30",
  "Laravel": "bg-red-900/30 text-red-400 border-red-700/30",
  "Flutter": "bg-blue-900/30 text-blue-400 border-blue-700/30",
  "MySQL": "bg-orange-900/30 text-orange-400 border-orange-700/30",
  "Bootstrap": "bg-purple-900/30 text-purple-400 border-purple-700/30",
  "Supabase": "bg-emerald-900/30 text-emerald-400 border-emerald-700/30",
  "Dart": "bg-cyan-900/30 text-cyan-400 border-cyan-700/30",
  "Figma": "bg-pink-900/30 text-pink-400 border-pink-700/30",
  "TypeScript": "bg-blue-900/30 text-blue-400 border-blue-700/30",
};

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -8, scale: 1.01 }}
      className="group card-glass rounded-3xl overflow-hidden glow-purple-hover transition-all duration-500 flex flex-col"
    >
      {/* Image area */}
      <div className="relative h-48 bg-gradient-to-br from-purple-900/30 via-[#111118] to-violet-900/20 overflow-hidden">
        {project.image_url ? (
          <Image
            src={project.image_url}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <div className="text-center">
              <div className="w-16 h-16 rounded-2xl bg-purple-900/40 border border-purple-700/30 flex items-center justify-center mx-auto mb-2">
                <Code2 size={28} className="text-purple-400" />
              </div>
              <p className="text-xs text-gray-600 font-mono">{project.title}</p>
            </div>
          </div>
        )}

        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#111118] via-transparent to-transparent opacity-60" />

        {/* Category badge */}
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 rounded-full text-xs font-mono bg-purple-900/60 text-purple-300 border border-purple-700/40 backdrop-blur-sm">
            Project
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        <h3 className="font-bold text-white text-lg mb-2 group-hover:text-purple-300 transition-colors">
          {project.title}
        </h3>
        <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-1 line-clamp-3">
          {project.description}
        </p>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-2 mb-5">
          {project.tech_stack?.map((tech) => (
            <span
              key={tech}
              className={`px-2.5 py-1 rounded-lg text-xs font-medium border ${
                techColors[tech] || "bg-purple-900/20 text-purple-400 border-purple-700/30"
              }`}
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Button */}
        <motion.a
          href={project.project_url || "#"}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full py-3 rounded-xl bg-gradient-to-r from-purple-700 to-purple-500 text-white text-sm font-semibold text-center flex items-center justify-center gap-2 hover:shadow-[0_0_25px_rgba(168,85,247,0.4)] transition-all duration-300"
        >
          <ExternalLink size={14} />
          Selengkapnya
        </motion.a>
      </div>
    </motion.div>
  );
}

function ProjectSkeleton() {
  return (
    <div className="card-glass rounded-3xl overflow-hidden">
      <div className="h-48 skeleton" />
      <div className="p-6 space-y-3">
        <div className="h-5 w-3/4 skeleton rounded-lg" />
        <div className="h-3 skeleton rounded" />
        <div className="h-3 w-5/6 skeleton rounded" />
        <div className="flex gap-2 mt-4">
          {[1, 2, 3].map((i) => <div key={i} className="h-6 w-16 skeleton rounded-lg" />)}
        </div>
        <div className="h-10 skeleton rounded-xl mt-2" />
      </div>
    </div>
  );
}

export default function Projects({ data }: ProjectsProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="proyek" className="py-24 relative" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-end justify-between mb-12"
        >
          <div>
            <span className="text-xs font-mono text-purple-500 tracking-widest uppercase">Portfolio</span>
            <h2 className="text-4xl font-extrabold mt-1">
              Proyek <span className="gradient-text">Saya</span>
            </h2>
            <p className="text-gray-400 text-sm mt-2">Berikut ini project yang telah saya buat</p>
          </div>
          <a href="#" className="text-sm text-purple-400 hover:text-purple-300 transition-colors font-mono pb-1">
            Lihat Semua →
          </a>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.length === 0
            ? [1, 2, 3].map((i) => <ProjectSkeleton key={i} />)
            : data.map((project, i) => (
                <ProjectCard key={project.id} project={project} index={i} />
              ))}
        </div>
      </div>
    </section>
  );
}
