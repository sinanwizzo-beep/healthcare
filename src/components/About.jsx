import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, Award, Globe2 } from 'lucide-react';

export default function About() {
  return (
    <section className="min-h-[100vh] w-full flex items-center justify-center py-20 px-6 relative pointer-events-none">
      <div className="max-w-7xl mx-auto w-full pointer-events-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight drop-shadow-sm">
                Pioneering the future of <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-wellness-600 to-emerald-500">holistic recovery.</span>
              </h2>
              
              <p className="text-lg text-slate-600 mb-8 leading-relaxed font-medium">
                VitalityCare is the world's premier medical tourism and wellness platform. We seamlessly bridge the gap between advanced medical procedures and profound, rejuvenating holistic recovery.
              </p>

              <div className="space-y-6">
                {[
                  { icon: Leaf, title: "Holistic Core", desc: "Every treatment plan includes natural healing components." },
                  { icon: Globe2, title: "Global Access", desc: "Partnerships with top 1% of specialists worldwide." },
                  { icon: Award, title: "Premium Quality", desc: "Award-winning facilities and private recovery retreats." }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center justify-center text-wellness-600 flex-shrink-0">
                      <item.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="text-slate-900 font-bold text-lg">{item.title}</h4>
                      <p className="text-slate-600 text-sm font-medium">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Image Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative h-[600px] w-full rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/20 group"
          >
             <img 
               src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=800&q=80" 
               className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
               alt="About Us" 
             />
             <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
             
             {/* Overlay card */}
             <div className="absolute bottom-8 left-8 right-8 bg-white/10 backdrop-blur-xl border border-white/20 p-6 rounded-3xl">
               <div className="text-white font-medium text-lg mb-1">Our Mission</div>
               <div className="text-white/70 text-sm font-light">To make world-class recovery accessible, personalized, and deeply human through the power of holistic care.</div>
             </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
