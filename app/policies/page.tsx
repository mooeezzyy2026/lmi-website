import Link from 'next/link'

export default function Policies() {
  return (
    <main className="w-full font-sans">
      
     
      <section className="bg-[#0a2230] text-white pt-24 pb-32 px-6 lg:px-8 relative overflow-hidden">
        
     
        <div className="absolute top-0 right-0 w-[50%] h-[150%] bg-[#061822] rounded-bl-[100%] z-0 pointer-events-none opacity-50"></div>
        
        <div className="max-w-[1200px] mx-auto relative z-10 grid lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          
          <div className="lg:col-span-8">
            <div className="flex flex-col gap-6 mb-10">
              <p className="text-white/60 text-[13px] tracking-wide">
                <Link className="hover:text-white transition" href="/">Home</Link> &gt; Policies and Statements
              </p>
              <div className="flex items-center gap-4">
                <div className="h-[1px] w-12 bg-[#cc9a66]"></div>
                <p className="text-white/80 font-bold tracking-[0.2em] text-[11px] uppercase">Lifecare Medical Institute</p>
              </div>
            </div>
            
            <h1 className="font-serif text-[44px] sm:text-[56px] lg:text-[64px] leading-[1.05] tracking-tight mb-6">
              Policies and Statements
            </h1>
            
            <p className="text-gray-300 leading-[1.8] text-[15px] lg:text-[17px] max-w-[650px]">
              This page brings together the institutional documents that support fair, safe and responsible practice at LMI.
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
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.666 3.888A2.25 2.25 0 0 0 13.562 2.25h-3.124a2.25 2.25 0 0 0-2.104 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 0 1-.75.75H9a.75.75 0 0 1-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 0 1-2.25 2.25H6.75A2.25 2.25 0 0 1 4.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 0 1 1.927-.184" />
              </svg>
            </div>
            
           
            <div className="flex-grow">
              
              <h2 className="font-serif text-[28px] lg:text-[36px] text-[#0a2230] leading-[1.15] tracking-tight mb-4">
                Approved documents
              </h2>
              
              <div className="space-y-6 text-gray-700 text-[14px] lg:text-[15px] leading-[1.8] max-w-2xl">
                <p>
                  Full policy documents will be published here after institutional approval and document-control checks. Contact LMI if you need the current approved version of a policy.
                </p>
              </div>
              
            </div>

          </div>
        </div>
      </section>

      
      <section className="bg-[#f9f8f4] py-0 px-6 lg:px-8 border-b border-gray-200">
        <div className="max-w-[1200px] mx-auto grid md:grid-cols-2">
          
          
          <div className="border-r-0 md:border-r border-b border-gray-200 p-10 lg:p-14">
            <p className="text-[#187965] font-bold tracking-[0.2em] text-[10px] lg:text-[11px] uppercase mb-4">Document</p>
            <h3 className="font-serif text-[22px] lg:text-[26px] text-[#0a2230] leading-[1.2] mb-4">Privacy Notice</h3>
            <p className="text-gray-600 text-[15px] leading-[1.7] mb-6 min-h-[48px]">
              How personal information is collected, used, retained and protected.
            </p>
            <Link className="text-[#187965] font-semibold text-[14px] hover:text-[#0f4d40] transition flex items-center gap-2" href="/contact">
              Request current document →
            </Link>
          </div>

         
          <div className="border-b border-gray-200 p-10 lg:p-14">
            <p className="text-[#187965] font-bold tracking-[0.2em] text-[10px] lg:text-[11px] uppercase mb-4">Document</p>
            <h3 className="font-serif text-[22px] lg:text-[26px] text-[#0a2230] leading-[1.2] mb-4">Cookie Policy</h3>
            <p className="text-gray-600 text-[15px] leading-[1.7] mb-6 min-h-[48px]">
              How this website uses essential and optional browser technologies.
            </p>
            <Link className="text-[#187965] font-semibold text-[14px] hover:text-[#0f4d40] transition flex items-center gap-2" href="/contact">
              Request current document →
            </Link>
          </div>

          
          <div className="border-r-0 md:border-r border-b border-gray-200 p-10 lg:p-14">
            <p className="text-[#187965] font-bold tracking-[0.2em] text-[10px] lg:text-[11px] uppercase mb-4">Document</p>
            <h3 className="font-serif text-[22px] lg:text-[26px] text-[#0a2230] leading-[1.2] mb-4">Accessibility Statement</h3>
            <p className="text-gray-600 text-[15px] leading-[1.7] mb-6 min-h-[48px]">
              LMI's approach to making digital information usable by as many people as possible.
            </p>
            <Link className="text-[#187965] font-semibold text-[14px] hover:text-[#0f4d40] transition flex items-center gap-2" href="/contact">
              Request current document →
            </Link>
          </div>

       
          <div className="border-b border-gray-200 p-10 lg:p-14">
            <p className="text-[#187965] font-bold tracking-[0.2em] text-[10px] lg:text-[11px] uppercase mb-4">Document</p>
            <h3 className="font-serif text-[22px] lg:text-[26px] text-[#0a2230] leading-[1.2] mb-4">Complaints and Appeals</h3>
            <p className="text-gray-600 text-[15px] leading-[1.7] mb-6 min-h-[48px]">
              Routes for raising a concern or requesting a review of an academic decision.
            </p>
            <Link className="text-[#187965] font-semibold text-[14px] hover:text-[#0f4d40] transition flex items-center gap-2" href="/contact">
              Request current document →
            </Link>
          </div>

        
          <div className="border-r-0 md:border-r border-b md:border-b-0 border-gray-200 p-10 lg:p-14">
            <p className="text-[#187965] font-bold tracking-[0.2em] text-[10px] lg:text-[11px] uppercase mb-4">Document</p>
            <h3 className="font-serif text-[22px] lg:text-[26px] text-[#0a2230] leading-[1.2] mb-4">Safeguarding</h3>
            <p className="text-gray-600 text-[15px] leading-[1.7] mb-6 min-h-[48px]">
              Responsibilities and routes for reporting a safeguarding concern.
            </p>
            <Link className="text-[#187965] font-semibold text-[14px] hover:text-[#0f4d40] transition flex items-center gap-2" href="/contact">
              Request current document →
            </Link>
          </div>

        
          <div className="border-b md:border-b-0 border-gray-200 p-10 lg:p-14">
            <p className="text-[#187965] font-bold tracking-[0.2em] text-[10px] lg:text-[11px] uppercase mb-4">Document</p>
            <h3 className="font-serif text-[22px] lg:text-[26px] text-[#0a2230] leading-[1.2] mb-4">Equality and Inclusion</h3>
            <p className="text-gray-600 text-[15px] leading-[1.7] mb-6 min-h-[48px]">
              Commitments that support fair access, participation, dignity and respect.
            </p>
            <Link className="text-[#187965] font-semibold text-[14px] hover:text-[#0f4d40] transition flex items-center gap-2" href="/contact">
              Request current document →
            </Link>
          </div>

     
          <div className="border-r-0 md:border-r border-t border-gray-200 p-10 lg:p-14 col-span-1">
            <p className="text-[#187965] font-bold tracking-[0.2em] text-[10px] lg:text-[11px] uppercase mb-4">Document</p>
            <h3 className="font-serif text-[22px] lg:text-[26px] text-[#0a2230] leading-[1.2] mb-4">Terms of Use</h3>
            <p className="text-gray-600 text-[15px] leading-[1.7] mb-6 min-h-[48px]">
              Conditions for responsible use of this website and its information.
            </p>
            <Link className="text-[#187965] font-semibold text-[14px] hover:text-[#0f4d40] transition flex items-center gap-2" href="/contact">
              Request current document →
            </Link>
          </div>
          
         
          <div className="border-t border-gray-200 p-10 lg:p-14 hidden md:block"></div>

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
              <h2 className="font-serif text-[32px] lg:text-[44px] leading-[1.1] tracking-tight mb-4">Need a policy or want to raise a concern?</h2>
              <p className="text-gray-400 text-[15px] lg:text-[16px] max-w-xl">Contact LMI and your enquiry will be directed to the appropriate team.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 shrink-0 w-full lg:w-auto">
              <Link className="bg-[#cc9a66] text-[#0a2230] px-8 py-3.5 text-[14px] font-semibold hover:bg-[#b88554] transition flex items-center justify-center gap-2 text-center w-full sm:w-auto" href="/contact">
                Contact LMI →
              </Link>
            </div>
          </div>
        </div>
      </section>

    </main>
  )
}