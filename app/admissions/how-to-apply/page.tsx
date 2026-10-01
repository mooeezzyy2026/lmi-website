import Link from 'next/link'

export default function HowToApplyPage() {
  return (
    <main className="w-full bg-white">
      
      {/* Hero Section */}
      <section className="bg-[#0a2230] text-white pt-12 pb-24 lg:pt-20 lg:pb-32 px-6 lg:px-8 relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-12 lg:gap-24 relative z-10 items-center">
          <div>
            {/* Breadcrumb */}
            <div className="text-xs text-gray-400 mb-12 flex items-center gap-2 flex-wrap">
              <Link href="/" className="hover:text-white transition">Home</Link> 
              <span>&gt;</span> 
              <Link href="/admissions" className="hover:text-white transition">Admissions</Link> 
              <span>&gt;</span> 
              <span className="text-white">How to Apply</span>
            </div>
            
            <div className="flex items-center gap-4 mb-6">
              <div className="h-[1px] w-8 bg-[#cc9a66]"></div>
              <p className="text-gray-300 font-bold tracking-widest text-[10px] lg:text-xs uppercase">Lifecare Medical Institute</p>
            </div>
            
            <h1 className="font-serif text-5xl lg:text-7xl mb-8 leading-[1.1]">
              How to Apply
            </h1>
            
            <p className="text-base lg:text-lg text-gray-300 max-w-xl leading-relaxed font-light">
              Follow a clear application process and check that your chosen programme is currently running and accepting applications.
            </p>
          </div>
          
          {/* Abstract Graphic */}
          <div className="hidden lg:flex items-center justify-center relative w-full h-full">
             <div className="relative w-[320px] h-[320px] border-[1px] border-white/20 flex items-center justify-center">
               {/* Inner Circle */}
               <div className="w-[200px] h-[200px] rounded-full border border-white/20"></div>
               {/* Tan Square at top right */}
               <div className="absolute top-0 right-0 w-24 h-24 bg-[#cc9a66]"></div>
               {/* Diagonal Line */}
               <div className="w-[140%] h-[1px] bg-white/20 absolute -rotate-45"></div>
             </div>
          </div>
        </div>
      </section>

      {/* Six Steps to Apply Section */}
      <section className="py-16 lg:py-24 px-6 lg:px-8 bg-white">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-[1px] w-8 bg-[#cc9a66]"></div>
            <p className="text-[#187965] font-bold tracking-widest text-xs uppercase">Your application</p>
          </div>
          <h2 className="font-serif text-4xl lg:text-5xl text-[#0a2230] leading-tight mb-12">
            Six steps to apply
          </h2>

          {/* Steps Grid */}
          <div className="border border-gray-100 grid md:grid-cols-2">
            
            {/* Step 01 */}
            <div className="p-8 lg:p-12 border-b border-gray-100 md:border-r flex gap-6 lg:gap-8">
              <span className="font-serif text-2xl lg:text-3xl text-[#187965]">01</span>
              <div>
                <h3 className="font-serif text-[22px] lg:text-2xl text-[#0a2230] mb-3">Choose your programme</h3>
                <p className="text-gray-600 text-[15px] leading-relaxed">
                  Check that the programme is currently running and applications are open for the intake you want.
                </p>
              </div>
            </div>

            {/* Step 02 */}
            <div className="p-8 lg:p-12 border-b border-gray-100 flex gap-6 lg:gap-8">
              <span className="font-serif text-2xl lg:text-3xl text-[#187965]">02</span>
              <div>
                <h3 className="font-serif text-[22px] lg:text-2xl text-[#0a2230] mb-3">Review the details</h3>
                <p className="text-gray-600 text-[15px] leading-relaxed">
                  Read the entry requirements, fees, study arrangements and programme status.
                </p>
              </div>
            </div>

            {/* Step 03 */}
            <div className="p-8 lg:p-12 border-b border-gray-100 md:border-r flex gap-6 lg:gap-8">
              <span className="font-serif text-2xl lg:text-3xl text-[#187965]">03</span>
              <div>
                <h3 className="font-serif text-[22px] lg:text-2xl text-[#0a2230] mb-3">Prepare your documents</h3>
                <p className="text-gray-600 text-[15px] leading-relaxed">
                  Gather the required academic, identification and supporting evidence.
                </p>
              </div>
            </div>

            {/* Step 04 */}
            <div className="p-8 lg:p-12 border-b border-gray-100 flex gap-6 lg:gap-8">
              <span className="font-serif text-2xl lg:text-3xl text-[#187965]">04</span>
              <div>
                <h3 className="font-serif text-[22px] lg:text-2xl text-[#0a2230] mb-3">Submit or ask for guidance</h3>
                <p className="text-gray-600 text-[15px] leading-relaxed">
                  Complete the application process or contact Admissions if you need help.
                </p>
              </div>
            </div>

            {/* Step 05 */}
            <div className="p-8 lg:p-12 border-b md:border-b-0 border-gray-100 md:border-r flex gap-6 lg:gap-8">
              <span className="font-serif text-2xl lg:text-3xl text-[#187965]">05</span>
              <div>
                <h3 className="font-serif text-[22px] lg:text-2xl text-[#0a2230] mb-3">Respond to requests</h3>
                <p className="text-gray-600 text-[15px] leading-relaxed">
                  Provide further evidence or attend an interview if the programme requires it.
                </p>
              </div>
            </div>

            {/* Step 06 */}
            <div className="p-8 lg:p-12 flex gap-6 lg:gap-8">
              <span className="font-serif text-2xl lg:text-3xl text-[#187965]">06</span>
              <div>
                <h3 className="font-serif text-[22px] lg:text-2xl text-[#0a2230] mb-3">Review your offer</h3>
                <p className="text-gray-600 text-[15px] leading-relaxed">
                  Read every condition carefully before accepting your place.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Prepare your documents Section */}
      <section className="bg-[#f9f8f4] py-16 lg:py-32 px-6 lg:px-8 border-t border-gray-100">
        <div className="max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-12 lg:gap-24 items-start">
          <h2 className="font-serif text-4xl lg:text-5xl text-[#0a2230] leading-tight">
            Prepare your documents
          </h2>
          
          <div className="space-y-4 lg:mt-2">
            {/* Checklist Item 1 */}
            <div className="flex items-start gap-4">
              <div className="text-[#187965] mt-0.5">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
              </div>
              <p className="text-gray-700 text-[15px] lg:text-base leading-relaxed">Current identification and contact details</p>
            </div>
            
            {/* Checklist Item 2 */}
            <div className="flex items-start gap-4">
              <div className="text-[#187965] mt-0.5">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
              </div>
              <p className="text-gray-700 text-[15px] lg:text-base leading-relaxed">Academic certificates, transcripts or result evidence</p>
            </div>

            {/* Checklist Item 3 */}
            <div className="flex items-start gap-4">
              <div className="text-[#187965] mt-0.5">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
              </div>
              <p className="text-gray-700 text-[15px] lg:text-base leading-relaxed">Any programme-specific evidence requested by Admissions</p>
            </div>

            {/* Checklist Item 4 */}
            <div className="flex items-start gap-4">
              <div className="text-[#187965] mt-0.5">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
              </div>
              <p className="text-gray-700 text-[15px] lg:text-base leading-relaxed">Verified copies or translations where required</p>
            </div>
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
              <h2 className="font-serif text-4xl lg:text-5xl mb-4 lg:mb-6 leading-tight">Need help with your application?</h2>
              <p className="text-gray-400 text-[15px] lg:text-base max-w-xl">
                Contact the Admissions team before submitting if you are unsure about eligibility, documents or programme status.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 shrink-0 w-full lg:w-auto">
              <Link href="/contact" className="bg-[#cc9a66] text-[#0a2230] px-8 py-4 text-sm font-bold hover:bg-[#b88554] transition flex items-center justify-center gap-2 text-center w-full sm:w-auto">
                Contact Admissions →
              </Link>
              <Link href="/study/programmes" className="border border-white text-white px-8 py-4 text-sm font-bold hover:bg-white hover:text-[#0a2230] transition text-center w-full sm:w-auto">
                View current programmes
              </Link>
            </div>
          </div>
        </div>
      </section>

    </main>
  )
}