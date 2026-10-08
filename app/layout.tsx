import type { Metadata } from 'next'
import './globals.css'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Lifecare Medical Institute | Peshawar',
  description: 'Empowering Through Education in Peshawar',
  icons: {
    icon: '/images/brand/lmi-logo.png',
    shortcut: '/images/brand/lmi-logo.png',
    apple: '/images/brand/lmi-logo.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/brand/lmi-logo.png" />
        <link rel="shortcut icon" href="/images/brand/lmi-logo.png" />
        <link rel="apple-touch-icon" href="/images/brand/lmi-logo.png" />
      </head>
      <body className="font-sans antialiased text-[#1a1a1a] bg-[#f9f8f4]">
        
        
        <div className="bg-[#0b1622] text-gray-300 text-xs py-2 px-6 lg:px-8 flex justify-between items-center tracking-wide">
          <p>Learning with purpose in Peshawar</p>
          <nav aria-label="Utility navigation">
            <Link href="/news-events" className="hover:text-white transition">News & Events</Link>
          </nav>
        </div>

        <header className="bg-white sticky top-0 z-50 border-b border-gray-100 relative">
        
          <input type="checkbox" id="mobile-menu" className="hidden peer/mobile" />
          
          <input type="checkbox" id="search-toggle" className="hidden peer/search" />
          
          <div className="max-w-[1400px] mx-auto px-6 lg:px-8 flex justify-between items-center relative z-50 bg-white h-[85px]">
            
            
            <Link href="/" aria-label="LMI home" className="flex items-center h-full shrink-0 mr-4">
              <div className="h-12 w-40 lg:h-16 lg:w-56 relative">
                 <img src="/images/brand/lmi-logo.png" alt="LMI Logo" className="object-contain object-left w-full h-full absolute inset-0" />
              </div>
            </Link>
            
           
            <nav className="hidden xl:flex space-x-5 2xl:space-x-8 text-[15px] font-bold text-[#0a2230] h-full" aria-label="Primary navigation">
              
            
              <Link href="/" className="flex items-center h-full border-b-[3px] border-transparent hover:border-[#187965] pt-[3px] hover:text-[#cc9a66] transition whitespace-nowrap">
                Home
              </Link>
              <Link href="/about" className="flex items-center h-full border-b-[3px] border-transparent hover:border-[#187965] pt-[3px] hover:text-[#cc9a66] transition whitespace-nowrap">
                About
              </Link>
              
         
              <div className="relative group h-full flex items-center">
                <button className="flex items-center h-full border-b-[3px] border-transparent hover:border-[#187965] pt-[3px] hover:text-[#cc9a66] transition whitespace-nowrap gap-1.5 outline-none">
                  Schools 
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 mt-0.5">
                    <path fillRule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                  </svg>
                </button>
                <div className="absolute top-[85px] left-0 w-64 bg-[#f3efe6] shadow-xl hidden group-hover:block border border-gray-200 z-50">
                  <div className="bg-[#0a2230] text-white px-5 py-3 font-bold flex justify-between items-center">
                    <Link href="/schools/nursing-allied-health" className="hover:underline">Schools and Programmes</Link>
                    <span>→</span>
                  </div>
                  <div className="py-2 flex flex-col">
                    <Link href="/schools/nursing-allied-health" className="px-5 py-2.5 text-[#0a2230] font-normal hover:bg-[#e8e3d3] transition">School of Nursing & Allied Health</Link>
                    <Link href="/schools/business" className="px-5 py-2.5 text-[#0a2230] font-normal hover:bg-[#e8e3d3] transition">Business School</Link>
                    <Link href="/schools/law" className="px-5 py-2.5 text-[#0a2230] font-normal hover:bg-[#e8e3d3] transition">Law School</Link>
                    <Link href="/schools/engineering" className="px-5 py-2.5 text-[#0a2230] font-normal hover:bg-[#e8e3d3] transition">School of Engineering</Link>
                  </div>
                </div>
              </div>

              <Link href="/quality" className="flex items-center h-full border-b-[3px] border-transparent hover:border-[#187965] pt-[3px] hover:text-[#cc9a66] transition whitespace-nowrap">
                Quality
              </Link>
              
           
              <div className="relative group h-full flex items-center">
                <button className="flex items-center h-full border-b-[3px] border-transparent hover:border-[#187965] pt-[3px] hover:text-[#cc9a66] transition whitespace-nowrap gap-1.5 outline-none">
                  Admissions 
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 mt-0.5">
                    <path fillRule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                  </svg>
                </button>
                <div className="absolute top-[85px] left-0 w-64 bg-[#f3efe6] shadow-xl hidden group-hover:block border border-gray-200 z-50">
                  <div className="bg-[#0a2230] text-white px-5 py-3 font-bold flex justify-between items-center">
                    <Link href="/contact" className="hover:underline">Admissions</Link>
                    <span>→</span>
                  </div>
                  <div className="py-2 flex flex-col">
                    <Link href="/admissions/how-to-apply" className="px-5 py-2.5 text-[#0a2230] font-normal hover:bg-[#e8e3d3] transition">How to Apply</Link>
                    <Link href="/admissions/tuition-fees" className="px-5 py-2.5 text-[#0a2230] font-normal hover:bg-[#e8e3d3] transition">Tuition Fees</Link>
                    <Link href="/admissions/scholarships" className="px-5 py-2.5 text-[#0a2230] font-normal hover:bg-[#e8e3d3] transition">Scholarships</Link>
                    <Link href="/admissions/dates-deadlines" className="px-5 py-2.5 text-[#0a2230] font-normal hover:bg-[#e8e3d3] transition">Dates & Deadlines</Link>
                    <Link href="/admissions/notifications" className="px-5 py-2.5 text-[#0a2230] font-normal hover:bg-[#e8e3d3] transition">Notifications</Link>
                    <Link href="/admissions/prospectus-2026" className="px-5 py-2.5 text-[#0a2230] font-normal hover:bg-[#e8e3d3] transition">Prospectus 2026</Link>
                    <Link href="/admissions/faqs" className="px-5 py-2.5 text-[#0a2230] font-normal hover:bg-[#e8e3d3] transition">FAQs</Link>
                    <Link href="/contact" className="px-5 py-2.5 text-[#0a2230] font-normal hover:bg-[#e8e3d3] transition">Contact Us</Link>
                  </div>
                </div>
              </div>

              <Link href="/student-life" className="flex items-center h-full border-b-[3px] border-transparent hover:border-[#187965] pt-[3px] hover:text-[#cc9a66] transition whitespace-nowrap">
                Student Life
              </Link>
              <Link href="/facilities" className="flex items-center h-full border-b-[3px] border-transparent hover:border-[#187965] pt-[3px] hover:text-[#cc9a66] transition whitespace-nowrap">
                Facilities
              </Link>
              <Link href="/governance" className="flex items-center h-full border-b-[3px] border-transparent hover:border-[#187965] pt-[3px] hover:text-[#cc9a66] transition whitespace-nowrap">
                Governance
              </Link>
              <Link href="/partnerships" className="flex items-center h-full border-b-[3px] border-transparent hover:border-[#187965] pt-[3px] hover:text-[#cc9a66] transition whitespace-nowrap">
                Partnerships
              </Link>
              <Link href="/contact" className="flex items-center h-full border-b-[3px] border-transparent hover:border-[#187965] pt-[3px] hover:text-[#cc9a66] transition whitespace-nowrap">
                Contact
              </Link>
            </nav>

          
            <div className="hidden xl:flex items-center gap-3 shrink-0 ml-4">
            
              <label htmlFor="search-toggle" aria-label="Search" className="cursor-pointer w-11 h-11 border border-gray-300 flex items-center justify-center text-[#0a2230] hover:bg-gray-50 hover:border-gray-400 transition shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
              </label>
              <Link href="/contact#enquiry" className="bg-[#cc9a66] text-[#0a2230] px-6 h-11 flex items-center justify-center text-[15px] font-bold hover:bg-[#b88554] transition whitespace-nowrap shrink-0">
                Apply or enquire
              </Link>
            </div>

          
            <div className="flex xl:hidden items-center gap-4 ml-auto">
              <label htmlFor="search-toggle" aria-label="Search" className="cursor-pointer text-[#0a2230]">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
              </label>
              <label htmlFor="mobile-menu" className="text-3xl cursor-pointer select-none text-[#0a2230]">
                ☰
              </label>
            </div>
          </div>

         
          <div className="absolute top-[85px] left-0 w-full bg-[#f9f8f4] shadow-2xl border-b border-gray-200 z-50 hidden peer-checked/search:block">
            <div className="max-w-[1400px] mx-auto px-6 lg:px-8 py-8 lg:py-12">
              <form action="/search" method="GET" className="flex flex-col sm:flex-row items-center gap-4 max-w-4xl mx-auto">
                <input 
                  type="text" 
                  name="q" 
                  placeholder="Search the LMI website..." 
                  className="flex-1 w-full border-b-2 border-[#0a2230] py-4 px-2 text-xl lg:text-3xl focus:outline-none text-[#0a2230] bg-transparent placeholder-gray-400 font-serif" 
                  required 
                  autoFocus
                />
                <button type="submit" className="bg-[#187965] text-white px-8 py-4 text-sm font-bold hover:bg-teal-800 transition w-full sm:w-auto">
                  Search
                </button>
                <label htmlFor="search-toggle" className="text-gray-400 hover:text-[#0a2230] cursor-pointer p-2 uppercase text-xs font-bold tracking-widest mt-4 sm:mt-0">
                  Close ✕
                </label>
              </form>
            </div>
          </div>

          <div className="absolute top-[85px] left-0 w-full bg-[#f9f8f4] h-[calc(100vh-85px)] z-40 hidden peer-checked/mobile:flex flex-col px-6 py-4 overflow-y-auto border-t border-gray-200">
            <Link href="/" className="py-4 border-b border-gray-200 font-bold text-[#0a2230]">Home</Link>
            <Link href="/about" className="py-4 border-b border-gray-200 font-bold text-[#0a2230]">About</Link>
            
            <details className="group border-b border-gray-200">
              <summary className="py-4 font-bold text-[#0a2230] flex justify-between items-center cursor-pointer list-none">
                Schools <span className="text-xl group-open:rotate-180 transition-transform">▾</span>
              </summary>
              <div className="flex flex-col pl-4 pb-4 space-y-4 text-gray-700">
                <Link href="/schools/nursing-allied-health">All Schools & Programmes</Link>
                <Link href="/schools/nursing-allied-health">Nursing & Allied Health</Link>
                <Link href="/schools/business">Business School</Link>
                <Link href="/schools/law">Law School</Link>
                <Link href="/schools/engineering">School of Engineering</Link>
              </div>
            </details>

            <Link href="/quality" className="py-4 border-b border-gray-200 font-bold text-[#0a2230]">Quality</Link>
            
            <details className="group border-b border-gray-200">
              <summary className="py-4 font-bold text-[#0a2230] flex justify-between items-center cursor-pointer list-none">
                Admissions <span className="text-xl group-open:rotate-180 transition-transform">▾</span>
              </summary>
              <div className="flex flex-col pl-4 pb-4 space-y-4 text-gray-700">
                <Link href="/contact">Admissions Overview</Link>
                <Link href="/admissions/how-to-apply">How to Apply</Link>
                <Link href="/admissions/tuition-fees">Tuition Fees</Link>
                <Link href="/admissions/scholarships">Scholarships</Link>
                <Link href="/admissions/dates-deadlines">Dates & Deadlines</Link>
                <Link href="/admissions/notifications">Notifications</Link>
                <Link href="/admissions/prospectus-2026">Prospectus 2026</Link>
                <Link href="/admissions/faqs">FAQs</Link>
                <Link href="/contact">Contact Us</Link>
              </div>
            </details>

            <Link href="/student-life" className="py-4 border-b border-gray-200 font-bold text-[#0a2230]">Student Life</Link>
            <Link href="/facilities" className="py-4 border-b border-gray-200 font-bold text-[#0a2230]">Facilities</Link>
            <Link href="/governance" className="py-4 border-b border-gray-200 font-bold text-[#0a2230]">Governance</Link>
            <Link href="/partnerships" className="py-4 border-b border-gray-200 font-bold text-[#0a2230]">Partnerships</Link>
            <Link href="/contact" className="py-4 border-b border-gray-200 font-bold text-[#0a2230]">Contact</Link>
            
            <Link href="/contact#enquiry" className="mt-8 bg-[#cc9a66] text-[#0a2230] text-center py-4 rounded font-bold">
              Apply or Enquire
            </Link>
          </div>
        </header>

      
        {children}

       
        <footer className="bg-[#0a2230] text-gray-300 py-12 lg:py-16 text-sm">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
            <div className="col-span-1 md:col-span-2 lg:col-span-1">
              
              
              <div className="h-16 w-48 mb-6 relative">
                  <img src="/images/brand/lmi-logo.png" alt="LMI Logo" className="object-contain object-left w-full h-full" />
              </div>
              
              <p className="mb-6 leading-relaxed">Learner-centred education, practical learning and opportunity in Peshawar.</p>
              <div className="flex flex-col space-y-3">
                <a href="mailto:info@lifecareinstitute.edu.pk" className="hover:text-white flex items-center gap-2">✉ info@lifecareinstitute.edu.pk</a>
                <a href="tel:091-5230486" className="hover:text-white flex items-center gap-2">📞 091-5230486</a>
                <span className="flex items-center gap-2">📍 Ring Road, Peshawar</span>
              </div>
            </div>
            
            <div>
              <h3 className="text-white font-bold tracking-wider text-xs uppercase mb-6">Study</h3>
              <ul className="space-y-3">
                <li><Link href="/schools/nursing-allied-health" className="hover:text-white">Find a Programme</Link></li>
                <li><Link href="/contact" className="hover:text-white">Admissions</Link></li>
                <li><Link href="/admissions/how-to-apply" className="hover:text-white">How to Apply</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-bold tracking-wider text-xs uppercase mb-6">Student Experience</h3>
              <ul className="space-y-3">
                <li><Link href="/student-life" className="hover:text-white">Student Life</Link></li>
                <li><Link href="/facilities" className="hover:text-white">Campus and Facilities</Link></li>
                <li><Link href="/student-life#student-voice" className="hover:text-white">Student Voice</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-bold tracking-wider text-xs uppercase mb-6">LMI</h3>
              <ul className="space-y-3">
                <li><Link href="/about" className="hover:text-white">About LMI</Link></li>
                <li><Link href="/quality" className="hover:text-white">Quality Assurance</Link></li>
                <li><Link href="/governance" className="hover:text-white">Leadership and Governance</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="max-w-[1400px] mx-auto px-6 lg:px-8 mt-12 pt-8 border-t border-gray-700 text-xs flex flex-col md:flex-row justify-between items-start md:items-center text-gray-500 gap-4">
            <p>© 2026 Lifecare Medical Institute. All rights reserved.</p>
            <div className="space-x-6 flex flex-wrap gap-y-2">
              <Link href="/policies" className="hover:text-white">Policies</Link>
              <Link href="/contact" className="hover:text-white">Contact LMI ↗</Link>
            </div>
          </div>
        </footer>

      </body>
    </html>
  )
}