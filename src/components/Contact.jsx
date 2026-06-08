import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, ArrowRight } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="relative min-h-[100vh] w-full flex items-center justify-center py-24 pointer-events-auto overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-6 relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-[3rem] shadow-[0_30px_60px_rgba(0,0,0,0.08)] border border-slate-100 overflow-hidden flex flex-col lg:flex-row"
        >
          
          {/* Left Column: Info & Imagery */}
          <div className="lg:w-2/5 bg-slate-900 p-12 lg:p-16 relative overflow-hidden flex flex-col justify-between">
            {/* Background Texture */}
            <div className="absolute inset-0 opacity-20">
              <img 
                src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80" 
                alt="Texture" 
                className="w-full h-full object-cover mix-blend-overlay grayscale"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-slate-900/80"></div>
            </div>
            
            <div className="relative z-10">
              <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6">
                Let's start your journey.
              </h2>
              <p className="text-slate-300 text-lg leading-relaxed mb-12">
                Our concierges are ready to orchestrate your seamless transition to profound holistic recovery and world-class medical care.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white shrink-0 border border-white/20 backdrop-blur-md">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-1">Global Headquarters</h4>
                    <p className="text-slate-400 text-sm leading-relaxed">124 Wellness Avenue, Suite 400<br/>Geneva, Switzerland 1204</p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white shrink-0 border border-white/20 backdrop-blur-md">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-1">Direct Concierge</h4>
                    <p className="text-slate-400 text-sm leading-relaxed">+41 22 731 55 00</p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white shrink-0 border border-white/20 backdrop-blur-md">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-1">Private Inquiries</h4>
                    <p className="text-slate-400 text-sm leading-relaxed">concierge@vitalitycare.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Premium Form */}
          <div className="lg:w-3/5 p-12 lg:p-16 bg-white flex flex-col justify-center">
            <div className="mb-10">
              <h3 className="text-3xl font-bold text-slate-900 mb-3 tracking-tight">Request a Private Consultation</h3>
              <p className="text-slate-500 font-medium">Fill out the form below and a senior care coordinator will contact you within 2 hours.</p>
            </div>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[11px] font-bold text-slate-500 uppercase tracking-widest">First Name</label>
                  <input 
                    type="text" 
                    className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-wellness-500 focus:bg-white transition-all text-slate-900 placeholder:text-slate-400 font-medium shadow-sm"
                    placeholder="Jane"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[11px] font-bold text-slate-500 uppercase tracking-widest">Last Name</label>
                  <input 
                    type="text" 
                    className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-wellness-500 focus:bg-white transition-all text-slate-900 placeholder:text-slate-400 font-medium shadow-sm"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[11px] font-bold text-slate-500 uppercase tracking-widest">Email Address</label>
                <input 
                  type="email" 
                  className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-wellness-500 focus:bg-white transition-all text-slate-900 placeholder:text-slate-400 font-medium shadow-sm"
                  placeholder="jane.doe@example.com"
                />
              </div>

              <div className="space-y-2">
                <label className="text-[11px] font-bold text-slate-500 uppercase tracking-widest">How can we help you?</label>
                <textarea 
                  rows="4"
                  className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-wellness-500 focus:bg-white transition-all text-slate-900 placeholder:text-slate-400 font-medium shadow-sm resize-none"
                  placeholder="Please briefly describe the nature of your inquiry..."
                ></textarea>
              </div>

              <div className="pt-2">
                <button type="button" className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-4 rounded-2xl flex items-center justify-center gap-3 transition-all shadow-xl shadow-slate-900/20 group">
                  Submit Request
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </form>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
