import Link from 'next/link'

export default function StudentLifePage() {
  return (
    <main className="w-full bg-[#f9f8f4]">
      
      {/* Hero Section */}
      <section className="bg-[#0a2230] text-white pt-12 pb-32 lg:pt-20 lg:pb-48 px-6 lg:px-8 relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-12 lg:gap-24 relative z-10 items-center">
          <div>
            {/* Breadcrumb */}
            <div className="text-xs text-gray-400 mb-12 flex items-center gap-2 flex-wrap">
              <Link href="/" className="hover:text-white transition">Home</Link> 
              <span>&gt;</span> 
              <span className="text-white">Student Life</span>
            </div>
            
            <div className="flex items-center gap-4 mb-6">
              <div className="h-[1px] w-8 bg-[#cc9a66]"></div>
              <p className="text-gray-300 font-bold tracking-widest text-[10px] lg:text-xs uppercase">Lifecare Medical Institute</p>
            </div>
            
            <h1 className="font-serif text-5xl lg:text-7xl mb-8 leading-[1.1]">
              Student Life at LMI
            </h1>
            
            <p className="text-base lg:text-lg text-gray-300 max-w-xl leading-relaxed font-light">
              Your experience at LMI is about more than completing a programme. We want students to feel welcomed, supported and able to participate fully in their learning and wider institutional life.
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

      {/* Info Cards Grid */}
      <section className="px-6 lg:px-8 relative z-20 -mt-20 lg:-mt-32 pb-16 lg:pb-24">
        <div className="max-w-[1400px] mx-auto grid md:grid-cols-2 gap-6 lg:gap-8">
          
          {/* Card 1: Academic Support */}
          <article className="bg-white p-8 lg:p-12 shadow-xl border border-gray-100">
            <div className="h-10 w-10 bg-[#187965]/10 flex items-center justify-center mb-8 text-[#187965]">
              {/* Book Icon */}
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
              </svg>
            </div>
            <h3 className="font-serif text-[22px] lg:text-2xl text-[#0a2230] mb-4">Academic support</h3>
            <p className="text-gray-600 text-[15px] leading-relaxed">
              Programme guidance, induction and access to teaching staff, with tutorials, study-skills guidance, progress reviews and assessment preparation where appropriate.
            </p>
          </article>

          {/* Card 2: Wellbeing and pastoral support */}
          <article className="bg-white p-8 lg:p-12 shadow-xl border border-gray-100">
            <div className="h-10 w-10 bg-[#187965]/10 flex items-center justify-center mb-8 text-[#187965]">
              {/* Shield Heart Icon */}
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 10.5c-1.332-1.332-3.418-1.332-4.75 0-1.332 1.332-1.332 3.418 0 4.75L12 19.833l4.75-4.583c1.332-1.332 1.332-3.418 0-4.75-1.332-1.332-3.418-1.332-4.75 0Z" />
              </svg>
            </div>
            <h3 className="font-serif text-[22px] lg:text-2xl text-[#0a2230] mb-4">Wellbeing and pastoral support</h3>
            <p className="text-gray-600 text-[15px] leading-relaxed">
              Students can seek guidance when personal circumstances, wellbeing or other barriers affect their studies, including routes to specialist support.
            </p>
          </article>

          {/* Card 3: Careers and progression */}
          <article className="bg-white p-8 lg:p-12 shadow-sm border border-gray-100">
            <div className="h-10 w-10 bg-[#187965]/10 flex items-center justify-center mb-8 text-[#187965]">
              {/* Briefcase Icon */}
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.896 1.982-2.044 2.082a50.118 50.118 0 0 1-12.412 0c-1.148-.1-2.044-.988-2.044-2.082v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z" />
              </svg>
            </div>
            <h3 className="font-serif text-[22px] lg:text-2xl text-[#0a2230] mb-4">Careers and progression</h3>
            <p className="text-gray-600 text-[15px] leading-relaxed">
              Guidance, employer engagement, professional activity and planning help connect study with future employment and further learning.
            </p>
          </article>

          {/* Card 4: Student voice */}
          <article className="bg-white p-8 lg:p-12 shadow-sm border border-gray-100">
            <div className="h-10 w-10 bg-[#187965]/10 flex items-center justify-center mb-8 text-[#187965]">
              {/* Document Text Icon */}
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
              </svg>
            </div>
            <h3 className="font-serif text-[22px] lg:text-2xl text-[#0a2230] mb-4">Student voice</h3>
            <p className="text-gray-600 text-[15px] leading-relaxed">
              Surveys, representatives, tutorials, focus groups and everyday discussion help LMI understand what works and what needs to improve.
            </p>
          </article>

        </div>
      </section>

      {/* Safe and Inclusive Community */}
      <section className="py-16 lg:py-24 px-6 lg:px-8 bg-[#0a2230] text-white">
        <div className="max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-8 lg:gap-24 items-start">
          <h2 className="font-serif text-4xl lg:text-5xl leading-tight">
            A safe and<br/>inclusive<br/>community
          </h2>
          <div className="text-gray-300 text-sm lg:text-[15px] leading-relaxed max-w-xl lg:mt-4 space-y-4">
            <p>
              LMI expects students and staff to treat one another with dignity and respect. Our policies support safeguarding, equality, inclusion, academic integrity and responsible conduct.
            </p>
            <p>
              Feedback outcomes and agreed actions are communicated wherever possible.
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
              <h2 className="font-serif text-4xl lg:text-5xl mb-4 lg:mb-6 leading-tight">Discover your<br className="hidden lg:block"/> learning environment</h2>
              <p className="text-gray-400 text-[15px] lg:text-base max-w-xl">
                Explore the campus facilities or contact us to arrange a visit.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 shrink-0 w-full lg:w-auto">
              <Link href="/facilities" className="bg-[#cc9a66] text-[#0a2230] px-8 py-4 text-sm font-bold hover:bg-[#b88554] transition flex items-center justify-center gap-2 text-center w-full sm:w-auto">
                Campus and Facilities →
              </Link>
              <Link href="/contact" className="border border-white text-white px-8 py-4 text-sm font-bold hover:bg-white hover:text-[#0a2230] transition text-center w-full sm:w-auto">
                Contact LMI
              </Link>
            </div>
          </div>
        </div>
      </section>

    </main>
  )
}