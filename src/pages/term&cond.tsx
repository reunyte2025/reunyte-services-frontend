// frontend/src/pages/term&cond.tsx
import Link from 'next/link';

const SECTIONS = [
  {
    id: 'introduction',
    title: '1. Introduction',
    body: [
      `These Terms & Conditions ("Terms") govern your access to and use of the website www.reunyte.in and the services offered by Reunyte Services LLP ("Reunyte", "we", "us", or "our"), a company headquartered in Santacruz, Mumbai, Maharashtra 400055, India, founded in 2025.`,
      `By accessing our website, engaging our services, or entering into any agreement with us, you ("client", "you", "your") agree to be bound by these Terms. If you do not agree with any part of these Terms, please do not use our website or services.`,
    ],
  },
  {
    id: 'services',
    title: '2. Our Services',
    body: [
      `Reunyte provides a range of services across multiple domains, including but not limited to:`,
    ],
    list: [
      'Technology & Development — website development, mobile app development (iOS, Android, cross-platform), UI/UX design, wireframing & prototyping, MVP and product development, and technical maintenance & support.',
      'Creative & Content — logo design, social media graphics, website & app UI elements, video production, motion graphics, and content writing.',
      'Business & Marketing — digital marketing, go-to-market strategy, brand strategy, and business consulting.',
      'Education & Training — hackathons, bootcamps, workshops, mock interviews, placement preparation, and course development.',
      'Operations & Corporate Support — IT infrastructure, cybersecurity, legal, finance, HR & compliance support.',
      'College & Organization Collaboration — partnerships, training programs, and technology adoption for institutions and corporates.',
    ],
    after: [
      `The exact scope, deliverables, timelines, and pricing for any engagement will be defined in a separate proposal, quotation, or service agreement between Reunyte and the client, and such agreement will take precedence over these Terms in case of conflict on project-specific matters.`,
    ],
  },
  {
    id: 'eligibility',
    title: '3. Eligibility',
    body: [
      `By using our website or engaging our services, you confirm that you are at least 18 years of age (or the age of majority in your jurisdiction) and have the legal capacity to enter into a binding agreement on your own behalf or on behalf of the organization you represent.`,
    ],
  },
  {
    id: 'engagement',
    title: '4. Engagement, Payments & Fees',
    list: [
      'All projects begin only after a mutually agreed scope of work, timeline, and payment terms have been confirmed in writing (email or signed agreement).',
      'Fees, milestones, and payment schedules will be specified in the relevant proposal or invoice. Unless otherwise agreed, an advance payment may be required before work commences.',
      'Delayed payments may result in a pause of ongoing work until dues are cleared.',
      'All fees are exclusive of applicable taxes (such as GST) unless explicitly stated otherwise.',
      'Refunds, if any, are governed by the specific terms of the individual service agreement and are assessed on a case-by-case basis.',
    ],
  },
  {
    id: 'ip',
    title: '5. Intellectual Property',
    body: [
      `Unless otherwise agreed in writing, all designs, code, content, and other deliverables created by Reunyte for a client become the client's property only upon full and final payment for the relevant project.`,
      `Reunyte retains the right to display completed work (excluding confidential or proprietary client information) in its portfolio, marketing materials, and case studies, unless the client requests confidentiality in writing.`,
      `All content on the Reunyte website — including but not limited to text, logos, graphics, and branding — is the intellectual property of Reunyte Services LLP and may not be copied, reproduced, or used without prior written consent.`,
    ],
  },
  {
    id: 'confidentiality',
    title: '6. Confidentiality',
    body: [
      `Both parties agree to keep confidential any proprietary, business, or technical information shared during the course of an engagement, and to use such information solely for the purpose of fulfilling the agreed services. This obligation survives the completion or termination of the engagement.`,
    ],
  },
  {
    id: 'client-responsibilities',
    title: '7. Client Responsibilities',
    list: [
      'Provide timely and accurate information, content, and feedback required for project execution.',
      'Ensure that any material, content, or assets provided to Reunyte for use in a project do not infringe on third-party rights.',
      'Communicate scope changes promptly, as they may affect timelines and costs.',
    ],
  },
  {
    id: 'liability',
    title: '8. Limitation of Liability',
    body: [
      `Reunyte strives to deliver high-quality services, but we do not guarantee uninterrupted or error-free outcomes, specific business results, or third-party platform performance (e.g., app store approvals, search engine rankings, or ad platform outcomes).`,
      `To the maximum extent permitted by law, Reunyte's total liability for any claim arising out of or relating to our services shall not exceed the total fees paid by the client for the specific project giving rise to the claim. Reunyte shall not be liable for any indirect, incidental, or consequential damages.`,
    ],
  },
  {
    id: 'termination',
    title: '9. Termination',
    body: [
      `Either party may terminate an ongoing engagement by providing written notice, subject to the notice period and terms outlined in the specific service agreement. Fees for work completed up to the date of termination remain payable.`,
    ],
  },
  {
    id: 'third-party',
    title: '10. Third-Party Links & Services',
    body: [
      `Our website and communications may contain links to third-party websites or tools (such as social media platforms). Reunyte is not responsible for the content, privacy practices, or terms of any third-party sites.`,
    ],
  },
  {
    id: 'governing-law',
    title: '11. Governing Law & Jurisdiction',
    body: [
      `These Terms shall be governed by and construed in accordance with the laws of India. Any disputes arising out of or in connection with these Terms shall be subject to the exclusive jurisdiction of the courts in Mumbai, Maharashtra.`,
    ],
  },
  {
    id: 'changes',
    title: '12. Changes to These Terms',
    body: [
      `Reunyte reserves the right to update or modify these Terms at any time. Changes will be posted on this page with a revised "last updated" date. Continued use of our website or services after such changes constitutes acceptance of the updated Terms.`,
    ],
  },
  {
    id: 'contact',
    title: '13. Contact Us',
    body: [
      `If you have any questions about these Terms, please reach out to us:`,
    ],
    contact: true,
  },
];

