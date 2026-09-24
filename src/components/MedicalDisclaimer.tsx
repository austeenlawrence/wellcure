import React from 'react';
import { ShieldAlert } from 'lucide-react';
import { CLINIC_CONFIG } from '../config/clinicData';

export const MedicalDisclaimer: React.FC = () => {
  const { disclaimer } = CLINIC_CONFIG;

  return (
    <section className="py-12 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-6 sm:p-7 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-start gap-4">
          <div className="w-10 h-10 rounded-xl bg-slate-200 text-slate-700 flex items-center justify-center shrink-0">
            <ShieldAlert className="w-5 h-5 text-slate-700" />
          </div>
          <div className="space-y-1.5">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-800">
              {disclaimer.title}
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              {disclaimer.text}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
