import Link from 'next/link'

export default function CampusAndFacilities() {
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
                <Link href="/" className="hover:text-white transition">Home</Link> &gt; <Link href="/student-life" className="hover:text-white transition">Student Life</Link> &gt; Campus and Facilities
              </p>
              <div className="flex items-center gap-4">
                <div className="h-[1px] w-12 bg-[#cc9a66]"></div>
                <p className="text-white/80 font-bold tracking-[0.2em] text-[11px] uppercase">Lifecare Medical Institute</p>
              </div>
            </div>
            
            <h1 className="font-serif text-[44px] sm:text-[56px] lg:text-[64px] leading-[1.05] tracking-tight mb-6">
              Campus and Facilities
            </h1>
            
            <p className="text-gray-300 leading-[1.8] text-[15px] lg:text-[17px] max-w-2xl">
              Our purpose-built campus on Ring Road, Peshawar, provides spaces for teaching, practical learning, independent study and student support.
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

      {/* 4 Info Cards Grid Section */}
      <section className="bg-white py-20 lg:py-32 px-6 lg:px-8">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          
          {/* Card 1: Teaching and learning spaces */}
          <article className="bg-white p-8 lg:p-12 border border-gray-100 border-t-[3px] border-t-[#187965] shadow-sm">
            <div className="h-12 w-12 bg-teal-50 flex items-center justify-center rounded text-[#187965] mb-8">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" /></svg>
            </div>
            <h3 className="font-serif text-[22px] lg:text-[26px] text-[#0a2230] leading-[1.25] mb-4">Teaching and learning spaces</h3>
            <p className="text-gray-600 text-[14px] lg:text-[15px] leading-[1.7]">
              Rooms support lectures, seminars, presentations and group learning, with display and digital equipment provided according to programme needs.
            </p>
          </article>
          
          {/* Card 2: Laboratories and practical learning */}
          <article className="bg-white p-8 lg:p-12 border border-gray-100 border-t-[3px] border-t-[#187965] shadow-sm">
            <div className="h-12 w-12 bg-teal-50 flex items-center justify-center rounded text-[#187965] mb-8">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0 1 12 15a9.065 9.065 0 0 0-6.23-.693L5 14.5m14.8.8 1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0 1 12 21c-2.792 0-5.484-.379-8.067-1.087-1.717-.293-2.3-2.379-1.067-3.61L5 14.5" /></svg>
            </div>
            <h3 className="font-serif text-[22px] lg:text-[26px] text-[#0a2230] leading-[1.25] mb-4">Laboratories and practical learning</h3>
            <p className="text-gray-600 text-[14px] lg:text-[15px] leading-[1.7]">
              Specialist facilities support relevant subjects, with access, supervision and equipment managed in line with programme, safety and capacity requirements.
            </p>
          </article>

          {/* Card 3: Library and digital learning */}
          <article className="bg-white p-8 lg:p-12 border border-gray-100 border-t-[3px] border-t-[#187965] shadow-sm">
            <div className="h-12 w-12 bg-teal-50 flex items-center justify-center rounded text-[#187965] mb-8">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" /></svg>
            </div>
            <h3 className="font-serif text-[22px] lg:text-[26px] text-[#0a2230] leading-[1.25] mb-4">Library and digital learning</h3>
            <p className="text-gray-600 text-[14px] lg:text-[15px] leading-[1.7]">
              Printed and digital resources support each programme, alongside guidance on research, responsible source use and independent study.
            </p>
          </article>

          {/* Card 4: Student and shared spaces */}
          <article className="bg-white p-8 lg:p-12 border border-gray-100 border-t-[3px] border-t-[#187965] shadow-sm">
            <div className="h-12 w-12 bg-teal-50 flex items-center justify-center rounded text-[#187965] mb-8">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" /></svg>
            </div>
            <h3 className="font-serif text-[22px] lg:text-[26px] text-[#0a2230] leading-[1.25] mb-4">Student and shared spaces</h3>
            <p className="text-gray-600 text-[14px] lg:text-[15px] leading-[1.7]">
              Spaces for independent study, group work, academic events and student use are reviewed as student numbers and programme needs develop.
            </p>
          </article>
          
        </div>
      </section>

      {/* Learning Environments at LMI (Beige Section) */}
      <section className="bg-[#f9f8f4] py-20 lg:py-32 px-6 lg:px-8">
        <div className="max-w-[1200px] mx-auto">
          
          <div className="flex items-center gap-4 mb-6">
            <div className="h-[1px] w-12 bg-[#cc9a66]"></div>
            <p className="text-[#187965] font-bold tracking-[0.2em] text-[11px] uppercase">Campus in View</p>
          </div>
          
          <h2 className="font-serif text-[36px] lg:text-[44px] text-[#0a2230] leading-[1.15] tracking-tight mb-6">
            Learning environments at LMI
          </h2>
          
          <p className="text-gray-600 leading-[1.8] text-[15px] lg:text-[16px] max-w-2xl mb-12">
            Explore LMI's academic and practical learning spaces alongside Lifecare Hospital & Research Institute.
          </p>

          {/* 2 Large Images Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-6 lg:mb-8">
            <div className="bg-gray-200 aspect-[4/3] w-full overflow-hidden shadow-sm">
              <img 
                src="/images/campus/lmi-campus-exterior.jpg" 
                alt="LMI Campus Building" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="bg-gray-200 aspect-[4/3] w-full overflow-hidden shadow-sm">
              <img 
                src="/images/organisation/hospital-home.jpg" 
                alt="Life Care Hospital Building" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* 4 Small Images Grid with Text */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-20 lg:mb-32">
            
            {/* Image Card 1 */}
            <div className="bg-white shadow-sm flex flex-col h-full">
              <div className="aspect-[4/3] w-full bg-gray-200 overflow-hidden">
                <img src="/images/facilities/library.jpg" alt="Library" className="w-full h-full object-cover" />
              </div>
              <div className="p-5 lg:p-6 flex-grow">
                <h3 className="font-serif text-[17px] lg:text-[19px] text-[#0a2230] leading-snug">Library and learning resources</h3>
              </div>
            </div>

            {/* Image Card 2 */}
            <div className="bg-white shadow-sm flex flex-col h-full">
              <div className="aspect-[4/3] w-full bg-gray-200 overflow-hidden">
                <img src="/images/facilities/computer-lab.jpg" alt="Computer laboratory" className="w-full h-full object-cover" />
              </div>
              <div className="p-5 lg:p-6 flex-grow">
                <h3 className="font-serif text-[17px] lg:text-[19px] text-[#0a2230] leading-snug">Computer laboratory</h3>
              </div>
            </div>

            {/* Image Card 3 */}
            <div className="bg-white shadow-sm flex flex-col h-full">
              <div className="aspect-[4/3] w-full bg-gray-200 overflow-hidden">
                <img src="/images/facilities/science-lab.jpg" alt="Science laboratory" className="w-full h-full object-cover" />
              </div>
              <div className="p-5 lg:p-6 flex-grow">
                <h3 className="font-serif text-[17px] lg:text-[19px] text-[#0a2230] leading-snug">Science laboratory</h3>
              </div>
            </div>

            {/* Image Card 4 */}
            <div className="bg-white shadow-sm flex flex-col h-full">
              <div className="aspect-[4/3] w-full bg-gray-200 overflow-hidden">
                <img src="/images/facilities/nursing-lab.jpg" alt="Nursing skills laboratory" className="w-full h-full object-cover" />
              </div>
              <div className="p-5 lg:p-6 flex-grow">
                <h3 className="font-serif text-[17px] lg:text-[19px] text-[#0a2230] leading-snug">Nursing skills laboratory</h3>
              </div>
            </div>
            
          </div>

          {/* Practical and Clinical Experience Text */}
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-5">
              <h2 className="font-serif text-[36px] lg:text-[44px] text-[#0a2230] leading-[1.15] tracking-tight">
                Practical and<br/>clinical experience
              </h2>
            </div>
            <div className="lg:col-span-7 pt-2 lg:pt-4">
              <p className="text-gray-700 text-[14px] lg:text-[15px] leading-[1.8]">
                Where relevant to an approved programme, supervised practical or clinical learning may be arranged with <a href="https://lch.com.pk/" target="_blank" rel="noopener noreferrer" className="text-[#187965] font-semibold hover:underline">Lifecare Hospital & Research Institute</a> or another suitable placement setting. Arrangements remain subject to programme requirements, placement capacity and applicable approvals.
              </p>
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
              <h2 className="font-serif text-[32px] lg:text-[44px] leading-[1.1] tracking-tight mb-4">Plan a visit to LMI</h2>
              <p className="text-gray-400 text-[15px] lg:text-[16px] max-w-xl">See the campus, speak to Admissions and ask about the facilities for your intended programme.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 shrink-0 w-full lg:w-auto">
              <Link href="/contact" className="bg-[#cc9a66] text-[#0a2230] px-8 py-3.5 text-[14px] font-semibold hover:bg-[#b88554] transition flex items-center justify-center gap-2 text-center w-full sm:w-auto">
                Contact LMI →
              </Link>
              <Link href="/student-life" className="border border-white text-white px-8 py-3.5 text-[14px] font-semibold hover:bg-white hover:text-[#0a2230] transition text-center w-full sm:w-auto">
                Student Life
              </Link>
            </div>
          </div>
        </div>
      </section>

    </main>
  )
}