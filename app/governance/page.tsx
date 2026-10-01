import Link from 'next/link'

export default function GovernancePage() {
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
              <Link href="/about" className="hover:text-white transition">About LMI</Link>
              <span>&gt;</span>
              <span className="text-white">Leadership and Governance</span>
            </div>
            
            <div className="flex items-center gap-4 mb-6">
              <div className="h-[1px] w-8 bg-[#cc9a66]"></div>
              <p className="text-gray-300 font-bold tracking-widest text-[10px] lg:text-xs uppercase">Lifecare Medical Institute</p>
            </div>
            
            <h1 className="font-serif text-5xl lg:text-7xl mb-8 leading-[1.1]">
              Leadership and Governance
            </h1>
            
            <p className="text-base lg:text-lg text-gray-300 max-w-xl leading-relaxed font-light">
              Effective governance supports academic standards, responsible decision-making and continuous improvement. LMI defines responsibilities and reporting arrangements so academic, operational, financial and quality matters receive appropriate oversight.
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
          
          {/* Card 1: Leadership */}
          <article className="bg-white p-8 lg:p-12 shadow-xl border-t-[3px] border-[#187965]">
            <div className="h-10 w-10 bg-[#187965]/10 flex items-center justify-center mb-8 text-[#187965]">
              {/* Users Icon */}
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
              </svg>
            </div>
            <h3 className="font-serif text-[22px] lg:text-2xl text-[#0a2230] mb-4 font-bold">Leadership</h3>
            <p className="text-gray-600 text-[15px] leading-relaxed">
              The leadership team is responsible for institutional direction, academic delivery, student experience, resources, compliance and performance.
            </p>
          </article>

          {/* Card 2: Academic governance */}
          <article className="bg-white p-8 lg:p-12 shadow-xl border-t-[3px] border-[#187965]">
            <div className="h-10 w-10 bg-[#187965]/10 flex items-center justify-center mb-8 text-[#187965]">
              {/* Institution/Building Icon */}
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75Z" />
              </svg>
            </div>
            <h3 className="font-serif text-[22px] lg:text-2xl text-[#0a2230] mb-4 font-bold">Academic governance</h3>
            <p className="text-gray-600 text-[15px] leading-relaxed">
              Arrangements oversee programme development, teaching, assessment, progression and academic standards, with decisions and actions recorded and monitored.
            </p>
          </article>

          {/* Card 3: Quality oversight */}
          <article className="bg-white p-8 lg:p-12 shadow-xl border-t-[3px] border-[#187965]">
            <div className="h-10 w-10 bg-[#187965]/10 flex items-center justify-center mb-8 text-[#187965]">
              {/* Shield Check Icon */}
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
            </div>
            <h3 className="font-serif text-[22px] lg:text-2xl text-[#0a2230] mb-4 font-bold">Quality oversight</h3>
            <p className="text-gray-600 text-[15px] leading-relaxed">
              Evidence from teaching, assessment, learner feedback, programme performance and internal review is used to assign and evaluate improvement actions.
            </p>
          </article>

        </div>
      </section>

      {/* Leadership Profiles Section */}
      <section className="bg-[#f9f8f4] py-16 lg:py-24 px-6 lg:px-8">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-[1px] w-8 bg-[#cc9a66]"></div>
            <p className="text-[#187965] font-bold tracking-widest text-xs uppercase">Board of Governors</p>
          </div>
          <h2 className="font-serif text-4xl lg:text-5xl text-[#0a2230] leading-tight mb-4">
            Leadership profiles
          </h2>
          <p className="text-gray-600 mb-12 text-sm lg:text-[15px] max-w-xl">
            Meet the medical professionals and institutional leaders contributing to LMI.
          </p>

          {/* Profiles Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Dr. Shaukat Amirzadah */}
            <div className="bg-white shadow-sm flex flex-col">
              <div className="w-full aspect-square bg-gray-200 relative overflow-hidden">
                <img src="/images/leadership/dr-shaukat.jpg" alt="Dr. Shaukat Amirzadah" className="object-cover w-full h-full absolute inset-0" />
              </div>
              <div className="p-6">
                <h3 className="font-serif text-xl text-[#0a2230] font-bold mb-2">Dr. Shaukat Amirzadah</h3>
                <p className="text-[#187965] text-sm font-semibold">CEO & Consultant Dermatologist</p>
              </div>
            </div>

            {/* Prof. Dr. Sanaullah Jan */}
            <div className="bg-white shadow-sm flex flex-col">
              <div className="w-full aspect-square bg-gray-200 relative overflow-hidden">
                <img src="/images/leadership/dr-sanaullah.jpg" alt="Prof. Dr. Sanaullah Jan" className="object-cover w-full h-full absolute inset-0" />
              </div>
              <div className="p-6">
                <h3 className="font-serif text-xl text-[#0a2230] font-bold mb-2">Prof. Dr. Sanaullah Jan</h3>
                <p className="text-[#187965] text-sm font-semibold leading-snug">Consultant Ophthalmologist & Vitreo-Retinal Surgeon</p>
              </div>
            </div>

            {/* Prof. Dr. Mumtaz Ali */}
            <div className="bg-white shadow-sm flex flex-col">
              <div className="w-full aspect-square bg-gray-200 relative overflow-hidden">
                <img src="/images/leadership/dr-mumtaz.jpg" alt="Prof. Dr. Mumtaz Ali" className="object-cover w-full h-full absolute inset-0" />
              </div>
              <div className="p-6">
                <h3 className="font-serif text-xl text-[#0a2230] font-bold mb-2">Prof. Dr. Mumtaz Ali</h3>
                <p className="text-[#187965] text-sm font-semibold">Consultant Physician & Hepatologist</p>
              </div>
            </div>

            {/* Prof. Dr. Javed Iqbal Farooqi */}
            <div className="bg-white shadow-sm flex flex-col">
              <div className="w-full aspect-square bg-gray-200 relative overflow-hidden">
                <img src="/images/leadership/dr-javed.jpg" alt="Prof. Dr. Javed Iqbal Farooqi" className="object-cover w-full h-full absolute inset-0" />
              </div>
              <div className="p-6">
                <h3 className="font-serif text-xl text-[#0a2230] font-bold mb-2">Prof. Dr. Javed Iqbal Farooqi</h3>
                <p className="text-[#187965] text-sm font-semibold leading-snug">Consultant Physician and Gastroenterologist</p>
              </div>
            </div>

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
              <h2 className="font-serif text-4xl lg:text-5xl mb-4 lg:mb-6 leading-tight">Understand the institution</h2>
              <p className="text-gray-400 text-[15px] lg:text-base max-w-xl">
                Explore LMI's purpose, academic community and quality approach.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 shrink-0 w-full lg:w-auto">
              <Link href="/about" className="bg-[#cc9a66] text-[#0a2230] px-8 py-4 text-sm font-bold hover:bg-[#b88554] transition flex items-center justify-center gap-2 text-center w-full sm:w-auto">
                About LMI →
              </Link>
              <Link href="/about/academic-community" className="border border-white text-white px-8 py-4 text-sm font-bold hover:bg-white hover:text-[#0a2230] transition text-center w-full sm:w-auto">
                Academic Community
              </Link>
            </div>
          </div>
        </div>
      </section>

    </main>
  )
}