"use client";
import { motion } from "framer-motion";
import { homeContent } from "@/utils/constant/homeContent";

export default function ResumeCTA() {
  const { hero, about } = homeContent;

  return (
    <section className="py-10 px-4 md:py-10 border-t border-black/[0.08] bg-[#fafafa]">
      <div className="max-w- mx-auto flex flex-col items-center">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center mb-10"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#1a1a1a] text-center mb-2">
            Checkout my Resume
          </h2>
          <div className="h-1.5 w-16 bg-[#F5E800] rounded-sm" />
        </motion.div>

        {/* Profile Card */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="w-full bg-white rounded-2xl border border-black/[0.08] p-10 flex flex-col items-center gap-5 shadow-sm"
        >
          {/* Avatar */}
          <div className="w-20 h-20 rounded-full border-2 border-[#F5E800] overflow-hidden flex-shrink-0">
            <img
              src={"/profile.webp"}
              alt={hero?.name || "Profile"}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Name & Role */}
          <div className="text-center">
            <h3 className="text-[#1a1a1a] font-bold text-2xl mb-1">
              {hero?.name || "Sabarish"} G
            </h3>
            <p className="text-[#555] text-sm leading-relaxed">
              UI/UX Designer / Graphic Designer / Web Designer / Video Editor
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mt-1">
            <a
              href="https://drive.google.com/file/d/1lf3Q3PcGUHc7Bw_z7TIEuUpGhcS8Zcj_/view" target="_blank"
              className="inline-flex items-center gap-2 px-7 py-2.5 rounded-full border border-black/[0.15] text-[#1a1a1a] text-sm font-medium hover:border-[#F5E800] hover:bg-[#F5E800] transition-all duration-200"
            >
              ↓ Resume
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-7 py-2.5 rounded-full bg-[#F5E800] text-[#1a1a1a] text-sm font-bold hover:bg-[#e0d600] transition-colors"
            >
              Discuss Project
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}