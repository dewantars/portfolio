"use client";

import { motion } from "framer-motion";
import { Mail, Phone, Github, Instagram, Linkedin, Youtube } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer id="kontak" className="footer-root relative pt-20 pb-10 transition-all"
      style={{ background: "linear-gradient(180deg, var(--bg-page) 0%, rgba(124,58,237,0.08) 100%)" }}>
      <div className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg,transparent,rgba(124,58,237,0.35),transparent)" }} />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-40 rounded-full blur-3xl"
        style={{ background: "rgba(124,58,237,0.08)" }} />

      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-extrabold mb-3">
              <span className="gradient-text">Portofolio</span>
            </h3>
            <p className="text-sm" style={{ color: "var(--text-secondary)" }}>Dewanta Rahma Satria</p>
            <p className="text-xs mt-1" style={{ color: "var(--text-muted)" }}>Software Engineer & UX Designer</p>

            <div className="flex gap-3 mt-6">
              {[
                { icon: <Github size={15} />, href: "https://github.com", label: "GitHub" },
                { icon: <Instagram size={15} />, href: "https://instagram.com", label: "Instagram" },
                { icon: <Linkedin size={15} />, href: "https://linkedin.com", label: "LinkedIn" },
                { icon: <Youtube size={15} />, href: "https://youtube.com", label: "YouTube" },
              ].map((s) => (
                <motion.a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                  whileHover={{ scale: 1.15, y: -2 }} whileTap={{ scale: 0.95 }}
                  className="footer-social-btn w-9 h-9 rounded-full border flex items-center justify-center transition-all"
                  style={{ borderColor: "rgba(124,58,237,0.2)", background: "rgba(124,58,237,0.06)", color: "var(--text-secondary)" }}
                  title={s.label}>
                  {s.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-sm tracking-wider uppercase mb-4 text-purple-500">{t("footer.contact")}</h4>
            <div className="space-y-3">
              <a href="mailto:dewantarahmasatria@gmail.com"
                className="flex items-center gap-3 text-sm group transition-colors"
                style={{ color: "var(--text-secondary)" }}>
                <div className="w-8 h-8 rounded-lg flex items-center justify-center transition-colors"
                  style={{ background: "rgba(124,58,237,0.08)", border: "1px solid rgba(124,58,237,0.15)" }}>
                  <Mail size={12} className="text-purple-500" />
                </div>
                <span className="group-hover:text-purple-500 transition-colors">dewantarahmasatria@gmail.com</span>
              </a>
              <a href="https://wa.me/6282115632240"
                className="flex items-center gap-3 text-sm group transition-colors"
                style={{ color: "var(--text-secondary)" }}>
                <div className="w-8 h-8 rounded-lg flex items-center justify-center"
                  style={{ background: "rgba(124,58,237,0.08)", border: "1px solid rgba(124,58,237,0.15)" }}>
                  <Phone size={12} className="text-purple-500" />
                </div>
                <span className="group-hover:text-purple-500 transition-colors">(+62) 82115632240</span>
              </a>
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold text-sm tracking-wider uppercase mb-4 text-purple-500">
              {t("footer.social")}
            </h4>

            <div className="grid grid-cols-2 gap-2" style={{ color: "var(--text-secondary)" }}>
              {["GitHub", "Instagram", "LinkedIn", "YouTube", "TikTok"].map((label) => (
                <a
                  key={label}
                  href="#"
                  className="text-sm hover:text-purple-500 transition-colors"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="footer-divider pt-8 flex flex-col md:flex-row items-center justify-between gap-4"
          style={{ borderTop: "1px solid rgba(124,58,237,0.12)" }}>
          <p className="text-xs font-mono" style={{ color: "var(--text-muted)" }}>
            © 2024 Dewanta Rahma Satria. {t("footer.rights")}
          </p>
          <p className="text-xs font-mono" style={{ color: "var(--text-muted)" }}>
            {t("footer.built")}
          </p>
        </div>
      </div>
    </footer>
  );
}
