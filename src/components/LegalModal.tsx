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
              <p className="font-space font-bold text-xs uppercase tracking-wider text-primary mb-1">Jurisdiction & Governing Law</p>
              <p className="font-sans font-semibold text-xs text-deep-navy/85">
                These terms are governed by the laws of India, under the exclusive jurisdiction of the courts in Hyderabad, Telangana, India.
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
              These Terms and any dispute or claim arising out of or in connection with them shall be governed by and construed in accordance with the laws of <strong>India</strong>, under the exclusive jurisdiction of the courts located in <strong>Hyderabad, Telangana, India</strong>.
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
              <li><strong>Proprietary Content:</strong> All materials available on the Platform, including course videos, syllabus, coding exercises, projects, graphics, and code templates are the intellectual property of DevTrack Academy.</li>
              <li><strong>Limited License:</strong> We grant you a personal, non-exclusive, non-transferable, revocable license to access the Content solely for your own personal, educational learning.</li>
            </ul>

            <h3 className="font-space font-black text-lg md:text-xl text-deep-navy mt-6 mb-2 border-b-2 border-deep-navy/10 pb-1 flex items-center gap-2">
              <span className="bg-primary text-white w-6 h-6 rounded-lg flex items-center justify-center text-xs">4</span>
              Promotional Newsletters & Hiring Partner Referral Services
            </h3>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Promotional Communications:</strong> By creating an account or joining our waitlist, you consent to receive educational newsletters, platform updates, and promotional communications. You may opt out at any time via the unsubscribe link or by emailing <span className="font-semibold underline">support@devtrackacademy.com</span>.</li>
              <li><strong>Hiring Partner Sharing:</strong> If you explicitly opt into our placement assistance program or submit your resume for career referrals, you give consent for DevTrack Academy to share your profile, portfolio, resume, and assessment metrics with verified partner hiring companies and employers for job placement opportunities.</li>
              <li><strong>Revocation of Consent:</strong> You may revoke your consent for hiring partner data sharing at any time by updating your profile privacy settings or contacting support.</li>
            </ul>

            <h3 className="font-space font-black text-lg md:text-xl text-deep-navy mt-6 mb-2 border-b-2 border-deep-navy/10 pb-1 flex items-center gap-2">
              <span className="bg-primary text-white w-6 h-6 rounded-lg flex items-center justify-center text-xs">5</span>
              Payments, Taxes (GST), & Refunds
            </h3>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Pricing & Taxes:</strong> Prices are displayed on the Platform and subject to statutory Indian Goods and Services Tax (GST, currently 18%).</li>
              <li><strong>Refund Policy:</strong> Live workshop cancellations are eligible for refunds up to 48 hours prior to session start. Digital self-paced content is subject to standard refund terms once accessed.</li>
            </ul>

            <h3 className="font-space font-black text-lg md:text-xl text-deep-navy mt-6 mb-2 border-b-2 border-deep-navy/10 pb-1 flex items-center gap-2">
              <span className="bg-primary text-white w-6 h-6 rounded-lg flex items-center justify-center text-xs">6</span>
              User Code of Conduct & Academic Integrity
            </h3>
            <p>
              Plagiarism, copying other students&apos; code, or using abusive language in community spaces is strictly prohibited.
            </p>

            <h3 className="font-space font-black text-lg md:text-xl text-deep-navy mt-6 mb-2 border-b-2 border-deep-navy/10 pb-1 flex items-center gap-2">
              <span className="bg-primary text-white w-6 h-6 rounded-lg flex items-center justify-center text-xs">7</span>
              Grievance Redressal Officer
            </h3>
            <div className="bg-white border-2 border-deep-navy p-4 rounded-xl space-y-1 shadow-[2px_2px_0px_0px_#1B1F3B]">
              <p><strong>Name:</strong> Grievance Redressal Officer, DevTrack Academy</p>
              <p><strong>Email:</strong> <span className="underline font-semibold">grievance@devtrackacademy.com</span></p>
              <p><strong>Address:</strong> DevTrack Academy, Hyderabad, Telangana, India</p>
            </div>
          </div>
        );
      case 'privacy':
        return (
          <div className="space-y-6 font-sans text-deep-navy/90 text-sm md:text-base leading-relaxed">
            <div className="bg-mint/15 border-2 border-deep-navy p-4 rounded-2xl mb-6">
              <p className="font-space font-bold text-xs uppercase tracking-wider text-emerald-600 mb-1">DPDP ACT 2023 COMPLIANT</p>
              <p className="font-sans font-semibold text-xs text-deep-navy/85">
                This policy outlines the processing of personal data for specified, lawful purposes under Indian law.
              </p>
            </div>

            <p>
              <strong>DevTrack Academy</strong> (&quot;we,&quot; &quot;our,&quot; &quot;us,&quot; or the &quot;Platform&quot;) is committed to protecting your privacy and personal data. This Privacy Policy explains how we collect, use, process, store, and share your personal data when you visit our website or interact with our Services.
            </p>

            <h3 className="font-space font-black text-lg md:text-xl text-deep-navy mt-6 mb-2 border-b-2 border-deep-navy/10 pb-1 flex items-center gap-2">
              <span className="bg-mint text-deep-navy w-6 h-6 rounded-lg flex items-center justify-center text-xs font-bold">1</span>
              Governing Law & Jurisdiction
            </h3>
            <p>
              Governed by the laws of <strong>India</strong> under the exclusive jurisdiction of courts in <strong>Hyderabad, Telangana, India</strong>.
            </p>

            <h3 className="font-space font-black text-lg md:text-xl text-deep-navy mt-6 mb-2 border-b-2 border-deep-navy/10 pb-1 flex items-center gap-2">
              <span className="bg-mint text-deep-navy w-6 h-6 rounded-lg flex items-center justify-center text-xs font-bold">2</span>
              Personal Data We Collect
            </h3>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Identity & Contact:</strong> Name, email, phone number, username, GitHub/LinkedIn links, billing details.</li>
              <li><strong>Educational & Career:</strong> Course progress, code submissions, quiz results, project portfolios, and resumes.</li>
            </ul>

            <h3 className="font-space font-black text-lg md:text-xl text-deep-navy mt-6 mb-2 border-b-2 border-deep-navy/10 pb-1 flex items-center gap-2">
              <span className="bg-mint text-deep-navy w-6 h-6 rounded-lg flex items-center justify-center text-xs font-bold">3</span>
              Purposes of Processing & Third-Party Sharing
            </h3>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Promotional Communications & Newsletters:</strong> Sending educational newsletters, platform updates, and promotional offers. Users can unsubscribe at any time.</li>
              <li><strong>Hiring Partner Sharing (Consent-Based):</strong> With your prior explicit consent (such as when you opt into placement assistance or submit your resume for referrals), we share your verified profile, portfolio projects, resume, and assessment metrics with partner hiring companies and employers for job placement opportunities.</li>
              <li><strong>Service Infrastructure:</strong> Shared with secure hosting, RBI-licensed payment gateways, and email processors under strict confidentiality contracts.</li>
            </ul>

            <h3 className="font-space font-black text-lg md:text-xl text-deep-navy mt-6 mb-2 border-b-2 border-deep-navy/10 pb-1 flex items-center gap-2">
              <span className="bg-mint text-deep-navy w-6 h-6 rounded-lg flex items-center justify-center text-xs font-bold">4</span>
              Data Principal Rights (DPDP Act 2023)
            </h3>
            <p>
              You have the right to information, correction, erasure, and consent withdrawal at any time by emailing <span className="font-semibold underline">support@devtrackacademy.com</span>.
            </p>

            <h3 className="font-space font-black text-lg md:text-xl text-deep-navy mt-6 mb-2 border-b-2 border-deep-navy/10 pb-1 flex items-center gap-2">
              <span className="bg-mint text-deep-navy w-6 h-6 rounded-lg flex items-center justify-center text-xs font-bold">5</span>
              Grievance Redressal Officer / DPO
            </h3>
            <div className="bg-white border-2 border-deep-navy p-4 rounded-xl space-y-1 shadow-[2px_2px_0px_0px_#1B1F3B]">
              <p><strong>Designation:</strong> Data Protection & Grievance Officer, DevTrack Academy</p>
              <p><strong>Email:</strong> <span className="underline font-semibold">grievance@devtrackacademy.com</span></p>
              <p><strong>Address:</strong> DevTrack Academy, Hyderabad, Telangana, India</p>
            </div>
          </div>
        );
      case 'refund':
        return (
          <div className="space-y-6 font-sans text-deep-navy/90 text-sm md:text-base leading-relaxed">
            <div className="bg-coral/10 border-2 border-deep-navy p-4 rounded-2xl mb-6">
              <p className="font-space font-bold text-xs uppercase tracking-wider text-coral mb-1">Standard Refund Guidelines</p>
              <p className="font-sans font-semibold text-xs text-deep-navy/85">
                Our refund parameters support honest learners while protecting intellectual property and hosting costs.
              </p>
            </div>

            <p>
              At <strong>DevTrack Academy</strong>, we strive to provide high-quality, project-based education. Please review our policy on refunds below:
            </p>

            <h3 className="font-space font-black text-lg md:text-xl text-deep-navy mt-6 mb-2 border-b-2 border-deep-navy/10 pb-1 flex items-center gap-2">
              <span className="bg-coral text-white w-6 h-6 rounded-lg flex items-center justify-center text-xs">1</span>
              Live Workshops
            </h3>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Cancellation Window:</strong> Request a full refund up to <strong>48 hours</strong> before the scheduled start time of the live workshop.</li>
              <li><strong>Late Cancellation:</strong> Within 48 hours of start, or once a workshop has commenced, fees are non-refundable.</li>
            </ul>

            <h3 className="font-space font-black text-lg md:text-xl text-deep-navy mt-6 mb-2 border-b-2 border-deep-navy/10 pb-1 flex items-center gap-2">
              <span className="bg-coral text-white w-6 h-6 rounded-lg flex items-center justify-center text-xs">2</span>
              How to Request a Refund
            </h3>
            <p>
              Send an email to <span className="font-semibold underline">support@devtrackacademy.com</span> with your invoice reference. Approved refunds are credited back within 5 to 7 business days.
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
          className="relative w-full max-w-3xl max-h-[85vh] md:max-h-[80vh] flex flex-col bg-brand-bg border-4 border-deep-navy rounded-3xl neo-shadow overflow-hidden z-10 font-space"
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
              className="w-10 h-10 border-2 border-deep-navy bg-white hover:bg-coral hover:text-white rounded-xl flex items-center justify-center text-deep-navy shadow-[2px_2px_0px_0px_#1B1F3B] transition-all cursor-pointer"
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
