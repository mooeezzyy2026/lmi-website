import Link from 'next/link'

export default function AboutPage() {
  return (
    <main className="w-full">
      
      
      <section className="bg-[#0a2230] text-white pt-24 pb-32 px-6 lg:px-8 relative overflow-hidden">
        
        <div className="absolute top-0 right-0 w-[50%] h-[150%] bg-[#081a25] rounded-bl-[100%] z-0 pointer-events-none opacity-50"></div>
        
        <div className="max-w-[1400px] mx-auto relative z-10 grid lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          
          <div className="lg:col-span-7">
            <div className="flex items-center gap-4 mb-10">
              <div className="h-[1px] w-12 bg-white/40"></div>
              <p className="text-white/60 font-bold tracking-[0.2em] text-[11px] uppercase">Lifecare Medical Institute</p>
            </div>
            
            <h1 className="font-serif text-[48px] sm:text-[64px] lg:text-[76px] leading-[1.05] tracking-tight mb-8">
              About LMI
            </h1>
            
            <p className="text-gray-300 leading-[1.8] text-[16px] lg:text-[18px] max-w-2xl">
              Lifecare Medical Institute is an educational institution based in Peshawar. We provide and develop programmes that combine academic learning, practical experience and professional preparation.
            </p>
          </div>
          
          <div className="lg:col-span-4 lg:col-start-9 border-l border-white/20 pl-8 lg:pl-12 mt-12 lg:mt-32">
            <h2 className="font-serif text-[28px] lg:text-[34px] leading-tight mb-4">Lifecare Medical<br/>Institute</h2>
            <p className="text-[#cc9a66] font-bold tracking-[0.15em] text-[10px] lg:text-[11px] uppercase">
              Professional & Higher<br/>Education
            </p>
          </div>
          
        </div>
      </section>
      <section className="bg-white py-20 lg:py-32 px-6 lg:px-8">
        <div className="max-w-[1400px] mx-auto grid lg:grid-cols-12 gap-12 lg:gap-16">
          
          <div className="lg:col-span-5">
            <div className="flex items-center gap-4 mb-8">
              <div className="h-[1px] w-12 bg-[#cc9a66]"></div>
              <p className="text-[#187965] font-bold tracking-[0.2em] text-[11px] uppercase">Who we are</p>
            </div>
            <h2 className="font-serif text-[36px] lg:text-[48px] text-[#0a2230] leading-[1.15] tracking-tight">
              Opportunity,<br/>standards and support
            </h2>
          </div>
          
          <div className="lg:col-span-7 lg:pl-12 flex flex-col justify-center space-y-6">
            <p className="text-gray-700 text-[15px] lg:text-[16px] leading-[1.8]">
              LMI brings together teaching, student support and practical learning within a developing academic community. We place students at the centre of our work and aim to create an environment where they can build knowledge, confidence and professional responsibility.
            </p>
            <p className="text-gray-700 text-[15px] lg:text-[16px] leading-[1.8]">
              Our approach is shaped by academic quality, ethical practice, effective governance and engagement with employers, professional communities and education partners.
            </p>
          </div>
          
        </div>
      </section>

    
      <section className="bg-[#f9f8f4] py-20 lg:py-32 px-6 lg:px-8">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          
  
          <article className="bg-white p-8 lg:p-12 border border-gray-100 border-t-[3px] border-t-[#187965] shadow-sm hover:shadow-md transition">
            <div className="h-12 w-12 bg-teal-50 rounded flex items-center justify-center mb-8 text-[#187965]">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" /></svg>
            </div>
            <h3 className="font-serif text-[22px] lg:text-[26px] font-semibold text-[#0a2230] leading-[1.25] mb-4">Our educational approach</h3>
            <p className="text-gray-600 text-[14px] lg:text-[15px] leading-[1.7]">
              Programmes connect knowledge with practice through clear outcomes, structured teaching, fair assessment and appropriate academic support.
            </p>
          </article>
          
        
          <article className="bg-white p-8 lg:p-12 border border-gray-100 border-t-[3px] border-t-[#187965] shadow-sm hover:shadow-md transition">
            <div className="h-12 w-12 bg-teal-50 rounded flex items-center justify-center mb-8 text-[#187965]">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>
            </div>
            <h3 className="font-serif text-[22px] lg:text-[26px] font-semibold text-[#0a2230] leading-[1.25] mb-4">Institutional status</h3>
            <p className="text-gray-600 text-[14px] lg:text-[15px] leading-[1.7]">
              LMI is a developing institution. Provision is introduced in phases after relevant academic, regulatory and operational requirements are addressed.
            </p>
          </article>
          
       
          <article className="bg-white p-8 lg:p-12 border border-gray-100 border-t-[3px] border-t-[#187965] shadow-sm hover:shadow-md transition">
            <div className="h-12 w-12 bg-teal-50 rounded flex items-center justify-center mb-8 text-[#187965]">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" /></svg>
            </div>
            <h3 className="font-serif text-[22px] lg:text-[26px] font-semibold text-[#0a2230] leading-[1.25] mb-4">Looking ahead</h3>
            <p className="text-gray-600 text-[14px] lg:text-[15px] leading-[1.7]">
              Development is guided by student demand, workforce needs, institutional capacity and evidence from quality review.
            </p>
          </article>
          
        </div>
      </section>

      <section className="bg-white py-20 lg:py-32 px-6 lg:px-8 border-b border-gray-100">
        <div className="max-w-[1400px] mx-auto grid lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-5">
            <h2 className="font-serif text-[36px] lg:text-[44px] text-[#0a2230] leading-[1.15] tracking-tight">
              Clear information,<br/>responsibly published
            </h2>
          </div>
          <div className="lg:col-span-7 lg:pl-12 flex flex-col justify-center">
            <p className="text-gray-700 text-[15px] lg:text-[16px] leading-[1.8] max-w-2xl">
              Every programme page states its current approval, affiliation and application status. New subject areas, qualifications and partnerships are announced only when the relevant arrangements and approvals are confirmed.
            </p>
          </div>
        </div>
      </section>

  
      <section className="bg-[#0b1828] text-white py-20 lg:py-32 border-b border-gray-800 px-6 lg:px-8">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <div className="h-[1px] w-12 bg-[#cc9a66]"></div>
            <p className="text-gray-400 font-bold tracking-[0.2em] text-[11px] uppercase">Your next step</p>
          </div>
          
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 lg:gap-10">
            <div>
              <h2 className="font-serif text-[36px] lg:text-[48px] leading-[1.1] tracking-tight mb-6">Explore what guides LMI</h2>
              <p className="text-gray-400 text-[15px] lg:text-[16px] max-w-xl">Read our vision and values or learn how leadership and academic oversight support the institution.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 shrink-0 w-full lg:w-auto">
              <Link href="/partnerships" className="bg-[#cc9a66] text-[#0a2230] px-8 py-4 text-[14px] font-semibold hover:bg-[#b88554] transition flex items-center justify-center gap-2 text-center w-full sm:w-auto">
                Vision, Mission and Values →
              </Link>
              <Link href="/governance" className="border border-white text-white px-8 py-4 text-[14px] font-semibold hover:bg-white hover:text-[#0a2230] transition text-center w-full sm:w-auto">
                Leadership and Governance
              </Link>
            </div>
          </div>
        </div>
      </section>

    </main>
  )
}