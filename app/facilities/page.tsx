import Link from 'next/link'

export default function FacilitiesPage() {
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
              <Link href="/student-life" className="hover:text-white transition">Student Life</Link> 
              <span>&gt;</span> 
              <span className="text-white">Campus and Facilities</span>
            </div>
            
            <div className="flex items-center gap-4 mb-6">
              <div className="h-[1px] w-8 bg-[#cc9a66]"></div>
              <p className="text-gray-300 font-bold tracking-widest text-[10px] lg:text-xs uppercase">Lifecare Medical Institute</p>
            </div>
            
            <h1 className="font-serif text-5xl lg:text-7xl mb-8 leading-[1.1]">
              Campus and Facilities
            </h1>
            
            <p className="text-base lg:text-lg text-gray-300 max-w-xl leading-relaxed font-light">
              Our purpose-built campus on Ring Road, Peshawar, provides spaces for teaching, practical learning, independent study and student support.
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
               <div className="w-[140%] h-[1px] bg-white/20 absolute rotate-45"></div>
             </div>
          </div>
        </div>
      </section>

      {/* Info Cards Grid */}
      <section className="py-16 lg:py-24 px-6 lg:px-8 bg-white">
        <div className="max-w-[1400px] mx-auto grid md:grid-cols-2 gap-6 lg:gap-8">
          
          {/* Card 1: Teaching spaces */}
          <article className="bg-white p-8 lg:p-12 shadow-sm border border-gray-100">
            <div className="h-10 w-10 bg-[#187965]/10 flex items-center justify-center mb-8 text-[#187965]">
              {/* Podium / Presentation Icon */}
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" />
              </svg>
            </div>
            <h3 className="font-serif text-[22px] lg:text-2xl text-[#0a2230] mb-4">Teaching and learning spaces</h3>
            <p className="text-gray-600 text-[15px] leading-relaxed">
              Rooms support lectures, seminars, presentations and group learning, with display and digital equipment provided according to programme needs.
            </p>
          </article>

          {/* Card 2: Laboratories */}
          <article className="bg-white p-8 lg:p-12 shadow-sm border border-gray-100">
            <div className="h-10 w-10 bg-[#187965]/10 flex items-center justify-center mb-8 text-[#187965]">
              {/* Flask / Lab Icon */}
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0 1 12 15a9.065 9.065 0 0 0-6.23-.693L5 14.5m14.8.8 1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0 1 12 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
              </svg>
            </div>
            <h3 className="font-serif text-[22px] lg:text-2xl text-[#0a2230] mb-4">Laboratories and practical learning</h3>
            <p className="text-gray-600 text-[15px] leading-relaxed">
              Specialist facilities support relevant subjects, with access, supervision and equipment managed in line with programme, safety and capacity requirements.
            </p>
          </article>

          {/* Card 3: Library */}
          <article className="bg-white p-8 lg:p-12 shadow-sm border border-gray-100">
            <div className="h-10 w-10 bg-[#187965]/10 flex items-center justify-center mb-8 text-[#187965]">
              {/* Books Icon */}
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
              </svg>
            </div>
            <h3 className="font-serif text-[22px] lg:text-2xl text-[#0a2230] mb-4">Library and digital learning</h3>
            <p className="text-gray-600 text-[15px] leading-relaxed">
              Printed and digital resources support each programme, alongside guidance on research, responsible source use and independent study.
            </p>
          </article>

          {/* Card 4: Student spaces */}
          <article className="bg-white p-8 lg:p-12 shadow-sm border border-gray-100">
            <div className="h-10 w-10 bg-[#187965]/10 flex items-center justify-center mb-8 text-[#187965]">
              {/* People/Users Icon */}
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
              </svg>
            </div>
            <h3 className="font-serif text-[22px] lg:text-2xl text-[#0a2230] mb-4">Student and shared spaces</h3>
            <p className="text-gray-600 text-[15px] leading-relaxed">
              Spaces for independent study, group work, academic events and student use are reviewed as student numbers and programme needs develop.
            </p>
          </article>

        </div>
      </section>

      {/* Learning Environments Image Gallery */}
      <section className="bg-[#f9f8f4] py-16 lg:py-24 px-6 lg:px-8">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-[1px] w-8 bg-[#cc9a66]"></div>
            <p className="text-[#187965] font-bold tracking-widest text-xs uppercase">Campus in view</p>
          </div>
          <h2 className="font-serif text-4xl lg:text-5xl text-[#0a2230] leading-tight mb-4">
            Learning<br/>environments at LMI
          </h2>
          <p className="text-gray-600 mb-12 text-sm lg:text-[15px] max-w-xl">
            Explore LMI's academic and practical learning spaces alongside Lifecare Hospital & Research Institute.
          </p>

          <div className="space-y-6">
            {/* Top Row: 2 Large Images */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white shadow-sm flex flex-col">
                <div className="w-full aspect-[4/3] bg-gray-200 relative overflow-hidden">
                  <img src="/images/facilities/academic-block.jpg" alt="Academic block" className="object-cover w-full h-full absolute inset-0" />
                </div>
                <div className="p-5 font-serif text-lg text-[#0a2230] font-bold bg-white">
                  Academic block
                </div>
              </div>
              <div className="bg-white shadow-sm flex flex-col">
                <div className="w-full aspect-[4/3] bg-gray-200 relative overflow-hidden">
                  <img src="/images/facilities/lch-building.jpg" alt="Lifecare Hospital" className="object-cover w-full h-full absolute inset-0" />
                </div>
                <div className="p-5 font-serif text-lg text-[#187965] font-bold bg-white flex items-center gap-2 hover:underline cursor-pointer">
                  Lifecare Hospital & Research Institute (LCH&RI) ↗
                </div>
              </div>
            </div>

            {/* Bottom Row: 4 Small Images */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white shadow-sm flex flex-col">
                <div className="w-full aspect-[4/3] bg-gray-200 relative overflow-hidden">
                  <img src="/images/facilities/library.jpg" alt="Library" className="object-cover w-full h-full absolute inset-0" />
                </div>
                <div className="p-5 font-serif text-base text-[#0a2230] font-bold bg-white">
                  Library and learning resources
                </div>
              </div>
              <div className="bg-white shadow-sm flex flex-col">
                <div className="w-full aspect-[4/3] bg-gray-200 relative overflow-hidden">
                  <img src="/images/facilities/computer-lab.jpg" alt="Computer laboratory" className="object-cover w-full h-full absolute inset-0" />
                </div>
                <div className="p-5 font-serif text-base text-[#0a2230] font-bold bg-white">
                  Computer laboratory
                </div>
              </div>
              <div className="bg-white shadow-sm flex flex-col">
                <div className="w-full aspect-[4/3] bg-gray-200 relative overflow-hidden">
                  <img src="/images/facilities/science-lab.jpg" alt="Science laboratory" className="object-cover w-full h-full absolute inset-0" />
                </div>
                <div className="p-5 font-serif text-base text-[#0a2230] font-bold bg-white">
                  Science laboratory
                </div>
              </div>
              <div className="bg-white shadow-sm flex flex-col">
                <div className="w-full aspect-[4/3] bg-gray-200 relative overflow-hidden">
                  <img src="/images/facilities/nursing-lab.jpg" alt="Nursing skills laboratory" className="object-cover w-full h-full absolute inset-0" />
                </div>
                <div className="p-5 font-serif text-base text-[#0a2230] font-bold bg-white">
                  Nursing skills laboratory
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Practical and Clinical Experience Section */}
      <section className="bg-[#f9f8f4] py-16 lg:py-24 px-6 lg:px-8 border-t border-gray-200">
        <div className="max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-8 lg:gap-24 items-start">
          <h2 className="font-serif text-4xl lg:text-5xl text-[#0a2230] leading-tight">
            Practical<br/>and clinical<br/>experience
          </h2>
          <div className="text-gray-600 text-sm lg:text-[15px] leading-relaxed max-w-xl lg:mt-2">
            <p>
              Where relevant to an approved programme, supervised practical or clinical learning may be arranged with <span className="text-[#187965] font-semibold">Lifecare Hospital & Research Institute</span> or another suitable placement setting. Arrangements remain subject to programme requirements, placement capacity and applicable approvals.
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
              <h2 className="font-serif text-4xl lg:text-5xl mb-4 lg:mb-6 leading-tight">Plan a visit to LMI</h2>
              <p className="text-gray-400 text-[15px] lg:text-base max-w-xl">
                See the campus, speak to Admissions and ask about the facilities for your intended programme.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 shrink-0 w-full lg:w-auto">
              <Link href="/contact" className="bg-[#cc9a66] text-[#0a2230] px-8 py-4 text-sm font-bold hover:bg-[#b88554] transition flex items-center justify-center gap-2 text-center w-full sm:w-auto">
                Contact LMI →
              </Link>
              <Link href="/student-life" className="border border-white text-white px-8 py-4 text-sm font-bold hover:bg-white hover:text-[#0a2230] transition text-center w-full sm:w-auto">
                Student Life
              </Link>
            </div>
          </div>
        </div>
      </section>

    </main>
  )
}