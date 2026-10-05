import Link from 'next/link'

export default function QualityAssurance() {
  return (
    <main className="w-full font-sans">
      
      {/* Hero Header Section */}
      <section className="bg-[#0a2230] text-white pt-24 pb-32 px-6 lg:px-8 relative overflow-hidden">
        
        {/* Subtle decorative background shape */}
        <div className="absolute top-0 right-0 w-[50%] h-[150%] bg-[#061822] rounded-bl-[100%] z-0 pointer-events-none opacity-50"></div>
        
        <div className="max-w-[1200px] mx-auto relative z-10 grid lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          
          <div className="lg:col-span-8">
            <div className="flex flex-col gap-6 mb-10">
              <p className="text-white/60 text-[13px] tracking-wide">
                <Link href="/" className="hover:text-white transition">Home</Link> &gt; Quality Assurance
              </p>
              <div className="flex items-center gap-4">
                <div className="h-[1px] w-12 bg-[#cc9a66]"></div>
                <p className="text-white/80 font-bold tracking-[0.2em] text-[11px] uppercase">Lifecare Medical Institute</p>
              </div>
            </div>
            
            <h1 className="font-serif text-[44px] sm:text-[56px] lg:text-[64px] leading-[1.05] tracking-tight mb-6">
              Quality Assurance
            </h1>
            
            <p className="text-gray-300 leading-[1.8] text-[15px] lg:text-[17px] max-w-[550px]">
              Quality is embedded across LMI as a shared institutional responsibility. It shapes programme planning, admissions, teaching, assessment, learner support, governance and strategic decision-making.
            </p>
          </div>
          
          {/* Right side standardized branding block */}
          <div className="lg:col-span-4 lg:col-start-9 border-l-[2px] border-[#cc9a66] pl-6 lg:pl-10 mt-8 lg:mt-32">
            <h2 className="font-serif text-[24px] lg:text-[30px] leading-[1.2] mb-3">Lifecare Medical<br/>Institute</h2>
            <p className="text-[#cc9a66] font-bold tracking-[0.15em] text-[10px] lg:text-[11px] uppercase">
              Professional & Higher<br/>Education
            </p>
          </div>
          
        </div>
      </section>

      {/* Our Quality Framework Section */}
      <section className="bg-white py-20 lg:py-32 px-6 lg:px-8 border-b border-gray-100">
        <div className="max-w-[1200px] mx-auto grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          <div className="lg:col-span-5">
            <div className="flex items-center gap-4 mb-8">
              <div className="h-[1px] w-12 bg-[#cc9a66]"></div>
              <p className="text-[#187965] font-bold tracking-[0.2em] text-[11px] uppercase">A Clear Reference Point</p>
            </div>
            
            <h2 className="font-serif text-[36px] lg:text-[48px] text-[#0a2230] leading-[1.15] tracking-tight">
              Our Quality<br/>Framework
            </h2>
          </div>
          
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6 pt-2 lg:pt-16">
            <p className="text-gray-700 text-[15px] lg:text-[16px] leading-[1.8]">
              LMI's Internal Quality Framework provides a clear reference point for academic and operational practice. It is informed by recognised international quality reference points and established good practice in higher, further and professional education.
            </p>
            <div className="border-l-[2px] border-[#cc9a66] pl-6 text-gray-500 text-[14px] lg:text-[15px] leading-[1.8]">
              These reference points support internal benchmarking and improvement and do not represent external accreditation or endorsement.
            </div>
          </div>
          
        </div>
      </section>

      {/* How the System Works Section */}
      <section className="bg-[#f9f8f4] py-20 lg:py-32 px-6 lg:px-8 border-b border-gray-200">
        <div className="max-w-[1200px] mx-auto grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-5">
                <h2 className="font-serif text-[32px] lg:text-[40px] text-[#0a2230] leading-[1.15] tracking-tight">
                    How the system works
                </h2>
            </div>
            <div className="lg:col-span-7">
                <p className="font-serif text-[22px] lg:text-[26px] text-[#0a2230] leading-[1.6]">
                    LMI's quality system brings together four connected elements. The Framework defines what good quality looks like. The Learner Journey shows where standards are applied. The Quality Cycle uses evidence to drive improvement. Governance establishes responsibility and accountability.
                </p>
            </div>
        </div>
      </section>

      {/* Quality at Every Stage Section */}
      <section className="bg-white py-20 lg:py-32 px-6 lg:px-8">
        <div className="max-w-[1200px] mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-[1px] w-12 bg-[#cc9a66]"></div>
              <p className="text-[#187965] font-bold tracking-[0.2em] text-[11px] uppercase">The Learner Journey</p>
            </div>
            
            <h2 className="font-serif text-[36px] lg:text-[44px] text-[#0a2230] leading-[1.15] tracking-tight mb-20">
              Quality at every stage
            </h2>

            {/* Stepper Content */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-8 relative z-10">
                {/* Connecting Line (hidden on mobile) */}
                <div className="hidden md:block absolute top-[16px] left-[2rem] w-[66%] h-[1px] bg-gray-200 -z-10"></div>

                {/* Step 1 */}
                <div className="relative">
                    <div className="w-8 h-8 rounded-full bg-[#187965] text-white flex items-center justify-center text-[11px] font-bold mb-6 ring-8 ring-white">01</div>
                    <h3 className="font-serif text-[22px] lg:text-[24px] text-[#0a2230] mb-3">Before study</h3>
                    <p className="text-gray-600 text-[14px] leading-[1.7] max-w-[280px]">Accurate information, fair admissions and effective induction.</p>
                </div>

                {/* Step 2 */}
                <div className="relative">
                    <div className="w-8 h-8 rounded-full bg-[#187965] text-white flex items-center justify-center text-[11px] font-bold mb-6 ring-8 ring-white">02</div>
                    <h3 className="font-serif text-[22px] lg:text-[24px] text-[#0a2230] mb-3">During study</h3>
                    <p className="text-gray-600 text-[14px] leading-[1.7] max-w-[280px]">Planned teaching, suitable resources, fair assessment and timely support.</p>
                </div>

                {/* Step 3 */}
                <div className="relative">
                    <div className="w-8 h-8 rounded-full bg-[#187965] text-white flex items-center justify-center text-[11px] font-bold mb-6 ring-8 ring-white">03</div>
                    <h3 className="font-serif text-[22px] lg:text-[24px] text-[#0a2230] mb-3">At completion</h3>
                    <p className="text-gray-600 text-[14px] leading-[1.7] max-w-[280px]">Checked results, certification and clear progression information.</p>
                </div>
            </div>

            {/* 3 Info Cards Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mt-20">
                {/* Card 1 */}
                <article className="bg-white p-8 lg:p-12 border border-gray-100 border-t-[3px] border-t-[#187965] shadow-sm">
                    <div className="h-12 w-12 bg-teal-50 flex items-center justify-center mb-8 text-[#187965]">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m3.75 9v6m3-3H9m1.5-12H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" /></svg>
                    </div>
                    <h3 className="font-serif text-[22px] lg:text-[26px] text-[#0a2230] leading-[1.25] mb-4">Monitoring and improvement</h3>
                    <p className="text-gray-600 text-[14px] lg:text-[15px] leading-[1.7]">
                    Evidence from teaching, assessment, progress, surveys, complaints, employers and reviews becomes action with ownership, deadlines and measures of success.
                    </p>
                </article>
                
                {/* Card 2 */}
                <article className="bg-white p-8 lg:p-12 border border-gray-100 border-t-[3px] border-t-[#187965] shadow-sm">
                    <div className="h-12 w-12 bg-teal-50 flex items-center justify-center mb-8 text-[#187965]">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" /></svg>
                    </div>
                    <h3 className="font-serif text-[22px] lg:text-[26px] text-[#0a2230] leading-[1.25] mb-4">Learner voice</h3>
                    <p className="text-gray-600 text-[14px] lg:text-[15px] leading-[1.7]">
                    Learner views are gathered through surveys, representatives, tutorials, focus groups and informal feedback, with outcomes communicated wherever possible.
                    </p>
                </article>
                
                {/* Card 3 */}
                <article className="bg-white p-8 lg:p-12 border border-gray-100 border-t-[3px] border-t-[#187965] shadow-sm">
                    <div className="h-12 w-12 bg-teal-50 flex items-center justify-center mb-8 text-[#187965]">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75Z" /></svg>
                    </div>
                    <h3 className="font-serif text-[22px] lg:text-[26px] text-[#0a2230] leading-[1.25] mb-4">Governance and accountability</h3>
                    <p className="text-gray-600 text-[14px] lg:text-[15px] leading-[1.7]">
                    Approved arrangements ensure that decisions, risks, actions and outcomes receive appropriate oversight and align with relevant external requirements.
                    </p>
                </article>
            </div>
        </div>
      </section>

      {/* Improvement Must Be Evidenced Section */}
      <section className="bg-[#0a2230] text-white pt-20 pb-16 lg:pt-32 lg:pb-24 px-6 lg:px-8">
        <div className="max-w-[1200px] mx-auto grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-5">
                <h2 className="font-serif text-[36px] lg:text-[44px] leading-[1.15] tracking-tight">
                    Improvement<br/>must be evidenced
                </h2>
            </div>
            <div className="lg:col-span-7 pt-2 lg:pt-4">
                <p className="text-gray-300 text-[14px] lg:text-[15px] leading-[1.8] max-w-lg">
                    Identified priorities are translated into clear actions. Actions are closed only when there is sufficient evidence that the intended improvement has been achieved.
                </p>
            </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-[#0a2230] text-white pb-20 lg:pb-32 px-6 lg:px-8 border-b border-gray-800">
        <div className="max-w-[1200px] mx-auto">
          {/* Subtle separator line to match the layout flow */}
          <div className="border-t border-white/10 pt-16 lg:pt-24">
            <div className="flex items-center gap-4 mb-8">
              <div className="h-[1px] w-12 bg-[#cc9a66]"></div>
              <p className="text-gray-400 font-bold tracking-[0.2em] text-[11px] uppercase">Your next step</p>
            </div>
            
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 lg:gap-10">
              <div>
                <h2 className="font-serif text-[32px] lg:text-[44px] leading-[1.1] tracking-tight mb-4">Questions about quality at LMI?</h2>
                <p className="text-gray-400 text-[15px] lg:text-[16px] max-w-xl">Contact us for information about quality policies, complaints and appeals, or learner support.</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 shrink-0 w-full lg:w-auto">
                <Link href="/contact" className="bg-[#cc9a66] text-[#0a2230] px-8 py-3.5 text-[14px] font-semibold hover:bg-[#b88554] transition flex items-center justify-center gap-2 text-center w-full sm:w-auto">
                  Contact LMI →
                </Link>
                <Link href="/policies" className="border border-white text-white px-8 py-3.5 text-[14px] font-semibold hover:bg-white hover:text-[#0a2230] transition text-center w-full sm:w-auto">
                  Policies and statements
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  )
}