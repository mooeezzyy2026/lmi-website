import Link from 'next/link'

export default function HowToApply() {
  return (
    <main className="w-full font-sans">
    
      <section className="bg-[#0a2230] text-white pt-24 pb-32 px-6 lg:px-8 relative overflow-hidden">
       
        <div className="absolute top-0 right-0 w-[50%] h-[150%] bg-[#061822] rounded-bl-[100%] z-0 pointer-events-none opacity-50"></div>
        
        <div className="max-w-[1200px] mx-auto relative z-10 grid lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          
          <div className="lg:col-span-8">
            <div className="flex flex-col gap-6 mb-10">
              <p className="text-white/60 text-[13px] tracking-wide">
                <Link href="/" className="hover:text-white transition">Home</Link> &gt; <Link href="/admissions" className="hover:text-white transition">Admissions</Link> &gt; How to Apply
              </p>
              <div className="flex items-center gap-4">
                <div className="h-[1px] w-12 bg-[#cc9a66]"></div>
                <p className="text-white/80 font-bold tracking-[0.2em] text-[11px] uppercase">Lifecare Medical Institute</p>
              </div>
            </div>
            
            <h1 className="font-serif text-[44px] sm:text-[56px] lg:text-[64px] leading-[1.05] tracking-tight mb-6">
              How to Apply
            </h1>
            
            <p className="text-gray-300 leading-[1.8] text-[15px] lg:text-[17px] max-w-[650px]">
              Follow a clear application process and check that your chosen programme is currently running and accepting applications.
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
        <div className="max-w-[1200px] mx-auto">
          
          <div className="flex items-center gap-4 mb-6">
            <div className="h-[1px] w-12 bg-[#cc9a66]"></div>
            <p className="text-[#187965] font-bold tracking-[0.2em] text-[11px] uppercase">Your Application</p>
          </div>
          
          <h2 className="font-serif text-[36px] lg:text-[44px] text-[#0a2230] leading-[1.15] tracking-tight mb-16">
            Six steps to apply
          </h2>

        
          <div className="border border-gray-100 shadow-sm bg-white">
            
          
            <div className="grid grid-cols-1 md:grid-cols-2 border-b border-gray-100">
              <div className="p-8 lg:p-12 flex gap-6 md:border-r border-gray-100">
                <span className="text-[#187965] font-serif text-[24px] lg:text-[28px] leading-none mt-1">01</span>
                <div>
                  <h3 className="font-serif text-[20px] lg:text-[22px] text-[#0a2230] mb-3 font-bold">Choose your programme</h3>
                  <p className="text-gray-600 text-[14px] lg:text-[15px] leading-relaxed">
                    Check that the programme is currently running and applications are open for the intake you want.
                  </p>
                </div>
              </div>
              <div className="p-8 lg:p-12 flex gap-6 border-t md:border-t-0 border-gray-100">
                <span className="text-[#187965] font-serif text-[24px] lg:text-[28px] leading-none mt-1">02</span>
                <div>
                  <h3 className="font-serif text-[20px] lg:text-[22px] text-[#0a2230] mb-3 font-bold">Review the details</h3>
                  <p className="text-gray-600 text-[14px] lg:text-[15px] leading-relaxed">
                    Read the entry requirements, fees, study arrangements and programme status.
                  </p>
                </div>
              </div>
            </div>

         
            <div className="grid grid-cols-1 md:grid-cols-2 border-b border-gray-100">
              <div className="p-8 lg:p-12 flex gap-6 md:border-r border-gray-100">
                <span className="text-[#187965] font-serif text-[24px] lg:text-[28px] leading-none mt-1">03</span>
                <div>
                  <h3 className="font-serif text-[20px] lg:text-[22px] text-[#0a2230] mb-3 font-bold">Prepare your documents</h3>
                  <p className="text-gray-600 text-[14px] lg:text-[15px] leading-relaxed">
                    Gather the required academic, identification and supporting evidence.
                  </p>
                </div>
              </div>
              <div className="p-8 lg:p-12 flex gap-6 border-t md:border-t-0 border-gray-100">
                <span className="text-[#187965] font-serif text-[24px] lg:text-[28px] leading-none mt-1">04</span>
                <div>
                  <h3 className="font-serif text-[20px] lg:text-[22px] text-[#0a2230] mb-3 font-bold">Submit or ask for guidance</h3>
                  <p className="text-gray-600 text-[14px] lg:text-[15px] leading-relaxed">
                    Complete the application process or contact Admissions if you need help.
                  </p>
                </div>
              </div>
            </div>

           
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-8 lg:p-12 flex gap-6 md:border-r border-gray-100">
                <span className="text-[#187965] font-serif text-[24px] lg:text-[28px] leading-none mt-1">05</span>
                <div>
                  <h3 className="font-serif text-[20px] lg:text-[22px] text-[#0a2230] mb-3 font-bold">Respond to requests</h3>
                  <p className="text-gray-600 text-[14px] lg:text-[15px] leading-relaxed">
                    Provide further evidence or attend an interview if the programme requires it.
                  </p>
                </div>
              </div>
              <div className="p-8 lg:p-12 flex gap-6 border-t md:border-t-0 border-gray-100">
                <span className="text-[#187965] font-serif text-[24px] lg:text-[28px] leading-none mt-1">06</span>
                <div>
                  <h3 className="font-serif text-[20px] lg:text-[22px] text-[#0a2230] mb-3 font-bold">Review your offer</h3>
                  <p className="text-gray-600 text-[14px] lg:text-[15px] leading-relaxed">
                    Read every condition carefully before accepting your place.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

     
      <section className="bg-[#f9f8f4] py-20 lg:py-32 px-6 lg:px-8">
        <div className="max-w-[1200px] mx-auto grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          <div className="lg:col-span-5">
            <h2 className="font-serif text-[32px] lg:text-[40px] text-[#0a2230] leading-[1.15] tracking-tight">
              Prepare your documents
            </h2>
          </div>
          
          <div className="lg:col-span-7 flex flex-col justify-center pt-2 lg:pt-4">
            <ul className="space-y-6 text-gray-700 text-[15px] lg:text-[16px]">
              <li className="flex items-start gap-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-[#187965] shrink-0"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>
                Current identification and contact details
              </li>
              <li className="flex items-start gap-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-[#187965] shrink-0"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>
                Academic certificates, transcripts or result evidence
              </li>
              <li className="flex items-start gap-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-[#187965] shrink-0"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>
                Any programme-specific evidence requested by Admissions
              </li>
              <li className="flex items-start gap-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-[#187965] shrink-0"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>
                Verified copies or translations where required
              </li>
            </ul>
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
              <h2 className="font-serif text-[32px] lg:text-[44px] leading-[1.1] tracking-tight mb-4">Need help with your application?</h2>
              <p className="text-gray-400 text-[15px] lg:text-[16px] max-w-xl">Contact the Admissions team before submitting if you are unsure about eligibility, documents or programme status.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 shrink-0 w-full lg:w-auto">
              <Link href="/contact" className="bg-[#cc9a66] text-[#0a2230] px-8 py-3.5 text-[14px] font-semibold hover:bg-[#b88554] transition flex items-center justify-center gap-2 text-center w-full sm:w-auto">
                Contact Admissions →
              </Link>
              <Link href="/schools/nursing-allied-health" className="border border-white text-white px-8 py-3.5 text-[14px] font-semibold hover:bg-white hover:text-[#0a2230] transition text-center w-full sm:w-auto">
                View current programmes
              </Link>
            </div>
          </div>
        </div>
      </section>

    </main>
  )
}