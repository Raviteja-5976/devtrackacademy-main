'use client';

import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, FileText, Shield, CreditCard, ExternalLink } from 'lucide-react';

interface LegalModalProps {
  isOpen: boolean;
  type: 'terms' | 'privacy' | 'refund' | null;
  onClose: () => void;
}

export default function LegalModal({ isOpen, type, onClose }: LegalModalProps) {
  // Prevent background scrolling when modal is open, and listen to Escape key
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    window.addEventListener('keydown', handleKeyDown);
    // Preserve any existing overflow styling, but lock scroll
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen, onClose]);

  if (!type) return null;

  // Contents of the policies
  const renderContent = () => {
    switch (type) {
      case 'terms':
        return (
          <div className="space-y-6 font-sans text-deep-navy/90 text-sm md:text-base leading-relaxed">
            <div className="bg-primary/10 border-2 border-deep-navy p-4 rounded-2xl mb-6">
              <p className="font-space font-bold text-xs uppercase tracking-wider text-primary mb-1">Jurisdiction & Target</p>
              <p className="font-sans font-semibold text-xs text-deep-navy/85">
                These terms are governed by the laws of India, under the exclusive jurisdiction of the courts in Hyderabad, Telangana, India. Designed for DevTrack Academy edtech platform.
              </p>
            </div>

            <p>
              Welcome to <strong>DevTrack Academy</strong> (&quot;we,&quot; &quot;our,&quot; &quot;us,&quot; or the &quot;Platform&quot;). These Terms of Service (&quot;Terms&quot;) govern your access to and use of our website, workshops, courses, educational content, and related services (collectively, the &quot;Services&quot;).
            </p>
            <p>
              By registering an account, purchasing a workshop, or accessing our Services, you agree to be bound by these Terms and our Privacy Policy. If you do not agree to these Terms, please do not use our Platform.
            </p>

            <h3 className="font-space font-black text-lg md:text-xl text-deep-navy mt-6 mb-2 border-b-2 border-deep-navy/10 pb-1 flex items-center gap-2">
              <span className="bg-primary text-white w-6 h-6 rounded-lg flex items-center justify-center text-xs">1</span>
              Governing Law & Jurisdiction
            </h3>
            <p>
              These Terms and any dispute or claim arising out of or in connection with them shall be governed by and construed in accordance with the laws of <strong>India</strong>.
            </p>
            <p>
              Any legal action or proceeding arising under these Terms shall be subject to the exclusive jurisdiction of the courts located in <strong>Hyderabad, Telangana, India</strong>.
            </p>

            <h3 className="font-space font-black text-lg md:text-xl text-deep-navy mt-6 mb-2 border-b-2 border-deep-navy/10 pb-1 flex items-center gap-2">
              <span className="bg-primary text-white w-6 h-6 rounded-lg flex items-center justify-center text-xs">2</span>
              Eligibility & Account Security
            </h3>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Age Requirement:</strong> You must be at least 18 years of age to register for an account or purchase Services. If you are under 18, you may only use our Services under the supervision of a parent or legal guardian.</li>
              <li><strong>Account Accuracy:</strong> You agree to provide accurate, current, and complete information during registration and keep your account details updated.</li>
              <li><strong>Credentials Confidentiality:</strong> Sharing accounts, passwords, or credentials with third parties is strictly prohibited and constitutes a material breach of these Terms.</li>
              <li><strong>Unauthorized Access:</strong> You must notify us immediately at <span className="font-semibold underline">support@devtrackacademy.com</span> of any unauthorized use of your account.</li>
            </ul>

            <h3 className="font-space font-black text-lg md:text-xl text-deep-navy mt-6 mb-2 border-b-2 border-deep-navy/10 pb-1 flex items-center gap-2">
              <span className="bg-primary text-white w-6 h-6 rounded-lg flex items-center justify-center text-xs">3</span>
              Intellectual Property Rights
            </h3>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Proprietary Content:</strong> All materials available on the Platform, including but not limited to course videos, syllabus, coding exercises, projects, graphics, designs, code templates, slides, and branding elements (the &quot;Content&quot;), are the intellectual property of DevTrack Academy.</li>
              <li><strong>Limited License:</strong> We grant you a personal, non-exclusive, non-transferable, revocable license to access and view the Content solely for your own personal, educational, and non-commercial learning.</li>
              <li><strong>Prohibited Activities:</strong> You agree not to copy, reproduce, distribute, modify, create derivative works from, publicly display, sell, or exploit any portion of the Content without our prior written consent.</li>
            </ul>

            <h3 className="font-space font-black text-lg md:text-xl text-deep-navy mt-6 mb-2 border-b-2 border-deep-navy/10 pb-1 flex items-center gap-2">
              <span className="bg-primary text-white w-6 h-6 rounded-lg flex items-center justify-center text-xs">4</span>
              Payments, Taxes (GST), & Refunds
            </h3>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Pricing:</strong> Course and workshop pricing will be displayed on the Platform. We reserve the right to modify prices at any time.</li>
              <li><strong>Goods and Services Tax (GST):</strong> All payments are subject to applicable taxes, including Indian Goods and Services Tax (GST) at the statutory rate (currently 18%), which will be calculated and added to the billing summary before payment.</li>
              <li><strong>Payment Processing:</strong> Payments are processed through secure third-party payment gateways. We do not store your complete payment credentials on our servers.</li>
              <li><strong>Refund Policy:</strong> Purchases of digital goods, live workshops, and online courses are subject to the Refund Policy. Unless specified otherwise, fees for digital content are non-refundable once materials are accessed.</li>
            </ul>

            <h3 className="font-space font-black text-lg md:text-xl text-deep-navy mt-6 mb-2 border-b-2 border-deep-navy/10 pb-1 flex items-center gap-2">
              <span className="bg-primary text-white w-6 h-6 rounded-lg flex items-center justify-center text-xs">5</span>
              User Code of Conduct & Academic Integrity
            </h3>
            <p>
              As an educational platform built on practical, hands-on learning, we expect the highest standards of academic integrity. You agree NOT to:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Copy, plagiarize, or submit other students&apos; code, projects, or work as your own.</li>
              <li>Share completed assignment code or assessment solutions publicly (e.g., on public repositories or public forums) unless explicitly permitted for portfolio building.</li>
              <li>Use profane, offensive, discriminatory, or harassing language in comments, community forums, or Discord spaces.</li>
              <li>Use automated scripts, bots, or scrapers to extract materials or data from the Platform.</li>
            </ul>

            <h3 className="font-space font-black text-lg md:text-xl text-deep-navy mt-6 mb-2 border-b-2 border-deep-navy/10 pb-1 flex items-center gap-2">
              <span className="bg-primary text-white w-6 h-6 rounded-lg flex items-center justify-center text-xs">6</span>
              Limitation of Liability
            </h3>
            <p>
              The Platform and its Content are provided on an &quot;as is&quot; and &quot;as available&quot; basis. We do not guarantee specific employment outcomes, job offers, or salary levels as a result of using the Services.
            </p>
            <p>
              In no event shall DevTrack Academy, its directors, employees, or partners be liable for any indirect, incidental, special, consequential, or punitive damages. Our aggregate liability shall not exceed the total amount paid by you in the six (6) months preceding the event.
            </p>

            <h3 className="font-space font-black text-lg md:text-xl text-deep-navy mt-6 mb-2 border-b-2 border-deep-navy/10 pb-1 flex items-center gap-2">
              <span className="bg-primary text-white w-6 h-6 rounded-lg flex items-center justify-center text-xs">7</span>
              Dispute Resolution (Arbitration)
            </h3>
            <p>
              In the event of any dispute, the parties shall first attempt to resolve the issue amicably. If amicable resolution is not reached within thirty (30) days, the dispute shall be referred to and finally resolved by arbitration in Hyderabad, Telangana, India, in accordance with the provisions of the <strong>Arbitration and Conciliation Act, 1996</strong> (as amended).
            </p>
            <p>
              The tribunal shall consist of a sole arbitrator appointed mutually by both parties. The language of the arbitration shall be English.
            </p>

            <h3 className="font-space font-black text-lg md:text-xl text-deep-navy mt-6 mb-2 border-b-2 border-deep-navy/10 pb-1 flex items-center gap-2">
              <span className="bg-primary text-white w-6 h-6 rounded-lg flex items-center justify-center text-xs">8</span>
              Grievance Redressal Officer
            </h3>
            <p>
              In accordance with the Information Technology Act, 2000 and the Consumer Protection (E-Commerce) Rules, 2020, if you have any questions, feedback, or grievances regarding the Services, please contact our designated Grievance Officer:
            </p>
            <div className="bg-white border-2 border-deep-navy p-4 rounded-xl space-y-1 shadow-[2px_2px_0px_0px_#1B1F3B]">
              <p><strong>Name:</strong> Grievance Redressal Officer, DevTrack Academy</p>
              <p><strong>Email:</strong> <span className="underline font-semibold">grievance@devtrackacademy.com</span></p>
              <p><strong>Address:</strong> DevTrack Academy, Hyderabad, Telangana, India</p>
              <p><strong>Contact hours:</strong> Monday to Friday, 10:00 AM to 6:00 PM IST</p>
            </div>
          </div>
        );
      case 'privacy':
        return (
          <div className="space-y-6 font-sans text-deep-navy/90 text-sm md:text-base leading-relaxed">
            <div className="bg-mint/15 border-2 border-deep-navy p-4 rounded-2xl mb-6">
              <p className="font-space font-bold text-xs uppercase tracking-wider text-emerald-600 mb-1">DPDP ACT 2023 COMPLIANT</p>
              <p className="font-sans font-semibold text-xs text-deep-navy/85">
                This policy outlines the processing of personal data for specified, lawful purposes. By using the platform, you give consent to the processing under these terms.
              </p>
            </div>

            <p>
              <strong>DevTrack Academy</strong> (&quot;we,&quot; &quot;our,&quot; &quot;us,&quot; or the &quot;Platform&quot;) is committed to protecting your privacy and personal data. This Privacy Policy explains how we collect, use, process, store, and share your personal data when you visit our website, enroll in our courses, workshops, or interact with our Services.
            </p>
            <p>
              This Privacy Policy is designed to comply with the <strong>Digital Personal Data Protection Act, 2023 (DPDP Act)</strong>, the <strong>Information Technology Act, 2000</strong>, and other applicable laws of <strong>India</strong>.
            </p>

            <h3 className="font-space font-black text-lg md:text-xl text-deep-navy mt-6 mb-2 border-b-2 border-deep-navy/10 pb-1 flex items-center gap-2">
              <span className="bg-mint text-deep-navy w-6 h-6 rounded-lg flex items-center justify-center text-xs font-bold">1</span>
              Governing Law & Jurisdiction
            </h3>
            <p>
              This Privacy Policy and all matters relating to your data privacy shall be governed by the laws of <strong>India</strong>. Any disputes arising out of this policy shall be subject to the exclusive jurisdiction of the courts in <strong>Hyderabad, Telangana, India</strong>.
            </p>

            <h3 className="font-space font-black text-lg md:text-xl text-deep-navy mt-6 mb-2 border-b-2 border-deep-navy/10 pb-1 flex items-center gap-2">
              <span className="bg-mint text-deep-navy w-6 h-6 rounded-lg flex items-center justify-center text-xs font-bold">2</span>
              Personal Data We Collect
            </h3>
            <p>
              We collect your personal data only for specified, lawful purposes and with your consent. The categories of personal data we collect include:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Identity & Registration Data:</strong> Full name, email address, username, profile picture, and link to GitHub/LinkedIn profiles.</li>
              <li><strong>Contact & Billing Data:</strong> Phone number, billing address, country, and GST number (if applicable for businesses).</li>
              <li><strong>Payment Information:</strong> Credit/debit card numbers, UPI IDs, or net banking information are processed directly by our RBI-licensed secure payment gateways. We do NOT store raw payment details.</li>
              <li><strong>Technical & Usage Data:</strong> IP address, browser type, device information, operating system, page views, session logs, and cookies.</li>
              <li><strong>Educational Data:</strong> Course progress, code submissions, quiz results, workshop attendance, and feedback submitted.</li>
            </ul>

            <h3 className="font-space font-black text-lg md:text-xl text-deep-navy mt-6 mb-2 border-b-2 border-deep-navy/10 pb-1 flex items-center gap-2">
              <span className="bg-mint text-deep-navy w-6 h-6 rounded-lg flex items-center justify-center text-xs font-bold">3</span>
              Purpose of Processing Personal Data
            </h3>
            <p>
              We process your personal data for the following specific and limited purposes:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Service Delivery:</strong> To register your account, manage course enrollments, provide access to learning materials, track progress, and grade assignments.</li>
              <li><strong>Billing & Administration:</strong> To issue GST-compliant invoices and manage secure payments/refunds.</li>
              <li><strong>Communication:</strong> To send transaction confirmations, important course updates, community announcements, and promotional emails (which you can opt out of at any time).</li>
              <li><strong>Platform Improvement:</strong> To analyze usage trends, diagnose technical issues, and optimize site performance.</li>
            </ul>

            <h3 className="font-space font-black text-lg md:text-xl text-deep-navy mt-6 mb-2 border-b-2 border-deep-navy/10 pb-1 flex items-center gap-2">
              <span className="bg-mint text-deep-navy w-6 h-6 rounded-lg flex items-center justify-center text-xs font-bold">4</span>
              Consent and Your Rights (Data Principal Rights)
            </h3>
            <p>
              Under the DPDP Act 2023, you are the <strong>Data Principal</strong> and possess the following rights:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Right to Information:</strong> You have the right to receive a summary of the personal data being processed by us.</li>
              <li><strong>Right to Correction & Erasure:</strong> You have the right to correct inaccurate data or request deletion when it is no longer necessary for the processing purpose.</li>
              <li><strong>Right to Withdraw Consent:</strong> You can withdraw consent to data processing at any time by contacting us. Note that withdrawal may limit access to specific services.</li>
              <li><strong>Right of Grievance Redressal:</strong> You have the right to lodge a complaint with our Grievance Officer, who will address it within legal timelines.</li>
            </ul>

            <h3 className="font-space font-black text-lg md:text-xl text-deep-navy mt-6 mb-2 border-b-2 border-deep-navy/10 pb-1 flex items-center gap-2">
              <span className="bg-mint text-deep-navy w-6 h-6 rounded-lg flex items-center justify-center text-xs font-bold">5</span>
              Data Retention & Safeguards
            </h3>
            <p>
              We retain personal data only as long as necessary to fulfill processing purposes or as required by law. Once the processing purpose is completed or consent is withdrawn, we securely delete or anonymize the data.
            </p>
            <p>
              We implement industry-standard safeguards (encryption, secure HTTPS sessions, and access limits) to prevent unauthorized access. In case of a data breach, we will notify the <strong>Data Protection Board of India (DPBI)</strong> and affected users in compliance with the DPDP Act rules.
            </p>

            <h3 className="font-space font-black text-lg md:text-xl text-deep-navy mt-6 mb-2 border-b-2 border-deep-navy/10 pb-1 flex items-center gap-2">
              <span className="bg-mint text-deep-navy w-6 h-6 rounded-lg flex items-center justify-center text-xs font-bold">6</span>
              Grievance Redressal / Data Protection Officer (DPO)
            </h3>
            <p>
              If you wish to exercise your rights or have any grievances regarding your personal data, you may contact our designated Grievance Redressal Officer / Data Protection Officer (DPO):
            </p>
            <div className="bg-white border-2 border-deep-navy p-4 rounded-xl space-y-1 shadow-[2px_2px_0px_0px_#1B1F3B]">
              <p><strong>Designation:</strong> Data Protection & Grievance Officer, DevTrack Academy</p>
              <p><strong>Email:</strong> <span className="underline font-semibold">grievance@devtrackacademy.com</span></p>
              <p><strong>Address:</strong> DevTrack Academy, Hyderabad, Telangana, India</p>
              <p><strong>Processing Time:</strong> We will acknowledge your grievance within 48 hours and attempt to resolve it within 30 days.</p>
            </div>
            <p className="text-xs text-deep-navy/60 italic">
              *If you are not satisfied with our response, you have the right to escalate your complaint to the Data Protection Board of India (DPBI).
            </p>
          </div>
        );
      case 'refund':
        return (
          <div className="space-y-6 font-sans text-deep-navy/90 text-sm md:text-base leading-relaxed">
            <div className="bg-coral/10 border-2 border-deep-navy p-4 rounded-2xl mb-6">
              <p className="font-space font-bold text-xs uppercase tracking-wider text-coral mb-1">Standard Refund Guidelines</p>
              <p className="font-sans font-semibold text-xs text-deep-navy/85">
                Our refund parameters are structured to support honest learners while protecting intellectual property and hosting costs.
              </p>
            </div>

            <p>
              At **DevTrack Academy**, we strive to provide high-quality, project-based education. Please review our policy on refunds, cancellations, and course returns below:
            </p>

            <h3 className="font-space font-black text-lg md:text-xl text-deep-navy mt-6 mb-2 border-b-2 border-deep-navy/10 pb-1 flex items-center gap-2">
              <span className="bg-coral text-white w-6 h-6 rounded-lg flex items-center justify-center text-xs">1</span>
              Live Workshops
            </h3>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Cancellation Window:</strong> You can request a full refund up to <strong>48 hours</strong> before the scheduled start time of the live workshop.</li>
              <li><strong>Late Cancellation:</strong> Within 48 hours of start, or once a workshop has commenced, fees are non-refundable.</li>
              <li><strong>Platform Cancellation:</strong> If we cancel or reschedule a workshop, you will be offered a full refund or a seat in the rescheduled session at your choice.</li>
            </ul>

            <h3 className="font-space font-black text-lg md:text-xl text-deep-navy mt-6 mb-2 border-b-2 border-deep-navy/10 pb-1 flex items-center gap-2">
              <span className="bg-coral text-white w-6 h-6 rounded-lg flex items-center justify-center text-xs">2</span>
              Online Self-Paced Courses
            </h3>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>7-Day Money-Back Guarantee:</strong> Standard self-paced courses carry a 7-day refund window from the date of purchase.</li>
              <li><strong>Consumption Limit:</strong> To protect intellectual property, refunds are only issued if you have completed or watched less than <strong>20%</strong> of the course videos/curriculum and have not downloaded resources.</li>
              <li><strong>Assessment Locks:</strong> If you have completed any course certifications or submitted projects for grading, refunds are null and void.</li>
            </ul>

            <h3 className="font-space font-black text-lg md:text-xl text-deep-navy mt-6 mb-2 border-b-2 border-deep-navy/10 pb-1 flex items-center gap-2">
              <span className="bg-coral text-white w-6 h-6 rounded-lg flex items-center justify-center text-xs">3</span>
              How to Request a Refund
            </h3>
            <p>
              To initiate a refund request:
            </p>
            <ol className="list-decimal pl-5 space-y-2">
              <li>Send an email to <span className="font-semibold underline">support@devtrackacademy.com</span>.</li>
              <li>Include the email address associated with your account, the transaction invoice reference, and the reason for the refund.</li>
              <li>Our billing team will review the request against the consumption and timeline parameters.</li>
            </ol>
            <p>
              Approved refunds are credited back to the original source of payment within <strong>5 to 7 business days</strong> depending on bank processing timelines.
            </p>
          </div>
        );
      default:
        return null;
    }
  };

  const getTitle = () => {
    switch (type) {
      case 'terms':
        return 'Terms of Service';
      case 'privacy':
        return 'Privacy Policy';
      case 'refund':
        return 'Refund Policy';
      default:
        return '';
    }
  };

  const getIcon = () => {
    switch (type) {
      case 'terms':
        return <FileText className="w-6 h-6 text-primary" />;
      case 'privacy':
        return <Shield className="w-6 h-6 text-emerald-500" />;
      case 'refund':
        return <CreditCard className="w-6 h-6 text-coral" />;
      default:
        return null;
    }
  };

  const getDocPath = () => {
    switch (type) {
      case 'terms':
        return '/legal/terms.md';
      case 'privacy':
        return '/legal/privacy.md';
      default:
        return null;
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 overflow-hidden">
        {/* Backdrop overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-deep-navy/80 backdrop-blur-sm cursor-pointer"
        />

        {/* Modal body container */}
        <motion.div
          initial={{ scale: 0.95, y: 30, opacity: 0 }}
          animate={{ scale: 1, y: 0, opacity: 1 }}
          exit={{ scale: 0.95, y: 30, opacity: 0 }}
          transition={{ type: 'spring', damping: 25, stiffness: 350 }}
          className="relative w-full max-w-3xl max-h-[85vh] md:max-h-[80vh] flex flex-col bg-brand-bg border-4 border-deep-navy rounded-3xl neo-shadow overflow-hidden z-10"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b-4 border-deep-navy bg-white">
            <div className="flex items-center gap-3">
              {getIcon()}
              <h2 className="font-space font-black text-xl md:text-2xl text-deep-navy tracking-tight">
                {getTitle()}
              </h2>
            </div>
            <button
              onClick={onClose}
              className="w-10 h-10 border-2 border-deep-navy bg-white hover:bg-coral hover:text-white rounded-xl flex items-center justify-center text-deep-navy shadow-[2px_2px_0px_0px_#1B1F3B] hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[3px_3px_0px_0px_#1B1F3B] active:translate-x-[1px] active:translate-y-[1px] active:shadow-[1px_1px_0px_0px_#1B1F3B] transition-all cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Scrollable Content Area */}
          <div className="flex-grow overflow-y-auto p-6 md:p-8 paper-grid max-h-[calc(85vh-150px)] md:max-h-[calc(80vh-150px)]">
            {renderContent()}
          </div>

          {/* Footer controls */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 px-6 py-4 border-t-4 border-deep-navy bg-white">
            {getDocPath() ? (
              <a
                href={getDocPath()!}
                target="_blank"
                rel="noopener noreferrer"
                className="font-space text-xs font-black text-deep-navy hover:text-primary transition-colors flex items-center gap-1.5 order-2 sm:order-1"
              >
                View raw Markdown file
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            ) : (
              <div className="order-2 sm:order-1" />
            )}
            <button
              onClick={onClose}
              className="neo-btn-primary px-8 py-2.5 text-sm w-full sm:w-auto order-1 sm:order-2"
            >
              I Understand
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
