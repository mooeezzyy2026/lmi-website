import Link from 'next/link'

export default function NursingAlliedHealthPage() {
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
              <span className="text-white">School of Nursing & Allied Health Sciences</span>
            </div>
            
            <div className="flex items-center gap-4 mb-6">
              <div className="h-[1px] w-8 bg-[#cc9a66]"></div>
              <p className="text-gray-300 font-bold tracking-widest text-[10px] lg:text-xs uppercase">Lifecare Medical Institute</p>
            </div>
            
            <h1 className="font-serif text-5xl lg:text-7xl mb-8 leading-[1.1]">
              School of<br/>Nursing & Allied<br/>Health Sciences
            </h1>
            
            <p className="text-lg lg:text-xl text-gray-300 max-w-lg leading-relaxed font-light">
              LMI's current academic base for nursing, clinical and allied health education.
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

      {/* Overlapping Foundation Card */}
      <section className="px-6 lg:px-8 relative z-20 -mt-20 lg:-mt-32 pb-16 lg:pb-24">
        <div className="max-w-[1100px] mx-auto bg-white shadow-xl flex flex-col md:flex-row border border-gray-100">
          
          {/* Left Icon Panel */}
          <div className="w-full md:w-[120px] lg:w-[160px] bg-white border-b md:border-b-0 md:border-r border-gray-100 flex items-start justify-center pt-8 md:pt-12 pb-6 md:pb-0 shrink-0">
             <div className="w-12 h-12 bg-teal-50 rounded flex items-center justify-center text-[#187965]">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                </svg>
             </div>
          </div>
          
          {/* Right Text Panel */}
          <div className="p-8 lg:p-16 flex-1">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-[1px] w-8 bg-[#cc9a66]"></div>
              <p className="text-[#187965] font-bold tracking-widest text-xs uppercase">Current academic base</p>
            </div>
            
            <h2 className="font-serif text-3xl lg:text-4xl text-[#0a2230] leading-tight mb-6">
              An established academic foundation
            </h2>
            
            <div className="text-gray-600 text-sm lg:text-base leading-relaxed space-y-6 mb-10 max-w-3xl">
              <p>
                The School of Nursing & Allied Health Sciences forms LMI's current academic base. Its programme information will clearly identify the award, approval, admission and delivery status for each course.
              </p>
              <p>
                All LMI schools work within one institutional framework for governance, quality assurance, admissions, teaching, assessment, learner support and resource planning.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="#programmes" className="bg-[#0a2230] text-white px-8 py-3.5 text-sm font-bold hover:bg-gray-800 transition text-center">
                View programme information
              </Link>
              <Link href="/contact" className="border border-gray-300 text-[#0a2230] px-8 py-3.5 text-sm font-bold hover:bg-gray-50 transition text-center">
                Contact Admissions
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Currently Running Programmes */}
      <section id="programmes" className="py-12 lg:py-16 px-6 lg:px-8">
        <div className="max-w-[1100px] mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-[1px] w-8 bg-[#cc9a66]"></div>
            <p className="text-[#187965] font-bold tracking-widest text-xs uppercase">Current delivery</p>
          </div>
          <h2 className="font-serif text-4xl lg:text-5xl text-[#0a2230] leading-tight mb-4">
            Programmes<br/>currently running
          </h2>
          <p className="text-gray-600 mb-10 text-sm lg:text-base">
            Only the three programmes below are currently running at LMI.
          </p>

          <div className="overflow-x-auto bg-white shadow-sm border border-gray-200">
            <table className="w-full text-left border-collapse min-w-[600px]">
              <thead>
                <tr className="bg-[#0a2230] text-white text-xs tracking-wider uppercase">
                  <th className="p-4 lg:p-6 font-semibold w-1/2">Programme</th>
                  <th className="p-4 lg:p-6 font-semibold w-1/4">Duration</th>
                  <th className="p-4 lg:p-6 font-semibold w-1/4">Status</th>
                </tr>
              </thead>
              <tbody className="text-sm lg:text-base text-[#0a2230]">
                <tr className="border-b border-gray-100 hover:bg-gray-50 transition">
                  <td className="p-4 lg:p-6 font-bold">BS Nursing</td>
                  <td className="p-4 lg:p-6">4 Years</td>
                  <td className="p-4 lg:p-6">
                    <span className="bg-green-50 text-green-700 px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap border border-green-100">
                      Currently running
                    </span>
                  </td>
                </tr>
                <tr className="border-b border-gray-100 hover:bg-gray-50 transition">
                  <td className="p-4 lg:p-6 font-bold">Certified Nursing Assistant (CNA)</td>
                  <td className="p-4 lg:p-6">2-Year Diploma</td>
                  <td className="p-4 lg:p-6">
                    <span className="bg-green-50 text-green-700 px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap border border-green-100">
                      Currently running
                    </span>
                  </td>
                </tr>
                <tr className="hover:bg-gray-50 transition">
                  <td className="p-4 lg:p-6 font-bold">Lady Health Visitor (LHV)</td>
                  <td className="p-4 lg:p-6">2-Year Diploma</td>
                  <td className="p-4 lg:p-6">
                    <span className="bg-green-50 text-green-700 px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap border border-green-100">
                      Currently running
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Approval Process Programmes */}
      <section className="py-16 lg:py-24 px-6 lg:px-8">
        <div className="max-w-[1100px] mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-[1px] w-8 bg-[#cc9a66]"></div>
            <p className="text-[#187965] font-bold tracking-widest text-xs uppercase">Approval status</p>
          </div>
          <h2 className="font-serif text-4xl lg:text-5xl text-[#0a2230] leading-tight mb-4">
            Programmes in the<br/>approval process
          </h2>
          <p className="text-gray-600 mb-10 text-sm lg:text-base max-w-2xl">
            These programmes are not currently running. Programme and admissions details will be published only after approval is confirmed.
          </p>

          <div className="overflow-x-auto bg-white shadow-sm border border-gray-200">
            <table className="w-full text-left border-collapse min-w-[600px]">
              <thead>
                <tr className="bg-[#0a2230] text-white text-xs tracking-wider uppercase">
                  <th className="p-4 lg:p-6 font-semibold w-1/2">Programme</th>
                  <th className="p-4 lg:p-6 font-semibold w-1/4">Duration</th>
                  <th className="p-4 lg:p-6 font-semibold w-1/4">Status</th>
                </tr>
              </thead>
              <tbody className="text-sm lg:text-base text-[#0a2230]">
                {[
                  "BS Emergency / ICU Technology",
                  "BS Cardiology Technology",
                  "BS Radiology Technology",
                  "BS Respiratory Therapy Technology",
                  "BS Surgical Technology",
                  "BS Clinical Psychology"
                ].map((programme, index) => (
                  <tr key={index} className="border-b border-gray-100 hover:bg-gray-50 transition last:border-0">
                    <td className="p-4 lg:p-6 font-bold">{programme}</td>
                    <td className="p-4 lg:p-6">4 Years</td>
                    <td className="p-4 lg:p-6">
                      <span className="bg-orange-50 text-orange-700 px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap border border-orange-100">
                        Approval in progress
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
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