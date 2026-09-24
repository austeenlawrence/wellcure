import React, { useState } from 'react';
import {
  Baby,
  Activity,
  Wind,
  Sparkles,
  AlertTriangle,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  ArrowRight,
  Calendar,
  HelpCircle,
} from 'lucide-react';
import { CLINIC_CONFIG, TreatmentDetail } from '../config/clinicData';

interface CoreTreatmentsProps {
  onBookTreatment: (treatmentName: string) => void;
  selectedTreatmentId?: string;
}

export const CoreTreatments: React.FC<CoreTreatmentsProps> = ({
  onBookTreatment,
  selectedTreatmentId,
}) => {
  const [activeTab, setActiveTab] = useState<string>(selectedTreatmentId || 'pediatric');
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const treatments = CLINIC_CONFIG.treatments;
  const currentTreatment = treatments.find((t) => t.id === activeTab) || treatments[0];

  const getTreatmentIcon = (id: string) => {
    switch (id) {
      case 'pediatric':
        return <Baby className="w-5 h-5 text-sky-600" />;
      case 'kidney-stone':
        return <Activity className="w-5 h-5 text-indigo-600" />;
      case 'allergy':
        return <Wind className="w-5 h-5 text-teal-600" />;
      case 'acne':
        return <Sparkles className="w-5 h-5 text-rose-500" />;
      default:
        return <Activity className="w-5 h-5 text-sky-600" />;
    }
  };

  return (
    <section id="treatments" className="py-20 lg:py-28 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 text-xs font-semibold text-sky-700 tracking-wide mb-2.5">
            <span>Specialized Clinical Practice</span>
            <span aria-hidden="true" className="text-slate-400">·</span>
            <span>Comprehensive Care</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 font-display">
            Four Core Treatment Areas
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            Rather than offering an exhaustive catalogue of superficial services, Dr. Rahul Sharma focuses his clinical practice specifically on four primary domains where constitutional homeopathy delivers meaningful, patient-tailored support.
          </p>
        </div>

        {/* Interactive Treatment Switcher (Accessible Tabs) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-10">
          {treatments.map((treatment) => {
            const isActive = treatment.id === activeTab;
            return (
              <button
                key={treatment.id}
                onClick={() => {
                  setActiveTab(treatment.id);
                  setExpandedFaq(null);
                }}
                className={`flex flex-col items-start p-4 sm:p-5 rounded-xl border text-left transition-all cursor-pointer ${
                  isActive
                    ? 'bg-navy-900 text-white border-navy-900 shadow-md ring-2 ring-sky-500/30'
                    : 'bg-slate-50 hover:bg-slate-100/80 text-slate-800 border-slate-200 hover:border-slate-300'
                }`}
                aria-selected={isActive}
                role="tab"
              >
                <div
                  className={`w-9 h-9 rounded-lg flex items-center justify-center mb-3 transition-colors ${
                    isActive ? 'bg-white/10 text-white' : 'bg-white shadow-2xs'
                  }`}
                >
                  {getTreatmentIcon(treatment.id)}
                </div>
                <span className="text-sm sm:text-base font-bold tracking-tight">
                  {treatment.name}
                </span>
                <span
                  className={`text-xs mt-1 line-clamp-1 ${
                    isActive ? 'text-slate-300' : 'text-slate-500'
                  }`}
                >
                  {treatment.tagline}
                </span>
              </button>
            );
          })}
        </div>

        {/* Detailed Treatment Showcase Area */}
        <div className="bg-slate-50/70 border border-slate-200 rounded-2xl p-6 sm:p-8 lg:p-10 shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* Left Column: Visual & Emergency Warning */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Treatment Image with Fallback */}
              <div className="relative rounded-xl overflow-hidden border border-slate-200 bg-white aspect-4/3 shadow-xs">
                <img
                  src={currentTreatment.image}
                  alt={`${currentTreatment.name} at Wellcure Homeopathy Clinic`}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-4 right-4 text-white">
                  <p className="text-xs font-semibold uppercase tracking-wider text-sky-300">
                    Clinical Discipline
                  </p>
                  <p className="text-lg font-bold font-display">{currentTreatment.name}</p>
                </div>
              </div>

              {/* Critical Warning Signs Box (Especially for Kidney Stones) */}
              {currentTreatment.warningSigns && currentTreatment.warningSigns.length > 0 && (
                <div className="p-4 sm:p-5 rounded-xl bg-amber-50/90 border border-amber-200/80 text-amber-950 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-xs uppercase tracking-wide text-amber-900">
                    <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0" />
                    <span>When to Seek Immediate Emergency Care:</span>
                  </div>
                  <ul className="text-xs text-amber-900 space-y-1.5 list-disc list-inside">
                    {currentTreatment.warningSigns.map((warning, index) => (
                      <li key={index} className="leading-snug">
                        {warning}
                      </li>
                    ))}
                  </ul>
                  <p className="text-[11px] text-amber-800 italic pt-1 border-t border-amber-200/60">
                    Homeopathy provides conservative and supportive care; acute complications require prompt hospital evaluation.
                  </p>
                </div>
              )}

              {/* Condition Safety Disclaimer */}
              {currentTreatment.safetyDisclaimer && (
                <div className="p-3.5 bg-slate-100 rounded-lg text-slate-600 text-xs leading-relaxed border border-slate-200">
                  <span className="font-semibold text-slate-800">Notice: </span>
                  {currentTreatment.safetyDisclaimer}
                </div>
              )}

              {/* Action Box */}
              <div className="p-5 bg-white rounded-xl border border-slate-200 flex flex-col gap-3">
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide">
                  Schedule Consultation
                </p>
                <p className="text-sm font-bold text-slate-900">
                  Discuss your symptoms directly with Dr. Rahul Sharma
                </p>
                <button
                  onClick={() => onBookTreatment(currentTreatment.name)}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 text-xs font-bold text-white bg-navy-900 hover:bg-navy-800 rounded-lg transition-colors cursor-pointer"
                >
                  <Calendar className="w-4 h-4 text-sky-300" />
                  <span>Book Consultation for {currentTreatment.name}</span>
                </button>
              </div>

            </div>

            {/* Right Column: Detailed Clinical Information */}
            <div className="lg:col-span-7 space-y-8">
              
              {/* Overview */}
              <div>
                <h3 className="text-2xl font-bold font-display text-slate-900 tracking-tight">
                  {currentTreatment.name}
                </h3>
                <p className="text-sm font-semibold text-sky-700 mt-1">
                  {currentTreatment.tagline}
                </p>
                <p className="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed">
                  {currentTreatment.overview}
                </p>
              </div>

              {/* Common Symptoms / Concerns */}
              <div className="space-y-3">
                <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900">
                  Common Concerns Addressed
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {currentTreatment.symptoms.map((symptom, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2.5 p-3 rounded-lg bg-white border border-slate-200/80 text-xs text-slate-700 font-medium"
                    >
                      <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                      <span>{symptom}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Consultation & Treatment Approach */}
              <div className="space-y-3">
                <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900">
                  Dr. Sharma's Consultation Approach
                </h4>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-600">
                  {currentTreatment.consultationApproach.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-sky-600 shrink-0 mt-2" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* What Patients Can Expect */}
              <div className="p-4 sm:p-5 bg-white rounded-xl border border-slate-200 space-y-2.5">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">
                  What You Can Expect
                </h4>
                <ul className="space-y-1.5 text-xs text-slate-600">
                  {currentTreatment.whatToExpect.map((expect, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-sky-700 font-bold">✓</span>
                      <span>{expect}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Treatment FAQs */}
              <div className="space-y-3 pt-2">
                <h4 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                  <HelpCircle className="w-4 h-4 text-sky-600" />
                  <span>Frequently Asked Questions regarding {currentTreatment.name}</span>
                </h4>
                <div className="space-y-2">
                  {currentTreatment.faqs.map((faq, idx) => {
                    const isOpen = expandedFaq === idx;
                    return (
                      <div
                        key={idx}
                        className="border border-slate-200 rounded-lg bg-white overflow-hidden"
                      >
                        <button
                          onClick={() => setExpandedFaq(isOpen ? null : idx)}
                          className="w-full text-left px-4 py-3 text-xs sm:text-sm font-semibold text-slate-800 flex items-center justify-between gap-3 hover:bg-slate-50 transition-colors cursor-pointer"
                        >
                          <span>{faq.question}</span>
                          {isOpen ? (
                            <ChevronUp className="w-4 h-4 text-slate-400 shrink-0" />
                          ) : (
                            <ChevronDown className="w-4 h-4 text-slate-400 shrink-0" />
                          )}
                        </button>
                        {isOpen && (
                          <div className="px-4 pb-3.5 pt-1 text-xs text-slate-600 border-t border-slate-100 bg-slate-50/50 leading-relaxed">
                            {faq.answer}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
