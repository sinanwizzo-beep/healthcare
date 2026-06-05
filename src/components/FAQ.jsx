import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: "How do you balance medical treatment for illness with holistic wellness?",
    answer: "We bridge the gap by combining world-class clinical care for critical illnesses with deeply restorative holistic wellness programs. After your primary medical procedures, you seamlessly transition into a personalized recovery retreat."
  },
  {
    question: "Are your programs suitable for post-surgery recovery?",
    answer: "Yes. Our signature 'Illness to Wellness' pathway is specifically designed for post-operative patients. We integrate advanced clinical monitoring with natural healing practices to accelerate your recovery and reduce surgical trauma."
  },
  {
    question: "Can I book a wellness retreat without an underlying illness?",
    answer: "Absolutely. While we specialize in post-medical recovery, our pure wellness and preventative retreats are open to anyone looking to optimize their health, manage chronic stress, or engage in deep restorative care."
  },
  {
    question: "How do you ensure medical safety during holistic therapies?",
    answer: "All our holistic wellness programs are overseen by board-certified medical professionals. Your surgical doctors and wellness therapists work as a unified team to ensure every therapy is medically safe, complementary, and highly effective."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="min-h-[100vh] w-full flex items-center justify-center py-24 px-6 relative pointer-events-none">
      <div className="max-w-4xl mx-auto w-full pointer-events-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 drop-shadow-sm">
            Your Journey, <span className="text-transparent bg-clip-text bg-gradient-to-r from-wellness-600 to-emerald-500">Clarified.</span>
          </h2>
          <p className="text-lg text-slate-600 font-medium max-w-2xl mx-auto">
            Everything you need to know about our premium holistic medical tourism and recovery retreats.
          </p>
        </div>

        {/* Minimalist Accordion */}
        <div className="flex flex-col gap-2">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index} 
                className="border-b border-slate-200 overflow-hidden"
              >
                <button 
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  className="w-full text-left py-6 flex items-center justify-between focus:outline-none group"
                >
                  <span className={`font-bold text-xl md:text-2xl transition-colors ${isOpen ? 'text-wellness-600' : 'text-slate-900 group-hover:text-wellness-500'}`}>
                    {faq.question}
                  </span>
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${isOpen ? 'bg-wellness-50 rotate-180' : 'bg-slate-50 group-hover:bg-slate-100'}`}>
                    <ChevronDown className={`h-5 w-5 ${isOpen ? 'text-wellness-600' : 'text-slate-500'}`} />
                  </div>
                </button>
                
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="pb-8 pr-12 text-slate-600 font-medium text-lg leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
        
        {/* Contact CTA */}
        <div className="mt-16 text-center">
          <p className="text-slate-500 mb-4 font-medium">Still have questions?</p>
          <button className="px-8 py-3 rounded-full bg-slate-900 text-white font-bold hover:bg-slate-800 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1">
            Contact our Concierge
          </button>
        </div>

      </div>
    </section>
  );
}
