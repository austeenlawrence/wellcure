import React from 'react';
import { Phone, MessageSquare, Calendar } from 'lucide-react';
import { CLINIC_CONFIG } from '../config/clinicData';

interface MobileActionBarProps {
  onBookClick: () => void;
}

export const MobileActionBar: React.FC<MobileActionBarProps> = ({ onBookClick }) => {
  const { contact } = CLINIC_CONFIG;

  return (
    <aside
      aria-label="Quick contact actions"
      className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200/90 px-3 py-2 shadow-lg"
    >
      <div className="max-w-md mx-auto grid grid-cols-3 gap-2">
        {/* Call Button */}
        <a
          href={contact.phoneTel}
          className="flex flex-col items-center justify-center py-1.5 px-2 rounded-lg bg-slate-100 active:bg-slate-200 text-slate-800 transition-colors min-h-[44px]"
          aria-label={`Call Wellcure Clinic at ${contact.phone}`}
        >
          <Phone className="w-4 h-4 text-sky-700 mb-0.5" />
          <span className="text-[10px] font-bold uppercase tracking-wider">Call</span>
        </a>

        {/* WhatsApp Button */}
        <a
          href={contact.whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-1.5 px-2 rounded-lg bg-emerald-50 active:bg-emerald-100 text-emerald-800 border border-emerald-200 transition-colors min-h-[44px]"
          aria-label="Chat with Wellcure Clinic on WhatsApp"
        >
          <MessageSquare className="w-4 h-4 text-emerald-600 mb-0.5" />
          <span className="text-[10px] font-bold uppercase tracking-wider">WhatsApp</span>
        </a>

        {/* Book Appointment CTA */}
        <button
          onClick={onBookClick}
          className="flex flex-col items-center justify-center py-1.5 px-2 rounded-lg bg-navy-900 active:bg-navy-800 text-white transition-colors shadow-2xs min-h-[44px] cursor-pointer"
          aria-label="Book an appointment online"
        >
          <Calendar className="w-4 h-4 text-sky-300 mb-0.5" />
          <span className="text-[10px] font-bold uppercase tracking-wider">Book</span>
        </button>
      </div>
    </aside>
  );
};
