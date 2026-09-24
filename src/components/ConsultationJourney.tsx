import React from 'react';
import { ArrowRight, Calendar } from 'lucide-react';
import { CLINIC_CONFIG } from '../config/clinicData';

interface ConsultationJourneyProps {
  onBookClick: () => void;
}

export const ConsultationJourney: React.FC<ConsultationJourneyProps> = ({ onBookClick }) => {
  const { journey } = CLINIC_CONFIG;

  return (
    <section id="journey" className="py-20 lg:py-28 bg-slate-900 text-white relative overflow-hidden">
      {/* Background ambient lighting */}
      <div
        className="absolute top-0 right-1/3 w-80 h-80 bg-sky-500/10 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 text-xs font-semibold text-sky-400 tracking-wide mb-2.5">
            <span>Structured Patient Care</span>
            <span aria-hidden="true" className="text-slate-500">·</span>
            <span>Five Clear Steps</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-display">
            The Consultation Journey
          </h2>
          <p className="mt-3 text-base text-slate-300 leading-relaxed">
            From your very first inquiry to long-term monitoring, our consultation protocol is designed to provide clarity, comfort, and methodical therapeutic guidance.
          </p>
        </div>

        {/* Journey Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
          {journey.map((step, idx) => (
            <div
              key={idx}
              className="p-5 sm:p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-sky-400/50 hover:bg-white/8 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xl font-bold text-sky-400">
                    {step.number}
                  </span>
                  <span className="text-[10px] uppercase font-bold tracking-widest text-slate-400 bg-white/10 px-2 py-0.5 rounded">
                    {step.phase}
                  </span>
                </div>
                <h3 className="text-base font-bold text-white mb-2 font-display">
                  {step.title}
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {step.description}
                </p>
              </div>

              {idx < journey.length - 1 && (
                <div className="hidden md:flex items-center gap-1 text-slate-500 text-xs mt-6 pt-2">
                  <span className="text-[11px]">Proceeds to {journey[idx + 1].phase}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-sky-400/60" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Action Prompt */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-white/5 border border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <h4 className="text-lg font-bold text-white font-display">
              Ready to begin your consultation?
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 mt-1">
              Select your preferred date or consult with our desk via phone or WhatsApp.
            </p>
          </div>
          <button
            onClick={onBookClick}
            className="inline-flex items-center gap-2 px-6 py-3 text-xs font-bold text-slate-900 bg-white hover:bg-sky-50 rounded-xl transition-all shadow-sm cursor-pointer whitespace-nowrap"
          >
            <Calendar className="w-4 h-4 text-sky-600" />
            <span>Book Appointment Now</span>
          </button>
        </div>

      </div>
    </section>
  );
};
