import Link from 'next/link'

export default function QualityPage() {
  return (
    <main className="w-full bg-white">
      
      {/* Hero Section */}
      <section className="bg-[#0a2230] text-white pt-12 pb-24 lg:pt-20 lg:pb-32 px-6 lg:px-8 relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-12 lg:gap-24 relative z-10 items-center">
          <div>
            {/* Breadcrumb */}
            <div className="text-xs text-gray-400 mb-12 flex items-center gap-2 flex-wrap">
              <Link href="/" className="hover:text-white transition">Home</Link> 
              <span>&gt;</span> 
              <span className="text-white">Quality Assurance</span>
            </div>
            
            <div className="flex items-center gap-4 mb-6">
              <div className="h-[1px] w-8 bg-[#cc9a66]"></div>
              <p className="text-gray-300 font-bold tracking-widest text-[10px] lg:text-xs uppercase">Lifecare Medical Institute</p>
            </div>
            
            <h1 className="font-serif text-5xl lg:text-7xl mb-8 leading-[1.1]">
              Quality Assurance
            </h1>
            
            <p className="text-base lg:text-lg text-gray-300 max-w-xl leading-relaxed font-light">
              Quality is embedded across LMI as a shared institutional responsibility. It shapes programme planning, admissions, teaching, assessment, learner support, governance and strategic decision-making.
            </p>
          </div>
          
          {/* Right Box - Standards, Evidence, Improvement */}
          <div className="w-full lg:max-w-[320px] lg:ml-auto border border-white/20 p-8 lg:p-12">
            <div className="text-[#cc9a66] mb-8">
              {/* Shield Check Icon */}
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
              </svg>
            </div>
            <div className="flex flex-col gap-3 font-serif text-[22px] lg:text-[26px] text-gray-200">
              <span>Standards</span>
              <span>Evidence</span>
              <span>Improvement</span>
            </div>
          </div>
        </div>
      </section>

      {/* Our Quality Framework */}
      <section className="py-16 lg:py-24 px-6 lg:px-8 bg-white">
        <div className="max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-12 lg:gap-24 items-start">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="h-[1px] w-8 bg-[#cc9a66]"></div>
              <p className="text-[#187965] font-bold tracking-widest text-xs uppercase">A clear reference point</p>
            </div>
            <h2 className="font-serif text-4xl lg:text-5xl text-[#0a2230] leading-tight">
              Our Quality<br/>Framework
            </h2>
          </div>
          <div className="lg:mt-10">
            <p className="text-gray-700 text-sm lg:text-base leading-relaxed mb-6">
              LMI's Internal Quality Framework provides a clear reference point for academic and operational practice. It is informed by recognised international quality reference points and established good practice in higher, further and professional education.
            </p>
            <div className="border-l-2 border-[#cc9a66] pl-6 py-1">
              <p className="text-gray-500 text-sm leading-relaxed">
                These reference points support internal benchmarking and improvement and do not represent external accreditation or endorsement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How the system works */}
      <section className="py-16 lg:py-24 px-6 lg:px-8 bg-[#f3efe6]">
        <div className="max-w-[1400px] mx-auto grid lg:grid-cols-3 gap-8 lg:gap-16 items-start">
          <div className="lg:col-span-1">
            <h2 className="font-serif text-3xl lg:text-4xl text-[#0a2230] leading-tight">
              How the<br className="hidden lg:block"/> system works
            </h2>
          </div>
          <div className="lg:col-span-2">
            <p className="font-serif text-2xl lg:text-[28px] text-[#0a2230] leading-[1.6]">
              LMI's quality system brings together four connected elements. The Framework defines what good quality looks like. The Learner Journey shows where standards are applied. The Quality Cycle uses evidence to drive improvement. Governance establishes responsibility and accountability.
            </p>
          </div>
        </div>
      </section>

      {/* Quality at every stage (Timeline) */}
      <section className="pt-16 lg:pt-24 pb-12 px-6 lg:px-8 bg-white">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-[1px] w-8 bg-[#cc9a66]"></div>
            <p className="text-[#187965] font-bold tracking-widest text-xs uppercase">The Learner Journey</p>
          </div>
          <h2 className="font-serif text-4xl lg:text-5xl text-[#0a2230] leading-tight mb-16">
            Quality at every stage
          </h2>

          <div className="relative">
            {/* Horizontal Line for Desktop */}
            <div className="hidden md:block absolute top-4 left-0 right-0 h-[1px] bg-[#187965]/20 z-0"></div>
            
            <div className="grid md:grid-cols-3 gap-10 lg:gap-16 relative z-10">
              
              {/* Step 1 */}
              <div className="bg-white relative">
                <div className="w-8 h-8 rounded-full bg-[#187965] text-white flex items-center justify-center text-[11px] font-bold mb-6 ring-[10px] ring-white relative z-10">
                  01
                </div>
                <h3 className="font-serif text-[22px] lg:text-2xl text-[#0a2230] mb-4">Before study</h3>
                <p className="text-gray-600 text-[15px] leading-relaxed max-w-sm">
                  Accurate information, fair admissions and effective induction.
                </p>
              </div>
              
              {/* Step 2 */}
              <div className="bg-white relative">
                <div className="w-8 h-8 rounded-full bg-[#187965] text-white flex items-center justify-center text-[11px] font-bold mb-6 ring-[10px] ring-white relative z-10">
                  02
                </div>
                <h3 className="font-serif text-[22px] lg:text-2xl text-[#0a2230] mb-4">During study</h3>
                <p className="text-gray-600 text-[15px] leading-relaxed max-w-sm">
                  Planned teaching, suitable resources, fair assessment and timely support.
                </p>
              </div>

              {/* Step 3 */}
              <div className="bg-white relative">
                <div className="w-8 h-8 rounded-full bg-[#187965] text-white flex items-center justify-center text-[11px] font-bold mb-6 ring-[10px] ring-white relative z-10">
                  03
                </div>
                <h3 className="font-serif text-[22px] lg:text-2xl text-[#0a2230] mb-4">At completion</h3>
                <p className="text-gray-600 text-[15px] leading-relaxed max-w-sm">
                  Checked results, certification and clear progression information.
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Info Cards */}
      <section className="pb-16 lg:pb-24 px-6 lg:px-8 bg-white">
        <div className="max-w-[1400px] mx-auto grid md:grid-cols-3 gap-6 lg:gap-8">
          
          <article className="bg-white p-8 lg:p-12 shadow-sm border border-gray-100">
            <div className="h-10 w-10 bg-[#187965]/10 flex items-center justify-center mb-8 text-[#187965]">
              {/* Clipboard Check Icon */}
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0 1 18 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3 1.5 1.5 3-3.75" />
              </svg>
            </div>
            <h3 className="font-serif text-[22px] lg:text-2xl text-[#0a2230] mb-4">Monitoring and<br/>improvement</h3>
            <p className="text-gray-600 text-[15px] leading-relaxed">
              Evidence from teaching, assessment, progress, surveys, complaints, employers and reviews becomes action with ownership, deadlines and measures of success.
            </p>
          </article>

          <article className="bg-white p-8 lg:p-12 shadow-sm border border-gray-100">
            <div className="h-10 w-10 bg-[#187965]/10 flex items-center justify-center mb-8 text-[#187965]">
              {/* Document Text Icon */}
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
              </svg>
            </div>
            <h3 className="font-serif text-[22px] lg:text-2xl text-[#0a2230] mb-4">Learner voice</h3>
            <p className="text-gray-600 text-[15px] leading-relaxed">
              Learner views are gathered through surveys, representatives, tutorials, focus groups and informal feedback, with outcomes communicated wherever possible.
            </p>
          </article>

          <article className="bg-white p-8 lg:p-12 shadow-sm border border-gray-100">
            <div className="h-10 w-10 bg-[#187965]/10 flex items-center justify-center mb-8 text-[#187965]">
              {/* Building/Institution Icon */}
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75Z" />
              </svg>
            </div>
            <h3 className="font-serif text-[22px] lg:text-2xl text-[#0a2230] mb-4">Governance and<br/>accountability</h3>
            <p className="text-gray-600 text-[15px] leading-relaxed">
              Approved arrangements ensure that decisions, risks, actions and outcomes receive appropriate oversight and align with relevant external requirements.
            </p>
          </article>

        </div>
      </section>

      {/* Improvement must be evidenced */}
      <section className="py-16 lg:py-24 px-6 lg:px-8 bg-[#0a2230] text-white">
        <div className="max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-8 lg:gap-24 items-start">
          <h2 className="font-serif text-4xl lg:text-5xl leading-tight">
            Improvement<br/>must be<br/>evidenced
          </h2>
          <div className="text-gray-300 text-sm lg:text-[15px] leading-relaxed max-w-[480px] lg:mt-4">
            <p>
              Identified priorities are translated into clear actions. Actions are closed only when there is sufficient evidence that the intended improvement has been achieved.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-[#0b1828] text-white py-16 lg:py-24 px-6 lg:px-8 border-b border-gray-800">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-[1px] w-8 bg-[#cc9a66]"></div>
            <p className="text-gray-400 font-bold tracking-widest text-xs uppercase">Your next step</p>
          </div>
          
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 lg:gap-10">
            <div>
              <h2 className="font-serif text-4xl lg:text-5xl mb-4 lg:mb-6 leading-tight">Questions about<br className="hidden lg:block"/> quality at LMI?</h2>
              <p className="text-gray-400 text-[15px] lg:text-base max-w-xl">
                Contact us for information about quality policies, complaints and appeals, or learner support.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 shrink-0 w-full lg:w-auto">
              <Link href="/contact" className="bg-[#cc9a66] text-[#0a2230] px-8 py-4 text-sm font-bold hover:bg-[#b88554] transition flex items-center justify-center gap-2 text-center w-full sm:w-auto">
                Contact LMI →
              </Link>
              <Link href="/policies" className="border border-white text-white px-8 py-4 text-sm font-bold hover:bg-white hover:text-[#0a2230] transition text-center w-full sm:w-auto">
                Policies and statements
              </Link>
            </div>
          </div>
        </div>
      </section>

    </main>
  )
}