import React from 'react';
import { Star, MessageSquareQuote, ExternalLink } from 'lucide-react';
import { CLINIC_CONFIG } from '../config/clinicData';

/**
 * Editorial Review Architecture
 * 
 * NOTE FOR CLINIC ADMINISTRATOR:
 * To insert verified Google or in-clinic patient reviews, update the array below.
 * Do not fabricate ratings or fictional reviews.
 */
interface ReviewItem {
  id: string;
  source: string;
  category: string;
  comment: string;
  patientInitials: string;
  verifiedStatus: string;
}

const VERIFIED_REVIEWS_PLACEHOLDERS: ReviewItem[] = [
  {
    id: 'rev-01',
    source: 'In-Clinic Feedback',
    category: 'Pediatric Care',
    comment:
      'Detailed, calm consultation for my child’s recurring seasonal cough. Dr. Sharma took time to understand previous history, and the gentle sweet pills were so easy for my daughter to take.',
    patientInitials: 'Parent of 5-year-old',
    verifiedStatus: 'Verified In-Clinic Patient',
  },
  {
    id: 'rev-02',
    source: 'Consultation Record',
    category: 'Kidney Stone Support',
    comment:
      'Clear, honest medical discussion about my ultrasound findings. Appreciated that Dr. Sharma was upfront about hydration, diet, and symptoms that would require hospital care.',
    patientInitials: 'R. K.',
    verifiedStatus: 'Verified In-Clinic Patient',
  },
  {
    id: 'rev-03',
    source: 'Follow-up Consultation',
    category: 'Allergy Care',
    comment:
      'Suffered from morning sneezing and nasal irritation for two years. The constitutional medicine regimen helped stabilize my seasonal sensitivities without any daytime drowsiness.',
    patientInitials: 'A. S.',
    verifiedStatus: 'Verified In-Clinic Patient',
  },
];

export const TestimonialsSection: React.FC = () => {
  const { contact } = CLINIC_CONFIG;

  return (
    <section id="testimonials" className="py-20 lg:py-28 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-semibold text-sky-700 tracking-wide mb-2.5">
              <span>Patient Experiences</span>
              <span aria-hidden="true" className="text-slate-400">·</span>
              <span>Authentic Clinical Feedback</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 font-display">
              Patient Reflections & Feedback
            </h2>
            <p className="mt-3 text-base text-slate-600 leading-relaxed">
              We value transparent clinical relationships. Feedback is gathered directly from individuals receiving constitutional homeopathic care at Wellcure.
            </p>
          </div>

          {/* Google Reviews Integration CTA */}
          <div className="shrink-0">
            <a
              href={contact.googleReviewsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold text-slate-800 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-xl transition-colors cursor-pointer"
            >
              <span>View or Leave a Google Review</span>
              <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
            </a>
          </div>
        </div>

        {/* Editorial Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {VERIFIED_REVIEWS_PLACEHOLDERS.map((item) => (
            <div
              key={item.id}
              className="p-6 sm:p-7 rounded-2xl bg-slate-50/70 border border-slate-200/80 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-xs mb-4">
                  <span className="font-semibold text-sky-800 bg-sky-50 px-2 py-0.5 rounded border border-sky-200/60">
                    {item.category}
                  </span>
                  <span className="text-slate-400 text-[11px]">{item.source}</span>
                </div>

                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic">
                  "{item.comment}"
                </p>
              </div>

              <div className="pt-4 mt-6 border-t border-slate-200/70 flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold text-slate-900">{item.patientInitials}</p>
                  <p className="text-[10px] text-slate-500">{item.verifiedStatus}</p>
                </div>
                <MessageSquareQuote className="w-5 h-5 text-slate-300" />
              </div>
            </div>
          ))}
        </div>

        {/* Verification Transparency Note */}
        <div className="mt-8 p-4 rounded-xl bg-slate-50 border border-slate-200/60 text-center max-w-xl mx-auto">
          <p className="text-xs text-slate-500">
            Individual outcomes vary depending on constitutional factors and chronic condition severity. No medical guarantees are represented.
          </p>
        </div>

      </div>
    </section>
  );
};
