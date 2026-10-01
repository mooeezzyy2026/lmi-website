import Link from 'next/link'

export default function PartnershipsPage() {
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
              <span className="text-white">Partnerships</span>
            </div>
            
            <div className="flex items-center gap-4 mb-6">
              <div className="h-[1px] w-8 bg-[#cc9a66]"></div>
              <p className="text-gray-300 font-bold tracking-widest text-[10px] lg:text-xs uppercase">Lifecare Medical Institute</p>
            </div>
            
            <h1 className="font-serif text-5xl lg:text-7xl mb-8 leading-[1.1]">
              Partnerships
            </h1>
            
            <p className="text-base lg:text-lg text-gray-300 max-w-xl leading-relaxed font-light">
              Strong partnerships can extend opportunity, strengthen learning and connect education with employment and further study. LMI develops relationships that have a clear purpose and provide demonstrable benefit to students.
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

      {/* Info Cards Grid (Overlapping) */}
      <section className="px-6 lg:px-8 relative z-20 -mt-20 lg:-mt-32 pb-16 lg:pb-24">
        <div className="max-w-[1400px] mx-auto grid md:grid-cols-3 gap-6 lg:gap-8">
          
          {/* Card 1: Academic and awarding partnerships */}
          <article className="bg-white p-8 lg:p-12 shadow-xl border-t-[3px] border-[#187965]">
            <div className="h-10 w-10 bg-[#187965]/10 flex items-center justify-center mb-8 text-[#187965]">
              {/* Academic/Handshake Icon */}
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
              </svg>
            </div>
            <h3 className="font-serif text-[22px] lg:text-2xl text-[#0a2230] mb-4 font-bold">Academic and<br/>awarding partnerships</h3>
            <p className="text-gray-600 text-[15px] leading-relaxed">
              LMI works with appropriate universities and awarding organisations where formal arrangements are confirmed. Published information identifies the exact partner, award, responsibilities and status.
            </p>
          </article>

          {/* Card 2: Employer and professional engagement */}
          <article className="bg-white p-8 lg:p-12 shadow-xl border-t-[3px] border-[#187965]">
            <div className="h-10 w-10 bg-[#187965]/10 flex items-center justify-center mb-8 text-[#187965]">
              {/* Briefcase Icon */}
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.896 1.982-2.044 2.082a50.118 50.118 0 0 1-12.412 0c-1.148-.1-2.044-.988-2.044-2.082v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z" />
              </svg>
            </div>
            <h3 className="font-serif text-[22px] lg:text-2xl text-[#0a2230] mb-4 font-bold">Employer and<br/>professional engagement</h3>
            <p className="text-gray-600 text-[15px] leading-relaxed">
              Engagement with employers and professional communities helps LMI understand changing workforce needs and create opportunities for applied learning and progression.
            </p>
          </article>

          {/* Card 3: Practical learning partnerships */}
          <article className="bg-white p-8 lg:p-12 shadow-xl border-t-[3px] border-[#187965]">
            <div className="h-10 w-10 bg-[#187965]/10 flex items-center justify-center mb-8 text-[#187965]">
              {/* Shield/Heart Icon */}
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 10.5c-1.332-1.332-3.418-1.332-4.75 0-1.332 1.332-1.332 3.418 0 4.75L12 19.833l4.75-4.583c1.332-1.332 1.332-3.418 0-4.75-1.332-1.332-3.418-1.332-4.75 0Z" />
              </svg>
            </div>
            <h3 className="font-serif text-[22px] lg:text-2xl text-[#0a2230] mb-4 font-bold">Practical learning<br/>partnerships</h3>
            <p className="text-gray-600 text-[15px] leading-relaxed">
              Where programmes include practical, clinical or work-based learning, safety, supervision, capacity and assessment responsibilities are agreed before activity begins.
            </p>
          </article>

        </div>
      </section>

      {/* A purposeful approach Section */}
      <section className="bg-white py-16 lg:py-24 px-6 lg:px-8 border-t border-gray-100">
        <div className="max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-8 lg:gap-24 items-start">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="h-[1px] w-8 bg-[#cc9a66]"></div>
              <p className="text-[#187965] font-bold tracking-widest text-xs uppercase">Work with us</p>
            </div>
            <h2 className="font-serif text-4xl lg:text-5xl text-[#0a2230] leading-tight">
              A purposeful approach<br/>to collaboration
            </h2>
          </div>
          <div className="text-gray-600 text-[15px] lg:text-base leading-relaxed max-w-xl lg:mt-12 space-y-6">
            <p>
              We welcome enquiries from organisations interested in academic collaboration, staff development, employer engagement, practical learning or community activity.
            </p>
            <p>
              Partners and awarding organisations are named publicly only after the relevant relationship and responsibilities are formally confirmed.
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
              <h2 className="font-serif text-4xl lg:text-5xl mb-4 lg:mb-6 leading-tight">Start a partnership conversation</h2>
              <p className="text-gray-400 text-[15px] lg:text-base max-w-xl">
                Tell us about your organisation and the opportunity you would like to explore.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 shrink-0 w-full lg:w-auto">
              <Link href="/contact" className="bg-[#cc9a66] text-[#0a2230] px-8 py-4 text-sm font-bold hover:bg-[#b88554] transition flex items-center justify-center gap-2 text-center w-full sm:w-auto">
                Become a Partner →
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