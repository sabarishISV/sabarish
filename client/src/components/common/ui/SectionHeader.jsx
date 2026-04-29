"use client";
import { motion } from "framer-motion";
import { animations } from "@/utils/styles/globalStyles";

export default function SectionHeader({ title, subtitle, align = "left", className = "" }) {
  const alignmentClass = align === "center" ? "text-center mx-auto" : align === "right" ? "text-right ml-auto" : "text-left";
  
  return (
    <motion.div 
      variants={animations.fadeUpItem}
      className={`mb-12 max-w-2xl ${alignmentClass} ${className}`}
    >
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
        {title} <span className="text-[#F5B301]">.</span>
      </h2>
      {subtitle && (
        <p className="text-[#A1A1AA] text-lg">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
