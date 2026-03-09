"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Briefcase, MapPin, Calendar } from "lucide-react";
import { Education, Experience } from "@/types";
import { formatYear, formatDate } from "@/lib/utils";

interface EduExpProps {
  education: Education[];
  experiences: Experience[];
}

function Skeleton() {
  return (
    <div className="space-y-3">
      {[1, 2, 3].map((i) => (
        <div key={i} className="h-24 rounded-2xl skeleton" />
      ))}
    </div>
  );
}

export default function EduExp({ education, experiences }: EduExpProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="pendidikan" className="py-20 relative" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-10">
          {/* Education */}
          <div id="pendidikan-col">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="flex items-end justify-between mb-8"
            >
              <div>
                <span className="text-xs font-mono text-purple-500 tracking-widest uppercase">Background</span>
                <h2 className="text-3xl font-extrabold mt-1">
                  <span className="gradient-text">Pendidikan</span>
                </h2>
              </div>
              <a href="#" className="text-sm text-purple-400 hover:text-purple-300 transition-colors font-mono pb-1">
                Lihat Semua →
              </a>
            </motion.div>

            <div className="space-y-4">
              {education.length === 0 ? (
                <Skeleton />
              ) : (
                education.map((edu, i) => (
                  <motion.div
                    key={edu.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: i * 0.12 }}
                    whileHover={{ x: 4 }}
                    className="card-glass rounded-2xl p-5 cursor-default transition-all duration-300 group"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-purple-900/40 border border-purple-700/30 flex items-center justify-center flex-shrink-0 group-hover:border-purple-500/50 transition-colors">
                        <GraduationCap size={18} className="text-purple-400" />
                      </div>
                      <div>
                        <p className="text-xs font-mono text-purple-500 flex items-center gap-1 mb-1">
                          <Calendar size={10} />
                          {edu.start_year} — {formatYear(edu.end_year)}
                        </p>
                        <h3 className="font-bold text-white text-sm leading-snug">{edu.degree}</h3>
                        <p className="text-gray-400 text-xs mt-0.5 flex items-center gap-1">
                          {edu.institution}
                          {edu.location && (
                            <>
                              <span className="text-gray-600">·</span>
                              <MapPin size={9} className="text-purple-500/70" />
                              {edu.location}
                            </>
                          )}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))
              )}
            </div>
          </div>

          {/* Experience */}
          <div id="pengalaman">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="flex items-end justify-between mb-8"
            >
              <div>
                <span className="text-xs font-mono text-purple-500 tracking-widest uppercase">Journey</span>
                <h2 className="text-3xl font-extrabold mt-1">
                  <span className="gradient-text">Pengalaman</span>
                </h2>
              </div>
              <a href="#" className="text-sm text-purple-400 hover:text-purple-300 transition-colors font-mono pb-1">
                Lihat Semua →
              </a>
            </motion.div>

            <div className="space-y-4">
              {experiences.length === 0 ? (
                <Skeleton />
              ) : (
                experiences.map((exp, i) => (
                  <motion.div
                    key={exp.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: i * 0.12 }}
                    whileHover={{ x: -4 }}
                    className="card-glass rounded-2xl p-5 cursor-default transition-all duration-300 group"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-purple-900/40 border border-purple-700/30 flex items-center justify-center flex-shrink-0 group-hover:border-purple-500/50 transition-colors">
                        <Briefcase size={18} className="text-purple-400" />
                      </div>
                      <div>
                        <p className="text-xs font-mono text-purple-500 flex items-center gap-1 mb-1">
                          <Calendar size={10} />
                          {formatDate(exp.start_date)} — {formatDate(exp.end_date)}
                        </p>
                        <h3 className="font-bold text-white text-sm leading-snug">{exp.role}</h3>
                        <p className="text-gray-400 text-xs mt-0.5">{exp.company}</p>
                        {exp.description && (
                          <p className="text-gray-500 text-xs mt-1.5 leading-relaxed line-clamp-2">{exp.description}</p>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
