"use client";
import { motion } from "framer-motion";
import { animations } from "@/utils/styles/globalStyles";

export default function Button({ children, variant = "primary", className = "", ...props }) {
  const baseClasses = "inline-flex items-center justify-center font-medium rounded-xl transition-colors duration-200";
  
  const variants = {
    primary: "bg-[#F5B301] text-black hover:bg-[#d99f00] px-6 py-3",
    secondary: "bg-white text-black hover:bg-gray-200 px-6 py-3",
    outline: "border border-[#A1A1AA] text-white hover:border-[#F5B301] hover:text-[#F5B301] px-6 py-3",
  };

  return (
    <motion.button
      whileHover={animations.scaleHover.whileHover}
      transition={animations.scaleHover.transition}
      className={`${baseClasses} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
}
