"use client";
export default function Card({ children, className = "", noPadding = false }) {
  return (
    <div className={`bg-[#111111] rounded-2xl border border-white/5 shadow-[0_4px_6px_-1px_rgb(0_0_0/0.1)] transition-all duration-300 hover:border-white/10 ${noPadding ? "" : "p-6"} ${className}`}>
      {children}
    </div>
  );
}
