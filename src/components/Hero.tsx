import React from 'react';
import { Calendar, ArrowDown, Phone, MessageSquare, MapPin, CheckCircle2, ShieldCheck } from 'lucide-react';
import { CLINIC_CONFIG } from '../config/clinicData';

interface HeroProps {
  onBookClick: () => void;
  onExploreTreatments: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onBookClick, onExploreTreatments }) => {
  return (
    <section className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 bg-gradient-to-b from-sky-50/50 via-white to-slate-50 overflow-hidden">
      {/* Subtle architectural ambient background glow */}
      <div
        className="absolute top-0 right-1/4 w-96 h-96 bg-sky-200/30 rounded-full blur-3xl pointer-events-none -z-10"
        aria-hidden="true"
      />
      <div
        className="absolute top-1/3 left-10 w-72 h-72 bg-blue-100/40 rounded-full blur-2xl pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Editorial Headline & Messaging */}
          <div className="lg:col-span-7 space-y-7">
            
            {/* Editorial Kicker with Unboxed Metadata */}
            <div className="flex items-center gap-2 text-xs font-semibold text-sky-800 tracking-wide">
              <span>Wellcure Homeopathy Clinic</span>
              <span aria-hidden="true" className="text-slate-400">·</span>
              <span>Devpuri-II, Bulandshahr</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 font-display leading-[1.15] text-balance">
                Personalized Homeopathic Care for Chronic & Acute Well-Being
              </h1>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
                Led by <strong className="font-semibold text-slate-900">Dr. Rahul Sharma</strong>, Wellcure provides patient-centered constitutional consultations focused on understanding root health patterns rather than temporary symptom suppression.
              </p>
            </div>

            {/* Clinical Focus Indicator */}
            <div className="pt-1 border-t border-slate-200/80">
              <p className="text-xs uppercase font-semibold text-slate-500 tracking-wider mb-3">
                Dedicated Clinical Focus:
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs text-slate-700 font-medium">
                <span className="flex items-center gap-1.5 py-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-sky-600 shrink-0" />
                  Pediatric Care
                </span>
                <span className="flex items-center gap-1.5 py-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-sky-600 shrink-0" />
                  Kidney Stone Care
                </span>
                <span className="flex items-center gap-1.5 py-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-sky-600 shrink-0" />
                  Allergy Treatment
                </span>
                <span className="flex items-center gap-1.5 py-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-sky-600 shrink-0" />
                  Acne & Skin Care
                </span>
              </div>
            </div>

            {/* Primary & Secondary Action Group */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <button
                onClick={onBookClick}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-navy-900 hover:bg-navy-800 rounded-xl shadow-sm hover:shadow-md transition-all focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-sky-500 cursor-pointer"
              >
                <Calendar className="w-4 h-4 text-sky-300" />
                <span>Book an Appointment</span>
              </button>

              <button
                onClick={onExploreTreatments}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm font-semibold text-slate-700 hover:text-navy-900 bg-white hover:bg-slate-50 border border-slate-200 rounded-xl transition-all cursor-pointer"
              >
                <span>Explore Treatments</span>
                <ArrowDown className="w-4 h-4 text-slate-400" />
              </button>
            </div>

            {/* Direct Quick Actions: Call & WhatsApp */}
            <div className="pt-2 flex items-center gap-6 text-xs text-slate-600">
              <span className="font-medium text-slate-500">Direct Consultation Desk:</span>
              <a
                href={CLINIC_CONFIG.contact.phoneTel}
                className="inline-flex items-center gap-1.5 font-semibold text-slate-800 hover:text-sky-700 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-sky-600" />
                <span className="tabular-nums">{CLINIC_CONFIG.contact.phoneFormatted}</span>
              </a>
              <span aria-hidden="true" className="text-slate-300">|</span>
              <a
                href={CLINIC_CONFIG.contact.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-semibold text-emerald-700 hover:text-emerald-800 transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
                <span>WhatsApp Message</span>
              </a>
            </div>

          </div>

          {/* Right Column: Authentic Editorial Portrait of Dr. Rahul Sharma */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Doctor Portrait Frame with Architectural Elevation */}
              <div className="relative rounded-3xl overflow-hidden bg-slate-900 border border-slate-200/90 shadow-xl shadow-slate-900/10 group">
                <img
                  src="/images/dr_rahul_sharma.png"
                  alt="Dr. Rahul Sharma — Consultant Homeopathic Physician at Wellcure Clinic"
                  className="w-full h-[460px] sm:h-[520px] object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                  referrerPolicy="no-referrer"
                  loading="eager"
                />
                
                {/* Refined Edge Masking & Architectural Vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/20 to-transparent pointer-events-none" />
                <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-3xl pointer-events-none" />

                {/* Primary Caption Treatment */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div className="space-y-1.5">
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-sky-500/20 backdrop-blur-md border border-sky-400/30 text-[11px] font-semibold tracking-wide text-sky-200">
                      <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse" />
                      Consultant Homeopathic Physician
                    </div>
                    <h2 className="text-2xl font-bold font-display tracking-tight text-white">
                      Dr. Rahul Sharma
                    </h2>
                    <p className="text-xs text-slate-200/90 max-w-xs">
                      Consultant homeopathic physician at Wellcure Clinic, Bulandshahr.
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating Information Capsule: Clinic Location */}
              <div className="absolute -bottom-5 -left-3 sm:-left-6 bg-white/95 backdrop-blur-md p-3.5 rounded-2xl border border-slate-200/90 shadow-lg shadow-slate-900/10 flex items-center gap-3 max-w-[290px]">
                <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-700 flex items-center justify-center shrink-0 border border-sky-100">
                  <MapPin className="w-5 h-5 text-sky-700" />
                </div>
                <div className="text-left">
                  <p className="text-xs font-bold text-slate-900 leading-tight">Wellcure Clinic</p>
                  <p className="text-[11px] text-slate-600 leading-tight">Awas Vikas Colony, Devpuri-II</p>
                  <p className="text-[10px] text-sky-700 font-semibold mt-0.5">Bulandshahr, UP 203001</p>
                </div>
              </div>

              {/* Floating Verified Practitioner Capsule */}
              <div className="absolute -top-3 -right-3 sm:-right-4 bg-navy-900/95 backdrop-blur-md text-white px-4 py-2.5 rounded-2xl shadow-lg border border-navy-800 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-sky-400 shrink-0" />
                <span className="text-xs font-semibold tracking-tight">Verified Practitioner</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
