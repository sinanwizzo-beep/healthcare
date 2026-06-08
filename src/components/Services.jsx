import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, CheckCircle2, ShieldPlus, Leaf, Brain, Heart, Activity, ArrowRight, X } from 'lucide-react';

const servicesData = [
  {
    id: 1,
    title: 'Preventive Wellness Retreat',
    subtitle: 'Best for: Holistic Body Rejuvenation',
    image: 'https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&w=800&q=80',
    icon: Leaf,
    badges: ['Holistic Approach', 'Organic Diet Available'],
    description: 'A luxurious retreat offering pristine natural air, thermal therapies, and personalized detoxification programs designed to cleanse the body.',
    category: 'Wellness'
  },
  {
    id: 2,
    title: 'Advanced Chronic Care',
    subtitle: 'Best for: Long-term Health Management',
    image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=800&q=80',
    icon: Activity,
    badges: ['24/7 Doctor Supervised', 'Advanced Diagnostics'],
    description: 'State-of-the-art medical monitoring and specialized care plans to effectively manage and treat chronic conditions with top specialists.',
    category: 'Illness'
  },
  {
    id: 3,
    title: 'Cognitive & Mental Therapy',
    subtitle: 'Best for: Emotional & Psychological Balance',
    image: 'https://images.unsplash.com/photo-1528319725582-ddc096101511?auto=format&fit=crop&w=800&q=80',
    icon: Brain,
    badges: ['Certified Therapists', 'Private Sessions'],
    description: 'Compassionate counseling, cognitive behavioral therapy, and stress management retreats to restore your mental and emotional well-being.',
    category: 'Wellness'
  },
  {
    id: 4,
    title: 'Cardiac Rehabilitation',
    subtitle: 'Best for: Post-Surgical & Heart Recovery',
    image: 'https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&w=800&q=80',
    icon: Heart,
    badges: ['Specialist Nursing', 'Monitored Recovery'],
    description: 'Specialized programs to help you recover safely after heart events, combining gentle physical therapy, nutrition, and medical oversight.',
    category: 'Illness'
  },
  {
    id: 5,
    title: 'Immunity Boosting Protocol',
    subtitle: 'Best for: Strengthening Natural Defenses',
    image: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=800&q=80',
    icon: ShieldPlus,
    badges: ['Nutritional Therapy', 'IV Infusions'],
    description: 'A dedicated protocol combining high-dose vitamins, nutrition planning, and medical therapies to fortify your immune system against disease.',
    category: 'Wellness'
  }
];

