import Link from 'next/link'

export default function Contact() {
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
                <Link href="/" className="hover:text-white transition">Home</Link> &gt; Contact LMI
              </p>
              <div className="flex items-center gap-4">
                <div className="h-[1px] w-12 bg-[#cc9a66]"></div>
                <p className="text-white/80 font-bold tracking-[0.2em] text-[11px] uppercase">Lifecare Medical Institute</p>
              </div>
            </div>
            
            <h1 className="font-serif text-[44px] sm:text-[56px] lg:text-[64px] leading-[1.05] tracking-tight mb-6">
              Contact LMI
            </h1>
            
            <p className="text-gray-300 leading-[1.8] text-[15px] lg:text-[17px] max-w-[650px]">
              Contact our team if you have a question about programmes, admissions, visiting the campus or working with LMI. We will direct your enquiry to the appropriate member of staff.
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

      {/* 3 Contact Info Cards Section */}
      <section className="bg-white py-16 lg:py-24 px-6 lg:px-8">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          
          {/* Card 1: Main Campus */}
          <article className="bg-white p-8 lg:p-10 border border-gray-100 border-t-[3px] border-t-[#187965] shadow-sm h-full flex flex-col">
            <div className="h-12 w-12 bg-teal-50 flex items-center justify-center rounded text-[#187965] mb-8">
              {/* Map Pin Icon */}
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" /><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" /></svg>
            </div>
            <div className="flex items-center gap-4 mb-4">
              <div className="h-[1px] w-6 bg-[#cc9a66]"></div>
              <p className="text-[#187965] font-bold tracking-[0.2em] text-[10px] uppercase">Main Campus</p>
            </div>
            <h3 className="font-serif text-[22px] lg:text-[26px] text-[#0a2230] leading-[1.25] mb-4">Ring Road</h3>
            <div className="text-gray-600 text-[14px] lg:text-[15px] leading-[1.7] mb-8 flex-grow">
              <p>Opposite Imtiaz Stores</p>
              <p>Peshawar, Khyber Pakhtunkhwa</p>
              <p>Pakistan</p>
            </div>
            <Link href="https://maps.google.com" target="_blank" className="text-[#187965] font-semibold text-[14px] hover:underline flex items-center gap-2">
              Get directions →
            </Link>
          </article>
          
          {/* Card 2: Teaching Hospital */}
          <article className="bg-white p-8 lg:p-10 border border-gray-100 border-t-[3px] border-t-[#187965] shadow-sm h-full flex flex-col">
            <div className="h-12 w-12 bg-teal-50 flex items-center justify-center rounded text-[#187965] mb-8">
              {/* Building/Hospital Icon */}
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z" /></svg>
            </div>
            <div className="flex items-center gap-4 mb-4">
              <div className="h-[1px] w-6 bg-[#cc9a66]"></div>
              <p className="text-[#187965] font-bold tracking-[0.2em] text-[10px] uppercase">Teaching Hospital</p>
            </div>
            <h3 className="font-serif text-[22px] lg:text-[26px] text-[#0a2230] leading-[1.25] mb-4">Lifecare Hospital and Research Institute</h3>
            <div className="text-gray-600 text-[14px] lg:text-[15px] leading-[1.7] mb-8 flex-grow">
              <p>Plot 33, Phase 5, Sector A3, Hayatabad</p>
              <p>Peshawar, Khyber Pakhtunkhwa</p>
              <p>Near the Passport Office</p>
            </div>
            <Link href="https://maps.google.com" target="_blank" className="text-[#187965] font-semibold text-[14px] hover:underline flex items-center gap-2">
              Get directions →
            </Link>
          </article>

          {/* Card 3: General Enquiries */}
          <article className="bg-white p-8 lg:p-10 border border-gray-100 border-t-[3px] border-t-[#187965] shadow-sm h-full flex flex-col">
            <div className="h-12 w-12 bg-teal-50 flex items-center justify-center rounded text-[#187965] mb-8">
              {/* Headset/Contact Icon */}
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M15 14.25h-.75m-4.5 0H9m-4.5 0v-2.25c0-4.142 3.358-7.5 7.5-7.5s7.5 3.358 7.5 7.5v2.25m-15 0a3 3 0 0 0 3 3h.75m-3-3h.75m9 0a3 3 0 0 1-3 3h-.75m3-3h-.75M12 20.25a3.75 3.75 0 0 0 3.75-3.75M12 20.25a3.75 3.75 0 0 1-3.75-3.75" /></svg>
            </div>
            <div className="flex items-center gap-4 mb-4">
              <div className="h-[1px] w-6 bg-[#cc9a66]"></div>
              <p className="text-[#187965] font-bold tracking-[0.2em] text-[10px] uppercase">General Enquiries</p>
            </div>
            <h3 className="font-serif text-[22px] lg:text-[26px] text-[#0a2230] leading-[1.25] mb-4">Speak to our team</h3>
            <div className="text-gray-600 text-[14px] lg:text-[15px] leading-[1.7] mb-8 flex-grow space-y-3">
              <a href="mailto:info@lcmi.pk" className="flex items-center gap-3 hover:text-[#187965] transition">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-[#187965]"><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" /></svg>
                info@lcmi.pk
              </a>
              <a href="tel:091-5230486" className="flex items-center gap-3 hover:text-[#187965] transition">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-[#187965]"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.896-1.596-5.54-4.24-7.136-7.136l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" /></svg>
                091-5230486
              </a>
            </div>
          </article>

        </div>
      </section>

      {/* Contact Form Section (Beige) */}
      <section className="bg-[#f9f8f4] py-20 lg:py-32 px-6 lg:px-8 border-b border-gray-200">
        <div className="max-w-[1200px] mx-auto grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Text Block */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-[1px] w-12 bg-[#cc9a66]"></div>
              <p className="text-[#187965] font-bold tracking-[0.2em] text-[11px] uppercase">Send an enquiry</p>
            </div>
            
            <h2 className="font-serif text-[36px] lg:text-[44px] text-[#0a2230] leading-[1.15] tracking-tight mb-6">
              How can we help?
            </h2>

            <p className="text-gray-700 text-[15px] lg:text-[16px] leading-[1.8] mb-12 max-w-sm">
              Provide enough information for us to understand your enquiry. Please do not include confidential medical, financial or identity information.
            </p>

            <div className="border-t border-gray-300 pt-8 max-w-sm">
              <div className="flex items-start gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-[#187965] mt-1"><path strokeLinecap="round" strokeLinejoin="round" d="M11.412 15.655 9.75 21.75l3.745-4.012M9.257 13.5H3.75l2.659-2.849m2.048-2.194L14.25 2.25 12 8.25m0 0H17.25l-2.659 2.849m-2.048 2.194L9.257 13.5m0 0 2.048 2.194M12 8.25l-2.048-2.194" /></svg>
                <div>
                  <h4 className="font-bold text-[#0a2230] mb-1">Prefer to speak?</h4>
                  <p className="text-gray-600 text-[14px]">Call 091-5230486 during office hours.</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Form Block */}
          <div className="lg:col-span-8 bg-white p-8 lg:p-12 shadow-sm border border-gray-100">
            <form className="space-y-6">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="fullName" className="block text-[#0a2230] font-semibold text-[13px] mb-2">Full name</label>
                  <input type="text" id="fullName" className="w-full border border-gray-300 px-4 py-3 focus:outline-none focus:border-[#187965] focus:ring-1 focus:ring-[#187965] transition" />
                </div>
                <div>
                  <label htmlFor="emailAddress" className="block text-[#0a2230] font-semibold text-[13px] mb-2">Email address</label>
                  <input type="email" id="emailAddress" className="w-full border border-gray-300 px-4 py-3 focus:outline-none focus:border-[#187965] focus:ring-1 focus:ring-[#187965] transition" />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="telephone" className="block text-[#0a2230] font-semibold text-[13px] mb-2">Telephone <span className="text-gray-400 font-normal ml-1">optional</span></label>
                  <input type="tel" id="telephone" className="w-full border border-gray-300 px-4 py-3 focus:outline-none focus:border-[#187965] focus:ring-1 focus:ring-[#187965] transition" />
                </div>
                <div>
                  <label htmlFor="enquiryType" className="block text-[#0a2230] font-semibold text-[13px] mb-2">Enquiry type</label>
                  <div className="relative">
                    <select id="enquiryType" className="w-full border border-gray-300 px-4 py-3 appearance-none focus:outline-none focus:border-[#187965] focus:ring-1 focus:ring-[#187965] transition bg-white text-gray-700">
                      <option>Admissions</option>
                      <option>General Enquiry</option>
                      <option>Partnerships</option>
                      <option>Feedback</option>
                    </select>
                    {/* Custom Dropdown Arrow */}
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
                      <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-[#0a2230] font-semibold text-[13px] mb-2">Subject</label>
                <input type="text" id="subject" className="w-full border border-gray-300 px-4 py-3 focus:outline-none focus:border-[#187965] focus:ring-1 focus:ring-[#187965] transition" />
              </div>

              <div>
                <label htmlFor="message" className="block text-[#0a2230] font-semibold text-[13px] mb-2">Message</label>
                <textarea id="message" rows={6} className="w-full border border-gray-300 px-4 py-3 focus:outline-none focus:border-[#187965] focus:ring-1 focus:ring-[#187965] transition resize-y"></textarea>
              </div>

              <div className="flex items-start gap-3 mt-8">
                <input type="checkbox" id="consent" className="mt-1 w-4 h-4 text-[#187965] border-gray-300 rounded focus:ring-[#187965]" />
                <label htmlFor="consent" className="text-gray-500 text-[13px] leading-relaxed">
                  I agree that LMI may use the information provided to respond to my enquiry. I will not include confidential medical, financial or identity information.
                </label>
              </div>

              <div className="pt-4">
                <button type="submit" className="bg-[#0a2230] text-white px-8 py-3.5 text-[14px] font-semibold hover:bg-gray-800 transition flex items-center justify-center gap-2">
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