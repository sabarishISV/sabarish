"use client";
import { motion } from "framer-motion";
import { animations } from "@/utils/styles/globalStyles";
import { homeContent } from "@/utils/constant/homeContent";
import Card from "@/components/common/ui/Card";

export default function Stats() {
  return (
    <section className="py-10 px-4 max-w-5xl mx-auto">
      <motion.div 
        variants={animations.staggerContainer}
        initial="initial"
        whileInView="whileInView"
        viewport={animations.staggerContainer.viewport}
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        {homeContent.stats.map((stat, i) => (
          <motion.div key={i} variants={animations.fadeUpItem}>
             <Card className="text-center py-8 bg-white border border-black/[0.08] shadow-sm hover:shadow-md hover:border-[#F5E800]/60 transition-all duration-300">
               <h3 className="text-4xl font-bold text-[#1a1a1a] mb-2">{stat.value}</h3>
               <p className="text-[#555]">{stat.label}</p>
             </Card>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
