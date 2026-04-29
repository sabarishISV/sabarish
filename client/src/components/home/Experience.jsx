"use client";
import { motion } from "framer-motion";
import { homeContent } from "@/utils/constant/homeContent";

/* ── icons ─────────────────────────────────────────────────────────────── */
const CalendarIcon = () => (
  <svg width="12" height="12" viewBox="0 0 16 16" fill="currentColor" className="flex-shrink-0">
    <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"/>
  </svg>
);

const PinIcon = () => (
  <svg width="10" height="10" viewBox="0 0 384 512" fill="currentColor" className="flex-shrink-0">
    <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/>
  </svg>
);

const PersonIcon = () => (
  <svg width="14" height="14" viewBox="0 0 448 512" fill="currentColor" className="flex-shrink-0">
    <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-96 55.2C54 332.9 0 401.3 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7c0-81-54-149.4-128-171.1V362c27.6 7.1 48 32.2 48 62v40c0 8.8-7.2 16-16 16H96c-8.8 0-16-7.2-16-16v-40c0-29.8 20.4-54.9 48-62v-50.8z"/>
  </svg>
);

const TriangleIcon = () => (
  <svg width="8" height="8" viewBox="0 0 320 512" fill="currentColor" className="flex-shrink-0 text-[#1a1a1a] mt-0.5">
    <path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"/>
  </svg>
);

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
});

/* ── Marquee ticker ─────────────────────────────────────────────────────── */
function SkillsTicker() {
  const items = homeContent.skillsMarquee ?? [];
  const doubled = [...items, ...items];

  return (
    <div className="w-full bg-[#F5E800] overflow-hidden py-3 mt-10">
      <div className="flex whitespace-nowrap animate-marquee">
        {doubled.map((item, i) => (
          <span key={i} className="inline-flex items-center gap-3 text-[#1a1a1a] font-bold text-base mx-4">
            {item}
            <span className="text-black/40 text-sm">✦</span>
          </span>
        ))}
      </div>
      <style jsx>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
      `}</style>
    </div>
  );
}

export default function Experience() {
  const { experience } = homeContent;

  return (
    <section id="experience" className="pt-10 border-t border-black/[0.08] bg-[#fafafa]">
      <div className="max-w- mx-auto px-4 md:px-10">

        {/* Section Title */}
        <motion.div
          {...fadeUp()}
          className="flex flex-col items-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-center text-[#1a1a1a] mb-2">
            Experience
          </h2>
          <div className="h-1.5 w-16 bg-[#F5E800] rounded-sm" />
        </motion.div>

        {/* Experience cards */}
        <div className="space-y-6">
          {experience.map((exp, i) => (
            <motion.div
              key={exp.id}
              {...fadeUp(i * 0.15)}
              className="bg-white rounded-2xl p-6 md:p-8 border border-black/[0.08] shadow-sm hover:shadow-md transition-all duration-300"
            >
              {/* Card top row */}
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-5">
                {/* Company chip */}
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-[#F5E800] border-2 border-[#F5E800] flex items-center justify-center flex-shrink-0">
                    <span className="text-[#1a1a1a] font-black text-sm font-mono">&lt;&gt;</span>
                  </div>
                  <div className="bg-[#f5f5f5] rounded-full px-4 py-2 border border-black/[0.06]">
                    <p className="text-[#1a1a1a] font-bold text-sm leading-tight">{exp.company}</p>
                    <p className="text-[#555] text-xs flex items-center gap-1 mt-0.5">
                      <PinIcon />
                      {exp.location}
                    </p>
                  </div>
                </div>

                {/* Date + projects */}
                <div className="flex flex-col items-start sm:items-end gap-1.5">
                  <span className="flex items-center gap-1.5 bg-[#F5E800] text-[#1a1a1a] text-xs font-bold px-4 py-2 rounded-full">
                    <CalendarIcon />
                    {exp.period}
                  </span>
                  {exp.projects && (
                    <span className="text-[#555] text-xs font-medium">
                      Projects :&nbsp;<span className="text-[#1a1a1a] font-semibold">{exp.projects}</span>
                    </span>
                  )}
                </div>
              </div>

              {/* Role row */}
              <div className="flex items-center gap-2.5 mb-4">
                <div className="w-7 h-7 rounded-full bg-[#F5E800] flex items-center justify-center flex-shrink-0">
                  <PersonIcon />
                </div>
                <h3 className="text-[#1a1a1a] font-extrabold text-lg">{exp.role}</h3>
              </div>

              {/* Bullet points */}
              <ul className="space-y-2">
                {exp.bullets.map((bullet, j) => (
                  <li key={j} className="flex items-start gap-2.5 text-[#3a3a3a] text-sm leading-relaxed">
                    <TriangleIcon />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Marquee skills ticker */}
      <SkillsTicker />
    </section>
  );
}