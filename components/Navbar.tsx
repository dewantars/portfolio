"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Moon, Sun, Menu, X, Globe } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Beranda", href: "#beranda" },
  { label: "Tentang Saya", href: "#tentang" },
  { label: "Proyek", href: "#proyek" },
  { label: "Kontak", href: "#kontak" },
];

export default function Navbar() {
  const [isDark, setIsDark] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("beranda");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ["beranda", "tentang", "pendidikan", "pengalaman", "proyek", "tools", "kontak"];
      for (const section of sections.reverse()) {
        const el = document.getElementById(section);
        if (el && window.scrollY >= el.offsetTop - 100) {
          setActiveSection(section);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", isDark ? "dark" : "light");
    if (!isDark) {
      document.body.style.backgroundColor = "#F8F7FF";
      document.body.style.color = "#1a1a2e";
    } else {
      document.body.style.backgroundColor = "#0B0B0F";
      document.body.style.color = "#F1F0FF";
    }
  }, [isDark]);

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          scrolled
            ? "py-3 bg-[#0B0B0F]/80 backdrop-blur-xl border-b border-purple-700/20"
            : "py-5 bg-transparent"
        )}
      >
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <motion.a
            href="#beranda"
            whileHover={{ scale: 1.05 }}
            className="text-xl font-bold"
          >
            <span className="gradient-text">Portofolio</span>
          </motion.a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-all duration-300 relative group",
                  activeSection === link.href.replace("#", "")
                    ? "text-purple-400"
                    : "text-gray-400 hover:text-white"
                )}
              >
                {link.label}
                <span className={cn(
                  "absolute -bottom-1 left-0 h-[2px] bg-gradient-to-r from-purple-600 to-purple-400 transition-all duration-300",
                  activeSection === link.href.replace("#", "") ? "w-full" : "w-0 group-hover:w-full"
                )} />
              </a>
            ))}
          </div>

          {/* Controls */}
          <div className="flex items-center gap-3">
            {/* Language icon */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="w-9 h-9 rounded-full border border-purple-700/30 flex items-center justify-center text-gray-400 hover:text-purple-400 hover:border-purple-500/50 transition-all"
              title="Bahasa Indonesia"
            >
              <span className="text-base leading-none">🇮🇩</span>
            </motion.button>

            {/* Dark mode toggle */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsDark(!isDark)}
              className="w-9 h-9 rounded-full border border-purple-700/30 flex items-center justify-center text-gray-400 hover:text-purple-400 hover:border-purple-500/50 transition-all"
            >
              {isDark ? <Sun size={16} /> : <Moon size={16} />}
            </motion.button>

            {/* Mobile menu button */}
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden w-9 h-9 rounded-full border border-purple-700/30 flex items-center justify-center text-gray-400"
            >
              {mobileOpen ? <X size={16} /> : <Menu size={16} />}
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
            className="fixed inset-0 z-40 bg-[#0B0B0F]/95 backdrop-blur-xl flex flex-col items-center justify-center md:hidden"
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                onClick={() => setMobileOpen(false)}
                className="text-3xl font-bold text-gray-300 hover:text-white py-4 transition-colors"
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
