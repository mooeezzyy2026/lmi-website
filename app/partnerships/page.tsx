import Link from 'next/link'

export default function Partnerships() {
  return (
    <main className="w-full font-sans">
      
      {/* Hero Header Section */}
      <section className="bg-[#0a2230] text-white pt-24 pb-20 px-6 lg:px-8 relative overflow-hidden">
        
        {/* Subtle decorative background shape */}
        <div className="absolute top-0 right-0 w-[50%] h-[150%] bg-[#061822] rounded-bl-[100%] z-0 pointer-events-none opacity-50"></div>
        
        <div className="max-w-[1200px] mx-auto relative z-10 grid lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          
          <div className="lg:col-span-8">
            <div className="flex flex-col gap-6 mb-10">
              <p className="text-white/60 text-[13px] tracking-wide">
                <Link href="/" className="hover:text-white transition">Home</Link> &gt; Partnerships
              </p>
              <div className="flex items-center gap-4">
                <div className="h-[1px] w-12 bg-[#cc9a66]"></div>
                <p className="text-white/80 font-bold tracking-[0.2em] text-[11px] uppercase">Lifecare Medical Institute</p>
              </div>
            </div>
            
            <h1 className="font-serif text-[44px] sm:text-[56px] lg:text-[64px] leading-[1.05] tracking-tight mb-6">
              Partnerships
            </h1>
            
            <p className="text-gray-300 leading-[1.8] text-[15px] lg:text-[17px] max-w-[700px]">
              Strong partnerships can extend opportunity, strengthen learning and connect education with employment and further study. LMI develops relationships that have a clear purpose and provide demonstrable benefit to students.
            </p>
          </div>
          
          {/* Right side standardized branding block (Replacing the incorrect geometric circle/square) */}
          <div className="lg:col-span-4 lg:col-start-9 border-l-[2px] border-[#cc9a66] pl-6 lg:pl-10 mt-8 lg:mt-32">
            <h2 className="font-serif text-[24px] lg:text-[30px] leading-[1.2] mb-3">Lifecare Medical<br/>Institute</h2>
            <p className="text-[#cc9a66] font-bold tracking-[0.15em] text-[10px] lg:text-[11px] uppercase">
              Professional & Higher<br/>Education
            </p>
          </div>
          
        </div>
      </section>

      {/* 3 Info Cards Section (No Overlap) */}
      <section className="bg-white py-16 lg:py-24 px-6 lg:px-8">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          
          {/* Card 1: Academic and awarding partnerships */}
          <article className="bg-white p-8 lg:p-10 border border-gray-100 border-t-[3px] border-t-[#187965] shadow-sm">
            <div className="h-12 w-12 bg-teal-50 flex items-center justify-center rounded text-[#187965] mb-8">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" /></svg>
            </div>
            <h3 className="font-serif text-[22px] lg:text-[26px] text-[#0a2230] leading-[1.25] mb-4">Academic and awarding partnerships</h3>
            <p className="text-gray-600 text-[14px] lg:text-[15px] leading-[1.7]">
              LMI works with appropriate universities and awarding organisations where formal arrangements are confirmed. Published information identifies the exact partner, award, responsibilities and status.
            </p>
          </article>
          
          {/* Card 2: Employer and professional engagement */}
          <article className="bg-white p-8 lg:p-10 border border-gray-100 border-t-[3px] border-t-[#187965] shadow-sm">
            <div className="h-12 w-12 bg-teal-50 flex items-center justify-center rounded text-[#187965] mb-8">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z" /></svg>
            </div>
            <h3 className="font-serif text-[22px] lg:text-[26px] text-[#0a2230] leading-[1.25] mb-4">Employer and professional engagement</h3>
            <p className="text-gray-600 text-[14px] lg:text-[15px] leading-[1.7]">
              Engagement with employers and professional communities helps LMI understand changing workforce needs and create opportunities for applied learning and progression.
            </p>
          </article>

          {/* Card 3: Practical learning partnerships */}
          <article className="bg-white p-8 lg:p-10 border border-gray-100 border-t-[3px] border-t-[#187965] shadow-sm">
            <div className="h-12 w-12 bg-teal-50 flex items-center justify-center rounded text-[#187965] mb-8">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" /></svg>
            </div>
            <h3 className="font-serif text-[22px] lg:text-[26px] text-[#0a2230] leading-[1.25] mb-4">Practical learning partnerships</h3>
            <p className="text-gray-600 text-[14px] lg:text-[15px] leading-[1.7]">
              Where programmes include practical, clinical or work-based learning, safety, supervision, capacity and assessment responsibilities are agreed before activity begins.
            </p>
          </article>

        </div>
      </section>

      {/* A Purposeful Approach Section (Beige) */}
      <section className="bg-[#f9f8f4] py-20 lg:py-32 px-6 lg:px-8">
        <div className="max-w-[1200px] mx-auto grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          <div className="lg:col-span-5">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-[1px] w-12 bg-[#cc9a66]"></div>
              <p className="text-[#187965] font-bold tracking-[0.2em] text-[11px] uppercase">Work With Us</p>
            </div>
            
            <h2 className="font-serif text-[36px] lg:text-[44px] text-[#0a2230] leading-[1.15] tracking-tight">
              A purposeful approach<br/>to collaboration
            </h2>
          </div>
          
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6 pt-2 lg:pt-12">
            <p className="text-gray-700 text-[15px] lg:text-[16px] leading-[1.8]">
              We welcome enquiries from organisations interested in academic collaboration, staff development, employer engagement, practical learning or community activity.
            </p>
            <p className="text-gray-700 text-[15px] lg:text-[16px] leading-[1.8]">
              Partners and awarding organisations are named publicly only after the relevant relationship and responsibilities are formally confirmed.
            </p>
          </div>
          
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-[#0b1828] text-white py-20 lg:py-32 border-b border-gray-800 px-6 lg:px-8">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <div className="h-[1px] w-12 bg-[#cc9a66]"></div>
            <p className="text-gray-400 font-bold tracking-[0.2em] text-[11px] uppercase">Your next step</p>
          </div>
          
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 lg:gap-10">
            <div>
              <h2 className="font-serif text-[32px] lg:text-[44px] leading-[1.1] tracking-tight mb-4">Start a partnership conversation</h2>
              <p className="text-gray-400 text-[15px] lg:text-[16px] max-w-xl">Tell us about your organisation and the opportunity you would like to explore.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 shrink-0 w-full lg:w-auto">
              <Link href="/contact" className="bg-[#cc9a66] text-[#0a2230] px-8 py-3.5 text-[14px] font-semibold hover:bg-[#b88554] transition flex items-center justify-center gap-2 text-center w-full sm:w-auto">
                Become a Partner →
              </Link>
              <Link href="/about" className="border border-white text-white px-8 py-3.5 text-[14px] font-semibold hover:bg-white hover:text-[#0a2230] transition text-center w-full sm:w-auto">
                About LMI
              </Link>
            </div>
          </div>
        </div>
      </section>

    </main>
  )
}