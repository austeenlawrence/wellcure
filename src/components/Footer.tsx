import React from 'react';
import { Phone, MessageSquare, MapPin, ArrowUpRight } from 'lucide-react';
import { CLINIC_CONFIG } from '../config/clinicData';

interface FooterProps {
  onOpenPolicy: (type: 'privacy' | 'terms' | 'disclaimer') => void;
  onBookClick: () => void;
  onSelectTreatment: (treatmentName: string) => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenPolicy,
  onBookClick,
  onSelectTreatment,
}) => {
  const { brand, doctor, contact } = CLINIC_CONFIG;

  return (
    <footer className="bg-navy-950 text-slate-300 pt-16 pb-24 lg:pb-16 border-t border-navy-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-navy-800/80">
          
          {/* Brand & Doctor Lockup */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-sky-400">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-4.5 h-4.5"
                >
                  <path d="M12 2C6.5 7.5 4 12 4 15a8 8 0 0 0 16 0c0-3-2.5-7.5-8-13Z" />
                  <path d="M12 12v6" />
                  <path d="M9 15h6" />
                </svg>
              </div>
              <div>
                <span className="text-xl font-bold tracking-tight text-white font-display">
                  WELLCURE
                </span>
                <span className="block text-[10px] uppercase tracking-wider text-slate-400 font-medium">
                  Homeopathy Clinic
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Led by <strong className="text-slate-200">{doctor.name}</strong>, offering personalized constitutional homeopathic care in Devpuri-II, Bulandshahr.
            </p>

            <div className="pt-2 text-xs text-slate-400 space-y-1.5">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <span>{contact.address.full}</span>
              </p>
              <p className="flex items-center gap-2 pt-1">
                <Phone className="w-4 h-4 text-sky-400 shrink-0" />
                <a href={contact.phoneTel} className="text-white hover:text-sky-300 font-mono">
                  {contact.phoneFormatted}
                </a>
              </p>
              <p className="flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-emerald-400 shrink-0" />
                <a
                  href={contact.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-emerald-300 font-mono"
                >
                  WhatsApp: {contact.phone}
                </a>
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About Dr. Rahul Sharma
                </a>
              </li>
              <li>
                <a href="#treatments" className="hover:text-white transition-colors">
                  Core Treatments
                </a>
              </li>
              <li>
                <a href="#why-wellcure" className="hover:text-white transition-colors">
                  Why Wellcure
                </a>
              </li>
              <li>
                <a href="#journey" className="hover:text-white transition-colors">
                  Consultation Journey
                </a>
              </li>
              <li>
                <a href="#clinic" className="hover:text-white transition-colors">
                  Clinic & Directions
                </a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-white transition-colors">
                  Patient Reviews
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Core Treatments Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Treatment Areas
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => onSelectTreatment('Pediatric Care')}
                  className="hover:text-white text-left transition-colors cursor-pointer"
                >
                  Pediatric Care
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectTreatment('Kidney Stone Treatment')}
                  className="hover:text-white text-left transition-colors cursor-pointer"
                >
                  Kidney Stone Treatment
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectTreatment('Allergy Treatment')}
                  className="hover:text-white text-left transition-colors cursor-pointer"
                >
                  Allergy Treatment
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectTreatment('Acne & Pimple Treatment')}
                  className="hover:text-white text-left transition-colors cursor-pointer"
                >
                  Acne & Pimple Treatment
                </button>
              </li>
            </ul>
          </div>

          {/* Appointment & Hours */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Consultation Hours
            </h4>
            <div className="text-xs text-slate-400 space-y-2">
              <div>
                <p className="font-semibold text-slate-200">Monday – Saturday</p>
                <p className="font-mono text-[11px]">10:00 AM – 2:00 PM & 5:00 PM – 8:30 PM</p>
              </div>
              <div>
                <p className="font-semibold text-slate-200">Sunday</p>
                <p className="font-mono text-[11px]">10:00 AM – 1:30 PM (By Appointment)</p>
              </div>
              <div className="pt-2">
                <button
                  onClick={onBookClick}
                  className="w-full py-2.5 px-3 text-xs font-bold text-navy-950 bg-sky-400 hover:bg-sky-300 rounded-lg transition-colors cursor-pointer"
                >
                  Book Appointment
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Legal Notices & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            <p>© {new Date().getFullYear()} Wellcure Homeopathy Clinic. All rights reserved.</p>
            <p className="text-[11px] text-slate-400 mt-0.5">
              Dr. Rahul Sharma · Devpuri-II, Bulandshahr, Uttar Pradesh 203001
            </p>
          </div>

          <div className="flex items-center gap-4 text-xs">
            <button
              onClick={() => onOpenPolicy('privacy')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <span aria-hidden="true" className="text-slate-700">·</span>
            <button
              onClick={() => onOpenPolicy('terms')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Terms & Conditions
            </button>
            <span aria-hidden="true" className="text-slate-700">·</span>
            <button
              onClick={() => onOpenPolicy('disclaimer')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Medical Disclaimer
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
