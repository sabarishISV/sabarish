"use client";
import { motion } from "framer-motion";
import { homeContent } from "@/utils/constant/homeContent";

const iconMap = {
  GH: "⌨",
  LI: "💼",
  TW: "✦",
  DR: "🎨",
  BE: "🖌",
};

export default function SocialConnect() {
  const { socials } = homeContent;

  return (
    <section className="py-10 px-4 border-t border-black/[0.08] bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-12"
        >
          <p className="text-[#555] text-sm font-semibold uppercase tracking-widest mb-3">Find Me Online</p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a1a]">
            Connect With Me <span className="inline-block w-3 h-3 bg-[#F5E800] rounded-sm align-middle mb-1" />
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {socials.map((social, i) => (
            <motion.a
              key={i}
              href={social.url}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ scale: 1.05 }}
              className="group flex flex-col items-center gap-3 bg-white rounded-2xl border border-black/[0.08] p-6 hover:border-[#F5E800] hover:shadow-md transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-[#F5E800]/20 border border-[#F5E800]/40 flex items-center justify-center text-xl group-hover:bg-[#F5E800] transition-colors duration-200">
                {iconMap[social.icon]}
              </div>
              <span className="text-sm font-medium text-[#555] group-hover:text-[#1a1a1a] transition-colors">
                {social.name}
              </span>
            </motion.a>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-black/[0.08] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[#555] text-sm">
            © {new Date().getFullYear()} <span className="text-[#1a1a1a] font-semibold">Sabarish</span>. All rights reserved.
          </p>
          <p className="text-[#555] text-sm">Built with Antigravity · Next.js · Tailwind · Framer Motion</p>
        </div>
      </div>
    </section>
  );
}
