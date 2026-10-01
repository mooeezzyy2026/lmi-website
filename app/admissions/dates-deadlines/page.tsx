import Link from 'next/link'

export default function DatesDeadlinesPage() {
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
              <span className="text-white">Dates & Deadlines</span>
            </div>
            
            <div className="flex items-center gap-4 mb-6">
              <div className="h-[1px] w-8 bg-[#cc9a66]"></div>
              <p className="text-gray-300 font-bold tracking-widest text-[10px] lg:text-xs uppercase">Lifecare Medical Institute</p>
            </div>
            
            <h1 className="font-serif text-5xl lg:text-7xl mb-8 leading-[1.1]">
              Dates & Deadlines
            </h1>
            
            <p className="text-lg lg:text-xl text-gray-300 max-w-lg leading-relaxed font-light">
              Application opening dates, closing dates, interviews, admissions decisions, enrolment and the start of teaching may vary by programme and intake.
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
                {/* Calendar Icon */}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5M9 15h.008v.008H9V15Zm0 2.25h.008v.008H9v-.008ZM11.25 15h.008v.008H11.25V15Zm0 2.25h.008v.008H11.25v-.008ZM13.5 15h.008v.008H13.5V15Zm0 2.25h.008v.008H13.5v-.008ZM15.75 15h.008v.008H15.75V15Zm0 2.25h.008v.008H15.75v-.008Z" />
                </svg>
             </div>
          </div>
          
          {/* Right Text Panel */}
          <div className="p-8 lg:p-16 flex-1">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-[1px] w-8 bg-[#cc9a66]"></div>
              <p className="text-[#187965] font-bold tracking-widest text-xs uppercase">Application planning</p>
            </div>
            
            <h2 className="font-serif text-3xl lg:text-4xl text-[#0a2230] leading-tight mb-6">
              Use confirmed dates for your chosen intake
            </h2>
            
            <div className="text-gray-600 text-[15px] leading-relaxed space-y-6 mb-10 max-w-3xl">
              <p>
                Application opening dates, closing dates, interviews, admissions decisions, enrolment and the start of teaching may vary by programme and intake.
              </p>
              <p>
                Only dates published by LMI or confirmed directly by Admissions should be used when planning an application.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="bg-[#0a2230] text-white px-8 py-3.5 text-sm font-bold hover:bg-gray-800 transition text-center">
                Contact Admissions
              </Link>
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