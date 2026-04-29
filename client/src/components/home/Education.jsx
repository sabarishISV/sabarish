"use client";
import { motion } from "framer-motion";
import { homeContent } from "@/utils/constant/homeContent";

/* ── tiny inline SVG icons ─────────────────────────────────────────────── */
const CalendarIcon = () => (
  <svg width="12" height="12" viewBox="0 0 16 16" fill="currentColor" className="flex-shrink-0">
    <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"/>
  </svg>
);

const GradCapIcon = () => (
  <svg width="14" height="14" viewBox="0 0 640 512" fill="currentColor" className="flex-shrink-0">
    <path d="M320 32L0 192l320 160 240-120v152h32V192L320 32zm0 268.8L81.7 192 320 115.2 558.3 192 320 300.8zM96 352v64c0 35.3 100.1 64 224 64s224-28.7 224-64v-64l-224 112L96 352z"/>
  </svg>
);

const PinIcon = () => (
  <svg width="12" height="12" viewBox="0 0 384 512" fill="currentColor" className="flex-shrink-0">
    <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/>
  </svg>
);

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
});

export default function Education() {
  const { education } = homeContent;

  return (
    <section id="education" className="py-10 px-4 md:px-10 border-t border-black/[0.08] bg-white">
      <div className="max-w- mx-auto">

        {/* Section Title */}
        <motion.div
          {...fadeUp()}
          className="flex flex-col items-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-center text-[#1a1a1a] mb-2">
            Education
          </h2>
          <div className="h-1.5 w-16 bg-[#F5E800] rounded-sm" />
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {education.map((edu, i) => (
            <motion.div
              key={edu.id}
              {...fadeUp(i * 0.15)}
              className="bg-white rounded-2xl p-6 flex flex-col gap-4 border border-black/[0.08] shadow-sm hover:shadow-md hover:border-[#F5E800]/60 transition-all duration-300"
            >
              {/* Top row: date pill + type pill */}
              <div className="flex items-center justify-between gap-2 flex-wrap">
                <span className="flex items-center gap-1.5 bg-[#F5E800] text-[#1a1a1a] text-xs font-bold px-3 py-1.5 rounded-full">
                  <CalendarIcon />
                  {edu.period}
                </span>
                <span className="bg-[#f5f5f5] text-[#3a3a3a] text-xs font-semibold px-4 py-1.5 rounded-full border border-black/[0.08]">
                  {edu.type}
                </span>
              </div>

              {/* Tag chips */}
              <div className="flex flex-wrap gap-2">
                {edu.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1.5 rounded-full text-xs font-medium text-[#1a1a1a] bg-[#f5f5f5] border border-black/[0.08] hover:bg-[#F5E800] hover:border-[#F5E800] transition-colors duration-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Degree title */}
              <h3 className="text-[#1a1a1a] font-extrabold text-xl leading-snug">
                {edu.degree}
              </h3>

              {/* Institution row */}
              <div className="flex items-center gap-2 bg-[#f5f5f5] rounded-full px-4 py-2 w-fit border border-black/[0.06]">
                <GradCapIcon />
                <span className="text-[#3a3a3a] text-sm font-medium">{edu.institution}</span>
              </div>

              {/* Location row */}
              <div className="flex items-center gap-2 bg-[#f5f5f5] rounded-full px-4 py-2 w-fit border border-black/[0.06]">
                <PinIcon />
                <span className="text-[#3a3a3a] text-sm font-medium">{edu.location}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}