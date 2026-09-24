/**
 * Wellcure Homeopathy Clinic
 * Production-ready web application for Dr. Rahul Sharma
 * Devpuri-II, Bulandshahr, Uttar Pradesh
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CoreTreatments } from './components/CoreTreatments';
import { AboutDoctor } from './components/AboutDoctor';
import { WhyWellcure } from './components/WhyWellcure';
import { ConsultationJourney } from './components/ConsultationJourney';
import { AppointmentSection } from './components/AppointmentSection';
import { ClinicLocation } from './components/ClinicLocation';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FAQSection } from './components/FAQSection';
import { MedicalDisclaimer } from './components/MedicalDisclaimer';
import { Footer } from './components/Footer';
import { MobileActionBar } from './components/MobileActionBar';
import { PolicyModal } from './components/PolicyModal';

export default function App() {
  const [selectedTreatmentForBooking, setSelectedTreatmentForBooking] = useState<string>('Pediatric Care');
  const [activePolicyModal, setActivePolicyModal] = useState<'privacy' | 'terms' | 'disclaimer' | null>(null);

  const scrollToAppointment = (treatmentName?: string) => {
    if (treatmentName) {
      setSelectedTreatmentForBooking(treatmentName);
    }
    const elem = document.getElementById('booking-form') || document.getElementById('appointment');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
      // Focus patient name input after short delay for accessibility
      setTimeout(() => {
        const input = document.getElementById('patientName');
        if (input) input.focus();
      }, 500);
    }
  };

  const scrollToTreatments = () => {
    const elem = document.getElementById('treatments');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-sky-100 selection:text-sky-900">
      {/* Top Bar Navigation */}
      <Navbar
        onBookClick={() => scrollToAppointment()}
        onTreatmentClick={() => scrollToTreatments()}
      />

      {/* Main Content Sections */}
      <main id="main-content">
        {/* Hero Section */}
        <Hero
          onBookClick={() => scrollToAppointment()}
          onExploreTreatments={scrollToTreatments}
        />

        {/* 4 Core Clinical Disciplines */}
        <CoreTreatments
          onBookTreatment={(treatment) => scrollToAppointment(treatment)}
        />

        {/* Doctor Editorial Profile */}
        <AboutDoctor
          onBookClick={() => scrollToAppointment()}
        />

        {/* The Wellcure Practice Philosophy */}
        <WhyWellcure />

        {/* Five-Step Patient Journey */}
        <ConsultationJourney
          onBookClick={() => scrollToAppointment()}
        />

        {/* Central Appointment Booking Engine */}
        <AppointmentSection
          preselectedTreatment={selectedTreatmentForBooking}
        />

        {/* Clinic Location & Directions */}
        <ClinicLocation />

        {/* Verified Patient Reviews Architecture */}
        <TestimonialsSection />

        {/* Comprehensive FAQ Accordion */}
        <FAQSection />

        {/* Ethical Medical Disclaimer */}
        <MedicalDisclaimer />
      </main>

      {/* Structured Footer */}
      <Footer
        onBookClick={() => scrollToAppointment()}
        onSelectTreatment={(treatment) => scrollToAppointment(treatment)}
        onOpenPolicy={(policy) => setActivePolicyModal(policy)}
      />

      {/* Mobile Sticky Action Bar */}
      <MobileActionBar
        onBookClick={() => scrollToAppointment()}
      />

      {/* Privacy / Terms / Disclaimer Modal */}
      <PolicyModal
        type={activePolicyModal}
        onClose={() => setActivePolicyModal(null)}
      />
    </div>
  );
}
