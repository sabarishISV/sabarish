"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { homeContent } from "@/utils/constant/homeContent";
import { projectContent } from "@/utils/constant/projectContent";

/* ─── Hexagon Background ─────────────────────────────────────────────────── */
function HexagonGrid() {
  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <pattern id="hexBg" x="0" y="0" width="100" height="86.6" patternUnits="userSpaceOnUse">
          <polygon
            points="50,2 96,26.6 96,76.1 50,86.6 4,76.1 4,26.6"
            fill="none"
            stroke="rgba(0,0,0,0.058)"
            strokeWidth="1.2"
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#hexBg)" />
    </svg>
  );
}

/* ─── Vertical Contact Sidebar ─────────────────────────────────────────── */
function VerticalStrip() {
  const contacts = [
    { heading: "Location", value: "Nagercoil, Tamilnadu" },
    { heading: "Phone", value: "+91 6383400312" },
    { heading: "Email", value: "sabarishganesan@gmail.com" },
  ];

  return (
    <motion.aside
      initial={{ opacity: 0, x: -16 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.8 }}
      className="hidden lg:flex flex-col w-[88px] shrink-0 bg-transparent border-r border-black/[0.08]"
    >
      {contacts.map((c, i) => (
        <div
          key={c.heading}
          className={`flex-1 flex items-center justify-center min-h-0 ${i < contacts.length - 1 ? "border-b border-black/[0.07]" : ""
            }`}
        >
          <div className="[writing-mode:vertical-rl] rotate-180">
            <div className="flex flex-col items-center gap-1.5">
              <span className="text-xs font-extrabold tracking-[0.18em] uppercase text-[#1a1a1a]">
                {c.heading}
              </span>
              <span className="text-[11px] tracking-[0.1em] text-[#292929] mt-0.5">
                {c.value}
              </span>
            </div>
          </div>
        </div>
      ))}
    </motion.aside>
  );
}

/* ─── Latest Work ──────────────────────────────────────────────────────────── */
const PROJECTS = [
  { id: 1, title: "IndiGo Case Study", bg: "#E5EAFF", color: "#2A5BFF", dark: false },
  { id: 2, title: "Booking Clone", bg: "#E8F9EF", color: "#1A9E56", dark: false },
  { id: 3, title: "Ticket Booking Case", bg: "#18181B", color: "#FFFFFF", dark: true },
  { id: 4, title: "SaaS Landing Pages", bg: "#E0F9F5", color: "#0A9E85", dark: false },
];

function LatestWork() {
  const latestProjects = projectContent.slice(0, 4);

  return (
    <motion.section
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.05, duration: 0.5 }}
      className="lg:absolute lg:bottom-5 lg:-left-24 lg:right-0 border-t border-black/[0.08] bg-white px-6 sm:px-8 lg:px-12 pt-6 pb-0 mt-14 lg:mt-0"
    >
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-sm font-bold tracking-[0.05em] text-[#111]">
          Latest Work
        </h2>

        <a
          href="#projects"
          className="text-[#2A5BFF] text-xs font-bold hover:underline underline-offset-2"
        >
          View All
        </a>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {latestProjects.map((project, i) => (
          <motion.a
            key={project.id}
            href="#projects"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.15 + i * 0.08 }}
            whileHover={{
              y: -4,
              scale: 1.02,
              transition: { duration: 0.2 },
            }}
            className="relative rounded-xl overflow-hidden block shadow-sm hover:shadow-lg transition-all duration-300"
            style={{ aspectRatio: "16/10" }}
          >
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />

            {/* Title */}
            <div className="absolute bottom-2 left-2 right-2">
              <span className="text-[10px] font-bold px-2 py-1 rounded bg-white/90 text-[#111]">
                {project.title}
              </span>
            </div>
          </motion.a>
        ))}
      </div>
    </motion.section>
  );
}

