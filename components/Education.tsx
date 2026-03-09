"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, MapPin, Calendar } from "lucide-react";
import { Education as EducationType } from "@/types";
import { formatYear } from "@/lib/utils";

interface EducationProps {
  data: EducationType[];
}

function EducationSkeleton() {
  return (
    <div className="space-y-3">
      {[1, 2, 3].map((i) => (
        <div key={i} className="h-24 rounded-2xl skeleton" />
      ))}
    </div>
  );
}

export default function Education({ data }: EducationProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="pendidikan" className="py-12 relative" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="flex items-center justify-between mb-8"
            >
              <div>
                <span className="text-xs font-mono text-purple-500 tracking-widest uppercase">Background</span>
                <h2 className="text-3xl font-extrabold mt-1">
                  <span className="gradient-text">Pendidikan</span>
                </h2>
              </div>
              <a
                href="#"
                className="text-sm text-purple-400 hover:text-purple-300 transition-colors font-mono"
              >
                Lihat Semua →
              </a>
            </motion.div>

            <div className="space-y-4">
              {data.length === 0 ? (
                <EducationSkeleton />
              ) : (
                data.map((edu, i) => (
                  <motion.div
                    key={edu.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    whileHover={{ x: 4, borderColor: "rgba(168,85,247,0.4)" }}
                    className="card-glass rounded-2xl p-5 cursor-default transition-all duration-300"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-purple-900/40 border border-purple-700/30 flex items-center justify-center flex-shrink-0">
                        <GraduationCap size={18} className="text-purple-400" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-xs font-mono text-purple-500 flex items-center gap-1">
                            <Calendar size={10} />
                            {edu.start_year} — {formatYear(edu.end_year)}
                          </span>
                        </div>
                        <h3 className="font-bold text-white text-sm leading-snug">{edu.degree}</h3>
                        <p className="text-gray-400 text-sm mt-0.5 flex items-center gap-1">
                          <MapPin size={10} className="text-purple-500" />
                          {edu.institution}
                          {edu.location && ` · ${edu.location}`}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))
              )}
            </div>
          </div>

          {/* Experience column is rendered in a separate component but placed in the same grid */}
          <div id="pengalaman-placeholder" />
        </div>
      </div>
    </section>
  );
}
