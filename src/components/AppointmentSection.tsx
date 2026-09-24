import React, { useState, useEffect } from 'react';
import { Phone, MessageSquare, Calendar, Clock, CheckCircle2, AlertCircle, Send, ArrowRight } from 'lucide-react';
import { CLINIC_CONFIG } from '../config/clinicData';

interface AppointmentSectionProps {
  preselectedTreatment?: string;
}

export const AppointmentSection: React.FC<AppointmentSectionProps> = ({
  preselectedTreatment,
}) => {
  const { contact } = CLINIC_CONFIG;

  const [formData, setFormData] = useState({
    patientName: '',
    phoneNumber: '',
    email: '',
    treatment: preselectedTreatment || 'Pediatric Care',
    preferredDate: '',
    preferredTime: 'Morning (10:00 AM – 2:00 PM)',
    message: '',
    honeypot: '', // anti-spam
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submissionData, setSubmissionData] = useState<typeof formData | null>(null);

  useEffect(() => {
    if (preselectedTreatment) {
      setFormData((prev) => ({ ...prev, treatment: preselectedTreatment }));
    }
  }, [preselectedTreatment]);

  // Set min date to tomorrow
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const minDateString = tomorrow.toISOString().split('T')[0];

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.patientName.trim()) {
      newErrors.patientName = 'Please enter the patient’s full name';
    } else if (formData.patientName.trim().length < 2) {
      newErrors.patientName = 'Name must be at least 2 characters';
    }

    const cleanPhone = formData.phoneNumber.replace(/\D/g, '');
    if (!cleanPhone) {
      newErrors.phoneNumber = 'Phone number is required for appointment confirmation';
    } else if (cleanPhone.length < 10) {
      newErrors.phoneNumber = 'Please enter a valid 10-digit mobile number';
    }

    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address or leave blank';
    }

    if (!formData.preferredDate) {
      newErrors.preferredDate = 'Please select a preferred consultation date';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Spam honeypot check
    if (formData.honeypot) {
      return;
    }

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

    // Simulate clean submission transition (client-side verified)
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setSubmissionData({ ...formData });
    }, 700);
  };

  const handleReset = () => {
    setIsSuccess(false);
    setSubmissionData(null);
    setFormData({
      patientName: '',
      phoneNumber: '',
      email: '',
      treatment: 'Pediatric Care',
      preferredDate: '',
      preferredTime: 'Morning (10:00 AM – 2:00 PM)',
      message: '',
      honeypot: '',
    });
    setErrors({});
  };

  const getWhatsAppMessageUrl = () => {
    if (!submissionData) return contact.whatsappLink;
    const text = encodeURIComponent(
      `*New Appointment Request - Wellcure Clinic*\n\n` +
      `*Patient Name:* ${submissionData.patientName}\n` +
      `*Phone:* ${submissionData.phoneNumber}\n` +
      `*Treatment:* ${submissionData.treatment}\n` +
      `*Preferred Date:* ${submissionData.preferredDate}\n` +
      `*Preferred Slot:* ${submissionData.preferredTime}\n` +
      (submissionData.message ? `*Notes/Symptoms:* ${submissionData.message}\n` : '') +
      `\nSent via Wellcure Online Booking Portal`
    );
    return `https://wa.me/918077416982?text=${text}`;
  };

  return (
    <section id="appointment" className="py-20 lg:py-28 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Doctor Introduction & Reassurance */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-14">
          <div className="lg:col-span-8">
            <div className="flex items-center gap-2 text-xs font-semibold text-sky-700 tracking-wide mb-2.5">
              <span>Direct Access</span>
              <span aria-hidden="true" className="text-slate-400">·</span>
              <span>Three Convenient Ways to Book</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 font-display">
              Book an Appointment
            </h2>
            <p className="mt-3 text-base text-slate-600 leading-relaxed max-w-2xl">
              Reserve your consultation with Dr. Rahul Sharma. You may call our clinic desk directly, send a message over WhatsApp, or complete the online scheduling form below.
            </p>
          </div>

          {/* Doctor Trust Card in Appointment Section */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-sky-50/70 border border-sky-200/80">
              <img
                src="/images/dr_rahul_sharma.png"
                alt="Dr. Rahul Sharma — Wellcure Homeopathy Clinic"
                className="w-14 h-14 rounded-xl object-cover object-top border border-white shadow-xs shrink-0"
                referrerPolicy="no-referrer"
              />
              <div className="min-w-0">
                <p className="text-[11px] font-bold uppercase tracking-wider text-sky-800">
                  Direct In-Clinic Care
                </p>
                <h4 className="text-sm font-bold text-slate-900 truncate">
                  Dr. Rahul Sharma
                </h4>
                <p className="text-xs text-slate-600 truncate">
                  Consultant Homeopathic Physician
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Quick Channels Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          {/* Method 1: Phone */}
          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-sky-100 text-sky-700 flex items-center justify-center mb-3">
                <Phone className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900">
                1. Call Clinic Desk
              </h3>
              <p className="text-xs text-slate-600 mt-1">
                Direct phone consultation booking with our clinic receptionist.
              </p>
            </div>
            <a
              href={contact.phoneTel}
              className="mt-4 inline-flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-bold text-slate-900 bg-white hover:bg-slate-100 border border-slate-200 rounded-lg transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-sky-600" />
              <span className="tabular-nums">{contact.phoneFormatted}</span>
            </a>
          </div>

          {/* Method 2: WhatsApp */}
          <div className="p-5 rounded-2xl bg-emerald-50/50 border border-emerald-200/70 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center mb-3">
                <MessageSquare className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900">
                2. WhatsApp Booking
              </h3>
              <p className="text-xs text-slate-600 mt-1">
                Fast confirmation and slot availability via instant messaging.
              </p>
            </div>
            <a
              href={contact.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-bold text-white bg-emerald-700 hover:bg-emerald-800 rounded-lg transition-colors shadow-2xs"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Chat on {contact.phone}</span>
            </a>
          </div>

          {/* Method 3: Online Form */}
          <div className="p-5 rounded-2xl bg-sky-50/50 border border-sky-200/70 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-sky-100 text-sky-700 flex items-center justify-center mb-3">
                <Calendar className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900">
                3. Online Form
              </h3>
              <p className="text-xs text-slate-600 mt-1">
                Fill your details below; our clinic will review and confirm your slot.
              </p>
            </div>
            <a
              href="#booking-form"
              className="mt-4 inline-flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-bold text-sky-900 bg-sky-100 hover:bg-sky-200 rounded-lg transition-colors"
            >
              <span>Scroll to Form</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Online Booking Form Container */}
        <div id="booking-form" className="max-w-3xl mx-auto bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-10 shadow-xs">
          
          {isSuccess && submissionData ? (
            /* Success State */
            <div className="text-center py-6 space-y-5 animate-in fade-in zoom-in-95 duration-200">
              <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-2xl font-bold font-display text-slate-900">
                  Appointment Request Received
                </h3>
                <p className="text-sm text-slate-600 mt-2 max-w-md mx-auto">
                  Thank you, <strong className="text-slate-900">{submissionData.patientName}</strong>. Your request for <strong className="text-slate-900">{submissionData.treatment}</strong> on <strong className="text-slate-900">{submissionData.preferredDate}</strong> ({submissionData.preferredTime}) has been recorded.
                </p>
              </div>

              {/* Instant WhatsApp Sync Button */}
              <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-xl max-w-md mx-auto text-left space-y-2">
                <p className="text-xs font-bold text-emerald-950 flex items-center gap-1.5">
                  <MessageSquare className="w-4 h-4 text-emerald-600" />
                  <span>Speed up your confirmation:</span>
                </p>
                <p className="text-xs text-emerald-900">
                  Click below to immediately send these appointment details to Dr. Rahul Sharma's clinic desk on WhatsApp.
                </p>
                <a
                  href={getWhatsAppMessageUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 rounded-lg transition-colors shadow-xs"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Send Details to WhatsApp Now</span>
                </a>
              </div>

              <div className="pt-4">
                <button
                  onClick={handleReset}
                  className="text-xs font-semibold text-slate-500 hover:text-slate-800 underline cursor-pointer"
                >
                  Submit another appointment request
                </button>
              </div>
            </div>
          ) : (
            /* Booking Form */
            <form onSubmit={handleSubmit} noValidate className="space-y-6">
              
              {/* Spam Honeypot Field */}
              <div className="hidden" aria-hidden="true">
                <input
                  type="text"
                  name="honeypot"
                  value={formData.honeypot}
                  onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
                  tabIndex={-1}
                  autoComplete="off"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                
                {/* Patient Name */}
                <div>
                  <label
                    htmlFor="patientName"
                    className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5"
                  >
                    Patient Full Name <span className="text-rose-500">*</span>
                  </label>
                  <input
                    id="patientName"
                    type="text"
                    required
                    value={formData.patientName}
                    onChange={(e) => {
                      setFormData({ ...formData, patientName: e.target.value });
                      if (errors.patientName) setErrors({ ...errors, patientName: '' });
                    }}
                    placeholder="e.g. Ramesh Kumar"
                    className={`w-full px-3.5 py-2.5 text-sm bg-white rounded-lg border focus:ring-2 focus:ring-sky-500 focus:outline-hidden transition-colors ${
                      errors.patientName ? 'border-rose-400 bg-rose-50/20' : 'border-slate-300'
                    }`}
                  />
                  {errors.patientName && (
                    <p className="text-[11px] text-rose-600 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.patientName}</span>
                    </p>
                  )}
                </div>

                {/* Phone Number */}
                <div>
                  <label
                    htmlFor="phoneNumber"
                    className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5"
                  >
                    Phone / Mobile Number <span className="text-rose-500">*</span>
                  </label>
                  <input
                    id="phoneNumber"
                    type="tel"
                    required
                    value={formData.phoneNumber}
                    onChange={(e) => {
                      setFormData({ ...formData, phoneNumber: e.target.value });
                      if (errors.phoneNumber) setErrors({ ...errors, phoneNumber: '' });
                    }}
                    placeholder="e.g. 9876543210"
                    className={`w-full px-3.5 py-2.5 text-sm bg-white rounded-lg border focus:ring-2 focus:ring-sky-500 focus:outline-hidden transition-colors ${
                      errors.phoneNumber ? 'border-rose-400 bg-rose-50/20' : 'border-slate-300'
                    }`}
                  />
                  {errors.phoneNumber && (
                    <p className="text-[11px] text-rose-600 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.phoneNumber}</span>
                    </p>
                  )}
                </div>

              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                
                {/* Email (Optional) */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5"
                  >
                    Email Address <span className="text-slate-400 font-normal">(Optional)</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => {
                      setFormData({ ...formData, email: e.target.value });
                      if (errors.email) setErrors({ ...errors, email: '' });
                    }}
                    placeholder="e.g. name@example.com"
                    className={`w-full px-3.5 py-2.5 text-sm bg-white rounded-lg border focus:ring-2 focus:ring-sky-500 focus:outline-hidden transition-colors ${
                      errors.email ? 'border-rose-400 bg-rose-50/20' : 'border-slate-300'
                    }`}
                  />
                  {errors.email && (
                    <p className="text-[11px] text-rose-600 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.email}</span>
                    </p>
                  )}
                </div>

                {/* Treatment Dropdown */}
                <div>
                  <label
                    htmlFor="treatment"
                    className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5"
                  >
                    Treatment / Primary Concern <span className="text-rose-500">*</span>
                  </label>
                  <select
                    id="treatment"
                    value={formData.treatment}
                    onChange={(e) => setFormData({ ...formData, treatment: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-sm bg-white rounded-lg border border-slate-300 focus:ring-2 focus:ring-sky-500 focus:outline-hidden transition-colors"
                  >
                    <option value="Pediatric Care">Pediatric Care</option>
                    <option value="Kidney Stone Treatment">Kidney Stone Treatment</option>
                    <option value="Allergy Treatment">Allergy Treatment</option>
                    <option value="Acne & Pimple Treatment">Acne & Pimple Treatment</option>
                  </select>
                </div>

              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                
                {/* Preferred Date */}
                <div>
                  <label
                    htmlFor="preferredDate"
                    className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5"
                  >
                    Preferred Date <span className="text-rose-500">*</span>
                  </label>
                  <input
                    id="preferredDate"
                    type="date"
                    required
                    min={minDateString}
                    value={formData.preferredDate}
                    onChange={(e) => {
                      setFormData({ ...formData, preferredDate: e.target.value });
                      if (errors.preferredDate) setErrors({ ...errors, preferredDate: '' });
                    }}
                    className={`w-full px-3.5 py-2.5 text-sm bg-white rounded-lg border focus:ring-2 focus:ring-sky-500 focus:outline-hidden transition-colors ${
                      errors.preferredDate ? 'border-rose-400 bg-rose-50/20' : 'border-slate-300'
                    }`}
                  />
                  {errors.preferredDate && (
                    <p className="text-[11px] text-rose-600 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.preferredDate}</span>
                    </p>
                  )}
                </div>

                {/* Preferred Time Slot */}
                <div>
                  <label
                    htmlFor="preferredTime"
                    className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5"
                  >
                    Preferred Time Slot <span className="text-rose-500">*</span>
                  </label>
                  <select
                    id="preferredTime"
                    value={formData.preferredTime}
                    onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-sm bg-white rounded-lg border border-slate-300 focus:ring-2 focus:ring-sky-500 focus:outline-hidden transition-colors"
                  >
                    <option value="Morning (10:00 AM – 2:00 PM)">Morning: 10:00 AM – 2:00 PM</option>
                    <option value="Evening (5:00 PM – 8:30 PM)">Evening: 5:00 PM – 8:30 PM</option>
                    <option value="Sunday Morning (10:00 AM – 1:30 PM)">Sunday Morning (By Prior Booking)</option>
                  </select>
                </div>

              </div>

              {/* Message / Symptoms Note */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5"
                >
                  Brief Symptoms or Previous Diagnostic Reports <span className="text-slate-400 font-normal">(Optional)</span>
                </label>
                <textarea
                  id="message"
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="e.g. Duration of complaint, existing medications, or ultrasound findings..."
                  className="w-full px-3.5 py-2.5 text-sm bg-white rounded-lg border border-slate-300 focus:ring-2 focus:ring-sky-500 focus:outline-hidden transition-colors resize-none"
                />
              </div>

              {/* Notice & Submit Action */}
              <div className="pt-2 border-t border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <p className="text-[11px] text-slate-500">
                  Your contact information is strictly confidential and used solely for consultation coordination.
                </p>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-3 px-7 text-xs font-bold text-white bg-navy-900 hover:bg-navy-800 disabled:opacity-50 rounded-xl transition-all shadow-xs cursor-pointer whitespace-nowrap"
                >
                  {isSubmitting ? (
                    <span>Verifying details...</span>
                  ) : (
                    <>
                      <Send className="w-3.5 h-3.5 text-sky-300" />
                      <span>Request Appointment</span>
                    </>
                  )}
                </button>
              </div>

            </form>
          )}

        </div>

      </div>
    </section>
  );
};
