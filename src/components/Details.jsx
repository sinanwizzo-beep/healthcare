import React from 'react';
import { motion } from 'framer-motion';

export default function Details() {
  const stats = [
    { value: "99%", label: "Success Rate" },
    { value: "50+", label: "Partner Clinics" },
    { value: "12", label: "Countries" },
    { value: "24/7", label: "Concierge Support" }
  ];

  return (
    <section id="impact" className="w-full py-10 px-6 pointer-events-none flex items-center justify-center">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto w-full pointer-events-auto bg-white/80 backdrop-blur-2xl rounded-[3rem] border border-slate-200 p-10 md:p-16 shadow-2xl relative overflow-hidden"
      >
        {/* Subtle background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-wellness-100 to-transparent pointer-events-none"></div>
        
        <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 text-center">
          {stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center justify-center">
              <div className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-2 drop-shadow-sm">
                {stat.value}
              </div>
              <div className="text-slate-500 text-sm md:text-base font-bold tracking-wide uppercase">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
