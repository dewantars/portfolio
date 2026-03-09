"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Quote } from "lucide-react";

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="tentang" className="py-24 relative" ref={ref}>
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <span className="text-xs font-mono text-purple-500 tracking-widest uppercase">Mengenal Lebih Dekat</span>
          <h2 className="text-4xl font-extrabold mt-3">
            Tentang <span className="gradient-text">Saya</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="gradient-border rounded-3xl p-1 glow-purple"
        >
          <div className="bg-[#111118] rounded-3xl p-8 md:p-12 relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-purple-700/5 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-violet-600/5 rounded-full translate-y-1/2 -translate-x-1/2" />

            <Quote className="text-purple-700/40 mb-6" size={40} />

            <div className="relative space-y-4 text-gray-300 leading-relaxed text-lg">
              <p>
                Saya adalah mahasiswa tahun ketiga jurusan rekayasa perangkat lunak di{" "}
                <span className="text-purple-400 font-semibold">Universitas Telkom</span>, saya memiliki visi untuk menjadi seorang profesional yang berkontribusi pada pengembangan teknologi melalui solusi perangkat lunak yang inovatif dan bermanfaat.
              </p>
              <p>
                Dengan keterampilan teknis dalam pengembangan perangkat lunak dan keterampilan lunak dalam desain grafis, saya mengarahkan minat karir saya ke pengembangan aplikasi sebagai{" "}
                <span className="text-purple-400 font-semibold">pengembang front-end dan back-end</span>.
              </p>
              <p>
                Saya berkomitmen untuk belajar, mengembangkan diri, dan memberikan dampak positif melalui teknologi yang saya kembangkan.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-purple-700/20">
              <p className="text-right text-purple-400 font-semibold font-mono">— Dewanta Rahma Satria</p>
            </div>
          </div>
        </motion.div>

        {/* Skills pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-3 mt-10"
        >
          {["Next.js", "React", "TypeScript", "Flutter", "Laravel", "Figma", "Node.js", "Supabase"].map((skill, i) => (
            <motion.span
              key={skill}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.5 + i * 0.07 }}
              whileHover={{ scale: 1.05, y: -2 }}
              className="px-4 py-2 rounded-full border border-purple-700/30 bg-purple-900/10 text-sm text-purple-300 hover:border-purple-500/50 hover:bg-purple-900/20 transition-all cursor-default"
            >
              {skill}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
