"use client";
import { motion } from "framer-motion";
import { homeContent } from "@/utils/constant/homeContent";

export default function Footer() {
  const { hero } = homeContent;
  const fullName = `G.${(hero?.name || "SABARISH").toUpperCase()}`;

  return (
    <footer className="pb-6 px-4">
      <div className="max-w- mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="bg-[#F5B301] rounded-full px-5 py-3 flex items-center justify-between"
        >
          {/* Logo Badge */}
          <div className="w-10 h-10 rounded-full bg-[#0a0a0a] flex-shrink-0 flex items-center justify-center overflow-hidden border border-white/10">
            <div className="text-center leading-none">
              <span className="block text-[#F5B301] font-black text-[10px] tracking-tight">
                GS
              </span>
              <span className="block text-white/50 text-[5px] tracking-widest uppercase mt-0.5">
                {hero?.name || "Sabarish"}
              </span>
            </div>
          </div>

          {/* Credit */}
          <p className="text-black text-sm font-semibold tracking-wide pr-2">
            Designed &amp; Built by {fullName}
          </p>
        </motion.div>
      </div>
    </footer>
  );
}