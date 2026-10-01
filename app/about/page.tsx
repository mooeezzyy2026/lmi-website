import Link from 'next/link'

export default function AboutPage() {
  return (
    <main className="w-full">
      
      {/* Hero Section */}
      <section className="bg-[#0a2230] text-white pt-12 pb-24 lg:pt-20 lg:pb-32 px-6 lg:px-8 relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-12 relative z-10">
          <div>
            {/* Breadcrumb */}
            <div className="text-xs text-gray-400 mb-12 flex items-center gap-2">
              <Link href="/" className="hover:text-white transition">Home</Link> 
              <span>&gt;</span> 
              <span className="text-white">About LMI</span>
            </div>
            
            <div className="flex items-center gap-4 mb-6">
              <div className="h-[1px] w-8 bg-[#cc9a66]"></div>
              <p className="text-gray-300 font-bold tracking-widest text-[10px] lg:text-xs uppercase">Lifecare Medical Institute</p>
            </div>
            
            <h1 className="font-serif text-5xl lg:text-7xl mb-8">About LMI</h1>
            
            <p className="text-lg lg:text-xl text-gray-300 max-w-lg leading-relaxed font-light">
              Lifecare Medical Institute is an educational institution based in Peshawar. We provide and develop programmes that combine academic learning, practical experience and professional preparation.
            </p>
          </div>
          
          {/* Abstract Graphic representing the screenshot */}
          <div className="hidden lg:flex items-center justify-center relative">
             <div className="relative w-[280px] h-[280px] border-[1px] border-white/20 rounded-full flex items-center justify-center">
               <div className="absolute top-2 right-4 w-24 h-24 bg-[#cc9a66]"></div>
               <div className="w-full h-[1px] bg-white/20 absolute rotate-45"></div>
             </div>
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="bg-[#f9f8f4] pt-20 lg:pt-32 pb-12 lg:pb-16 px-6 lg:px-8">
        <div className="max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-12 lg:gap-24">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="h-[1px] w-8 bg-[#cc9a66]"></div>
              <p className="text-[#187965] font-bold tracking-widest text-xs uppercase">Who we are</p>
            </div>
            <h2 className="font-serif text-4xl lg:text-6xl text-[#0a2230] leading-[1.15]">
              Opportunity,<br/>standards<br/>and support
            </h2>
          </div>
          
          <div className="flex flex-col justify-center space-y-6 text-gray-700 text-sm lg:text-base leading-relaxed max-w-xl lg:mt-10">
            <p>
              LMI brings together teaching, student support and practical learning within a developing academic community. We place students at the centre of our work and aim to create an environment where they can build knowledge, confidence and professional responsibility.
            </p>
            <p>
              Our approach is shaped by academic quality, ethical practice, effective governance and engagement with employers, professional communities and education partners.
            </p>
          </div>
        </div>
      </section>

      {/* Information Cards Section */}
      <section className="bg-[#f9f8f4] py-12 px-6 lg:px-8">
        <div className="max-w-[1400px] mx-auto grid md:grid-cols-3 gap-6 lg:gap-8">
          <article className="bg-white p-8 lg:p-12 shadow-sm border border-gray-100">
            <div className="h-10 w-10 bg-teal-50/50 rounded flex items-center justify-center mb-8 text-[#187965] border border-teal-100">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
              </svg>
            </div>
            <h3 className="font-serif text-2xl text-[#0a2230] mb-4">Our educational approach</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Programmes connect knowledge with practice through clear outcomes, structured teaching, fair assessment and appropriate academic support.
            </p>
          </article>

          <article className="bg-white p-8 lg:p-12 shadow-sm border border-gray-100">
            <div className="h-10 w-10 bg-teal-50/50 rounded flex items-center justify-center mb-8 text-[#187965] border border-teal-100">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
            </div>
            <h3 className="font-serif text-2xl text-[#0a2230] mb-4">Institutional status</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              LMI is a developing institution. Provision is introduced in phases after relevant academic, regulatory and operational requirements are addressed.
            </p>
          </article>

          <article className="bg-white p-8 lg:p-12 shadow-sm border border-gray-100">
            <div className="h-10 w-10 bg-teal-50/50 rounded flex items-center justify-center mb-8 text-[#187965] border border-teal-100">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
              </svg>
            </div>
            <h3 className="font-serif text-2xl text-[#0a2230] mb-4">Looking ahead</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Development is guided by student demand, workforce needs, institutional capacity and evidence from quality review.
            </p>
          </article>
        </div>
      </section>

      {/* Clear Information Section */}
      <section className="bg-[#f9f8f4] pt-12 pb-24 lg:pb-32 px-6 lg:px-8">
        <div className="max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-8 lg:gap-24 items-start">
          <h2 className="font-serif text-4xl lg:text-6xl text-[#0a2230] leading-[1.15]">
            Clear<br/>information,<br/>responsibly<br/>published
          </h2>
          <div className="text-gray-700 text-sm lg:text-base leading-relaxed max-w-xl lg:mt-4">
            <p>
              Every programme page states its current approval, affiliation and application status. New subject areas, qualifications and partnerships are announced only when the relevant arrangements and approvals are confirmed.
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
              <h2 className="font-serif text-4xl lg:text-5xl mb-4 lg:mb-6 leading-tight">Explore what<br className="hidden lg:block"/> guides LMI</h2>
              <p className="text-gray-400 text-base lg:text-lg max-w-md">
                Read our vision and values or learn how leadership and academic oversight support the institution.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 shrink-0 w-full lg:w-auto">
              <Link href="/about/vision-mission-values" className="bg-[#cc9a66] text-[#0a2230] px-8 py-4 text-sm font-bold hover:bg-[#b88554] transition flex items-center justify-center gap-2 text-center w-full sm:w-auto">
                Vision, Mission and Values →
              </Link>
              <Link href="/about/leadership-governance" className="border border-white text-white px-8 py-4 text-sm font-bold hover:bg-white hover:text-[#0a2230] transition text-center w-full sm:w-auto">
                Leadership and Governance
              </Link>
            </div>
          </div>
        </div>
      </section>

    </main>
  )
}