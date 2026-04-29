"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projectContent } from "@/utils/constant/projectContent";

const FILTER_TABS = [
  "All",
  "Website Design",
  "App Mobile Design",
  "App Desktop",
  "Branding",
];

export default function Projects() {
  const [activeTab, setActiveTab] = useState("All");

  const filtered =
    activeTab === "All"
      ? projectContent
      : projectContent.filter(
        (p) =>
          (p.category || "").toLowerCase() === activeTab.toLowerCase() ||
          (p.workedOn || p.tags || []).some((t) =>
            t.toLowerCase().includes(activeTab.toLowerCase())
          )
      );

  return (
    <section id="projects" className="py-10 px-4 md:py-10 border-t border-black/[0.08] bg-white">
      <div className="max-w- mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center mb-8"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a1a] text-center mb-2">
            Projects I&apos;ve Worked on
          </h2>
          <div className="h-1.5 w-16 bg-[#F5E800] rounded-sm" />
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-wrap gap-2 justify-center mb-10"
        >
          {FILTER_TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              suppressHydrationWarning
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 cursor-pointer ${activeTab === tab
                ? "bg-[#F5E800] text-[#1a1a1a] border border-[#F5E800]"
                : "bg-transparent border border-black/[0.12] text-[#555] hover:border-black/30 hover:text-[#1a1a1a]"
                }`}
            >
              {tab}
            </button>
          ))}
        </motion.div>

        {/* Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{
                  duration: 0.45,
                  delay: i * 0.07,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group"
              >
                <div
                  className="rounded-2xl border border-black/[0.08] group-hover:border-[#F5E800]/60 group-hover:shadow-md transition-all duration-300 overflow-hidden flex flex-col sm:flex-row"
                  style={{ backgroundColor: project.color || "#f5f5f5" }}
                >
                  {/* Left: Preview Image */}
                  <div className="sm:w-56 flex-shrink-0 h-48 sm:h-auto relative overflow-hidden flex items-center justify-center">
                    <div
                      className="absolute inset-0 opacity-30"
                      style={{
                        backgroundImage: `radial-gradient(circle at 30% 40%, ${project.accent || "#F5E800"
                          }66, transparent 65%)`,
                      }}
                    />
                    {project.image ? (
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover relative z-10"
                      />
                    ) : (
                      <div className="relative z-10 w-4/5 h-32 rounded-xl border border-black/[0.08] bg-white/60 backdrop-blur flex flex-col p-3 gap-2">
                        <div className="flex gap-1.5">
                          <div className="w-2 h-2 rounded-full bg-red-400/60" />
                          <div className="w-2 h-2 rounded-full bg-yellow-400/60" />
                          <div className="w-2 h-2 rounded-full bg-green-400/60" />
                        </div>
                        <div className="flex-1 flex gap-2">
                          <div className="w-1/4 rounded bg-black/[0.06] h-full" />
                          <div className="flex-1 flex flex-col gap-1.5">
                            <div className="h-2 bg-black/[0.08] rounded-full" />
                            <div className="h-2 bg-black/[0.08] rounded-full w-3/4" />
                            <div
                              className="h-6 rounded-lg mt-1"
                              style={{
                                backgroundColor:
                                  (project.accent || "#F5E800") + "33",
                              }}
                            />
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Right: Content */}
                  <div className="flex-1 bg-white p-6 flex flex-col justify-center gap-4">
                    <h3 className="text-[#1a1a1a] font-bold text-xl group-hover:text-[#3a3a3a] transition-colors duration-300">
                      {project.title}
                    </h3>

                    {/* Worked On */}
                    <div>
                      <p className="text-xs text-[#555] mb-2">Worked on</p>
                      <div className="flex flex-wrap gap-2">
                        {(project.workedOn || project.tags || [])
                          .slice(0, 3)
                          .map((tag, j) => (
                            <span
                              key={j}
                              className="text-xs px-3 py-1 rounded-full border border-black/[0.12] text-[#3a3a3a] hover:bg-[#F5E800] hover:border-[#F5E800] transition-colors duration-200"
                            >
                              {tag}
                            </span>
                          ))}
                      </div>
                    </div>

                    {/* Technologies */}
                    <div>
                      <p className="text-xs text-[#555] mb-2">
                        Technologies I have used
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {(project.technologies || project.tags || []).map(
                          (tech, j) => (
                            <span
                              key={j}
                              className="text-xs px-3 py-1 rounded-full bg-[#f5f5f5] border border-black/[0.08] text-[#3a3a3a]"
                            >
                              {tech}
                            </span>
                          )
                        )}
                      </div>
                    </div>

                    {/* Behance Link */}
                    <a
                      href="https://www.behance.net/sabarish2001"
                      className="text-sm text-[#555] hover:text-[#1a1a1a] transition-colors w-fit"
                    >
                      Go to Behance →
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
        <div>
          <div className="flex justify-center items-center">
            {/* See Behance Pill */}
            <motion.a
              href="https://www.behance.net/sabarish2001"
              target="_blank"
              initial={{ opacity: 0, y: -12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="mt-8 flex items-center justify-center gap-2 px-5 py-2.5 rounded-full border border-black/[0.12] text-sm text-[#1a1a1a] hover:border-[#F5E800] hover:bg-[#F5E800] transition-all duration-200"
            >
              <span className="w-5 h-5 rounded bg-[#1769ff] text-white text-[10px] flex items-center justify-center font-bold flex-shrink-0">
                Bē
              </span>
              See Behance
            </motion.a>
          </div>
        </div>
      </div>

    </section>
  );
}