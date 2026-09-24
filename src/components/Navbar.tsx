import React, { useState, useEffect } from 'react';
import { Phone, MessageSquare, Calendar, Menu, X, ArrowUpRight } from 'lucide-react';
import { CLINIC_CONFIG } from '../config/clinicData';

interface NavbarProps {
  onBookClick: () => void;
  onTreatmentClick: (id: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onBookClick, onTreatmentClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Treatments', href: '#treatments' },
    { label: 'About Doctor', href: '#about' },
    { label: 'Why Wellcure', href: '#why-wellcure' },
    { label: 'Consultation Journey', href: '#journey' },
    { label: 'Clinic & Directions', href: '#clinic' },
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-xs border-b border-slate-200/80 py-3.5'
            : 'bg-white/80 backdrop-blur-sm border-b border-slate-100 py-4.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Zone 1: Single text wordmark with refined brand symbol */}
          <a
            href="#"
            className="flex items-center gap-2.5 group focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-sky-600 rounded-sm"
            aria-label="Wellcure Homeopathy Clinic Home"
          >
            <div className="w-8 h-8 rounded-lg bg-navy-900 flex items-center justify-center text-white shadow-xs">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-4.5 h-4.5 text-sky-400"
              >
                <path d="M12 2C6.5 7.5 4 12 4 15a8 8 0 0 0 16 0c0-3-2.5-7.5-8-13Z" />
                <path d="M12 12v6" />
                <path d="M9 15h6" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight text-slate-900 font-display">
                WELLCURE
              </span>
              <span className="text-[10px] uppercase tracking-wider text-slate-500 font-medium -mt-1">
                Homeopathy Clinic
              </span>
            </div>
          </a>

          {/* Zone 2: Clean unboxed text navigation links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-600">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-navy-900 transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-sky-600 hover:after:w-full after:transition-all after:duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: Direct Actions & Primary CTA */}
          <div className="flex items-center gap-3">
            <a
              href={CLINIC_CONFIG.contact.phoneTel}
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-slate-700 hover:text-navy-900 transition-colors"
              title="Call Wellcure Clinic"
            >
              <Phone className="w-3.5 h-3.5 text-sky-600" />
              <span className="tabular-nums">{CLINIC_CONFIG.contact.phone}</span>
            </a>

            <a
              href={CLINIC_CONFIG.contact.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-emerald-700 bg-emerald-50 hover:bg-emerald-100 rounded-lg transition-colors border border-emerald-200/60"
              title="Chat on WhatsApp"
            >
              <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
              <span>WhatsApp</span>
            </a>

            <button
              onClick={onBookClick}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-navy-900 hover:bg-navy-800 rounded-lg shadow-xs hover:shadow-sm transition-all focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-sky-500 whitespace-nowrap cursor-pointer"
            >
              <Calendar className="w-3.5 h-3.5 text-sky-300" />
              <span>Book Appointment</span>
            </button>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-slate-200 px-5 pt-3 pb-6 space-y-4 animate-in fade-in slide-in-from-top-2 duration-150">
            <div className="space-y-1 py-2">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-3 py-2 text-base font-medium text-slate-700 hover:text-navy-900 hover:bg-slate-50 rounded-md transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="pt-3 border-t border-slate-100 flex flex-col gap-2.5">
              <a
                href={CLINIC_CONFIG.contact.phoneTel}
                className="flex items-center justify-center gap-2 w-full py-2.5 px-4 text-sm font-semibold text-slate-800 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors"
              >
                <Phone className="w-4 h-4 text-sky-600" />
                <span>Call {CLINIC_CONFIG.contact.phoneFormatted}</span>
              </a>

              <a
                href={CLINIC_CONFIG.contact.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-2.5 px-4 text-sm font-semibold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 rounded-lg transition-colors border border-emerald-200/80"
              >
                <MessageSquare className="w-4 h-4 text-emerald-600" />
                <span>Chat on WhatsApp</span>
              </a>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onBookClick();
                }}
                className="flex items-center justify-center gap-2 w-full py-2.5 px-4 text-sm font-semibold text-white bg-navy-900 hover:bg-navy-800 rounded-lg shadow-xs transition-colors cursor-pointer"
              >
                <Calendar className="w-4 h-4 text-sky-300" />
                <span>Book Appointment Online</span>
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
