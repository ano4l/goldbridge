"use client";

import { useState, useEffect } from "react";
import { Menu, X, Shield } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Markets", href: "#markets" },
  { label: "Portfolio", href: "#invest" },
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        scrolled
          ? "bg-[#060608]/70 backdrop-blur-2xl border-b border-white/[0.03]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 h-[72px] flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-3 group">
          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#D4AF37] via-[#C9A84C] to-[#B8942E] flex items-center justify-center shadow-lg shadow-[#D4AF37]/10 group-hover:shadow-[#D4AF37]/20 transition-shadow duration-500">
            <span className="text-[#060608] font-bold text-sm">G</span>
          </div>
          <div className="hidden sm:flex flex-col">
            <span className="text-white font-semibold text-[13px] tracking-wide leading-tight">
              Goldbridge
            </span>
            <span className="text-[#D4AF37]/60 text-[9px] uppercase tracking-[0.2em] font-medium">
              Capital
            </span>
          </div>
        </a>

        {/* Desktop Links - Liquid Glass Pill */}
        <div className="hidden lg:flex items-center gap-0.5 glass-subtle px-1.5 py-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-4 py-1.5 text-[12px] text-[#777] hover:text-white rounded-full hover:bg-white/[0.05] transition-all duration-300 font-medium tracking-wide"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Right side */}
        <div className="hidden lg:flex items-center gap-3">
          <div className="flex items-center gap-1.5 text-[11px] text-[#555] px-3 py-1.5 rounded-full border border-white/[0.04] bg-white/[0.02]">
            <Shield size={10} className="text-[#D4AF37]/60" />
            <span>Protected</span>
          </div>
          <a href="#pricing" className="btn-gold text-[11px] font-semibold px-5 py-2 tracking-wide">
            Start Investing
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-white/80"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="lg:hidden bg-[#060608]/95 backdrop-blur-2xl border-t border-white/[0.03] overflow-hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="px-6 py-6 flex flex-col gap-1">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-[#777] hover:text-white transition-colors py-3 text-sm font-medium"
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.3 }}
                >
                  {link.label}
                </motion.a>
              ))}
              <div className="divider-gold my-3" />
              <motion.a
                href="#pricing"
                className="btn-gold text-xs mt-2 text-center"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25, duration: 0.3 }}
              >
                Start Investing
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