/* ─── Hero Section ─────────────────────────────────────────────────────────── */
export default function Hero() {
  const fadeUp = (delay = 0, duration = 0.55) => ({
    initial: { opacity: 0, y: 22 },
    animate: { opacity: 1, y: 0 },
    transition: { duration, delay, ease: [0.25, 0.46, 0.45, 0.94] },
  });

  return (
    <section id="home" className="mt-5 relative  bg-white overflow-hidden">
      <HexagonGrid />

      {/* Main Grid Layout - 3 columns */}
      <div className="relative z-10 min-h-[90vh] lg:min-h-screen lg:grid lg:grid-cols-[88px_1fr_1.2fr]">

        {/* Sidebar Column */}
        <VerticalStrip />

        {/* Yellow Vertical Stripe (positioned in image column) */}
        <div className="relative">
          <motion.div
              initial={{ scaleY: 0, opacity: 0 }}
              animate={{ scaleY: 1, opacity: 1 }}
              transition={{
                duration: 0.9,
                delay: 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
              style={{ transformOrigin: "top" }}
              className="absolute top-0 bottom-0 left-0 w-[82px] bg-[#F5E800] pointer-events-none z-0 hidden lg:block"
          />

          {/* Image Column */}
          <div className="relative z-10 flex items-end justify-center lg:justify-start h-full min-h-[320px] lg:min-h-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 18 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.24, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full max-w-[430px] lg:max-w-none lg:w-[90%]"
            >
              <div className="relative w-full pb-[133%] lg:pb-[140%]">
                <Image
                  src="/profile.webp"
                  alt="Sabarish G – UI/UX & Graphic Designer"
                  fill
                  priority
                  className="object-contain object-bottom lg:object-left-bottom select-none"
                  draggable={false}
                />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Content Column */}
        <div className="relative flex flex-col justify-center py-12 lg:py-0 ">
          
          {/* Hey There */}
          <motion.p
            {...fadeUp(0.30)}
            className="ml-8 lg:ml-0 text-[#555] font-normal mb-2 text-base sm:text-lg"
          >
            Hey There,
          </motion.p>

          {/* Name */}
          <motion.h1
            {...fadeUp(0.44)}
            className="ml-8 lg:ml-0 font-black text-[#1a1a1a] leading-none tracking-tight mb-4 text-[42px] sm:text-6xl md:text-7xl lg:text-[72px] xl:text-[88px]"
          >
            I am Sabarish G
          </motion.h1>
      
          {/* Horizontal Yellow Stripe */}
          <div className="relative mb-5">
            <motion.div
              aria-hidden="true"
              initial={{ x: "-100%", opacity: 0 }}
              animate={{ x: "0%", opacity: 1 }}
              transition={{
                duration: 0.9,
                delay: 0.58,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="absolute inset-y-0 -z-50 pointer-events-none"
              style={{
                right: "100%",
                width: "100vw",
                background: "#F5E800",
              }}
            />
            <motion.div
              initial={{ x: "-200%", opacity: 0 }}
              animate={{ x: "0%", opacity: 1 }}
              transition={{
                duration: 0.9,
                delay: 0.58,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="bg-[#F5E800] py-3 relative overflow-hidden"
            >
              {/* Light sweep */}
              <motion.div
                initial={{ x: "-120%" }}
                animate={{ x: "120%" }}
                transition={{
                  duration: 1.2,
                  delay: 0.9,
                  ease: [0.4, 0, 0.2, 1],
                }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent"
              />

              <span className="relative z-10 ml-8 lg:ml-0 font-black text-[#1a1a1a] tracking-tight text-base sm:text-xl md:text-2xl lg:text-[26px] xl:text-[30px]">
                UI / UX Designer / Graphic Designer
              </span>
            </motion.div>
          </div>

          {/* Subtitle */}
          <motion.p
            {...fadeUp(0.72)}
            className="ml-8 lg:ml-0 text-[#3a3a3a] font-normal mb-8 text-base sm:text-lg md:text-xl lg:text-[22px]"
          >
            I design websites and apps
          </motion.p>

          {/* CTA Button */}
          <motion.div {...fadeUp(0.86)}>
            <a
              href={homeContent.hero.resume} target="_blank"
              className="ml-8 lg:ml-0 group relative overflow-hidden inline-flex items-center gap-2.5 bg-[#2A5BFF] text-white font-bold tracking-wide rounded-2xl transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(42,91,255,.45)] text-xs sm:text-[13px] px-6 sm:px-8 md:px-10 py-3 sm:py-3.5 md:py-4"
              style={{ boxShadow: "0 4px 24px rgba(42,91,255,.3)" }}
            >
              <span className="relative z-10">Read My Resume</span>
              <svg
                className="relative z-10 group-hover:translate-x-1 transition-transform duration-200"
                width="14"
                height="14"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M3 8h10M9 4l4 4-4 4"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-500" />
            </a>
          </motion.div>
          {/* Latest Work Section */}
          <LatestWork />
        </div>
      </div>
    </section>
  );
}