export default function TermsAndConditions() {
  return (
    <div className="w-full bg-[#0a1628] font-['Poppins'] text-white">
      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section
        className="relative w-full pt-40 sm:pt-60 pb-12 px-4 sm:px-6 lg:px-12 overflow-hidden"
        style={{ background: 'linear-gradient(180deg, #0A2540 0%, #0a1628 100%)' }}
      >
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
        />
        <div className="relative max-w-4xl mx-auto text-center z-10">
          <p className="text-blue-300 text-sm font-semibold tracking-[0.25em] uppercase mb-3">
            Legal
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
            Terms{' '}
            <span
              className="text-transparent bg-clip-text"
              style={{ backgroundImage: 'linear-gradient(90deg, #60A5FA, #A78BFA)' }}
            >
              &amp; Conditions
            </span>
          </h1>
          <p className="mt-4 text-slate-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Please read these terms carefully before using our website or engaging Reunyte
            Services LLP for any project.
          </p>
          <p className="mt-6 text-slate-500 text-xs tracking-wide">
            Last updated: July 2026
          </p>
          <div className="mt-6 h-px w-16 mx-auto bg-gradient-to-r from-blue-400 to-purple-400" />
        </div>
      </section>

      {/* ── Body ─────────────────────────────────────────────────────── */}
      <section className="w-full py-16 lg:py-24 px-4 sm:px-6 lg:px-12">
        <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-[220px_1fr] gap-12">
          {/* Table of contents */}
          <nav className="hidden lg:block sticky top-24 self-start">
            <p className="text-xs font-semibold tracking-widest uppercase text-slate-500 mb-4">
              On this page
            </p>
            <ul className="space-y-2">
              {SECTIONS.map((s) => (
                <li key={s.id}>
                  <a
                    href={`#${s.id}`}
                    className="text-sm text-slate-400 hover:text-blue-400 transition-colors leading-snug block"
                  >
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Sections */}
          <div className="space-y-14">
            {SECTIONS.map((s) => (
              <div key={s.id} id={s.id} className="scroll-mt-24">
                <h2 className="text-2xl font-bold text-white mb-4">{s.title}</h2>

                {s.body?.map((p, i) => (
                  <p key={i} className="text-slate-400 text-sm sm:text-base leading-relaxed mb-3">
                    {p}
                  </p>
                ))}

                {s.list && (
                  <ul className="space-y-2 mt-2">
                    {s.list.map((item, i) => (
                      <li key={i} className="flex gap-3 text-slate-400 text-sm sm:text-base leading-relaxed">
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {s.after?.map((p, i) => (
                  <p key={i} className="text-slate-400 text-sm sm:text-base leading-relaxed mt-3">
                    {p}
                  </p>
                ))}

                {s.contact && (
                  <div className="mt-4 rounded-2xl p-px overflow-hidden inline-block w-full sm:w-auto">
                    <div
                      className="rounded-2xl p-px"
                      style={{ background: 'linear-gradient(135deg, #3B82F640, transparent 70%)' }}
                    >
                      <div className="rounded-2xl bg-[#0D1F38]/80 backdrop-blur-sm px-6 py-5 space-y-2">
                        <p className="text-sm text-slate-300">
                          <span className="text-slate-500">Email: </span>
                          <a href="mailto:info@reunyte.in" className="hover:text-blue-400 transition-colors">
                            info@reunyte.in
                          </a>
                        </p>
                        <p className="text-sm text-slate-300">
                          <span className="text-slate-500">Phone: </span>
                          <a href="tel:+918879824228" className="hover:text-blue-400 transition-colors">
                            +91 8879824228
                          </a>
                        </p>
                        <p className="text-sm text-slate-300">
                          <span className="text-slate-500">Address: </span>
                          Santacruz, Mumbai, Maharashtra 400055, India
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Back to home CTA */}
        <div className="max-w-4xl mx-auto mt-16 pt-10 border-t border-white/10 text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-blue-400 hover:text-blue-300 transition-colors"
          >
            ← Back to Home
          </Link>
        </div>
      </section>
    </div>
  );
}