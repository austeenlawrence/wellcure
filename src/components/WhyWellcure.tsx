import React from 'react';
import { CLINIC_CONFIG } from '../config/clinicData';

export const WhyWellcure: React.FC = () => {
  const { whyWellcure } = CLINIC_CONFIG;

  return (
    <section id="why-wellcure" className="py-20 lg:py-28 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 text-xs font-semibold text-sky-700 tracking-wide mb-2.5">
            <span>The Wellcure Standard</span>
            <span aria-hidden="true" className="text-slate-400">·</span>
            <span>Clinical Philosophy</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 font-display">
            Why Patients Choose Wellcure
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            Healthcare is deeply personal. Wellcure was built on the conviction that healing begins with attentive listening, thorough diagnostic clarity, and respectful patient communication.
          </p>
        </div>

        {/* Editorial Numbered Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {whyWellcure.map((item, index) => (
            <div
              key={index}
              className="group p-6 sm:p-7 rounded-2xl bg-slate-50/60 hover:bg-slate-50 border border-slate-200/80 hover:border-sky-300 transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <span className="font-mono text-xs font-bold text-sky-700 tracking-wider">
                  {item.step}
                </span>
                <h3 className="text-lg font-bold font-display text-slate-900 mt-3 mb-2 group-hover:text-navy-900 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
              <div className="w-8 h-0.5 bg-slate-200 group-hover:bg-sky-500 mt-6 transition-colors" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
