"use client";

import { motion } from "framer-motion";
import { Mail, Phone, Github, Instagram, Youtube, Twitter, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer id="kontak" className="relative pt-20 pb-10">
      {/* Top separator */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-700/40 to-transparent" />

      {/* Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-40 bg-purple-700/10 blur-3xl rounded-full" />

      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-extrabold mb-3">
              <span className="gradient-text">Portofolio</span>
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Dewanta Rahma Satria
            </p>
            <p className="text-gray-500 text-xs mt-2 leading-relaxed">
              Software Engineer & UX Designer
            </p>

            {/* Social links */}
            <div className="flex gap-3 mt-6">
              {[
                { icon: <Github size={16} />, href: "https://github.com", label: "GitHub" },
                { icon: <Instagram size={16} />, href: "https://instagram.com", label: "Instagram" },
                { icon: <Linkedin size={16} />, href: "https://linkedin.com", label: "LinkedIn" },
                { icon: <Youtube size={16} />, href: "https://youtube.com", label: "YouTube" },
              ].map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.15, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-9 h-9 rounded-full border border-purple-700/30 bg-purple-900/10 flex items-center justify-center text-gray-400 hover:text-purple-400 hover:border-purple-500/50 transition-all"
                  title={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-white mb-4 text-sm tracking-wider uppercase">Kontak</h4>
            <div className="space-y-3">
              <a
                href="mailto:dewantarahmasatria@gmail.com"
                className="flex items-center gap-3 text-gray-400 hover:text-purple-400 transition-colors text-sm group"
              >
                <div className="w-8 h-8 rounded-lg bg-purple-900/20 border border-purple-700/20 flex items-center justify-center group-hover:border-purple-500/40 transition-colors">
                  <Mail size={13} />
                </div>
                dewantarahmasatria@gmail.com
              </a>
              <a
                href="https://wa.me/6282115632240"
                className="flex items-center gap-3 text-gray-400 hover:text-purple-400 transition-colors text-sm group"
              >
                <div className="w-8 h-8 rounded-lg bg-purple-900/20 border border-purple-700/20 flex items-center justify-center group-hover:border-purple-500/40 transition-colors">
                  <Phone size={13} />
                </div>
                (+62) 82115632240
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-white mb-4 text-sm tracking-wider uppercase">Sosial Media</h4>
            <div className="grid grid-cols-2 gap-2">
              {[
                { label: "GitHub", href: "#" },
                { label: "Instagram", href: "#" },
                { label: "LinkedIn", href: "#" },
                { label: "YouTube", href: "#" },
                { label: "TikTok", href: "#" },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-gray-500 hover:text-purple-400 text-sm transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-purple-700/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 text-xs font-mono">
            © 2024 Dewanta Rahma Satria. All rights reserved.
          </p>
          <p className="text-gray-600 text-xs font-mono">
            
          </p>
        </div>
      </div>
    </footer>
  );
}
