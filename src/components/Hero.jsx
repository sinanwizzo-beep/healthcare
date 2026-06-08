import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Play, Search, Heart, ShieldCheck, Star } from 'lucide-react';

export default function Hero() {
  return (
    <section id="hero" className="relative h-[100vh] w-full flex items-center justify-center overflow-hidden">

      {/* Full Screen Background Image with Overlay */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        {/* Double-exposure / nature aesthetic image */}
        <img
          src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=2000&q=80"
          alt="Immersive Wellness"
          className="w-full h-full object-cover opacity-50 mix-blend-multiply"
        />
        {/* Gradients to blend the image into the 3D background behind it */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-50/90 via-slate-50/50 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-50/95 via-transparent to-slate-50/95"></div>
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 h-full flex flex-col justify-center pointer-events-none">

        {/* Center Main Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center max-w-4xl mx-auto mt-20"
        >
          <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-bold text-slate-900 leading-[1.1] tracking-tight mb-4 drop-shadow-sm">
            Wellness <br />
            Made Simple and <br />
            Personal.
          </h1>
          <div className="flex items-center justify-center gap-2 mt-6">
            <span className="bg-white/80 backdrop-blur-md border border-slate-200 text-slate-800 px-5 py-2 rounded-full text-sm font-bold flex items-center gap-2 shadow-sm">
              <Sparkles className="h-4 w-4" /> Premium Care
            </span>
          </div>
        </motion.div>

        {/* Left Side Italic Text */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="absolute left-6 md:left-12 top-1/2 -translate-y-1/2 max-w-[250px] hidden xl:block"
        >
          <p className="text-slate-600 italic text-sm leading-relaxed font-medium">
            Personalized wellness recommendations powered by experts to help you move, breathe, and recover at your own pace.
          </p>
        </motion.div>

        {/* Right Side Testimonial */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="absolute right-6 md:right-12 top-1/2 -translate-y-1/2 max-w-[280px] hidden xl:block"
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="flex -space-x-2">
              <img className="w-8 h-8 rounded-full border-2 border-white object-cover shadow-sm" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80" alt="User" />
              <img className="w-8 h-8 rounded-full border-2 border-white object-cover shadow-sm" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=100&q=80" alt="User" />
              <img className="w-8 h-8 rounded-full border-2 border-white object-cover shadow-sm" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80" alt="User" />
            </div>
            <div className="text-slate-800 text-sm font-bold">2.5k+ (4.8 <Star className="inline h-3 w-3 text-yellow-500 mb-1" />)</div>
          </div>
          <p className="text-slate-600 italic text-sm leading-relaxed font-medium">
            "This community helped me stay consistent with my wellness journey. The specialists perfectly understand my needs."
          </p>
        </motion.div>

        {/* Bottom Elements Wrapper */}
        <div className="absolute bottom-10 left-0 right-0 px-6 md:px-12 flex justify-between items-end pointer-events-auto">

          {/* Bottom Left Pill */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <button 
              onClick={() => {
                const el = document.getElementById('testimonials');
                const divs = Array.from(document.querySelectorAll('div'));
                const scrollContainer = divs.find(container => {
                  const style = window.getComputedStyle(container);
                  return (style.overflowY === 'auto' || style.overflowY === 'scroll' || style.overflow === 'auto') && container.scrollHeight > window.innerHeight;
                });
                
                if (scrollContainer && el) {
                  scrollContainer.scrollTo({ top: el.offsetTop, behavior: 'smooth' });
                }
              }}
              className="bg-white/90 backdrop-blur-xl border border-slate-200 hover:bg-white transition-colors text-slate-800 px-6 py-3 rounded-full flex items-center gap-3 text-sm font-bold shadow-sm"
            >
              <div className="flex gap-1">
                <div className="w-1 h-3 bg-slate-400 rounded-full animate-pulse"></div>
                <div className="w-1 h-4 bg-wellness-500 rounded-full animate-pulse delay-75"></div>
                <div className="w-1 h-2 bg-slate-400 rounded-full animate-pulse delay-150"></div>
              </div>
              Stories
            </button>
          </motion.div>

          {/* Bottom Center Dock */}
          {/* <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="hidden md:flex flex-col items-center gap-4 mb-2"
          >
            <div className="text-slate-500 text-xs tracking-wider font-bold uppercase">Select your wellness path</div>
            <div className="flex items-center gap-4 bg-white/80 backdrop-blur-2xl p-2 rounded-full border border-slate-200 shadow-sm">
              <button className="w-10 h-10 rounded-full flex items-center justify-center text-slate-400 hover:text-wellness-600 transition-all"><Heart className="h-4 w-4" /></button>
              <button className="w-10 h-10 rounded-full flex items-center justify-center text-slate-400 hover:text-wellness-600 transition-all"><ShieldCheck className="h-4 w-4" /></button>
              <button className="w-12 h-12 rounded-full bg-slate-900 text-white flex items-center justify-center shadow-xl transform scale-110"><Sparkles className="h-5 w-5" /></button>
              <button className="w-10 h-10 rounded-full flex items-center justify-center text-slate-400 hover:text-wellness-600 transition-all"><Play className="h-4 w-4" /></button>
              <button className="w-10 h-10 rounded-full flex items-center justify-center text-slate-400 hover:text-wellness-600 transition-all"><Star className="h-4 w-4" /></button>
            </div>
            <div className="text-slate-800 font-bold text-sm">Meditation</div>
          </motion.div> */}

          {/* Bottom Right Search Pill */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="flex flex-col items-end gap-3"
          >
            {/* Tiny images row above search bar, exactly like the screenshot */}
            <div className="flex gap-2">
              <img src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=60&q=80" className="w-10 h-10 rounded-lg object-cover border border-slate-200 shadow-sm" alt="Thumb" />
              <img src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=60&q=80" className="w-10 h-10 rounded-lg object-cover border border-slate-200 shadow-sm" alt="Thumb" />
              <img src="https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=60&q=80" className="w-10 h-10 rounded-lg object-cover border border-slate-200 shadow-sm" alt="Thumb" />
            </div>

            <div
              onClick={() => {
                const el = document.getElementById('contact');
                const divs = Array.from(document.querySelectorAll('div'));
                const scrollContainer = divs.find(container => {
                  const style = window.getComputedStyle(container);
                  return (style.overflowY === 'auto' || style.overflowY === 'scroll' || style.overflow === 'auto') && container.scrollHeight > window.innerHeight;
                });

                if (scrollContainer && el) {
                  scrollContainer.scrollTo({ top: el.offsetTop, behavior: 'smooth' });
                }
              }}
              className="bg-white/90 backdrop-blur-xl border border-slate-200 text-slate-800 px-6 py-3 rounded-full flex items-center gap-4 shadow-sm min-w-[220px] cursor-pointer hover:bg-white transition-colors"
            >
              <div className="w-5 h-5 rounded-full bg-gradient-to-tr from-emerald-400 to-cyan-400 flex-shrink-0"></div>
              <span className="text-sm font-bold text-slate-700">Ask anything</span>
              <div className="ml-auto flex gap-0.5">
                <div className="w-0.5 h-3 bg-slate-400 rounded-full"></div>
                <div className="w-0.5 h-4 bg-slate-600 rounded-full"></div>
                <div className="w-0.5 h-2 bg-slate-400 rounded-full"></div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
