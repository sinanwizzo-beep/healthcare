import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, CheckCircle2, ShieldPlus, Leaf, Brain, Heart, Activity, ArrowRight } from 'lucide-react';

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
    <section className="h-[100vh] w-full flex flex-col items-center justify-center relative pointer-events-none">
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
                    className="absolute w-full max-w-[340px] md:max-w-[400px] bg-white/80 backdrop-blur-2xl rounded-[2rem] overflow-hidden shadow-2xl border border-white/50"
                    onClick={() => {
                      if (isLeft) handlePrev();
                      if (isRight) handleNext();
                    }}
                    style={{ cursor: isCenter ? 'default' : 'pointer' }}
                  >
                    {/* Card Header Image */}
                    <div className="relative h-44 w-full">
                      <img src={card.image} alt={card.title} className="w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

                      {/* Floating Icon */}
                      <div className={`absolute top-4 left-4 p-2 rounded-xl bg-white/90 backdrop-blur-md border border-white/50 shadow-lg ${isWellness ? 'text-wellness-600' : 'text-illness-600'}`}>
                        <Icon className="h-6 w-6" />
                      </div>

                      {/* Category Badge */}
                      <div className={`absolute top-4 right-4 px-4 py-1.5 rounded-full text-xs font-bold shadow-lg border ${isWellness ? 'bg-wellness-500 text-white border-wellness-400' : 'bg-illness-500 text-white border-illness-400'}`}>
                        {card.category}
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-slate-900 mb-2">{card.title}</h3>
                      <p className="text-xs font-semibold text-slate-500 mb-4 flex items-center gap-1.5">
                        <CheckCircle2 className={`h-4 w-4 ${isWellness ? 'text-wellness-500' : 'text-blue-500'}`} />
                        {card.subtitle}
                      </p>

                      {/* Pill Badges */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {card.badges.map((badge, idx) => (
                          <span key={idx} className={`text-[10px] font-bold px-2 py-1 rounded-full border ${isWellness ? 'bg-wellness-50 text-wellness-700 border-wellness-200' : 'bg-blue-50 text-blue-700 border-blue-200'}`}>
                            {badge}
                          </span>
                        ))}
                      </div>

                      <p className="text-slate-600 text-sm leading-relaxed mb-6 line-clamp-2 font-medium">
                        {card.description}
                      </p>

                      {/* Actions */}
                      <div className="flex items-center gap-3 mt-auto">
                        <button className={`flex-1 py-3 px-4 rounded-xl font-bold text-xs text-white transition-all shadow-lg ${isWellness ? 'bg-wellness-600 hover:bg-wellness-700 shadow-wellness-600/20' : 'bg-blue-600 hover:bg-blue-700 shadow-blue-600/20'}`}>
                          VIEW DETAILS
                        </button>
                        <button className={`p-3 rounded-xl border transition-all ${isWellness ? 'border-wellness-200 text-wellness-600 hover:bg-wellness-50' : 'border-blue-200 text-blue-600 hover:bg-blue-50'}`}>
                          <ArrowRight className="h-5 w-5" />
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
  );
}
