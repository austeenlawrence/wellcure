import React from 'react';
import { Calendar, Award, UserCheck, Shield, HeartHandshake, Phone } from 'lucide-react';
import { CLINIC_CONFIG } from '../config/clinicData';

interface AboutDoctorProps {
  onBookClick: () => void;
}

export const AboutDoctor: React.FC<AboutDoctorProps> = ({ onBookClick }) => {
  const { doctor, contact } = CLINIC_CONFIG;

  return (
    <section id="about" className="py-20 lg:py-28 bg-slate-50 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Container with Split Asymmetric Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Doctor Portrait & Trust Elements */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative">
              {/* Doctor Portrait Frame with Authentic Treatment */}
              <div className="relative rounded-3xl overflow-hidden bg-slate-900 border border-slate-200/90 shadow-lg">
                <img
                  src="/images/dr_rahul_sharma.png"
                  alt="Dr. Rahul Sharma — Consultant Homeopathic Physician"
                  className="w-full h-[460px] sm:h-[500px] object-cover object-top"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                
                {/* Subtle Gradient & Identification */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/85 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <span className="inline-block px-2.5 py-0.5 rounded-md bg-sky-500/20 backdrop-blur-md border border-sky-400/30 text-[11px] uppercase tracking-wider text-sky-200 font-semibold mb-1.5">
                    Lead Homeopathic Physician
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-bold font-display tracking-tight text-white">{doctor.name}</h3>
                  <p className="text-xs sm:text-sm text-slate-200 mt-1">{doctor.title}</p>
                </div>
              </div>

              {/* Floating Quote Card */}
              <div className="mt-4 p-4 rounded-xl bg-white border border-slate-200 shadow-xs">
                <p className="text-xs sm:text-sm text-slate-700 italic font-serif leading-relaxed">
                  "Healing is not about merely suppressing what hurts today. True constitutional care seeks to understand why the body fell into disharmony and empowers it to rebuild balance naturally."
                </p>
                <p className="text-xs font-semibold text-slate-900 mt-2 text-right">
                  — {doctor.name}
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Biography & Consultation Philosophy */}
          <div className="lg:col-span-7 space-y-7">
            
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-xs font-semibold text-sky-800 tracking-wide">
                <span>Physician Profile</span>
                <span aria-hidden="true" className="text-slate-400">·</span>
                <span>Wellcure Homeopathy Clinic</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 font-display">
                Meet Dr. Rahul Sharma
              </h2>
              <p className="text-base text-sky-900 font-medium">
                {doctor.experienceNote}
              </p>
            </div>

            {/* Doctor Bio Paragraphs */}
            <div className="space-y-4 text-sm sm:text-base text-slate-600 leading-relaxed">
              {doctor.bio.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            {/* Core Practice Values */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-2">
              <div className="p-3.5 rounded-xl bg-white border border-slate-200">
                <HeartHandshake className="w-5 h-5 text-sky-600 mb-2" />
                <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                  Patient-First
                </h4>
                <p className="text-xs text-slate-600 mt-1">
                  Unhurried sessions where personal concerns and symptoms are respected.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-white border border-slate-200">
                <Shield className="w-5 h-5 text-sky-600 mb-2" />
                <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                  Medical Integrity
                </h4>
                <p className="text-xs text-slate-600 mt-1">
                  Responsible guidance without fabricated guarantees or false promises.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-white border border-slate-200">
                <UserCheck className="w-5 h-5 text-sky-600 mb-2" />
                <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                  Constitutional Focus
                </h4>
                <p className="text-xs text-slate-600 mt-1">
                  Therapy tailored to the patient’s individual holistic biological profile.
                </p>
              </div>
            </div>

            {/* Action Group */}
            <div className="flex flex-wrap items-center gap-4 pt-3 border-t border-slate-200">
              <button
                onClick={onBookClick}
                className="inline-flex items-center gap-2 px-6 py-3 text-xs font-bold text-white bg-navy-900 hover:bg-navy-800 rounded-xl shadow-xs transition-colors cursor-pointer"
              >
                <Calendar className="w-4 h-4 text-sky-300" />
                <span>Book Consultation with Dr. Sharma</span>
              </button>

              <a
                href={contact.phoneTel}
                className="inline-flex items-center gap-2 px-5 py-3 text-xs font-semibold text-slate-700 bg-white hover:bg-slate-100 border border-slate-200 rounded-xl transition-colors"
              >
                <Phone className="w-4 h-4 text-sky-600" />
                <span>Call Clinic Desk</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
