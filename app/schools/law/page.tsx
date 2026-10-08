import Link from 'next/link'

export default function LawSchool() {
  return (
    <main className="w-full font-sans">
      
      
      <section className="bg-[#0a2230] text-white pt-24 pb-32 px-6 lg:px-8 relative overflow-hidden">
        
       
        <div className="absolute top-0 right-0 w-[50%] h-[150%] bg-[#061822] rounded-bl-[100%] z-0 pointer-events-none opacity-50"></div>
        
        <div className="max-w-[1200px] mx-auto relative z-10 grid lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          
          <div className="lg:col-span-8">
            <div className="flex flex-col gap-6 mb-10">
              <p className="text-white/60 text-[13px] tracking-wide">
                <Link href="/" className="hover:text-white transition">Home</Link> &gt; <Link href="/schools" className="hover:text-white transition">Schools</Link> &gt; Law School
              </p>
              <div className="flex items-center gap-4">
                <div className="h-[1px] w-12 bg-[#cc9a66]"></div>
                <p className="text-white/80 font-bold tracking-[0.2em] text-[11px] uppercase">Lifecare Medical Institute</p>
              </div>
            </div>
            
            <h1 className="font-serif text-[44px] sm:text-[56px] lg:text-[64px] leading-[1.05] tracking-tight mb-6">
              Law School
            </h1>
            
            <p className="text-gray-300 leading-[1.8] text-[15px] lg:text-[17px] max-w-2xl">
              A planned school built around legal knowledge, ethical judgement, critical thinking and public responsibility.
            </p>
          </div>
          
          <div className="lg:col-span-4 lg:col-start-9 border-l-[2px] border-[#cc9a66] pl-6 lg:pl-10 mt-8 lg:mt-32">
            <h2 className="font-serif text-[24px] lg:text-[30px] leading-[1.2] mb-3">Lifecare Medical<br/>Institute</h2>
            <p className="text-[#cc9a66] font-bold tracking-[0.15em] text-[10px] lg:text-[11px] uppercase">
              Professional & Higher<br/>Education
            </p>
          </div>
          
        </div>
      </section>


      <section className="relative pt-16 pb-20 px-6 lg:px-8">
        
        <div className="absolute top-0 left-0 w-full h-[35%] bg-[#0a2230] z-0"></div>
        <div className="absolute top-[35%] left-0 w-full h-[65%] bg-white z-0"></div>

        <div className="max-w-[1200px] mx-auto relative z-10">
          
          
          <div className="w-full border border-gray-200 border-l-[4px] border-l-[#187965] p-8 lg:p-14 bg-[#f9f8f4] shadow-sm">
            
            <div className="flex items-center gap-6 mb-8">
             
              <div className="w-12 h-12 bg-white border border-[#187965]/20 flex flex-shrink-0 items-center justify-center rounded-sm text-[#187965]">
                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0 0 12 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52v8.625c0 2.872-2.328 5.25-5.25 5.25m13.5-13.875v8.625c0 2.872-2.328 5.25-5.25 5.25M4.5 4.97v8.625c0 2.872 2.328 5.25 5.25 5.25" /></svg>
              </div>
              
             
              <div className="flex items-center gap-4">
                <div className="h-[1px] w-12 bg-[#cc9a66]"></div>
                <p className="text-[#187965] font-bold tracking-[0.2em] text-[11px] uppercase">Planned School</p>
              </div>
            </div>
            
            <h2 className="font-serif text-[32px] lg:text-[40px] text-[#0a2230] leading-[1.15] tracking-tight mb-6">
              A planned academic development
            </h2>
            
            <div className="space-y-6 mb-10">
              <p className="text-gray-700 text-[15px] lg:text-[16px] leading-[1.8] max-w-4xl">
                Law School forms part of LMI's planned multidisciplinary development. Programme titles, awards and intake dates will be published only after the necessary academic, regulatory and operational arrangements are confirmed.
              </p>
              <p className="text-gray-700 text-[15px] lg:text-[16px] leading-[1.8] max-w-4xl">
                All LMI schools work within one institutional framework for governance, quality assurance, admissions, teaching, assessment, learner support and resource planning.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/schools" className="bg-[#0a2230] text-white px-8 py-3.5 text-[14px] font-semibold hover:bg-gray-800 transition flex items-center justify-center gap-2 text-center w-full sm:w-auto">
                View programme information
              </Link>
              <Link href="/contact" className="border border-gray-300 text-[#0a2230] px-8 py-3.5 text-[14px] font-semibold hover:bg-gray-50 transition text-center w-full sm:w-auto bg-white">
                Contact Admissions
              </Link>
            </div>
            
          </div>
        </div>
      </section>

     
      <section className="bg-[#0b1828] text-white pt-10 pb-20 lg:pt-16 lg:pb-32 border-b border-gray-800 px-6 lg:px-8">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <div className="h-[1px] w-12 bg-[#cc9a66]"></div>
            <p className="text-gray-400 font-bold tracking-[0.2em] text-[11px] uppercase">Your next step</p>
          </div>
          
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 lg:gap-10">
            <div>
              <h2 className="font-serif text-[32px] lg:text-[44px] leading-[1.1] tracking-tight mb-4">Explore LMI's academic structure</h2>
              <p className="text-gray-400 text-[15px] lg:text-[16px] max-w-xl">Return to the Schools page to view the current academic base and planned areas of development.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 shrink-0 w-full lg:w-auto">
              <Link href="/schools" className="bg-[#cc9a66] text-[#0a2230] px-8 py-3.5 text-[14px] font-semibold hover:bg-[#b88554] transition flex items-center justify-center gap-2 text-center w-full sm:w-auto">
                View all schools →
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