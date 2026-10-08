import Link from 'next/link'

export default function NursingAndAlliedHealth() {
  return (
    <main className="w-full font-sans">
      
     
      <section className="bg-[#0a2230] text-white pt-24 pb-32 px-6 lg:px-8 relative overflow-hidden">
        
        
        <div className="absolute top-0 right-0 w-[50%] h-[150%] bg-[#061822] rounded-bl-[100%] z-0 pointer-events-none opacity-50"></div>
        
        <div className="max-w-[1200px] mx-auto relative z-10 grid lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          
          <div className="lg:col-span-8">
            <div className="flex flex-col gap-6 mb-10">
              <p className="text-white/60 text-[13px] tracking-wide">
                <Link href="/" className="hover:text-white transition">Home</Link> &gt; <Link href="/schools" className="hover:text-white transition">Schools</Link> &gt; School of Nursing & Allied Health Sciences
              </p>
              <div className="flex items-center gap-4">
                <div className="h-[1px] w-12 bg-[#cc9a66]"></div>
                <p className="text-white/80 font-bold tracking-[0.2em] text-[11px] uppercase">Lifecare Medical Institute</p>
              </div>
            </div>
            
            <h1 className="font-serif text-[44px] sm:text-[56px] lg:text-[64px] leading-[1.05] tracking-tight mb-6">
              School of Nursing &<br/>Allied Health Sciences
            </h1>
            
            <p className="text-gray-300 leading-[1.8] text-[15px] lg:text-[17px] max-w-2xl">
              LMI's current academic base for nursing, clinical and allied health education.
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

      
      <section className="bg-white pt-20 lg:pt-32 pb-10 lg:pb-16 px-6 lg:px-8">
        <div className="max-w-[1200px] mx-auto flex justify-center">
          
         
          <div className="w-full max-w-[1000px] border border-gray-200 border-l-[4px] border-l-[#187965] p-8 lg:p-14 bg-[#f9f8f4]">
            
            <div className="flex items-center gap-6 mb-8">
             
              <div className="w-12 h-12 bg-white border border-[#187965]/20 flex flex-shrink-0 items-center justify-center rounded-sm text-[#187965]">
                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" /></svg>
              </div>
              
             
              <div className="flex items-center gap-4">
                <div className="h-[1px] w-12 bg-[#cc9a66]"></div>
                <p className="text-[#187965] font-bold tracking-[0.2em] text-[11px] uppercase">Current Academic Base</p>
              </div>
            </div>
            
            <h2 className="font-serif text-[32px] lg:text-[40px] text-[#0a2230] leading-[1.15] tracking-tight mb-6">
              An established academic foundation
            </h2>
            
            <div className="space-y-6 mb-10">
              <p className="text-gray-700 text-[15px] lg:text-[16px] leading-[1.8]">
                The School of Nursing & Allied Health Sciences forms LMI's current academic base. Its programme information will clearly identify the award, approval, admission and delivery status for each course.
              </p>
              <p className="text-gray-700 text-[15px] lg:text-[16px] leading-[1.8]">
                All LMI schools work within one institutional framework for governance, quality assurance, admissions, teaching, assessment, learner support and resource planning.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              
              <Link href="#current-delivery" className="bg-[#0a2230] text-white px-8 py-3.5 text-[14px] font-semibold hover:bg-gray-800 transition flex items-center justify-center gap-2 text-center w-full sm:w-auto">
                View programme information
              </Link>
              <Link href="/contact" className="border border-gray-300 text-[#0a2230] px-8 py-3.5 text-[14px] font-semibold hover:bg-gray-50 transition text-center w-full sm:w-auto bg-white">
                Contact Admissions
              </Link>
            </div>
            
          </div>
        </div>
      </section>

  
      <section id="current-delivery" className="bg-[#f9f8f4] pt-10 lg:pt-16 pb-20 lg:pb-32 px-6 lg:px-8 scroll-mt-10">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-[1px] w-12 bg-[#cc9a66]"></div>
            <p className="text-[#187965] font-bold tracking-[0.2em] text-[11px] uppercase">Current Delivery</p>
          </div>
          <h2 className="font-serif text-[32px] lg:text-[42px] text-[#0a2230] leading-[1.1] tracking-tight mb-4">Programmes currently running</h2>
          <p className="text-gray-600 mb-12 text-[15px]">Only the three programmes below are currently running at LMI.</p>

          <div className="bg-white border border-gray-200 overflow-x-auto shadow-sm">
            <table className="w-full text-left border-collapse min-w-[800px]">
              <thead>
                <tr className="bg-[#0a2230] text-white text-[11px] uppercase tracking-[0.1em] font-semibold">
                  <th className="px-8 py-5 border-b border-gray-200 w-[50%]">Programme</th>
                  <th className="px-8 py-5 border-b border-gray-200 w-[25%]">Duration</th>
                  <th className="px-8 py-5 border-b border-gray-200 w-[25%]">Status</th>
                </tr>
              </thead>
              <tbody className="text-[14px] lg:text-[15px] font-semibold text-[#0a2230]">
                <tr>
                  <td className="px-8 py-6 border-b border-gray-100">BS Nursing</td>
                  <td className="px-8 py-6 border-b border-gray-100 font-normal text-gray-500">4 Years</td>
                  <td className="px-8 py-6 border-b border-gray-100">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-[12px] font-semibold bg-green-50 text-[#187965] border border-green-200">
                      Currently running
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="px-8 py-6 border-b border-gray-100">Certified Nursing Assistant (CNA)</td>
                  <td className="px-8 py-6 border-b border-gray-100 font-normal text-gray-500">2-Year Diploma</td>
                  <td className="px-8 py-6 border-b border-gray-100">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-[12px] font-semibold bg-green-50 text-[#187965] border border-green-200">
                      Currently running
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="px-8 py-6 border-b border-gray-100">Lady Health Visitor (LHV)</td>
                  <td className="px-8 py-6 border-b border-gray-100 font-normal text-gray-500">2-Year Diploma</td>
                  <td className="px-8 py-6 border-b border-gray-100">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-[12px] font-semibold bg-green-50 text-[#187965] border border-green-200">
                      Currently running
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

 
      <section className="bg-white py-20 lg:py-32 px-6 lg:px-8 border-t border-gray-100">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-[1px] w-12 bg-[#cc9a66]"></div>
            <p className="text-[#187965] font-bold tracking-[0.2em] text-[11px] uppercase">Approval Status</p>
          </div>
          <h2 className="font-serif text-[32px] lg:text-[42px] text-[#0a2230] leading-[1.1] tracking-tight mb-4">Programmes in the approval process</h2>
          <p className="text-gray-600 mb-12 text-[15px] max-w-2xl">These programmes are not currently running. Programme and admissions details will be published only after approval is confirmed.</p>

          <div className="bg-white border border-gray-200 overflow-x-auto shadow-sm">
            <table className="w-full text-left border-collapse min-w-[800px]">
              <thead>
                <tr className="bg-[#0a2230] text-white text-[11px] uppercase tracking-[0.1em] font-semibold">
                  <th className="px-8 py-5 border-b border-gray-200 w-[50%]">Programme</th>
                  <th className="px-8 py-5 border-b border-gray-200 w-[25%]">Duration</th>
                  <th className="px-8 py-5 border-b border-gray-200 w-[25%]">Status</th>
                </tr>
              </thead>
              <tbody className="text-[14px] lg:text-[15px] font-semibold text-[#0a2230]">
                <tr>
                  <td className="px-8 py-6 border-b border-gray-100">BS Emergency / ICU Technology</td>
                  <td className="px-8 py-6 border-b border-gray-100 font-normal text-gray-500">4 Years</td>
                  <td className="px-8 py-6 border-b border-gray-100">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-[12px] font-semibold bg-orange-50 text-[#b5651d] border border-orange-200">
                      Approval in progress
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="px-8 py-6 border-b border-gray-100">BS Cardiology Technology</td>
                  <td className="px-8 py-6 border-b border-gray-100 font-normal text-gray-500">4 Years</td>
                  <td className="px-8 py-6 border-b border-gray-100">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-[12px] font-semibold bg-orange-50 text-[#b5651d] border border-orange-200">
                      Approval in progress
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="px-8 py-6 border-b border-gray-100">BS Radiology Technology</td>
                  <td className="px-8 py-6 border-b border-gray-100 font-normal text-gray-500">4 Years</td>
                  <td className="px-8 py-6 border-b border-gray-100">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-[12px] font-semibold bg-orange-50 text-[#b5651d] border border-orange-200">
                      Approval in progress
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="px-8 py-6 border-b border-gray-100">BS Respiratory Therapy Technology</td>
                  <td className="px-8 py-6 border-b border-gray-100 font-normal text-gray-500">4 Years</td>
                  <td className="px-8 py-6 border-b border-gray-100">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-[12px] font-semibold bg-orange-50 text-[#b5651d] border border-orange-200">
                      Approval in progress
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="px-8 py-6 border-b border-gray-100">BS Surgical Technology</td>
                  <td className="px-8 py-6 border-b border-gray-100 font-normal text-gray-500">4 Years</td>
                  <td className="px-8 py-6 border-b border-gray-100">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-[12px] font-semibold bg-orange-50 text-[#b5651d] border border-orange-200">
                      Approval in progress
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="px-8 py-6 border-b border-gray-100">BS Clinical Psychology</td>
                  <td className="px-8 py-6 border-b border-gray-100 font-normal text-gray-500">4 Years</td>
                  <td className="px-8 py-6 border-b border-gray-100">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-[12px] font-semibold bg-orange-50 text-[#b5651d] border border-orange-200">
                      Approval in progress
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
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