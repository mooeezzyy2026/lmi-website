import Link from 'next/link'

export default function BusinessSchoolPage() {
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
              <Link href="/schools" className="hover:text-white transition">Schools</Link>
              <span>&gt;</span>
              <span className="text-white">Business School</span>
            </div>
            
            <div className="flex items-center gap-4 mb-6">
              <div className="h-[1px] w-8 bg-[#cc9a66]"></div>
              <p className="text-gray-300 font-bold tracking-widest text-[10px] lg:text-xs uppercase">Lifecare Medical Institute</p>
            </div>
            
            <h1 className="font-serif text-5xl lg:text-7xl mb-8 leading-[1.1]">
              Business School
            </h1>
            
            <p className="text-lg lg:text-xl text-gray-300 max-w-lg leading-relaxed font-light">
              A planned school for professionally focused business, management, leadership and enterprise education.
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

      {/* Overlapping Planned School Card */}
      <section className="px-6 lg:px-8 relative z-20 -mt-20 lg:-mt-32 pb-16 lg:pb-32">
        <div className="max-w-[1100px] mx-auto bg-white shadow-xl flex flex-col md:flex-row border border-gray-100">
          
          {/* Left Icon Panel */}
          <div className="w-full md:w-[120px] lg:w-[160px] bg-white border-b md:border-b-0 md:border-r border-gray-100 flex items-start justify-center pt-8 md:pt-12 pb-6 md:pb-0 shrink-0">
             <div className="w-12 h-12 bg-teal-50 rounded flex items-center justify-center text-[#187965]">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z" />
                </svg>
             </div>
          </div>
          
          {/* Right Text Panel */}
          <div className="p-8 lg:p-16 flex-1">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-[1px] w-8 bg-[#cc9a66]"></div>
              <p className="text-[#187965] font-bold tracking-widest text-xs uppercase">Planned School</p>
            </div>
            
            <h2 className="font-serif text-3xl lg:text-4xl text-[#0a2230] leading-tight mb-6">
              A planned academic development
            </h2>
            
            <div className="text-gray-600 text-sm lg:text-base leading-relaxed space-y-6 mb-10 max-w-3xl">
              <p>
                Business School forms part of LMI's planned multidisciplinary development. Programme titles, awards and intake dates will be published only after the necessary academic, regulatory and operational arrangements are confirmed.
              </p>
              <p>
                All LMI schools work within one institutional framework for governance, quality assurance, admissions, teaching, assessment, learner support and resource planning.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-[#0a2230] text-white px-8 py-3.5 text-sm font-bold hover:bg-gray-800 transition text-center cursor-default opacity-90">
                View programme information
              </button>
              <Link href="/contact" className="border border-gray-300 text-[#0a2230] px-8 py-3.5 text-sm font-bold hover:bg-gray-50 transition text-center">
                Contact Admissions
              </Link>
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
              <h2 className="font-serif text-4xl lg:text-5xl mb-4 lg:mb-6 leading-tight">Explore LMI's academic structure</h2>
              <p className="text-gray-400 text-base lg:text-lg max-w-xl">
                Return to the Schools page to view the current academic base and planned areas of development.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 shrink-0 w-full lg:w-auto">
              <Link href="/schools" className="bg-[#cc9a66] text-[#0a2230] px-8 py-4 text-sm font-bold hover:bg-[#b88554] transition flex items-center justify-center gap-2 text-center w-full sm:w-auto">
                View all schools →
              </Link>
              <Link href="/about" className="border border-white text-white px-8 py-4 text-sm font-bold hover:bg-white hover:text-[#0a2230] transition text-center w-full sm:w-auto">
                About LMI
              </Link>
            </div>
          </div>
        </div>
      </section>

    </main>
  )
}