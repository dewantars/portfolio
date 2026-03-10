"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Moon, Sun, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/context/LanguageContext";

export default function Navbar() {
  const { lang, setLang, t } = useLanguage();
  const [isDark, setIsDark] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("beranda");

  const navLinks = [
    { label: t("nav.home"), href: "#beranda" },
    { label: t("nav.about"), href: "#tentang" },
    { label: t("nav.projects"), href: "#proyek" },
    { label: t("nav.contact"), href: "#kontak" },
  ];

  // Scroll detection
  useEffect(() => {
    const sections = ["beranda", "tentang", "pendidikan", "pengalaman", "proyek", "tools", "kontak"];
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      const reversed = [...sections].reverse();
      for (const s of reversed) {
        const el = document.getElementById(s);
        if (el && window.scrollY >= el.offsetTop - 100) {
          setActiveSection(s);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Theme apply
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", isDark ? "dark" : "light");
  }, [isDark]);

  const toggleLang = () => setLang(lang === "id" ? "en" : "id");

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          scrolled ? "py-3 navbar-scrolled" : "py-5 bg-transparent"
        )}
        style={scrolled && isDark ? {
          background: "rgba(11,11,15,0.85)",
          backdropFilter: "blur(20px)",
          borderBottom: "1px solid rgba(124,58,237,0.2)"
        } : undefined}
      >
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">

          {/* Logo */}
          <motion.a href="#beranda" whileHover={{ scale: 1.05 }} className="text-xl font-bold">
            <span className="gradient-text">Portofolio</span>
          </motion.a>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace("#", "");
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "text-sm font-medium transition-all duration-300 relative group nav-link-inactive",
                    isActive ? "text-purple-500" : ""
                  )}
                  style={isActive ? { color: "#9333EA" } : {}}
                >
                  {link.label}
                  <span className={cn(
                    "absolute -bottom-1 left-0 h-[2px] bg-gradient-to-r from-purple-600 to-purple-400 transition-all duration-300",
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  )} />
                </a>
              );
            })}
          </div>

          {/* Controls */}
          <div className="flex items-center gap-2">

            {/* Language toggle */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleLang}
              className="nav-btn flex items-center gap-1.5 px-3 h-9 rounded-full border transition-all text-sm font-semibold"
              style={{
                borderColor: "rgba(124,58,237,0.3)",
                background: "rgba(124,58,237,0.08)",
              }}
              title={lang === "id" ? "Switch to English" : "Ganti ke Indonesia"}
            >
              <span className="text-xs font-mono" style={{ color: "#9333EA" }}>
                {lang === "id" ? "ID" : "EN"}
              </span>
            </motion.button>

            {/* Dark mode toggle */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsDark(!isDark)}
              className="nav-btn w-9 h-9 rounded-full border flex items-center justify-center transition-all"
              style={{ borderColor: "rgba(124,58,237,0.3)", background: "rgba(124,58,237,0.08)" }}
              title={isDark ? "Light mode" : "Dark mode"}
            >
              {isDark
                ? <Sun size={15} style={{ color: "#A855F7" }} />
                : <Moon size={15} style={{ color: "#7C3AED" }} />
              }
            </motion.button>

            {/* Mobile hamburger */}
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden nav-btn w-9 h-9 rounded-full border flex items-center justify-center transition-all"
              style={{ borderColor: "rgba(124,58,237,0.3)", background: "rgba(124,58,237,0.08)" }}
            >
              {mobileOpen
                ? <X size={15} style={{ color: "#9333EA" }} />
                : <Menu size={15} style={{ color: "#9333EA" }} />
              }
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="mobile-menu-overlay fixed inset-0 z-40 flex flex-col items-center justify-center md:hidden"
            style={{ background: isDark ? "rgba(11,11,15,0.97)" : "rgba(244,243,255,0.97)", backdropFilter: "blur(20px)" }}
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                onClick={() => setMobileOpen(false)}
                className="text-3xl font-bold py-4 transition-colors"
                style={{ color: isDark ? "#D1D5DB" : "#1a1033" }}
              >
                {link.label}
              </motion.a>
            ))}

          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
