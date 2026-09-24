import React from 'react';
import { X, Shield } from 'lucide-react';
import { CLINIC_CONFIG } from '../config/clinicData';

interface PolicyModalProps {
  type: 'privacy' | 'terms' | 'disclaimer' | null;
  onClose: () => void;
}

export const PolicyModal: React.FC<PolicyModalProps> = ({ type, onClose }) => {
  if (!type) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/60 backdrop-blur-xs animate-in fade-in duration-150">
      <div
        className="bg-white rounded-2xl max-w-2xl w-full max-h-[85vh] flex flex-col shadow-2xl border border-slate-200 overflow-hidden"
        role="dialog"
        aria-modal="true"
      >
        {/* Header */}
        <div className="p-5 border-b border-slate-200 flex items-center justify-between bg-slate-50">
          <div className="flex items-center gap-2 text-slate-900 font-bold text-base font-display">
            <Shield className="w-5 h-5 text-sky-600" />
            <span>
              {type === 'privacy' && 'Privacy Policy'}
              {type === 'terms' && 'Terms & Conditions'}
              {type === 'disclaimer' && 'Medical & Safety Disclaimer'}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 transition-colors cursor-pointer"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto space-y-4 text-xs sm:text-sm text-slate-600 leading-relaxed">
          {type === 'privacy' && (
            <>
              <p>
                <strong>Wellcure Homeopathy Clinic</strong> respects your personal privacy. This Privacy Statement describes our practices regarding the collection, use, and protection of information submitted through our website or direct clinic communications.
              </p>
              <h4 className="font-bold text-slate-900 pt-2">1. Information We Collect</h4>
              <p>
                When you schedule an appointment via our online form, phone call, or WhatsApp, we collect information including your name, contact phone number, email (if provided), requested clinical domain, and any symptom notes you voluntarily provide.
              </p>
              <h4 className="font-bold text-slate-900 pt-2">2. How Your Information Is Used</h4>
              <p>
                Your information is used strictly by Dr. Rahul Sharma and clinic coordination staff to manage appointment schedules, confirm consultation timings, and maintain confidential medical consultation records. We do not sell, rent, or distribute personal or health details to third parties for marketing purposes.
              </p>
              <h4 className="font-bold text-slate-900 pt-2">3. Communications & Security</h4>
              <p>
                Communications via WhatsApp or phone are subject to end-to-end messaging protocols. In-clinic consultation notes and physical records are stored securely in compliance with standard clinical record-keeping ethics.
              </p>
            </>
          )}

          {type === 'terms' && (
            <>
              <p>
                By using this website, you agree to the following Terms and Conditions for Wellcure Homeopathy Clinic (Dr. Rahul Sharma, Devpuri-II, Bulandshahr, UP 203001).
              </p>
              <h4 className="font-bold text-slate-900 pt-2">1. Educational Nature of Content</h4>
              <p>
                All informational materials, treatment summaries, and articles published on this site are intended for general educational knowledge and awareness. They do not constitute formal medical diagnosis, individualized treatment orders, or a physician-patient relationship until an in-person or direct consultation is conducted.
              </p>
              <h4 className="font-bold text-slate-900 pt-2">2. Appointment Scheduling</h4>
              <p>
                Online appointment requests represent booking requests and are subject to confirmation by the clinic based on doctor availability.
              </p>
              <h4 className="font-bold text-slate-900 pt-2">3. Medical Decisions</h4>
              <p>
                Patients must not alter or discontinue prescribed conventional medications without consulting their prescribing physician.
              </p>
            </>
          )}

          {type === 'disclaimer' && (
            <>
              <p>
                <strong>Medical Notice & Emergency Advisory:</strong>
              </p>
              <p>
                Homeopathy is an individualized therapeutic system based on constitutional evaluation. Outcomes differ for each individual based on disease chronicity, past medical history, and vital reactivity. Wellcure Homeopathy Clinic does not offer or represent guaranteed cures.
              </p>
              <h4 className="font-bold text-slate-900 pt-2">Emergency Disclaimer</h4>
              <p>
                Homeopathic consultation is not an emergency medical service. If you or your dependent experience acute severe symptoms—such as chest pain, severe breathing difficulty, acute severe abdominal/groin colic with vomiting, fever with altered consciousness, or acute urinary obstruction—please seek immediate attention at a hospital emergency room or contact local emergency ambulance services.
              </p>
            </>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-slate-200 bg-slate-50 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-slate-700 hover:text-slate-900 bg-white border border-slate-200 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
