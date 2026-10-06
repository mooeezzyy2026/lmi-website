import Link from 'next/link'

export default function TuitionFees() {
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
                <Link href="/" className="hover:text-white transition">Home</Link> &gt; <Link href="/admissions" className="hover:text-white transition">Admissions</Link> &gt; Tuition Fees
              </p>
              <div className="flex items-center gap-4">
                <div className="h-[1px] w-12 bg-[#cc9a66]"></div>
                <p className="text-white/80 font-bold tracking-[0.2em] text-[11px] uppercase">Lifecare Medical Institute</p>
              </div>
            </div>
            
            <h1 className="font-serif text-[44px] sm:text-[56px] lg:text-[64px] leading-[1.05] tracking-tight mb-6">
              Tuition Fees
            </h1>
            
            <p className="text-gray-300 leading-[1.8] text-[15px] lg:text-[17px] max-w-[650px]">
              Tuition fees vary by programme and intake. Applicants receive confirmed information about tuition fees, payment arrangements and any additional programme costs before enrolment.
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

      {/* Clear Cost Information Box Section */}
      <section className="bg-white py-20 lg:py-32 px-6 lg:px-8">
        <div className="max-w-[1000px] mx-auto">
          <div className="border border-gray-100 shadow-sm bg-white p-8 lg:p-16 flex flex-col md:flex-row gap-8 lg:gap-12 items-start border-l-[4px] border-l-[#187965]">
            
            {/* Icon */}
            <div className="shrink-0 p-4 bg-teal-50 text-[#187965] rounded">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
              </svg>
            </div>
            
            {/* Content */}
            <div className="flex-grow">
              <div className="flex items-center gap-4 mb-4">
                <div className="h-[1px] w-8 bg-[#cc9a66]"></div>
                <p className="text-[#187965] font-bold tracking-[0.2em] text-[10px] lg:text-[11px] uppercase">Clear cost information</p>
              </div>
              
              <h2 className="font-serif text-[28px] lg:text-[36px] text-[#0a2230] leading-[1.15] tracking-tight mb-6">
                Know the full cost before you enrol
              </h2>
              
              <div className="space-y-6 text-gray-700 text-[14px] lg:text-[15px] leading-[1.8] mb-10">
                <p>
                  Tuition fees vary by programme and intake. Applicants receive confirmed information about tuition fees, payment arrangements and any additional programme costs before enrolment.
                </p>
                <p>
                  Contact Admissions for the current fee schedule for BS Nursing, Certified Nursing Assistant (CNA) or Lady Health Visitor (LHV).
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="bg-[#0a2230] text-white px-8 py-3.5 text-[14px] font-semibold hover:bg-gray-800 transition text-center">
                  Contact Admissions
                </Link>
                {/* Updated Link to Point to Nursing Allied Health */}
                <Link href="/schools/nursing-allied-health" className="border border-gray-300 text-[#0a2230] px-8 py-3.5 text-[14px] font-semibold hover:bg-gray-50 transition text-center">
                  View programmes
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Use Current Information Section (Beige) */}
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

      {/* Call to Action Section */}
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