import Link from 'next/link'

export default function TuitionFeesPage() {
  return (
    <main className="w-full bg-[#f9f8f4]">
      
      {/* Hero Section */}
      <section className="bg-[#0a2230] text-white pt-12 pb-32 lg:pt-20 lg:pb-48 px-6 lg:px-8 relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-12 relative z-10">
          <div>
            {/* Breadcrumb */}
            <div className="text-xs text-gray-400 mb-12 flex items-center gap-2 flex-wrap">
              <Link href="/" className="hover:text-white transition">Home</Link> 
              <span>&gt;</span> 
              <Link href="/admissions" className="hover:text-white transition">Admissions</Link>
              <span>&gt;</span>
              <span className="text-white">Tuition Fees</span>
            </div>
            
            <div className="flex items-center gap-4 mb-6">
              <div className="h-[1px] w-8 bg-[#cc9a66]"></div>
              <p className="text-gray-300 font-bold tracking-widest text-[10px] lg:text-xs uppercase">Lifecare Medical Institute</p>
            </div>
            
            <h1 className="font-serif text-5xl lg:text-7xl mb-8 leading-[1.1]">
              Tuition Fees
            </h1>
            
            <p className="text-lg lg:text-xl text-gray-300 max-w-lg leading-relaxed font-light">
              Tuition fees vary by programme and intake. Applicants receive confirmed information about tuition fees, payment arrangements and any additional programme costs before enrolment.
            </p>
          </div>
          
          {/* Abstract Graphic */}
          <div className="hidden lg:flex items-center justify-center relative w-full h-full">
             <div className="relative w-[320px] h-[320px] border-[1px] border-white/20 rounded-full flex items-center justify-center">
               <div className="absolute top-12 right-0 w-24 h-24 bg-[#cc9a66]"></div>
               <div className="w-[120%] h-[1px] bg-white/20 absolute -rotate-45"></div>
             </div>
          </div>
        </div>
      </section>

      {/* Overlapping Info Card */}
      <section className="px-6 lg:px-8 relative z-20 -mt-20 lg:-mt-32 pb-16 lg:pb-24">
        <div className="max-w-[1100px] mx-auto bg-white shadow-xl flex flex-col md:flex-row border border-gray-100 border-l-[4px] border-l-[#187965]">
          
          {/* Left Icon Panel */}
          <div className="w-full md:w-[120px] lg:w-[160px] bg-white border-b md:border-b-0 md:border-r border-gray-100 flex items-start justify-center pt-8 md:pt-12 pb-6 md:pb-0 shrink-0">
             <div className="w-12 h-12 bg-teal-50 rounded flex items-center justify-center text-[#187965]">
                {/* Document/List Icon */}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                </svg>
             </div>
          </div>
          
          {/* Right Text Panel */}
          <div className="p-8 lg:p-16 flex-1">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-[1px] w-8 bg-[#cc9a66]"></div>
              <p className="text-[#187965] font-bold tracking-widest text-xs uppercase">Clear cost information</p>
            </div>
            
            <h2 className="font-serif text-3xl lg:text-4xl text-[#0a2230] leading-tight mb-6">
              Know the full cost before you enrol
            </h2>
            
            <div className="text-gray-600 text-[15px] leading-relaxed space-y-6 mb-10 max-w-3xl">
              <p>
                Tuition fees vary by programme and intake. Applicants receive confirmed information about tuition fees, payment arrangements and any additional programme costs before enrolment.
              </p>
              <p>
                Contact Admissions for the current fee schedule for BS Nursing, Certified Nursing Assistant (CNA) or Lady Health Visitor (LHV).
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="bg-[#0a2230] text-white px-8 py-3.5 text-sm font-bold hover:bg-gray-800 transition text-center">
                Contact Admissions
              </Link>
              {/* UPDATED LINK HERE */}
              <Link href="/schools/nursing-allied-health" className="border border-gray-300 text-[#0a2230] px-8 py-3.5 text-sm font-bold hover:bg-gray-50 transition text-center">
                View programmes
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Use Current Information Section */}
      <section className="bg-[#f9f8f4] pt-8 pb-24 lg:pb-32 px-6 lg:px-8">
        <div className="max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-8 lg:gap-24 items-start">
          <h2 className="font-serif text-4xl lg:text-5xl text-[#0a2230] leading-tight">
            Use current,<br/>confirmed information
          </h2>
          <div className="text-gray-600 text-[15px] leading-relaxed max-w-xl lg:mt-2">
            <p>
              Admissions information may change between intakes. Check the relevant programme status and obtain written confirmation from LMI before making an application or payment.
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
              <h2 className="font-serif text-4xl lg:text-5xl mb-4 lg:mb-6 leading-tight">Explore admissions at LMI</h2>
              <p className="text-gray-400 text-[15px] lg:text-base max-w-xl">
                Return to the Admissions page for application guidance and access to all admissions information.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 shrink-0 w-full lg:w-auto">
              <Link href="/admissions" className="bg-[#cc9a66] text-[#0a2230] px-8 py-4 text-sm font-bold hover:bg-[#b88554] transition flex items-center justify-center gap-2 text-center w-full sm:w-auto">
                Admissions →
              </Link>
              <Link href="/admissions/how-to-apply" className="border border-white text-white px-8 py-4 text-sm font-bold hover:bg-white hover:text-[#0a2230] transition text-center w-full sm:w-auto">
                How to Apply
              </Link>
            </div>
          </div>
        </div>
      </section>

    </main>
  )
}