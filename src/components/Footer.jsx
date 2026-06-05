import React from 'react';
import { Activity, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full relative pointer-events-none mt-20">
      <div className="w-full bg-white/60 backdrop-blur-2xl text-slate-600 py-16 border-t border-slate-200 pointer-events-auto shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="col-span-1 md:col-span-1">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-6 h-6 border-2 border-slate-900 rounded-full flex items-center justify-center">
                   <div className="w-2 h-2 bg-slate-900 rounded-full"></div>
                </div>
                <span className="font-bold text-2xl tracking-tight text-slate-900">
                  Vitality<span className="text-wellness-600">Care</span>
                </span>
              </div>
              <p className="text-sm text-slate-500 mb-6 font-medium">
                Your journey ends with perfect health. Schedule your consultation today.
              </p>
            </div>
            <div>
              <h4 className="text-slate-900 font-bold mb-4">Contact Us</h4>
              <ul className="space-y-4 text-sm font-medium">
                <li className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-wellness-600 shrink-0" />
                  <span>123 Health Avenue, Wellness District, NY</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-wellness-600 shrink-0" />
                  <span>+1 (555) 123-4567</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-wellness-600 shrink-0" />
                  <span>care@vitalitycare.com</span>
                </li>
              </ul>
            </div>
            
            {/* Column 3 */}
            <div>
              <h4 className="text-slate-900 font-bold mb-4">Quick Links</h4>
              <ul className="space-y-3 text-sm font-medium text-slate-500">
                <li><a href="#" className="hover:text-wellness-600 transition-colors">Our Story</a></li>
                <li><a href="#" className="hover:text-wellness-600 transition-colors">Programs & Retreats</a></li>
                <li><a href="#" className="hover:text-wellness-600 transition-colors">Specialist Network</a></li>
                <li><a href="#" className="hover:text-wellness-600 transition-colors">Success Rates</a></li>
              </ul>
            </div>

            {/* Column 4 */}
            <div>
              <h4 className="text-slate-900 font-bold mb-4">Legal</h4>
              <ul className="space-y-3 text-sm font-medium text-slate-500">
                <li><a href="#" className="hover:text-wellness-600 transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-wellness-600 transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-wellness-600 transition-colors">Medical Disclaimer</a></li>
                <li><a href="#" className="hover:text-wellness-600 transition-colors">Cookie Policy</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-200 mt-12 pt-8 text-sm text-center text-slate-500 font-medium">
            &copy; {new Date().getFullYear()} VitalityCare Medical Center.
          </div>
        </div>
      </div>
    </footer>
  );
}
