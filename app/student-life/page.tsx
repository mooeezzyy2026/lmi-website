import Link from 'next/link'

export default function StudentLife() {
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
                <Link href="/" className="hover:text-white transition">Home</Link> &gt; Student Life
              </p>
              <div className="flex items-center gap-4">
                <div className="h-[1px] w-12 bg-[#cc9a66]"></div>
                <p className="text-white/80 font-bold tracking-[0.2em] text-[11px] uppercase">Lifecare Medical Institute</p>
              </div>
            </div>
            
            <h1 className="font-serif text-[44px] sm:text-[56px] lg:text-[64px] leading-[1.05] tracking-tight mb-6">
              Student Life at LMI
            </h1>
            
            <p className="text-gray-300 leading-[1.8] text-[15px] lg:text-[17px] max-w-2xl">
              Your experience at LMI is about more than completing a programme. We want students to feel welcomed, supported and able to participate fully in their learning and wider institutional life.
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

      {/* 4 Info Cards Grid Section */}
      <section className="bg-white py-20 lg:py-32 px-6 lg:px-8">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          
          {/* Card 1: Academic Support */}
          <article className="bg-white p-8 lg:p-12 border border-gray-100 border-t-[3px] border-t-[#187965] shadow-sm">
            <div className="h-12 w-12 bg-teal-50 border border-teal-100 flex items-center justify-center rounded text-[#187965] mb-8">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" /></svg>
            </div>
            <h3 className="font-serif text-[22px] lg:text-[26px] text-[#0a2230] leading-[1.25] mb-4">Academic support</h3>
            <p className="text-gray-600 text-[14px] lg:text-[15px] leading-[1.7]">
              Programme guidance, induction and access to teaching staff, with tutorials, study-skills guidance, progress reviews and assessment preparation where appropriate.
            </p>
          </article>
          
          {/* Card 2: Wellbeing and pastoral support */}
          <article className="bg-white p-8 lg:p-12 border border-gray-100 border-t-[3px] border-t-[#187965] shadow-sm">
            <div className="h-12 w-12 bg-teal-50 border border-teal-100 flex items-center justify-center rounded text-[#187965] mb-8">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" /></svg>
            </div>
            <h3 className="font-serif text-[22px] lg:text-[26px] text-[#0a2230] leading-[1.25] mb-4">Wellbeing and pastoral support</h3>
            <p className="text-gray-600 text-[14px] lg:text-[15px] leading-[1.7]">
              Students can seek guidance when personal circumstances, wellbeing or other barriers affect their studies, including routes to specialist support.
            </p>
          </article>

          {/* Card 3: Careers and progression */}
          <article className="bg-white p-8 lg:p-12 border border-gray-100 border-t-[3px] border-t-[#187965] shadow-sm">
            <div className="h-12 w-12 bg-teal-50 border border-teal-100 flex items-center justify-center rounded text-[#187965] mb-8">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z" /></svg>
            </div>
            <h3 className="font-serif text-[22px] lg:text-[26px] text-[#0a2230] leading-[1.25] mb-4">Careers and progression</h3>
            <p className="text-gray-600 text-[14px] lg:text-[15px] leading-[1.7]">
              Guidance, employer engagement, professional activity and planning help connect study with future employment and further learning.
            </p>
          </article>

          {/* Card 4: Student voice */}
          <article className="bg-white p-8 lg:p-12 border border-gray-100 border-t-[3px] border-t-[#187965] shadow-sm">
            <div className="h-12 w-12 bg-teal-50 border border-teal-100 flex items-center justify-center rounded text-[#187965] mb-8">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z" /></svg>
            </div>
            <h3 className="font-serif text-[22px] lg:text-[26px] text-[#0a2230] leading-[1.25] mb-4">Student voice</h3>
            <p className="text-gray-600 text-[14px] lg:text-[15px] leading-[1.7]">
              Surveys, representatives, tutorials, focus groups and everyday discussion help LMI understand what works and what needs to improve.
            </p>
          </article>
          
        </div>
      </section>

      {/* Safe and Inclusive Community Section */}
      <section className="bg-[#0a2230] text-white pt-20 pb-16 lg:pt-32 lg:pb-24 px-6 lg:px-8">
        <div className="max-w-[1200px] mx-auto grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-5">
                <h2 className="font-serif text-[36px] lg:text-[44px] leading-[1.15] tracking-tight">
                    A safe and inclusive<br/>community
                </h2>
            </div>
            <div className="lg:col-span-7 pt-2 lg:pt-4">
                <p className="text-gray-300 text-[14px] lg:text-[15px] leading-[1.8] max-w-2xl">
                    LMI expects students and staff to treat one another with dignity and respect. Our policies support safeguarding, equality, inclusion, academic integrity and responsible conduct. Feedback outcomes and agreed actions are communicated wherever possible.
                </p>
            </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-[#0b1828] text-white py-20 lg:py-32 px-6 lg:px-8 border-b border-gray-800">
        <div className="max-w-[1200px] mx-auto">
          {/* Subtle separator line to match the layout flow */}
          <div className="border-t border-white/10 pt-16 lg:pt-24">
            <div className="flex items-center gap-4 mb-8">
              <div className="h-[1px] w-12 bg-[#cc9a66]"></div>
              <p className="text-gray-400 font-bold tracking-[0.2em] text-[11px] uppercase">Your next step</p>
            </div>
            
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 lg:gap-10">
              <div>
                <h2 className="font-serif text-[32px] lg:text-[44px] leading-[1.1] tracking-tight mb-4">Discover your learning environment</h2>
                <p className="text-gray-400 text-[15px] lg:text-[16px] max-w-xl">Explore the campus facilities or contact us to arrange a visit.</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 shrink-0 w-full lg:w-auto">
                <Link href="/facilities" className="bg-[#cc9a66] text-[#0a2230] px-8 py-3.5 text-[14px] font-semibold hover:bg-[#b88554] transition flex items-center justify-center gap-2 text-center w-full sm:w-auto">
                  Campus and Facilities →
                </Link>
                <Link href="/contact" className="border border-white text-white px-8 py-3.5 text-[14px] font-semibold hover:bg-white hover:text-[#0a2230] transition text-center w-full sm:w-auto">
                  Contact LMI
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  )
}