import Link from 'next/link'

export default function Governance() {
  return (
    <main className="w-full font-sans">
      
      {/* Hero Header Section */}
      <section className="bg-[#0a2230] text-white pt-24 pb-48 px-6 lg:px-8 relative overflow-hidden">
        
        {/* Subtle decorative background shape */}
        <div className="absolute top-0 right-0 w-[50%] h-[150%] bg-[#061822] rounded-bl-[100%] z-0 pointer-events-none opacity-50"></div>
        
        <div className="max-w-[1200px] mx-auto relative z-10 grid lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          
          <div className="lg:col-span-8">
            <div className="flex flex-col gap-6 mb-10">
              <p className="text-white/60 text-[13px] tracking-wide">
                <Link href="/" className="hover:text-white transition">Home</Link> &gt; <Link href="/about" className="hover:text-white transition">About LMI</Link> &gt; Leadership and Governance
              </p>
              <div className="flex items-center gap-4">
                <div className="h-[1px] w-12 bg-[#cc9a66]"></div>
                <p className="text-white/80 font-bold tracking-[0.2em] text-[11px] uppercase">Lifecare Medical Institute</p>
              </div>
            </div>
            
            <h1 className="font-serif text-[44px] sm:text-[56px] lg:text-[64px] leading-[1.05] tracking-tight mb-6">
              Leadership and Governance
            </h1>
            
            <p className="text-gray-300 leading-[1.8] text-[15px] lg:text-[17px] max-w-[650px]">
              Effective governance supports academic standards, responsible decision-making and continuous improvement. LMI defines responsibilities and reporting arrangements so academic, operational, financial and quality matters receive appropriate oversight.
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

      {/* Overlapping 3 Info Cards Section */}
      <section className="bg-white pb-20 lg:pb-32 px-6 lg:px-8">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 -mt-24 relative z-20">
          
          {/* Card 1: Leadership */}
          <article className="bg-white p-8 lg:p-10 border border-gray-100 border-t-[3px] border-t-[#187965] shadow-md">
            <div className="h-12 w-12 bg-teal-50 border border-teal-100 flex items-center justify-center rounded text-[#187965] mb-8">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" /></svg>
            </div>
            <h3 className="font-serif text-[22px] lg:text-[26px] text-[#0a2230] leading-[1.25] mb-4">Leadership</h3>
            <p className="text-gray-600 text-[14px] lg:text-[15px] leading-[1.7]">
              The leadership team is responsible for institutional direction, academic delivery, student experience, resources, compliance and performance.
            </p>
          </article>
          
          {/* Card 2: Academic governance */}
          <article className="bg-white p-8 lg:p-10 border border-gray-100 border-t-[3px] border-t-[#187965] shadow-md">
            <div className="h-12 w-12 bg-teal-50 border border-teal-100 flex items-center justify-center rounded text-[#187965] mb-8">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75Z" /></svg>
            </div>
            <h3 className="font-serif text-[22px] lg:text-[26px] text-[#0a2230] leading-[1.25] mb-4">Academic governance</h3>
            <p className="text-gray-600 text-[14px] lg:text-[15px] leading-[1.7]">
              Arrangements oversee programme development, teaching, assessment, progression and academic standards, with decisions and actions recorded and monitored.
            </p>
          </article>

          {/* Card 3: Quality oversight */}
          <article className="bg-white p-8 lg:p-10 border border-gray-100 border-t-[3px] border-t-[#187965] shadow-md">
            <div className="h-12 w-12 bg-teal-50 border border-teal-100 flex items-center justify-center rounded text-[#187965] mb-8">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>
            </div>
            <h3 className="font-serif text-[22px] lg:text-[26px] text-[#0a2230] leading-[1.25] mb-4">Quality oversight</h3>
            <p className="text-gray-600 text-[14px] lg:text-[15px] leading-[1.7]">
              Evidence from teaching, assessment, learner feedback, programme performance and internal review is used to assign and evaluate improvement actions.
            </p>
          </article>

        </div>
      </section>

      {/* Leadership Profiles Section (Beige) */}
      <section className="bg-[#f9f8f4] py-20 lg:py-32 px-6 lg:px-8">
        <div className="max-w-[1200px] mx-auto">
          
          <div className="flex items-center gap-4 mb-6">
            <div className="h-[1px] w-12 bg-[#cc9a66]"></div>
            <p className="text-[#187965] font-bold tracking-[0.2em] text-[11px] uppercase">Board of Governors</p>
          </div>
          
          <h2 className="font-serif text-[36px] lg:text-[44px] text-[#0a2230] leading-[1.15] tracking-tight mb-6">
            Leadership profiles
          </h2>
          
          <p className="text-gray-600 leading-[1.8] text-[15px] lg:text-[16px] max-w-2xl mb-16">
            Meet the medical professionals and institutional leaders contributing to LMI.
          </p>

          {/* 4 Profiles Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            
            {/* Profile 1 */}
            <div className="bg-white shadow-sm flex flex-col h-full">
              <div className="aspect-[4/5] sm:aspect-square w-full bg-gray-200 overflow-hidden">
                <img src="/leadership/dr-shaukat.jpg" alt="Dr. Shaukat Amirzadah" className="w-full h-full object-cover object-top" />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="font-serif font-bold text-[18px] lg:text-[20px] text-[#0a2230] leading-snug mb-2">Dr. Shaukat Amirzadah</h3>
                <p className="text-[#187965] font-semibold text-[13px] leading-relaxed">CEO & Consultant Dermatologist</p>
              </div>
            </div>

            {/* Profile 2 */}
            <div className="bg-white shadow-sm flex flex-col h-full">
              <div className="aspect-[4/5] sm:aspect-square w-full bg-gray-200 overflow-hidden">
                <img src="/leadership/dr-sanaullah.jpg" alt="Prof. Dr. Sanaullah Jan" className="w-full h-full object-cover object-top" />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="font-serif font-bold text-[18px] lg:text-[20px] text-[#0a2230] leading-snug mb-2">Prof. Dr. Sanaullah Jan</h3>
                <p className="text-[#187965] font-semibold text-[13px] leading-relaxed">Consultant Ophthalmologist & Vitreo-Retinal Surgeon</p>
              </div>
            </div>

            {/* Profile 3 */}
            <div className="bg-white shadow-sm flex flex-col h-full">
              <div className="aspect-[4/5] sm:aspect-square w-full bg-gray-200 overflow-hidden">
                <img src="/leadership/dr-mumtaz.jpg" alt="Prof. Dr. Mumtaz Ali" className="w-full h-full object-cover object-top" />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="font-serif font-bold text-[18px] lg:text-[20px] text-[#0a2230] leading-snug mb-2">Prof. Dr. Mumtaz Ali</h3>
                <p className="text-[#187965] font-semibold text-[13px] leading-relaxed">Consultant Physician & Hepatologist</p>
              </div>
            </div>

            {/* Profile 4 */}
            <div className="bg-white shadow-sm flex flex-col h-full">
              <div className="aspect-[4/5] sm:aspect-square w-full bg-gray-200 overflow-hidden">
                <img src="/leadership/dr-javed.jpg" alt="Prof. Dr. Javed Iqbal Farooqi" className="w-full h-full object-cover object-top" />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="font-serif font-bold text-[18px] lg:text-[20px] text-[#0a2230] leading-snug mb-2">Prof. Dr. Javed Iqbal Farooqi</h3>
                <p className="text-[#187965] font-semibold text-[13px] leading-relaxed">Consultant Physician and Gastroenterologist</p>
              </div>
            </div>
            
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
              <h2 className="font-serif text-[32px] lg:text-[44px] leading-[1.1] tracking-tight mb-4">Understand the institution</h2>
              <p className="text-gray-400 text-[15px] lg:text-[16px] max-w-xl">Explore LMI's purpose, academic community and quality approach.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 shrink-0 w-full lg:w-auto">
              <Link href="/about" className="bg-[#cc9a66] text-[#0a2230] px-8 py-3.5 text-[14px] font-semibold hover:bg-[#b88554] transition flex items-center justify-center gap-2 text-center w-full sm:w-auto">
                About LMI →
              </Link>
              <Link href="/academic-community" className="border border-white text-white px-8 py-3.5 text-[14px] font-semibold hover:bg-white hover:text-[#0a2230] transition text-center w-full sm:w-auto">
                Academic Community
              </Link>
            </div>
          </div>
        </div>
      </section>

    </main>
  )
}