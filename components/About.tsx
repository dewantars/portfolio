"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Quote } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useLanguage();

  return (
    <section id="tentang" className="py-24 relative" ref={ref}>
      <div className="max-w-4xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }}
          className="text-center mb-12">
          <span className="section-tag text-xs font-mono tracking-widest uppercase text-purple-500">{t("about.tag")}</span>
          <h2 className="text-4xl font-extrabold mt-3">
            {t("about.title")} <span className="gradient-text">{t("about.title2")}</span>
          </h2>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay: 0.2 }}
          className="about-card gradient-border rounded-3xl p-1 glow-purple">
          <div className="about-card-inner rounded-3xl p-8 md:p-12 relative overflow-hidden"
            style={{ background: "var(--bg-card)" }}>
            <div className="absolute top-0 right-0 w-64 h-64 rounded-full -translate-y-1/2 translate-x-1/2"
              style={{ background: "rgba(124,58,237,0.04)" }} />
            <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full translate-y-1/2 -translate-x-1/2"
              style={{ background: "rgba(109,40,217,0.04)" }} />

            <Quote className="mb-6" size={36} style={{ color: "rgba(124,58,237,0.3)" }} />

            <div className="relative space-y-4 leading-relaxed text-base" style={{ color: "var(--text-secondary)" }}>
              <p>
                {t("about.p1")}{" "}
                <span className="font-semibold text-purple-500">Universitas Telkom</span>
                {t("about.p1b")}
              </p>
              <p>
                {t("about.p2")}{" "}
                <span className="font-semibold text-purple-500">{t("about.p2b")}</span>
                {t("about.p2c")}
              </p>
              <p>{t("about.p3")}</p>
            </div>

            <div className="mt-8 pt-6" style={{ borderTop: "1px solid rgba(124,58,237,0.15)" }}>
              <p className="text-right font-semibold font-mono text-purple-500">— Dewanta Rahma Satria</p>
            </div>
          </div>
        </motion.div>

        {/* Skill pills */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-3 mt-10">
          {["Next.js","React","TypeScript","Flutter","Laravel","Figma","Node.js","Supabase"].map((skill, i) => (
            <motion.span key={skill}
              initial={{ opacity: 0, scale: 0.8 }} animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.5 + i * 0.07 }} whileHover={{ scale: 1.05, y: -2 }}
              className="skill-pill px-4 py-2 rounded-full border text-sm transition-all cursor-default"
              style={{ borderColor: "rgba(124,58,237,0.2)", background: "rgba(124,58,237,0.07)", color: "#9333EA" }}>
              {skill}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
