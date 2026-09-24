import React from 'react';
import { MapPin, Navigation, Phone, MessageSquare, Clock, Landmark, ExternalLink } from 'lucide-react';
import { CLINIC_CONFIG } from '../config/clinicData';

export const ClinicLocation: React.FC = () => {
  const { contact } = CLINIC_CONFIG;

  return (
    <section id="clinic" className="py-20 lg:py-28 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 text-xs font-semibold text-sky-700 tracking-wide mb-2.5">
            <span>Location & Access</span>
            <span aria-hidden="true" className="text-slate-400">·</span>
            <span>Bulandshahr, Uttar Pradesh</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 font-display">
            Visit Wellcure Clinic
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            Our clinic is centrally situated in Awas Vikas Colony, Devpuri-II, Bulandshahr, providing a peaceful, clean clinical environment for patient consultations.
          </p>
        </div>

        {/* Clinic Location Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          {/* Left Column: Detailed Address & Hours */}
          <div className="lg:col-span-6 bg-white p-7 sm:p-9 rounded-2xl border border-slate-200 shadow-xs flex flex-col justify-between space-y-8">
            
            <div className="space-y-6">
              
              {/* Clinic Name & Full Address */}
              <div className="space-y-3">
                <div className="flex items-center gap-2.5 text-navy-900 font-bold text-lg font-display">
                  <div className="w-8 h-8 rounded-lg bg-sky-50 text-sky-700 flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <span>{CLINIC_CONFIG.brand.name}</span>
                </div>

                <div className="pl-10 text-sm text-slate-700 space-y-1">
                  <p className="font-semibold text-slate-900">{contact.address.line1}</p>
                  <p>{contact.address.line2}</p>
                  <p>{contact.address.area}, {contact.address.city}</p>
                  <p className="text-slate-500 font-medium">
                    {contact.address.state} – {contact.address.postalCode}, {contact.address.country}
                  </p>
                </div>
              </div>

              {/* Prominent Landmarks */}
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-900">
                  <Landmark className="w-4 h-4 text-sky-600" />
                  <span>Key Landmarks for Easy Navigation</span>
                </div>
                <ul className="text-xs text-slate-600 space-y-1 list-disc list-inside pl-1">
                  <li>Directly opposite Gurukul Play School</li>
                  <li>In close proximity to the Police Chowki, Awas Vikas Colony</li>
                </ul>
              </div>

              {/* Consultation Timings */}
              <div className="space-y-2.5">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-900">
                  <Clock className="w-4 h-4 text-sky-600" />
                  <span>Clinic Consultation Hours</span>
                </div>
                <div className="space-y-1.5 pl-6 text-xs sm:text-sm text-slate-700">
                  {contact.timings.map((time, index) => (
                    <div key={index} className="flex flex-col sm:flex-row sm:justify-between py-1 border-b border-slate-100 last:border-b-0">
                      <span className="font-medium text-slate-900">{time.days}</span>
                      <span className="text-slate-600 font-mono text-xs">{time.hours}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Direct Contact CTAs */}
            <div className="pt-6 border-t border-slate-200 grid grid-cols-1 sm:grid-cols-3 gap-3">
              <a
                href={contact.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 py-2.5 px-3 text-xs font-bold text-white bg-navy-900 hover:bg-navy-800 rounded-lg transition-colors shadow-2xs whitespace-nowrap"
              >
                <Navigation className="w-3.5 h-3.5 text-sky-400" />
                <span>Get Directions</span>
              </a>

              <a
                href={contact.phoneTel}
                className="inline-flex items-center justify-center gap-1.5 py-2.5 px-3 text-xs font-bold text-slate-800 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors whitespace-nowrap"
              >
                <Phone className="w-3.5 h-3.5 text-sky-600" />
                <span>Call Clinic</span>
              </a>

              <a
                href={contact.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 py-2.5 px-3 text-xs font-bold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 rounded-lg transition-colors whitespace-nowrap"
              >
                <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
                <span>WhatsApp</span>
              </a>
            </div>

          </div>

          {/* Right Column: Custom Stylized Map Presentation */}
          <div className="lg:col-span-6 bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs flex flex-col">
            
            {/* Map Header */}
            <div className="p-4 px-6 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
              <div>
                <span className="text-xs font-bold text-slate-800">Bulandshahr Location Pin</span>
                <span className="text-[11px] text-slate-500 ml-2">Awas Vikas Colony, Devpuri-II</span>
              </div>
              <a
                href={contact.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs font-semibold text-sky-700 hover:text-sky-800"
              >
                <span>Open Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Visual Interactive Map Wrapper */}
            <div className="relative flex-1 min-h-[340px] bg-slate-100 flex items-center justify-center p-6 text-center">
              
              {/* Clean Stylized Medical Map Graphic / Background Grid */}
              <div
                className="absolute inset-0 opacity-40 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:16px_16px]"
                aria-hidden="true"
              />

              {/* Stylized Pin Marker Card */}
              <div className="relative z-10 max-w-sm p-6 bg-white/95 backdrop-blur-md rounded-2xl border border-slate-200/90 shadow-md text-left space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-navy-900 text-sky-400 flex items-center justify-center shrink-0 shadow-xs">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-slate-900 font-display">
                      Wellcure Homeopathy Clinic
                    </h4>
                    <p className="text-xs text-slate-600 mt-0.5">
                      1st, 165, Opp. Gurukul Play School, Near Police Chowki, Devpuri-II, Bulandshahr
                    </p>
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="text-emerald-700 font-semibold flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    Open for Consultations
                  </span>
                  <span className="font-mono text-slate-500">PIN 203001</span>
                </div>

                <a
                  href={contact.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-bold text-white bg-navy-900 hover:bg-navy-800 rounded-xl transition-all shadow-xs"
                >
                  <Navigation className="w-4 h-4 text-sky-300" />
                  <span>Navigate with Google Maps</span>
                </a>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