export default function Services() {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [selectedService, setSelectedService] = useState(null);

  const scrollToContact = () => {
    setSelectedService(null); // Close modal
    setTimeout(() => {
      const el = document.getElementById('contact');
      const divs = Array.from(document.querySelectorAll('div'));
      const scrollContainer = divs.find(container => {
        const style = window.getComputedStyle(container);
        return (style.overflowY === 'auto' || style.overflowY === 'scroll' || style.overflow === 'auto') && container.scrollHeight > window.innerHeight;
      });
      
      if (scrollContainer && el) {
        scrollContainer.scrollTo({ top: el.offsetTop, behavior: 'smooth' });
      }
    }, 150);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % servicesData.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + servicesData.length) % servicesData.length);
  };

  const getVisibleCards = () => {
    const prev = (currentIndex - 1 + servicesData.length) % servicesData.length;
    const next = (currentIndex + 1) % servicesData.length;
    return [prev, currentIndex, next];
  };

  const visibleCards = getVisibleCards();

  return (
    <>
    <section id="programs" className="h-[100vh] w-full flex flex-col items-center justify-center relative pointer-events-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full pointer-events-auto">
        <div className="text-center max-w-3xl mx-auto mb-10">
          {/* <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4 drop-shadow-sm">Featured Programs & Care</h2> */}
          <p className="text-lg text-slate-600 font-medium">Explore our specialized retreat and treatment programs designed to bridge the gap between deep wellness and critical healing.</p>
        </div>

        <div className="relative h-[480px] md:h-[550px] flex items-center justify-center">
          {/* Navigation Buttons */}
          <button
            onClick={handlePrev}
            className="absolute left-0 md:left-4 z-30 p-4 rounded-full bg-white/80 backdrop-blur-md shadow-lg text-slate-700 hover:text-wellness-600 hover:scale-110 hover:bg-white transition-all border border-slate-200"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-0 md:right-4 z-30 p-4 rounded-full bg-white/80 backdrop-blur-md shadow-lg text-slate-700 hover:text-wellness-600 hover:scale-110 hover:bg-white transition-all border border-slate-200"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Carousel */}
          <div className="relative w-full max-w-6xl mx-auto h-full flex justify-center items-center perspective-[1000px]">
            <AnimatePresence initial={false} mode="popLayout">
              {visibleCards.map((dataIndex, i) => {
                const isCenter = i === 1;
                const isLeft = i === 0;
                const isRight = i === 2;

                const card = servicesData[dataIndex];
                const Icon = card.icon;
                const isWellness = card.category === 'Wellness';

                return (
                  <motion.div
                    key={card.id}
                    layout
                    initial={{ opacity: 0, scale: 0.8, x: isLeft ? -100 : isRight ? 100 : 0 }}
                    animate={{
                      opacity: isCenter ? 1 : 0.6,
                      scale: isCenter ? 1 : 0.85,
                      x: isLeft ? '-60%' : isRight ? '60%' : '0%',
                      zIndex: isCenter ? 20 : 10,
                      rotateY: isLeft ? 15 : isRight ? -15 : 0
                    }}
                    exit={{ opacity: 0, scale: 0.8, x: isLeft ? -100 : isRight ? 100 : 0 }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    className="absolute w-full max-w-[340px] md:max-w-[420px] bg-white rounded-[2.5rem] overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-slate-100/50"
                    onClick={() => {
                      if (isLeft) handlePrev();
                      if (isRight) handleNext();
                    }}
                    style={{ cursor: isCenter ? 'default' : 'pointer' }}
                  >
                    {/* Card Header Image - Framed Style */}
                    <div className="relative h-60 w-full p-2.5">
                      <div className="w-full h-full rounded-[2rem] overflow-hidden relative">
                        <img src={card.image} alt={card.title} className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 to-transparent" />
                        
                        {/* Elegant Category Badge */}
                        <div className="absolute top-4 right-4 px-4 py-1.5 rounded-full text-xs font-bold bg-white/90 backdrop-blur-md text-slate-900 shadow-sm">
                          {card.category}
                        </div>

                        {/* Floating Icon */}
                        <div className="absolute bottom-4 left-4 p-2.5 rounded-2xl bg-white/90 backdrop-blur-md text-slate-900 shadow-sm">
                          <Icon className="h-5 w-5" />
                        </div>
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="px-8 pt-4 pb-8">
                      <h3 className="text-2xl font-semibold tracking-tight text-slate-900 mb-2">{card.title}</h3>
                      <p className="text-sm font-medium text-slate-500 mb-5 flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-wellness-600" />
                        {card.subtitle}
                      </p>

                      {/* Minimalist Badges */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {card.badges.map((badge, idx) => (
                          <span key={idx} className="text-[10px] font-semibold px-3 py-1.5 rounded-full border border-slate-200 bg-slate-50 text-slate-600 tracking-wide uppercase">
                            {badge}
                          </span>
                        ))}
                      </div>

                      <p className="text-slate-600 text-sm leading-relaxed mb-8 line-clamp-2">
                        {card.description}
                      </p>

                      {/* Premium Actions */}
                      <div className="flex items-center gap-3 mt-auto pointer-events-auto">
                        <button 
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedService(card);
                          }}
                          className="flex-1 py-3.5 px-6 rounded-2xl font-bold text-sm text-white bg-slate-900 hover:bg-slate-800 transition-colors shadow-lg shadow-slate-900/20"
                        >
                          View Details
                        </button>
                        <button 
                          onClick={(e) => {
                            e.stopPropagation();
                            scrollToContact();
                          }}
                          className="p-3.5 rounded-2xl border border-slate-200 text-slate-900 hover:bg-slate-50 transition-colors group"
                        >
                          <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>

    {/* View Details Modal via Portal */}
    {typeof document !== 'undefined' && createPortal(
      <AnimatePresence>
        {selectedService && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 pointer-events-auto"
          >
            {/* Backdrop */}
            <div 
              className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm"
              onClick={() => setSelectedService(null)}
            ></div>
            
            {/* Modal Content */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-2xl bg-white rounded-[2rem] shadow-2xl overflow-hidden z-10 flex flex-col md:flex-row"
            >
              {/* Image Side */}
              <div className="md:w-2/5 h-48 md:h-auto relative">
                <img src={selectedService.image} alt={selectedService.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <span className="px-3 py-1 bg-white/20 backdrop-blur-md border border-white/30 text-white rounded-full text-xs font-bold shadow-sm">
                    {selectedService.category}
                  </span>
                </div>
              </div>
              
              {/* Text Side */}
              <div className="md:w-3/5 p-8 flex flex-col justify-center relative">
                <button 
                  onClick={() => setSelectedService(null)}
                  className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600 bg-slate-50 hover:bg-slate-100 rounded-full transition-colors"
                >
                  <X className="h-5 w-5" />
                </button>
                
                <h3 className="text-2xl font-bold text-slate-900 mb-2 pr-8">{selectedService.title}</h3>
                <p className="text-sm font-semibold text-wellness-600 mb-4">{selectedService.subtitle}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedService.badges.map((badge, idx) => (
                    <span key={idx} className="text-[10px] font-bold px-2.5 py-1 rounded-md bg-slate-100 text-slate-600 uppercase tracking-wider">
                      {badge}
                    </span>
                  ))}
                </div>
                
                <p className="text-slate-600 text-sm leading-relaxed mb-8">
                  {selectedService.description}
                  {" "}This program involves top-tier specialists, personalized itineraries, and 24/7 concierge support to ensure your absolute comfort and successful outcomes.
                </p>
                
                <button 
                  onClick={scrollToContact}
                  className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-3.5 rounded-xl flex items-center justify-center gap-2 transition-all shadow-lg shadow-slate-900/10 group"
                >
                  Inquire Now
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>,
      document.body
    )}
    </>
  );
}
