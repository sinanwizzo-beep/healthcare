import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    quote: "The level of care and absolute privacy I received was unparalleled. It completely transformed my approach to long-term health and vitality.",
    author: "Elena M.",
    role: "CEO & Founder",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 2,
    quote: "After my surgery, the holistic rehabilitation program accelerated my recovery safely. The facilities feel like a five-star resort, not a hospital.",
    author: "James R.",
    role: "Executive Director",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 3,
    quote: "A sanctuary for true healing. The integrated approach to mental and physical wellness provided me with the clarity and strength I desperately needed.",
    author: "Sophia L.",
    role: "Creative Director",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80"
  }
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  const handleNext = () => setIndex((prev) => (prev + 1) % testimonials.length);
  const handlePrev = () => setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section id="testimonials" className="relative min-h-[100vh] w-full flex items-center justify-center py-24 pointer-events-auto overflow-hidden">
      <div className="w-full max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-4">Voices of Recovery</h2>
          <p className="text-slate-500 font-medium">Stories of transformation from our private guests.</p>
        </div>

        {/* Carousel Container */}
        <div className="relative bg-white rounded-[3rem] p-8 md:p-16 shadow-[0_20px_60px_rgba(0,0,0,0.05)] border border-slate-100 flex flex-col md:flex-row items-center gap-12 min-h-[400px]">
          
          <div className="absolute top-12 left-12 opacity-5 pointer-events-none">
            <Quote className="w-32 h-32 text-slate-900" />
          </div>

          <div className="flex-1 relative z-10 w-full overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="flex flex-col h-full justify-center"
              >
                <div className="flex gap-1 mb-8">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-wellness-500 text-wellness-500" />
                  ))}
                </div>
                
                <p className="text-2xl md:text-3xl leading-relaxed text-slate-800 font-medium mb-10">
                  "{testimonials[index].quote}"
                </p>
                
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-slate-100">
                    <img 
                      src={testimonials[index].image} 
                      alt={testimonials[index].author}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">{testimonials[index].author}</h4>
                    <p className="text-sm text-slate-500">{testimonials[index].role}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex md:flex-col gap-4 relative z-10 shrink-0">
            <button 
              onClick={handlePrev}
              className="w-14 h-14 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-all shadow-sm"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button 
              onClick={handleNext}
              className="w-14 h-14 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-all shadow-sm"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
