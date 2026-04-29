"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { homeContent } from "@/utils/constant/homeContent";

const iLoveBorderColors = [
  "border-black/10",
  "border-black/10",
  "border-black/10",
  "border-black/10",
];

export default function AboutSnapshot() {
  const { about, stats } = homeContent;

  return (
    <section id="about" className="py-10 px-4 border-t border-black/[0.08] bg-white">
      <div className="max-w- mx-auto">

        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-center text-[#1a1a1a] mb-2">
            About Me
          </h2>
          <div className="h-1.5 w-16 bg-[#F5E800] rounded-sm" />
        </motion.div>

        {/* Top Row: I Love card + Stats cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6"
        >
          {/* I Love card */}
          <div className="md:col-span-1 bg-white rounded-2xl border border-black/[0.08] p-5 flex flex-col gap-4 shadow-sm">
            {/* Profile chip */}
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-[#F5E800] flex-shrink-0 bg-[#f5f5f5]">
                <Image
                  src="/profile.webp"
                  alt="Sabarish"
                  width={40}
                  height={40}
                  className="mb-2 object-cover object-top w-full h-full"
                />
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#1a1a1a] font-bold text-lg">I Love</span>
                <span className="w-1.5 h-5 bg-[#F5E800] rounded-sm inline-block animate-pulse" />
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {about.iLove.map((item, i) => (
                <span
                  key={item}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium text-[#1a1a1a] border ${iLoveBorderColors[i] ?? "border-black/10"} bg-[#f9f9f9] hover:bg-[#F5E800] hover:border-[#F5E800] transition-colors duration-200`}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Stats cards */}
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
              className="bg-white rounded-2xl border border-black/[0.08] p-6 flex flex-col items-center justify-center text-center shadow-sm"
            >
              <span className="text-4xl md:text-5xl font-extrabold text-[#1a1a1a] leading-none mb-1">
                {stat.value}
              </span>
              <span className="text-2xl md:text-3xl font-extrabold text-[#1a1a1a] leading-tight">
                {stat.sublabel}
              </span>
              <span className="inline-block mt-2 bg-[#F5E800] text-[#1a1a1a] font-semibold text-xs px-3 py-0.5 rounded-sm tracking-wide">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* Bio paragraph card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="bg-white rounded-2xl border border-black/[0.08] p-6 md:p-8 mb-8 shadow-sm"
        >
          {about.paragraphs.map((para, i) => (
            <p
              key={i}
              className={`text-[#3a3a3a] text-sm leading-relaxed text-justify ${i < about.paragraphs.length - 1 ? "mb-4" : ""
                }`}
            >
              {para}
            </p>
          ))}
        </motion.div>

        {/* Contact Me button */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex justify-center"
        >
          <a
            href="#contact"
            className="border border-[#1a1a1a] text-[#1a1a1a] px-8 py-2.5 rounded-full text-sm font-semibold hover:bg-[#F5E800] hover:border-[#F5E800] transition-all duration-250"
          >
            Contact Me
          </a>
        </motion.div>
      </div>
    </section>
  );
}