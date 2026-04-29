"use client";
import { motion } from "framer-motion";
import { homeContent } from "@/utils/constant/homeContent";

/* ── Medal SVG ──────────────────────────────────────────────────────────── */
const MedalIcon = () => (
  <svg width="28" height="34" viewBox="0 0 48 56" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* ribbon left */}
    <polygon points="12,0 26,0 20,20 6,20" fill="#D32F2F" />
    {/* ribbon right */}
    <polygon points="22,0 36,0 42,20 28,20" fill="#B71C1C" />
    {/* circle */}
    <circle cx="24" cy="38" r="16" fill="#FFB300" />
    <circle cx="24" cy="38" r="12" fill="#FFCA28" />
    {/* star */}
    <text x="24" y="43" textAnchor="middle" fontSize="13" fill="#7B5E00" fontWeight="900">★</text>
  </svg>
);

/* ── Org logo placeholder ─────────────────────────────────────────────── */
const OrgLogo = ({ initial }) => (
  <div className="w-9 h-9 rounded-full bg-[#F5E800] flex items-center justify-center flex-shrink-0 border border-black/10">
    <span className="text-[#1a1a1a] font-black text-sm">{initial}</span>
  </div>
);

/* ── Eye icon for View button ────────────────────────────────────────── */
const EyeIcon = () => (
  <svg width="14" height="14" viewBox="0 0 576 512" fill="currentColor">
    <path d="M288 80c-65.2 0-118.8 29.6-159.9 67.7C89.6 183.5 63 226 49.4 256c13.6 30 40.2 72.5 78.6 108.3C169.2 402.4 222.8 432 288 432s118.8-29.6 159.9-67.7C486.4 328.5 513 286 526.6 256c-13.6-30-40.2-72.5-78.6-108.3C406.8 109.6 353.2 80 288 80zM95.4 112.6C142.5 68.8 207.2 32 288 32s145.5 36.8 192.6 80.6c46.8 43.5 78.1 95.4 93 131.1c3.3 7.9 3.3 16.7 0 24.6c-14.9 35.7-46.2 87.7-93 131.1C433.5 443.2 368.8 480 288 480s-145.5-36.8-192.6-80.6C48.6 356 17.3 304 2.5 268.3c-3.3-7.9-3.3-16.7 0-24.6C17.3 208 48.6 156 95.4 112.6zM288 336c44.2 0 80-35.8 80-80s-35.8-80-80-80c-.7 0-1.3 0-2 0c1.3 5.1 2 10.5 2 16c0 35.3-28.7 64-64 64c-5.5 0-10.9-.7-16-2c0 .7 0 1.3 0 2c0 44.2 35.8 80 80 80zm0-208a128 128 0 1 1 0 256 128 128 0 1 1 0-256z"/>
  </svg>
);

const PinIcon = () => (
  <svg width="9" height="9" viewBox="0 0 384 512" fill="currentColor" className="flex-shrink-0 opacity-60">
    <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/>
  </svg>
);

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
});

export default function Certifications() {
  const { certifications } = homeContent;

  return (
    <section id="certifications" className="py-10 px-4 md:px-10 border-t border-black/[0.08] bg-[#fafafa]">
      <div className="max-w- mx-auto">

        {/* Section Title */}
        <motion.div
          {...fadeUp()}
          className="flex flex-col items-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-center text-[#1a1a1a] mb-2">
            Certification
          </h2>
          <div className="h-1.5 w-16 bg-[#F5E800] rounded-sm" />
        </motion.div>

        {/* 2×2 grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.id}
              {...fadeUp(i * 0.1)}
              className="bg-white rounded-2xl p-5 flex flex-col gap-4 border border-black/[0.08] shadow-sm hover:shadow-md hover:border-[#F5E800]/60 transition-all duration-300"
            >
              {/* Top row: org chip + medal */}
              <div className="flex items-start justify-between">
                {/* Org chip */}
                <div className="flex items-center gap-2 bg-[#f5f5f5] rounded-full pl-1 pr-4 py-1 border border-black/[0.06]">
                  <OrgLogo initial={cert.issuer.charAt(0)} />
                  <div>
                    <p className="text-[#1a1a1a] font-bold text-xs leading-tight">{cert.issuer}</p>
                    <p className="text-[#555] text-[10px] flex items-center gap-1 mt-0.5">
                      <PinIcon />
                      {cert.location}
                    </p>
                  </div>
                </div>

                {/* Medal */}
                <MedalIcon />
              </div>

              {/* Cert title */}
              <h3 className="text-[#1a1a1a] font-extrabold text-lg leading-snug flex-1">
                {cert.title}
              </h3>

              {/* Bottom row: duration + view button */}
              <div className="flex items-end justify-between gap-2 mt-auto">
                {cert.duration ? (
                  <span className="text-[#555] text-xs font-medium">{cert.duration}</span>
                ) : (
                  <span />
                )}
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-white border border-black/[0.12] text-[#1a1a1a] text-xs font-semibold px-4 py-2 rounded-full hover:bg-[#F5E800] hover:border-[#F5E800] transition-all duration-200 whitespace-nowrap"
                >
                  <EyeIcon />
                  View
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}