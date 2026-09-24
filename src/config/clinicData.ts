/**
 * Wellcure Homeopathy Clinic - Central Clinic Data & Configuration
 * 
 * Known Real Clinic Data:
 * - Clinic: Wellcure Homeopathy Clinic
 * - Doctor: Dr. Rahul Sharma
 * - Address: 1st, 165, Opposite Gurukul Play School, Near Police Chowki, Awas Vikas Colony, Devpuri-II, Bulandshahr, Uttar Pradesh 203001, India
 * - Phone / WhatsApp: 8077416982
 * 
 * Centralized configuration allowing clinic administration to update credentials,
 * registration details, timings, and verified reviews without altering layout components.
 */

export interface TreatmentDetail {
  id: 'pediatric' | 'kidney-stone' | 'allergy' | 'acne';
  name: string;
  tagline: string;
  image: string;
  overview: string;
  symptoms: string[];
  warningSigns?: string[];
  consultationApproach: string[];
  whatToExpect: string[];
  faqs: { question: string; answer: string }[];
  safetyDisclaimer?: string;
}

export const CLINIC_CONFIG = {
  brand: {
    name: 'Wellcure Homeopathy Clinic',
    shortName: 'Wellcure',
    tagline: 'Personalized Homeopathic Care for Chronic & Acute Well-Being',
    subTagline: 'Individualized, patient-focused consultations in Bulandshahr.',
  },
  doctor: {
    name: 'Dr. Rahul Sharma',
    title: 'Consultant Homeopathic Physician',
    photo: '/images/dr_rahul_sharma.png',
    imageAlt: 'Dr. Rahul Sharma — Wellcure Homeopathy Clinic',
    // Configurable placeholders for verified registration and degrees:
    credentialsDisplay: 'Consultant Homeopathic Physician',
    registrationStatus: 'Verified Homeopathic Practitioner', // Site owner can insert State Medical Council Registration No. here
    experienceNote: 'Focused on comprehensive constitutional analysis and personalized healing',
    bio: [
      'Dr. Rahul Sharma is dedicated to providing compassionate, patient-first homeopathic care at Wellcure Homeopathy Clinic in Bulandshahr. His clinical philosophy centers on the understanding that no two patients experience illness in the exact same manner.',
      'Rather than relying on temporary symptom suppression, Dr. Sharma conducts in-depth constitutional consultations to examine physical symptoms, emotional well-being, lifestyle factors, and medical history. This enables the formulation of tailored homeopathic regimens aligned with individual vitality.',
      'His practice is strictly concentrated around four core clinical domains: Pediatric Care, Kidney Stone Support, Allergy Management, and Acne & Skin Health. Every consultation is conducted with transparency, patient dignity, and rigorous medical ethics.',
    ],
  },
  contact: {
    phone: '8077416982',
    phoneFormatted: '+91 80774 16982',
    phoneTel: 'tel:8077416982',
    whatsapp: '8077416982',
    whatsappLink: 'https://wa.me/918077416982?text=Hello%20Wellcure%20Clinic,%20I%20would%20like%20to%20inquire%20about%20a%20consultation%20with%20Dr.%20Rahul%20Sharma.',
    address: {
      line1: '1st, 165, Opposite Gurukul Play School',
      line2: 'Near Police Chowki, Awas Vikas Colony',
      area: 'Devpuri-II',
      city: 'Bulandshahr',
      state: 'Uttar Pradesh',
      postalCode: '203001',
      country: 'India',
      full: '1st, 165, Opposite Gurukul Play School, Near Police Chowki, Awas Vikas Colony, Devpuri-II, Bulandshahr, Uttar Pradesh 203001, India',
    },
    timings: [
      { days: 'Monday – Saturday', hours: '10:00 AM – 2:00 PM & 5:00 PM – 8:30 PM' },
      { days: 'Sunday', hours: '10:00 AM – 1:30 PM (By Appointment)' },
    ],
    googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Wellcure+Homeopathy+Clinic+Awas+Vikas+Colony+Bulandshahr+203001',
    googleReviewsUrl: 'https://search.google.com/local/writereview?placeid=ChIJWellcureHomeopathyBulandshahr',
  },
  treatments: [
    {
      id: 'pediatric',
      name: 'Pediatric Care',
      tagline: 'Gentle, natural healing designed for children’s delicate developing systems.',
      image: '/images/pediatric_care_1790236195910.jpg',
      overview:
        'Pediatric homeopathic care at Wellcure emphasizes gentle, non-invasive remedies that are palatable, safe, and tailored to a child’s specific constitution. We understand how concerning childhood recurrent illnesses can be for parents, and our goal is to strengthen natural defense mechanisms gently over time.',
      symptoms: [
        'Recurrent colds, coughs, and seasonal viral susceptibility',
        'Childhood respiratory congestion and mild allergic coughing',
        'Digestive sensitivity, colic, and appetite irregularities',
        'Teething discomfort and mild sleep restlessness',
        'Skin irritation, dry patches, and childhood sensitivities',
      ],
      consultationApproach: [
        'Detailed conversation with parents covering prenatal, birth, and milestone history',
        'Gentle observation of child temperament, dietary cravings, and thermal reactions',
        'Selection of sweet, dissolvable globules easily accepted without distress',
        'Guidance on balanced pediatric nutrition and home care support',
      ],
      whatToExpect: [
        'A calm, unhurried consultation environment where children feel secure and at ease',
        'Medications that are easy to administer without bitter taste or struggling',
        'Follow-up tracking to evaluate immune resilience over changing seasons',
      ],
      faqs: [
        {
          question: 'Are homeopathic remedies safe for infants and toddlers?',
          answer:
            'When prescribed by a qualified homeopathic physician after thorough assessment, homeopathic medicines are prepared in highly diluted potencies that are gentle on young digestive and metabolic systems.',
        },
        {
          question: 'Can homeopathy help with recurrent childhood infections?',
          answer:
            'Constitutional homeopathic care focuses on optimizing the child’s natural vital resistance, aiming to reduce the frequency and intensity of recurring seasonal episodes.',
        },
      ],
      safetyDisclaimer:
        'Pediatric Disclaimer: Homeopathic care is not a substitute for emergency pediatric medical care. Severe childhood symptoms—including high fevers with lethargy, breathing distress, severe dehydration, or sudden behavioral changes—require immediate emergency medical evaluation.',
    },
    {
      id: 'kidney-stone',
      name: 'Kidney Stone Treatment',
      tagline: 'Constitutional renal support and metabolic balance for recurring calculi.',
      image: '/images/kidney_stone_care_1790236207861.jpg',
      overview:
        'Kidney stones (renal calculi) cause significant discomfort and frequently recur if underlying metabolic or constitutional imbalances are unaddressed. Wellcure Homeopathy focuses on symptomatic pain management support, urinary tract comfort, and long-term metabolic balance to help reduce recurrent stone formation.',
      symptoms: [
        'Dull, aching or spasmodic loin pain radiating toward the groin',
        'Burning sensation during urination or increased urinary urgency',
        'Cloudy urine or minor urinary sediment',
        'Nausea and digestive discomfort associated with flank irritation',
        'History of recurrent calcium oxalate or uric acid stone formation',
      ],
      warningSigns: [
        'Unbearable, agonizing flank pain not relieved by position changes',
        'Visible blood in urine (hematuria)',
        'Fever, chills, or persistent shaking (indicating possible kidney infection)',
        'Complete inability to pass urine (urinary tract obstruction)',
        'Severe, persistent vomiting causing dehydration',
      ],
      consultationApproach: [
        'Comprehensive review of diagnostic ultrasound (USG KUB) and urine routine reports',
        'Evaluation of fluid intake, dietary habits, mineral balance, and family history',
        'Prescription of constitutional remedies aimed at urinary ease and metabolic equilibrium',
        'Hydration scheduling and dietary modifications tailored to stone composition',
      ],
      whatToExpect: [
        'Clear clinical assessment of whether your stone dimensions and position are suitable for conservative care',
        'Gradual relief from urinary burning and muscular spasms',
        'Periodic re-evaluation with medical imaging when clinically recommended',
      ],
      faqs: [
        {
          question: 'Can homeopathy dissolve every kidney stone?',
          answer:
            'No responsible physician guarantees stone dissolution. While smaller stones often pass safely with proper hydration, lifestyle modification, and supportive homeopathic care, the suitability depends strictly on stone size, location, and the presence or absence of obstruction.',
        },
        {
          question: 'What reports should I bring to the consultation?',
          answer:
            'Please bring recent Ultrasound KUB (Kidney, Ureter, Bladder) reports, Urine Routine & Microscopy, and Serum Creatinine reports if available.',
        },
      ],
      safetyDisclaimer:
        'Critical Medical Warning: Homeopathic treatment cannot replace emergency surgical or hospital intervention. If you experience urinary tract blockage, fever with chills, severe intractable pain, or visible blood in the urine, seek immediate emergency medical care.',
    },
    {
      id: 'allergy',
      name: 'Allergy Treatment',
      tagline: 'Comprehensive constitutional immune rebalancing for respiratory and skin sensitivities.',
      image: '/images/allergy_immune_care_1790236219920.jpg',
      overview:
        'Allergies represent an overreactive immune response to benign environmental triggers like pollen, dust mites, seasonal shifts, or specific foods. Wellcure’s approach addresses the root constitutional sensitivity rather than merely offering transient anti-histaminic sedation.',
      symptoms: [
        'Frequent sneezing, watery eyes, and itchy nasal passages (Allergic Rhinitis)',
        'Persistent morning nasal congestion and post-nasal drip',
        'Skin hives, red itchy welts, or contact sensitivity',
        'Sensitivity to sudden weather shifts, air conditioning, or dust exposure',
        'Fatigue and heaviness associated with chronic allergic inflammation',
      ],
      consultationApproach: [
        'Detailed identification of specific triggers, seasonal patterns, and environmental exposures',
        'Constitutional assessment of thermal sensitivity, immune reactions, and past illnesses',
        'Targeted homeopathic prescriptions intended to modulate hyperactive immune sensitivity',
        'Practical lifestyle and allergen avoidance advice for daily living',
      ],
      whatToExpect: [
        'Non-drowsy remedies that do not interfere with daily work, school, or driving',
        'Gradual reduction in the intensity and frequency of acute allergic flare-ups',
        'Improved day-to-day comfort and nasal breathing across seasonal transitions',
      ],
      faqs: [
        {
          question: 'Do homeopathic allergy remedies cause drowsiness or habit formation?',
          answer:
            'No. Homeopathic remedies do not contain sedative chemical compounds and do not produce dependency or daytime fatigue.',
        },
        {
          question: 'How long does allergy management typically take?',
          answer:
            'Chronic allergies require a course of constitutional care spanning several months, particularly across seasonal transitions, to observe meaningful stability in immune reactivity.',
        },
      ],
      safetyDisclaimer:
        'Medical Notice: Severe acute allergic emergencies—such as anaphylaxis, throat swelling, difficulty swallowing, or sudden shortness of breath—are life-threatening emergencies requiring immediate emergency hospital care (such as epinephrine / emergency services).',
    },
    {
      id: 'acne',
      name: 'Acne & Pimple Treatment',
      tagline: 'Dermatological balance through internal gut-hormone-skin constitutional care.',
      image: '/images/acne_skin_care_1790236233756.jpg',
      overview:
        'Acne is rarely just a surface concern; it is frequently linked to hormonal fluctuations, digestive health, stress levels, and sebaceous gland imbalances. Wellcure provides internal constitutional care designed to support systemic balance and foster healthy skin renewal from within.',
      symptoms: [
        'Recurrent inflammatory papules, pustules, and whiteheads',
        'Deep, painful cystic acne along jawline and cheeks',
        'Hormonal breakouts aggravated around menstrual cycles',
        'Excessive sebum production with enlarged pores',
        'Post-inflammatory pigmentation and slow skin recovery',
      ],
      consultationApproach: [
        'Comprehensive assessment of skin type, oil balance, and breakout triggers',
        'Investigation into digestive health, dietary habits, stress, and hormonal patterns',
        'Individualized homeopathic medicines to encourage balanced sebum regulation and skin defense',
        'Guidance on gentle non-comedogenic skincare and hydration habits',
      ],
      whatToExpect: [
        'Gentle internal healing that avoids harsh drying or peeling topical steroids',
        'Support for skin clarity and gradual reduction in new breakout frequency',
        'Clear, realistic guidance on skin recovery timelines without exaggerated overnight promises',
      ],
      faqs: [
        {
          question: 'Why choose internal homeopathic care for acne rather than just creams?',
          answer:
            'Topical ointments often address only surface bacteria or excess oil temporarily. Homeopathy focuses on internal systemic factors—such as gut health, hormonal balance, and metabolic waste clearance—to promote sustainable skin clarity.',
        },
        {
          question: 'Will acne get worse before it gets better?',
          answer:
            'Under personalized care, most patients experience steady improvement. On occasion, minor initial shifts in skin turnover occur as the skin barrier normalizes, which Dr. Sharma monitors and manages carefully.',
        },
      ],
      safetyDisclaimer:
        'Notice: Results depend on individual skin health, hormonal factors, and compliance with dietary and lifestyle advice. Wellcure does not promise overnight or guaranteed cures.',
    },
  ] as TreatmentDetail[],
  whyWellcure: [
    {
      step: '01',
      title: 'Individualized Constitutional Analysis',
      desc: 'No generic treatment packages. Every remedy is selected strictly according to your distinctive physical, thermal, and constitutional characteristics.',
    },
    {
      step: '02',
      title: 'Unhurried, Patient-Centered Consultations',
      desc: 'We prioritize listening. Dr. Rahul Sharma takes the necessary time to understand your medical timeline, symptom nuances, and lifestyle context.',
    },
    {
      step: '03',
      title: 'Non-Invasive, Gentle Therapeutics',
      desc: 'Homeopathic micro-doses are non-toxic, non-drowsy, and gentle on vital organs, making them exceptionally suitable for all ages.',
    },
    {
      step: '04',
      title: 'Ethical & Medically Responsible Guidance',
      desc: 'We maintain absolute honesty regarding what homeopathy can achieve. If a condition requires diagnostic imaging, lab evaluation, or urgent hospital care, we guide you transparently.',
    },
    {
      step: '05',
      title: 'Clean & Confidential Clinic Environment',
      desc: 'A modern, professional healthcare sanctuary in Devpuri-II, Bulandshahr, where patient privacy and comfort are paramount.',
    },
    {
      step: '06',
      title: 'Seamless Continuity of Care',
      desc: 'Direct phone and WhatsApp follow-up coordination ensures that your treatment plan is methodically monitored and adjusted as you heal.',
    },
  ],
  journey: [
    {
      number: '01',
      phase: 'Book',
      title: 'Convenient Scheduling',
      description: 'Reserve your consultation time via direct phone call, WhatsApp messaging, or our online request form.',
    },
    {
      number: '02',
      phase: 'Consult',
      title: 'In-Depth Evaluation',
      description: 'Meet Dr. Rahul Sharma for an unhurried, comprehensive assessment of your symptoms and diagnostic history.',
    },
    {
      number: '03',
      phase: 'Understand',
      title: 'Root-Cause Discovery',
      description: 'We explore your thermal tendencies, immune reactivity, digestive vitality, and constitutional blueprint.',
    },
    {
      number: '04',
      phase: 'Care Plan',
      title: 'Personalized Regimen',
      description: 'Receive your custom homeopathic medicine along with actionable dietary, hydration, and lifestyle guidance.',
    },
    {
      number: '05',
      phase: 'Follow-up',
      title: 'Monitored Recovery',
      description: 'Regular check-ins evaluate your biological response and allow refined dosage adjustments for sustainable wellness.',
    },
  ],
  faqs: [
    {
      question: 'How do I book an appointment with Dr. Rahul Sharma?',
      answer:
        'You can book through three convenient methods: call the clinic directly at 8077416982, send a WhatsApp message to 8077416982, or submit the online appointment form on this website. Our team will promptly confirm your preferred date and slot.',
    },
    {
      question: 'What happens during my first consultation?',
      answer:
        'Your initial consultation is an in-depth conversation. Dr. Sharma will review your primary complaints, medical background, family history, sleep patterns, dietary cravings, and thermal reactions. This comprehensive evaluation is essential to determine your constitutional remedy.',
    },
    {
      question: 'What medical documents should I bring?',
      answer:
        'Please bring any recent diagnostic reports (such as Ultrasound, blood tests, X-rays, or allergy panels), prescriptions of ongoing conventional medications, and a brief chronological list of previous treatments.',
    },
    {
      question: 'Can I continue my regular allopathic medicines while taking homeopathic remedies?',
      answer:
        'Yes. In most chronic conditions (like hypertension, diabetes, or thyroid management), ongoing conventional medicines must never be abruptly stopped. Homeopathic remedies can safely be taken alongside with a 30–45 minute gap, as advised during consultation.',
    },
    {
      question: 'How do follow-up consultations work?',
      answer:
        'Follow-up visits occur typically every 2 to 4 weeks, depending on whether the condition is acute or chronic. We assess symptomatic changes, energy levels, and overall response to adjust medicine potency or repetition.',
    },
    {
      question: 'What is the approach for pediatric consultations?',
      answer:
        'Children are evaluated gently with parental input regarding birth milestones, diet, and seasonal vulnerabilities. Remedies are sweet, dissolvable globules that children take without fear or bitter taste.',
    },
    {
      question: 'When is kidney stone pain an emergency?',
      answer:
        'Severe intractable pain, high fever with chills, persistent vomiting, complete inability to urinate, or visible blood in urine require immediate emergency hospital care. Homeopathy supports conservative and metabolic management when the patient is medically stable.',
    },
    {
      question: 'How quickly can I expect improvement with allergy treatment?',
      answer:
        'While acute nasal discomfort often calms within days, long-term modulation of chronic allergic sensitivities requires constitutional care over several months to observe lasting immune stability.',
    },
    {
      question: 'What are the clinic timings in Bulandshahr?',
      answer:
        'The clinic is open Monday through Saturday from 10:00 AM to 2:00 PM and 5:00 PM to 8:30 PM. On Sundays, morning consultations are available from 10:00 AM to 1:30 PM by prior appointment.',
    },
    {
      question: 'How can I reach the clinic in Awas Vikas Colony, Devpuri-II?',
      answer:
        'Wellcure Homeopathy Clinic is conveniently located at 1st, 165, Opposite Gurukul Play School, Near Police Chowki, Awas Vikas Colony, Devpuri-II, Bulandshahr (PIN 203001). Direct GPS navigation is accessible through the "Get Directions" button on this site.',
    },
  ],
  disclaimer: {
    title: 'Professional Medical Disclaimer',
    text:
      'The educational content provided on this website is intended for general health awareness and informational purposes only. It is not a substitute for direct professional medical diagnosis, individualized clinical advice, or emergency medical treatment. Wellcure Homeopathy Clinic does not make unverified claims or guarantee specific treatment outcomes, as individual physiological responses vary. In cases of acute medical emergencies, severe trauma, sudden chest pain, breathing difficulties, or acute urinary obstruction, please contact local emergency medical services or visit the nearest hospital emergency department immediately.',
  },
};
