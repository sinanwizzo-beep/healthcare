import React, { useState } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-6 w-full px-8 z-50 pointer-events-auto">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        
        {/* Logo */}
        <div 
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => {
            const divs = Array.from(document.querySelectorAll('div'));
            const scrollContainer = divs.find(el => {
              const style = window.getComputedStyle(el);
              return (style.overflowY === 'auto' || style.overflowY === 'scroll' || style.overflow === 'auto') && el.scrollHeight > window.innerHeight;
            });
            if(scrollContainer) scrollContainer.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        >
          <div className="w-5 h-5 border-2 border-slate-900 rounded-full flex items-center justify-center">
             <div className="w-1.5 h-1.5 bg-slate-900 rounded-full"></div>
          </div>
          <span className="font-bold text-lg tracking-tight text-slate-900">
            VitalityCare
          </span>
        </div>
        
        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8 font-medium">
          {[
            { label: 'About Us', id: 'about' },
            { label: 'Programs', id: 'programs' },
            { label: 'Tour', id: 'tour' },
            { label: 'Stories', id: 'testimonials' },
            { label: 'Impact', id: 'impact' },
            { label: 'FAQ', id: 'faq' },
            { label: 'Contact', id: 'contact' },
          ].map((item) => (
            <button 
              key={item.id}
              onClick={() => {
                const el = document.getElementById(item.id);
                const divs = Array.from(document.querySelectorAll('div'));
                const scrollContainer = divs.find(container => {
                  const style = window.getComputedStyle(container);
                  return (style.overflowY === 'auto' || style.overflowY === 'scroll' || style.overflow === 'auto') && container.scrollHeight > window.innerHeight;
                });
                
                if (scrollContainer && el) {
                  const topPos = el.getBoundingClientRect().top + scrollContainer.scrollTop - scrollContainer.getBoundingClientRect().top;
                  scrollContainer.scrollTo({ top: topPos, behavior: 'smooth' });
                }
              }} 
              className="text-slate-600 hover:text-wellness-600 transition-colors text-sm cursor-pointer"
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Right CTA Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <button className="bg-white text-slate-900 px-5 py-2 rounded-full font-semibold text-sm hover:bg-slate-100 transition-all">
            Join now
          </button>
          <button className="bg-black text-white w-9 h-9 rounded-full flex items-center justify-center hover:bg-slate-800 transition-all">
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsOpen(!isOpen)} className="text-slate-900 p-2 hover:bg-slate-100 rounded-full transition-all">
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>
    </nav>
  );
}
