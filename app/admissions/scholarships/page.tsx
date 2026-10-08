import Link from 'next/link'

export default function Scholarships() {
  return (
    <main className="w-full font-sans">
      
     
      <section className="bg-[#0a2230] text-white pt-24 pb-32 px-6 lg:px-8 relative overflow-hidden">
        
        
        <div className="absolute top-0 right-0 w-[50%] h-[150%] bg-[#061822] rounded-bl-[100%] z-0 pointer-events-none opacity-50"></div>
        
        <div className="max-w-[1200px] mx-auto relative z-10 grid lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          
          <div className="lg:col-span-8">
            <div className="flex flex-col gap-6 mb-10">
              <p className="text-white/60 text-[13px] tracking-wide">
                <Link href="/" className="hover:text-white transition">Home</Link> &gt; <Link href="/admissions" className="hover:text-white transition">Admissions</Link> &gt; Scholarships
              </p>
              <div className="flex items-center gap-4">
                <div className="h-[1px] w-12 bg-[#cc9a66]"></div>
                <p className="text-white/80 font-bold tracking-[0.2em] text-[11px] uppercase">Lifecare Medical Institute</p>
              </div>
            </div>
            
            <h1 className="font-serif text-[44px] sm:text-[56px] lg:text-[64px] leading-[1.05] tracking-tight mb-6">
              Scholarships
            </h1>
            
            <p className="text-gray-300 leading-[1.8] text-[15px] lg:text-[17px] max-w-[650px]">
              Any approved scholarship, fee support or financial assistance opportunity will state its eligibility criteria, application process, value and closing date.
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

     
      <section className="bg-white py-20 lg:py-32 px-6 lg:px-8">
        <div className="max-w-[1000px] mx-auto">
          <div className="border border-gray-100 shadow-sm bg-white p-8 lg:p-16 flex flex-col md:flex-row gap-8 lg:gap-12 items-start border-l-[4px] border-l-[#187965]">
            
         
            <div className="shrink-0 p-4 bg-teal-50 text-[#187965] rounded">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
              </svg>
            </div>
            
         
            <div className="flex-grow">
              <div className="flex items-center gap-4 mb-4">
                <div className="h-[1px] w-8 bg-[#cc9a66]"></div>
                <p className="text-[#187965] font-bold tracking-[0.2em] text-[10px] lg:text-[11px] uppercase">Financial support</p>
              </div>
              
              <h2 className="font-serif text-[28px] lg:text-[36px] text-[#0a2230] leading-[1.15] tracking-tight mb-6">
                Check current opportunities and eligibility
              </h2>
              
              <div className="space-y-6 text-gray-700 text-[14px] lg:text-[15px] leading-[1.8] mb-10">
                <p>
                  Any approved scholarship, fee support or financial assistance opportunity will state its eligibility criteria, application process, value and closing date.
                </p>
                <p>
                  Applicants should not assume that financial support is available until they have received written confirmation from LMI.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="bg-[#0a2230] text-white px-8 py-3.5 text-[14px] font-semibold hover:bg-gray-800 transition text-center">
                  Contact Admissions
                </Link>
                
                <Link href="/schools/nursing-allied-health" className="border border-gray-300 text-[#0a2230] px-8 py-3.5 text-[14px] font-semibold hover:bg-gray-50 transition text-center">
                  View programmes
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

    
      <section className="bg-[#f9f8f4] py-20 lg:py-32 px-6 lg:px-8">
        <div className="max-w-[1200px] mx-auto grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          <div className="lg:col-span-6">
            <h2 className="font-serif text-[32px] lg:text-[40px] text-[#0a2230] leading-[1.15] tracking-tight">
              Use current,<br />confirmed information
            </h2>
          </div>
          
          <div className="lg:col-span-6 flex flex-col justify-center pt-2 lg:pt-4">
            <p className="text-gray-700 text-[15px] lg:text-[16px] leading-[1.8]">
              Admissions information may change between intakes. Check the relevant programme status and obtain written confirmation from LMI before making an application or payment.
            </p>
          </div>
          
        </div>
      </section>

      
      <section className="bg-[#0b1828] text-white py-20 lg:py-32 border-b border-gray-800 px-6 lg:px-8">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <div className="h-[1px] w-12 bg-[#cc9a66]"></div>
            <p className="text-gray-400 font-bold tracking-[0.2em] text-[11px] uppercase">Your next step</p>
          </div>
          
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 lg:gap-10">
            <div>
              <h2 className="font-serif text-[32px] lg:text-[44px] leading-[1.1] tracking-tight mb-4">Explore admissions at LMI</h2>
              <p className="text-gray-400 text-[15px] lg:text-[16px] max-w-xl">Return to the Admissions page for application guidance and access to all admissions information.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 shrink-0 w-full lg:w-auto">
              <Link href="/admissions" className="bg-[#cc9a66] text-[#0a2230] px-8 py-3.5 text-[14px] font-semibold hover:bg-[#b88554] transition flex items-center justify-center gap-2 text-center w-full sm:w-auto">
                Admissions →
              </Link>
              <Link href="/admissions/how-to-apply" className="border border-white text-white px-8 py-3.5 text-[14px] font-semibold hover:bg-white hover:text-[#0a2230] transition text-center w-full sm:w-auto">
                How to Apply
              </Link>
            </div>
          </div>
        </div>
      </section>

    </main>
  )
}