import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';
import { CLINIC_CONFIG } from '../config/clinicData';

export const FAQSection: React.FC = () => {
  const { faqs } = CLINIC_CONFIG;
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 lg:py-28 bg-slate-50 border-t border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-sky-700 tracking-wide mb-2.5">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Common Questions</span>
            <span aria-hidden="true" className="text-slate-400">·</span>
            <span>Clinical Clarity</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 font-display">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            Transparent information regarding appointments, constitutional case-taking, and clinical expectations at Wellcure Homeopathy Clinic.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="rounded-xl border border-slate-200/90 bg-white overflow-hidden transition-all duration-150"
              >
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  className="w-full px-5 py-4 text-left flex items-center justify-between gap-4 hover:bg-slate-50/70 transition-colors focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-sky-500 cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-semibold text-slate-900 pr-2">
                    {faq.question}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 transition-colors ${
                      isOpen ? 'bg-sky-100 text-sky-800' : 'bg-slate-100 text-slate-500'
                    }`}
                  >
                    {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 border-t border-slate-100 bg-slate-50/30 leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
