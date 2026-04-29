"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { homeContent } from '@/utils/constant/homeContent';

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About Me", href: "#about" },
  { label: "My Work", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact Me", href: "#contact" },
];

const SocialLinks = () => (
  <div className="flex items-center gap-3">
    
    {/* LinkedIn */}
    <a
      href="https://linkedin.com/in/sabarish-g-520ba4369"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="LinkedIn"
      className="hover:scale-110 transition-transform duration-200"
    >
      <img
        src="/icons/linkedin.webp"
        alt="LinkedIn"
        className="w-8 h-8 object-contain"
      />
    </a>

    {/* Dribbble */}
    <a
      href="https://dribbble.com/sabarishganesan2000"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Dribbble"
      className="hover:scale-110 transition-transform duration-200"
    >
      <img
        src="/icons/dribbble.webp"
        alt="Dribbble"
        className="w-8 h-8 object-contain"
      />
    </a>

    {/* Behance */}
    <a
      href="https://www.behance.net/sabarish2001"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Behance"
      className="hover:scale-110 transition-transform duration-200"
    >
      <img
        src="/icons/behance.webp"
        alt="Behance"
        className="w-8 h-8 object-contain"
      />
    </a>

    {/* Instagram */}
    <a
      href="https://www.instagram.com/uxbysabarish"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Instagram"
      className="hover:scale-110 transition-transform duration-200"
    >
      <img
        src="/icons/instagram.webp"
        alt="Instagram"
        className="w-8 h-8 object-contain"
      />
    </a>

    {/* WhatsApp */}
    <a
      href="https://wa.me/916383400312"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp"
      className="hover:scale-110 transition-transform duration-200"
    >
      <img
        src="/icons/whatsapp.webp"
        alt="WhatsApp"
        className="w-8 h-8 object-contain"
      />
    </a>

  </div>
);

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
            ? "bg-white/98 backdrop-blur-md shadow-[0_1px_0_rgba(0,0,0,0.08)]"
            : "bg-white/90 backdrop-blur-sm"
          }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 h-[68px] flex items-center justify-between">

          {/* ── Logo ── */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="flex items-center gap-0"
          >
            <span className="text-[#2A5BFF] text-3xl font-black tracking-tight leading-none font-[family-name:var(--font-display)]">
              Sabarish G
            </span>
          </motion.div>

          {/* ── Desktop Nav Links ── */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 + i * 0.07, duration: 0.4 }}
                onClick={() => setActiveLink(link.label)}
                className={`relative text-sm font-medium transition-colors duration-200 pb-1 group ${activeLink === link.label
                    ? "text-black"
                    : "text-[#777] hover:text-black"
                  }`}
              >
                {link.label}
                {/* Active underline */}
                <span
                  className={`absolute bottom-0 left-0 h-0.5 bg-black rounded-full transition-all duration-300 ${activeLink === link.label
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                    }`}
                />
              </motion.a>
            ))}
          </nav>

          {/* ── Right: Socials + Hamburger ── */}
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="flex items-center gap-6"
          >
            {/* Social icons – desktop only */}
            <div className="hidden lg:flex">
              <SocialLinks />
            </div>

            {/* Hamburger – mobile */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden flex flex-col gap-1.5 w-6 h-5 justify-center"
              aria-label="Toggle menu"
            >
              <motion.span
                animate={menuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
                className="block h-0.5 bg-black rounded-full"
              />
              <motion.span
                animate={menuOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
                className="block h-0.5 bg-black rounded-full"
              />
              <motion.span
                animate={menuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
                className="block h-0.5 bg-black rounded-full"
              />
            </button>
          </motion.div>
        </div>
      </motion.header>

      {/* ── Mobile Overlay ── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed top-[68px] left-0 right-0 z-40 bg-white border-b border-black/10 overflow-hidden"
          >
            <nav className="max-w-[1400px] mx-auto px-6 py-6 flex flex-col gap-1">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 }}
                  onClick={() => { setActiveLink(link.label); setMenuOpen(false); }}
                  className={`text-base font-medium py-3 border-b border-black/6 transition-colors ${activeLink === link.label ? "text-black" : "text-[#555] hover:text-black"
                    }`}
                >
                  {link.label}
                </motion.a>
              ))}
              <div className="flex pt-4">
                <SocialLinks />
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}