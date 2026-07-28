'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { ArrowLeft, FileText, ExternalLink } from 'lucide-react';

export default function TermsOfServicePage() {
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
              <FileText className="w-8 h-8 text-primary" />
              <h1 className="font-black text-3xl md:text-4xl text-deep-navy tracking-tight">
                Terms of Service
              </h1>
            </div>

            <div className="bg-primary/10 border-2 border-deep-navy p-4 rounded-2xl mb-8">
              <p className="font-space font-bold text-xs uppercase tracking-wider text-primary mb-1">
                JURISDICTION & GOVERNING LAW
              </p>
              <p className="font-sans font-semibold text-xs text-deep-navy/85">
                Governed by the laws of India, under the exclusive jurisdiction of the courts located in Hyderabad, Telangana, India.
              </p>
            </div>

            <div className="space-y-6 font-sans text-deep-navy/90 text-sm md:text-base leading-relaxed">
              <p>
                Welcome to <strong>DevTrack Academy</strong> (&quot;we,&quot; &quot;our,&quot; &quot;us,&quot; or the &quot;Platform&quot;). These Terms of Service (&quot;Terms&quot;) govern your access to and use of our website, workshops, courses, educational content, and related services (collectively, the &quot;Services&quot;).
              </p>

              <h2 className="font-space font-black text-xl text-deep-navy mt-8 mb-2 border-b-2 border-deep-navy/10 pb-1">
                1. Governing Law & Jurisdiction
              </h2>
              <p>
                These Terms and any dispute or claim arising out of or in connection with them shall be governed by and construed in accordance with the laws of <strong>India</strong>, under the exclusive jurisdiction of the courts located in <strong>Hyderabad, Telangana, India</strong>.
              </p>

              <h2 className="font-space font-black text-xl text-deep-navy mt-8 mb-2 border-b-2 border-deep-navy/10 pb-1">
                2. Promotional Communications & Hiring Referral Services
              </h2>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>Promotional Communications:</strong> By creating an account or subscribing to our updates, you consent to receive educational newsletters, platform announcements, and promotional emails. You may opt out or unsubscribe at any time.</li>
                <li><strong>Hiring Partner Sharing:</strong> If you explicitly opt into our placement assistance program or submit your resume for referrals, you give consent for DevTrack Academy to share your profile, portfolio, resume, and assessment metrics with partner hiring companies and prospective employers for career opportunities.</li>
              </ul>

              <h2 className="font-space font-black text-xl text-deep-navy mt-8 mb-2 border-b-2 border-deep-navy/10 pb-1">
                3. Intellectual Property Rights
              </h2>
              <p>
                All course content, project assignments, code structures, slides, graphics, and video materials available on the Platform are the exclusive intellectual property of DevTrack Academy.
              </p>

              <h2 className="font-space font-black text-xl text-deep-navy mt-8 mb-2 border-b-2 border-deep-navy/10 pb-1">
                4. Payments, GST, & Refunds
              </h2>
              <p>
                All transactions are subject to applicable Indian Goods and Services Tax (GST) at statutory rates (currently 18%). Workshop cancellations are refundable up to 48 hours prior to session start time.
              </p>

              <h2 className="font-space font-black text-xl text-deep-navy mt-8 mb-2 border-b-2 border-deep-navy/10 pb-1">
                5. Grievance Redressal Officer
              </h2>
              <div className="bg-brand-bg border-2 border-deep-navy p-5 rounded-2xl space-y-1 shadow-[2px_2px_0px_0px_#1B1F3B]">
                <p><strong>Name:</strong> Grievance Redressal Officer, DevTrack Academy</p>
                <p><strong>Email:</strong> <span className="underline font-semibold">grievance@devtrackacademy.com</span></p>
                <p><strong>Address:</strong> DevTrack Academy, Hyderabad, Telangana, India</p>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t-2 border-deep-navy/10 flex justify-between items-center">
              <a
                href="/legal/terms.md"
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
