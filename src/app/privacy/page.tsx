'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { ArrowLeft, Shield, ExternalLink } from 'lucide-react';

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navbar />

      <main className="flex-grow pt-32 pb-24 bg-brand-bg px-6 font-space relative overflow-hidden">
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 font-bold text-deep-navy hover:text-primary mb-8 group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            Back to Homepage
          </Link>

          {/* Page Container */}
          <div className="bg-white border-4 border-deep-navy rounded-[36px] p-8 md:p-12 shadow-[8px_8px_0px_0px_#1B1F3B]">
            <div className="flex items-center gap-3 mb-4">
              <Shield className="w-8 h-8 text-emerald-500" />
              <h1 className="font-black text-3xl md:text-4xl text-deep-navy tracking-tight">
                Privacy Policy
              </h1>
            </div>

            <div className="bg-mint/15 border-2 border-deep-navy p-4 rounded-2xl mb-8">
              <p className="font-space font-bold text-xs uppercase tracking-wider text-emerald-600 mb-1">
                DPDP ACT 2023 COMPLIANT
              </p>
              <p className="font-sans font-semibold text-xs text-deep-navy/85">
                Governed by the laws of India, under the jurisdiction of the courts in Hyderabad, Telangana, India.
              </p>
            </div>

            <div className="space-y-6 font-sans text-deep-navy/90 text-sm md:text-base leading-relaxed">
              <p>
                <strong>DevTrack Academy</strong> (&quot;we,&quot; &quot;our,&quot; &quot;us,&quot; or the &quot;Platform&quot;) is committed to protecting your privacy and personal data. This Privacy Policy explains how we collect, use, process, store, and share your personal data when you visit our website, enroll in our courses, workshops, or interact with our Services.
              </p>
              <p>
                This Privacy Policy is designed to comply with the <strong>Digital Personal Data Protection Act, 2023 (DPDP Act)</strong>, the <strong>Information Technology Act, 2000</strong>, and other applicable laws of <strong>India</strong>.
              </p>

              <h2 className="font-space font-black text-xl text-deep-navy mt-8 mb-2 border-b-2 border-deep-navy/10 pb-1">
                1. Governing Law & Jurisdiction
              </h2>
              <p>
                This Privacy Policy and all matters relating to your data privacy shall be governed by the laws of <strong>India</strong>. Any disputes arising out of this policy shall be subject to the exclusive jurisdiction of the courts in <strong>Hyderabad, Telangana, India</strong>.
              </p>

              <h2 className="font-space font-black text-xl text-deep-navy mt-8 mb-2 border-b-2 border-deep-navy/10 pb-1">
                2. Personal Data We Collect
              </h2>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>Identity & Registration Data:</strong> Full name, email address, username, profile picture, GitHub/LinkedIn links.</li>
                <li><strong>Contact & Billing Data:</strong> Phone number, billing address, country, and GST details.</li>
                <li><strong>Educational & Career Data:</strong> Workshop progress, code submissions, quiz results, project portfolios, resume details, and skill metrics.</li>
              </ul>

              <h2 className="font-space font-black text-xl text-deep-navy mt-8 mb-2 border-b-2 border-deep-navy/10 pb-1">
                3. Purpose of Processing & Third-Party Sharing
              </h2>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>Service Delivery & Administration:</strong> Account management, course delivery, GST billing, and student support.</li>
                <li><strong>Promotional Communications & Newsletters:</strong> Sending educational newsletters, platform updates, and promotional offers. You may opt out or unsubscribe at any time via email link or by contacting <span className="underline font-semibold">support@devtrackacademy.com</span>.</li>
                <li><strong>Hiring Partner Sharing (Explicit Consent Only):</strong> With your prior explicit consent (such as when you opt into our job placement program or submit your resume for referrals), we share your verified portfolio, resume, and contact information with hiring companies and recruitment partners for career opportunities.</li>
              </ul>

              <h2 className="font-space font-black text-xl text-deep-navy mt-8 mb-2 border-b-2 border-deep-navy/10 pb-1">
                4. Data Principal Rights (DPDP Act 2023)
              </h2>
              <p>
                You have the right to request information, correction, data erasure, or withdraw consent at any time by emailing <span className="underline font-semibold">support@devtrackacademy.com</span>.
              </p>

              <h2 className="font-space font-black text-xl text-deep-navy mt-8 mb-2 border-b-2 border-deep-navy/10 pb-1">
                5. Grievance Redressal / Data Protection Officer (DPO)
              </h2>
              <div className="bg-brand-bg border-2 border-deep-navy p-5 rounded-2xl space-y-1 shadow-[2px_2px_0px_0px_#1B1F3B]">
                <p><strong>Designation:</strong> Data Protection & Grievance Officer, DevTrack Academy</p>
                <p><strong>Email:</strong> <span className="underline font-semibold">grievance@devtrackacademy.com</span></p>
                <p><strong>Address:</strong> DevTrack Academy, Hyderabad, Telangana, India</p>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t-2 border-deep-navy/10 flex justify-between items-center">
              <a
                href="/legal/privacy.md"
                target="_blank"
                rel="noopener noreferrer"
                className="font-space text-xs font-black text-deep-navy hover:text-primary flex items-center gap-1"
              >
                View raw Markdown document <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
