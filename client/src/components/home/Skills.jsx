"use client";
import { motion } from "framer-motion";
import { homeContent } from "@/utils/constant/homeContent";
import Image from "next/image";

/* ─── Brand icon image map (FlatIcon CDN) ───────────────────────────── */
const BrandIcon = ({ icon }) => {
  const size = 20;

  const icons = {
    figma: "/icons/figma.webp",
    photoshop: "/icons/adobe-photoshop.webp",
    illustrator: "/icons/adobe-illustrator.webp",
    canva: "/icons/canva.webp",
    premiere: "/icons/adobe-premier.webp",
    aftereffects: "/icons/adobe-after-effects.webp",
    xd: "/icons/adobe-xd.webp",
    capcut: "/icons/capcut.webp",

    html: "/icons/html.webp",
    css: "/icons/css.webp",
    js: "/icons/javascript.webp",
    react: "/icons/reactjs.webp",
    tailwind: "https://cdn-icons-png.flaticon.com/512/5968/5968672.webp",
    typescript: "https://cdn-icons-png.flaticon.com/512/5968/5968381.webp",

    framer: "https://cdn-icons-png.flaticon.com/512/5968/5968703.webp",
    git: "https://cdn-icons-png.flaticon.com/512/2111/2111288.webp",
    github: "https://cdn-icons-png.flaticon.com/512/733/733553.webp",
    vscode: "https://cdn-icons-png.flaticon.com/512/906/906324.webp",
    vercel: "https://cdn-icons-png.flaticon.com/512/5968/5968841.webp",
    notion: "https://cdn-icons-png.flaticon.com/512/5968/5968890.webp",
    jira: "https://cdn-icons-png.flaticon.com/512/5968/5968875.webp",
  };

  const src = icons[icon];

  return src ? (
    <Image
      src={src}
      alt={icon}
      width={20}
      height={20}
      className="object-contain"
    />
  ) : (
    <div className="w-[20px] h-[20px] bg-gray-200 rounded-sm" />
  );
};

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
});

export default function Skills() {
  const { skills } = homeContent;

  return (
    <section id="skills" className="py-10 px-4 border-t border-black/[0.08] bg-[#fafafa]">
      <div className="max-w-4xl mx-auto">

        {/* Section Title */}
        <motion.div
          {...fadeUp()}
          className="flex flex-col items-center mb-2"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-center text-[#1a1a1a] mb-2">
            Skills
          </h2>
          <div className="h-1.5 w-16 bg-[#F5E800] rounded-sm" />
        </motion.div>

        {/* Iterate each skill category */}
        {skills.map((group, gi) => (
          <motion.div
            key={gi}
            {...fadeUp(gi * 0.1)}
            className="mt-10"
          >
            {/* Category subheading */}
            <h3 className="text-[#1a1a1a] font-extrabold text-xl md:text-2xl mb-6 text-center">
              {group.categoryLabel ?? group.category}
            </h3>

            {/* Skill pills — centered wrap layout */}
            <div className="flex flex-wrap justify-center gap-3">
              {group.items.map((skill, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: i * 0.04 }}
                  whileHover={{ scale: 1.06, y: -2 }}
                  className="flex items-center gap-2.5 bg-white border border-black/[0.10] rounded-full px-4 py-2.5 shadow-sm cursor-default hover:border-[#F5E800] hover:shadow-md transition-all duration-200"
                >
                  <span className="flex-shrink-0">
                    <BrandIcon icon={"icon" in skill ? skill.icon : ""} />
                  </span>
                  <span className="text-[#1a1a1a] text-sm font-semibold whitespace-nowrap">
                    {"name" in skill ? skill.name : skill}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}

        {/* Resume button */}
        <motion.div
          {...fadeUp(0.3)}
          className="flex justify-center mt-12"
        >
          <a
            href={homeContent.hero.resume} target="_blank"
            className="flex items-center gap-2 bg-[#F5E800] text-[#1a1a1a] font-bold px-8 py-3 rounded-full text-sm shadow-[0_4px_20px_rgba(245,232,0,0.35)] hover:bg-[#e0d600] transition-colors duration-200"
          >
            Resume
          </a>
        </motion.div>
      </div>
    </section>
  );
}