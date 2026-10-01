import Link from 'next/link'

export default function ContactPage() {
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
              <span className="text-white">Contact LMI</span>
            </div>
            
            <div className="flex items-center gap-4 mb-6">
              <div className="h-[1px] w-8 bg-[#cc9a66]"></div>
              <p className="text-gray-300 font-bold tracking-widest text-[10px] lg:text-xs uppercase">Lifecare Medical Institute</p>
            </div>
            
            <h1 className="font-serif text-5xl lg:text-7xl mb-8 leading-[1.1]">
              Contact LMI
            </h1>
            
            <p className="text-base lg:text-lg text-gray-300 max-w-xl leading-relaxed font-light">
              Contact our team if you have a question about programmes, admissions, visiting the campus or working with LMI. We will direct your enquiry to the appropriate member of staff.
            </p>
          </div>
          
          {/* Abstract Graphic */}
          <div className="hidden lg:flex items-center justify-center relative w-full h-full">
             <div className="relative w-[320px] h-[320px] border-[1px] border-white/20 flex items-center justify-center">
               {/* Inner Circle */}
               <div className="w-[200px] h-[200px] rounded-full border border-white/20"></div>
               {/* Tan Square at bottom right */}
               <div className="absolute bottom-4 right-4 w-24 h-24 bg-[#cc9a66]"></div>
               {/* Vertical Line */}
               <div className="h-[140%] w-[1px] bg-white/20 absolute right-16"></div>
             </div>
          </div>
        </div>
      </section>

      {/* Info Cards Grid (Locations & Contact Info) */}
      <section className="py-16 lg:py-24 px-6 lg:px-8 bg-white border-b border-gray-100">
        <div className="max-w-[1400px] mx-auto grid md:grid-cols-3 gap-8 lg:gap-12">
          
          {/* Card 1: Main Campus */}
          <article className="flex flex-col">
            <div className="h-10 w-10 bg-teal-50/50 rounded flex items-center justify-center mb-8 text-[#187965] border border-teal-100">
              {/* Location Pin Icon */}
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
              </svg>
            </div>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-[1px] w-6 bg-[#cc9a66]"></div>
              <p className="text-[#187965] font-bold tracking-widest text-[10px] uppercase">Main Campus</p>
            </div>
            <h3 className="font-serif text-[22px] lg:text-2xl text-[#0a2230] mb-4 font-bold">Ring Road</h3>
            <p className="text-gray-600 text-[15px] leading-relaxed mb-6">
              Opposite Imtiaz Stores<br/>
              Peshawar, Khyber Pakhtunkhwa<br/>
              Pakistan
            </p>
            <a href="#" className="text-[#187965] font-bold text-sm hover:underline mt-auto flex items-center gap-2">
              Get directions →
            </a>
          </article>

          {/* Card 2: Teaching Hospital */}
          <article className="flex flex-col border-t md:border-t-0 md:border-l border-gray-200 pt-10 md:pt-0 md:pl-12">
            <div className="h-10 w-10 bg-teal-50/50 rounded flex items-center justify-center mb-8 text-[#187965] border border-teal-100">
              {/* Hospital/Building Icon */}
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z" />
              </svg>
            </div>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-[1px] w-6 bg-[#cc9a66]"></div>
              <p className="text-[#187965] font-bold tracking-widest text-[10px] uppercase">Teaching Hospital</p>
            </div>
            <h3 className="font-serif text-[22px] lg:text-2xl text-[#0a2230] mb-4 font-bold">Lifecare Hospital and<br/>Research Institute</h3>
            <p className="text-gray-600 text-[15px] leading-relaxed mb-6">
              Plot 33, Phase 5, Sector A3, Hayatabad<br/>
              Peshawar, Khyber Pakhtunkhwa<br/>
              Near the Passport Office
            </p>
            <a href="#" className="text-[#187965] font-bold text-sm hover:underline mt-auto flex items-center gap-2">
              Get directions →
            </a>
          </article>

          {/* Card 3: General Enquiries */}
          <article className="flex flex-col border-t md:border-t-0 md:border-l border-gray-200 pt-10 md:pt-0 md:pl-12">
            <div className="h-10 w-10 bg-teal-50/50 rounded flex items-center justify-center mb-8 text-[#187965] border border-teal-100">
              {/* Headset Icon */}
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm0 17.5c-4.28 0-7.75-3.47-7.75-7.75S7.72 4.25 12 4.25s7.75 3.47 7.75 7.75-3.47 7.75-7.75 7.75ZM8.25 12a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm9 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
              </svg>
            </div>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-[1px] w-6 bg-[#cc9a66]"></div>
              <p className="text-[#187965] font-bold tracking-widest text-[10px] uppercase">General Enquiries</p>
            </div>
            <h3 className="font-serif text-[22px] lg:text-2xl text-[#0a2230] mb-4 font-bold">Speak to our team</h3>
            <div className="text-gray-600 text-[15px] leading-relaxed space-y-4">
              <a href="mailto:info@lcmi.pk" className="flex items-center gap-3 hover:text-[#187965] transition">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                </svg>
                info@lcmi.pk
              </a>
              <a href="tel:091-5230486" className="flex items-center gap-3 hover:text-[#187965] transition">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.864-1.048l-3.286-.514a2.25 2.25 0 0 0-2.457 1.054l-1.2 1.83a13.916 13.916 0 0 1-6.196-6.196l1.83-1.2a2.25 2.25 0 0 0 1.054-2.457L7.798 3.114c-.082-.513-.532-.864-1.048-.864H5.25A2.25 2.25 0 0 0 3 4.5v2.25Z" />
                </svg>
                091-5230486
              </a>
            </div>
          </article>

        </div>
      </section>

      {/* Enquiry Form Section */}
      <section id="enquiry" className="bg-[#f9f8f4] py-16 lg:py-24 px-6 lg:px-8">
        <div className="max-w-[1400px] mx-auto grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Text Box */}
          <div className="lg:col-span-4 pt-4">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-[1px] w-8 bg-[#cc9a66]"></div>
              <p className="text-[#187965] font-bold tracking-widest text-xs uppercase">Send an enquiry</p>
            </div>
            <h2 className="font-serif text-4xl lg:text-5xl text-[#0a2230] leading-tight mb-6">
              How can we help?
            </h2>
            <p className="text-gray-600 text-[15px] leading-relaxed mb-10 max-w-sm">
              Provide enough information for us to understand your enquiry. Please do not include confidential medical, financial or identity information.
            </p>
            
            <div className="flex items-start gap-4">
              <div className="text-[#187965] mt-1">
                 {/* Sparkles Icon */}
                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .316.316l5.111 2.125a.562.562 0 0 1 0 1.04l-5.111 2.125a.563.563 0 0 0-.316.316l-2.125 5.111a.562.562 0 0 1-1.04 0l-2.125-5.111a.563.563 0 0 0-.316-.316l-5.111-2.125a.562.562 0 0 1 0-1.04l5.111-2.125a.563.563 0 0 0 .316-.316l2.125-5.111Z" />
                </svg>
              </div>
              <div>
                <p className="font-bold text-[#0a2230] mb-1">Prefer to speak?</p>
                <p className="text-gray-600 text-sm">Call 091-5230486 during office hours.</p>
              </div>
            </div>
          </div>

          {/* Right Form Box */}
          <div className="lg:col-span-8 bg-white p-8 lg:p-12 shadow-sm border border-gray-100">
            <form className="flex flex-col gap-8">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label htmlFor="fullName" className="block text-xs font-bold text-[#0a2230] mb-2">Full name</label>
                  <input type="text" id="fullName" className="w-full border border-gray-200 p-3 text-sm focus:ring-1 focus:ring-[#187965] focus:outline-none transition" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs font-bold text-[#0a2230] mb-2">Email address</label>
                  <input type="email" id="email" className="w-full border border-gray-200 p-3 text-sm focus:ring-1 focus:ring-[#187965] focus:outline-none transition" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label htmlFor="phone" className="block text-xs font-bold text-[#0a2230] mb-2 flex justify-between">
                    <span>Telephone</span>
                    <span className="text-gray-400 font-normal">optional</span>
                  </label>
                  <input type="tel" id="phone" className="w-full border border-gray-200 p-3 text-sm focus:ring-1 focus:ring-[#187965] focus:outline-none transition" />
                </div>
                <div>
                  <label htmlFor="enquiryType" className="block text-xs font-bold text-[#0a2230] mb-2">Enquiry type</label>
                  <select id="enquiryType" className="w-full border border-gray-200 p-3 text-sm focus:ring-1 focus:ring-[#187965] focus:outline-none transition bg-white text-[#0a2230]">
                    <option value="admissions">Admissions</option>
                    <option value="programme-information">Programme information</option>
                    <option value="campus-visit">Campus visit</option>
                    <option value="partnerships">Partnerships</option>
                    <option value="general-enquiry">General enquiry</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-xs font-bold text-[#0a2230] mb-2">Subject</label>
                <input type="text" id="subject" className="w-full border border-gray-200 p-3 text-sm focus:ring-1 focus:ring-[#187965] focus:outline-none transition" />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-bold text-[#0a2230] mb-2">Message</label>
                <textarea id="message" rows={6} className="w-full border border-gray-200 p-3 text-sm focus:ring-1 focus:ring-[#187965] focus:outline-none transition resize-y"></textarea>
              </div>

              <div className="flex items-start gap-3">
                <input type="checkbox" id="consent" className="mt-1 border-gray-300 rounded text-[#187965] focus:ring-[#187965]" />
                <label htmlFor="consent" className="text-xs text-gray-500 leading-relaxed">
                  I agree that LMI may use the information provided to respond to my enquiry. I will not include confidential medical, financial or identity information.
                </label>
              </div>

              <div>
                <button type="submit" className="bg-[#0a2230] text-white px-8 py-3.5 text-sm font-bold hover:bg-gray-800 transition flex items-center gap-2">
                  Send enquiry →
                </button>
              </div>
              
            </form>
          </div>

        </div>
      </section>

    </main>
  )
}