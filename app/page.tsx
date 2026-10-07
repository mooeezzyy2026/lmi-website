import Link from 'next/link'

export default function Home() {
  return (
    <main className="w-full">
      
      {/* Hero Section */}
      <section className="bg-[#f9f8f4] relative flex flex-col lg:block min-h-[85vh] overflow-hidden">
        <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row h-full">
          
          {/* Left Text Content */}
          <div className="w-full lg:w-[55%] px-6 lg:px-8 py-20 lg:py-32 flex flex-col justify-center relative z-20 lg:pr-16">
            <div className="flex items-center gap-4 mb-8">
              <div className="h-[1px] w-12 bg-[#cc9a66]"></div>
              <p className="text-[#187965] font-bold tracking-[0.2em] text-[11px] uppercase">Lmi · Peshawar</p>
            </div>
            
            <h1 className="font-serif text-[52px] sm:text-[64px] lg:text-[76px] text-[#0a2230] leading-[1.05] tracking-tight mb-8">
              Lifecare Medical<br/>Institute
            </h1>
            
            <div className="space-y-3 mb-8">
              <h2 className="font-serif text-[28px] lg:text-[34px] font-semibold text-[#0a2230] leading-tight">
                Empowering Through Education
              </h2>
              <p className="font-serif text-[#187965] text-[20px] lg:text-[24px] italic">
                Inspiring Learning. Shaping Futures.
              </p>
            </div>
            
            <p className="text-gray-700 leading-[1.8] max-w-[540px] mb-12 text-[15px] lg:text-[16px]">
              Lifecare Medical Institute provides a supportive learning environment where academic knowledge, practical experience and personal development come together. We help students build the confidence, skills and professional values needed for further study, employment and positive contribution to society.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/schools/nursing-allied-health" className="bg-[#0a2230] text-white px-8 py-4 text-[14px] font-semibold hover:bg-gray-800 transition flex items-center justify-center gap-2 text-center w-full sm:w-auto">
                Explore programmes →
              </Link>
              <Link href="/contact" className="border border-gray-300 text-[#0a2230] px-8 py-4 text-[14px] font-semibold hover:bg-gray-50 transition text-center w-full sm:w-auto">
                Apply or enquire
              </Link>
            </div>
          </div>
          
        </div>

        {/* Right Bleeding Image with Blend Effect */}
        <div className="w-full h-[450px] lg:h-full lg:w-[65%] lg:absolute lg:top-0 lg:right-0 relative z-10">
          <div className="hidden lg:block absolute top-0 left-0 w-[40%] h-full bg-gradient-to-r from-[#f9f8f4] via-[#f9f8f4]/90 to-transparent z-10 pointer-events-none"></div>
          <div className="hidden lg:block absolute bottom-0 left-0 w-full h-[15%] bg-gradient-to-t from-[#f9f8f4] to-transparent z-10 pointer-events-none"></div>
          <img 
            src="/images/campus/lmi-campus-exterior.jpg" 
            alt="LMI Campus Building" 
            className="object-cover object-center w-full h-full absolute inset-0"
          />
        </div>
      </section>

      {/* Study at LMI Section */}
      <section className="bg-white py-20 lg:py-32 px-6 lg:px-8">
        <div className="max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div>
            <div className="flex items-center gap-4 mb-8">
              <div className="h-[1px] w-12 bg-[#cc9a66]"></div>
              <p className="text-[#187965] font-bold tracking-[0.2em] text-[11px] uppercase">Study at LMI</p>
            </div>
            <h2 className="font-serif text-[40px] lg:text-[52px] text-[#0a2230] leading-[1.1] tracking-tight mb-6">
              Find the right path<br/>for your ambition
            </h2>
            <p className="text-gray-700 leading-[1.8] text-[15px] lg:text-[16px] max-w-lg">
              Explore our current academic and professional programmes. Every programme page is designed to give you clear information before you make a decision.
            </p>
          </div>
          
          <div className="relative mt-8 lg:mt-0">
             <div className="absolute inset-0 bg-[#f3efe6] transform translate-x-4 translate-y-4 lg:translate-x-6 lg:translate-y-6"></div>
             <div className="bg-[#0a2230] text-white p-10 lg:p-14 relative z-10">
               <div className="flex items-center gap-3 mb-8">
                 <div className="w-2 h-2 rounded-full bg-[#cc9a66]"></div>
                 <p className="text-[#cc9a66] font-bold tracking-[0.2em] text-[10px] uppercase">Clear programme information</p>
               </div>
               
               <h3 className="font-serif text-[28px] lg:text-[36px] leading-tight mb-5">Compare what matters</h3>
               <p className="text-gray-300 text-[14px] lg:text-[15px] leading-[1.8] mb-10 max-w-sm">
                 Entry requirements, duration, delivery, assessment, awarding arrangements and approval status.
               </p>
               
               <Link href="/schools/nursing-allied-health" className="text-[#cc9a66] font-bold text-[14px] hover:underline flex items-center gap-2">
                 View all programmes →
               </Link>
             </div>
          </div>
        </div>
      </section>

      {/* Why LMI Section */}
      <section className="bg-[#f9f8f4] py-20 lg:py-32 px-6 lg:px-8">
        <div className="max-w-[1400px] mx-auto">
          
          <div className="mb-16">
            <div className="flex items-center gap-4 mb-8">
              <div className="h-[1px] w-12 bg-[#cc9a66]"></div>
              <p className="text-[#187965] font-bold tracking-[0.2em] text-[11px] uppercase">Why LMI</p>
            </div>
            <h2 className="font-serif text-[40px] lg:text-[52px] text-[#0a2230] leading-[1.1] tracking-tight mb-6">
              An education built around the learner
            </h2>
            <p className="text-gray-700 leading-[1.8] text-[15px] lg:text-[16px] max-w-2xl">
              Academic rigour, applied learning and individual support come together in an institution shaped by quality, integrity and continuous improvement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            <article className="bg-white p-8 lg:p-10 border border-gray-100 border-t-[3px] border-t-[#187965] shadow-sm hover:shadow-md transition">
              <div className="h-12 w-12 bg-teal-50 rounded flex items-center justify-center mb-8 text-[#187965]">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75Z" /></svg>
              </div>
              <h3 className="font-serif text-[22px] lg:text-[24px] font-semibold text-[#0a2230] leading-[1.25] mb-4">Purpose-built<br/>learning environment</h3>
              <p className="text-gray-600 text-[14px] lg:text-[15px] leading-[1.7]">A purpose-built campus on Ring Road, Peshawar, designed to support teaching, practical learning and student development.</p>
            </article>
            
            <article className="bg-white p-8 lg:p-10 border border-gray-100 border-t-[3px] border-t-[#187965] shadow-sm hover:shadow-md transition">
              <div className="h-12 w-12 bg-teal-50 rounded flex items-center justify-center mb-8 text-[#187965]">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" /></svg>
              </div>
              <h3 className="font-serif text-[22px] lg:text-[24px] font-semibold text-[#0a2230] leading-[1.25] mb-4">Teaching and<br/>student support</h3>
              <p className="text-gray-600 text-[14px] lg:text-[15px] leading-[1.7]">Clear academic guidance and access to support that helps students participate, progress and achieve.</p>
            </article>
            
            <article className="bg-white p-8 lg:p-10 border border-gray-100 border-t-[3px] border-t-[#187965] shadow-sm hover:shadow-md transition">
              <div className="h-12 w-12 bg-teal-50 rounded flex items-center justify-center mb-8 text-[#187965]">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M15.042 21.672 13.684 16.6m0 0-2.51 2.225.569-9.47 5.227 7.917-3.286-.672ZM12 2.25V4.5m5.834.166-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243-1.59-1.59" /></svg>
              </div>
              <h3 className="font-serif text-[22px] lg:text-[24px] font-semibold text-[#0a2230] leading-[1.25] mb-4">Practical learning<br/>and progression</h3>
              <p className="text-gray-600 text-[14px] lg:text-[15px] leading-[1.7]">Learning that connects academic study with practical application, employment and further education.</p>
            </article>
          </div>
        </div>
      </section>

      {/* Our Wider Organisation Section */}
      <section className="bg-[#f4f1ea] relative flex flex-col lg:block overflow-hidden">
        <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row h-full">
          
          {/* Left Text */}
          <div className="w-full lg:w-[50%] px-6 lg:px-8 py-20 lg:py-32 flex flex-col justify-center relative z-20 lg:pr-16">
            <div className="flex items-center gap-4 mb-8">
              <div className="h-[1px] w-12 bg-[#cc9a66]"></div>
              <p className="text-[#187965] font-bold tracking-[0.2em] text-[11px] uppercase">Our wider organisation</p>
            </div>
            
            <h2 className="font-serif text-[40px] lg:text-[52px] text-[#0a2230] leading-[1.1] tracking-tight mb-8">
              Education and<br/>healthcare, connected
            </h2>
            
            <p className="text-gray-700 text-[15px] lg:text-[16px] leading-[1.8] mb-12 max-w-[500px]">
              LMI and <span className="font-bold text-[#187965]">Life Care Hospital & Research Institute (LCH&RI)</span> are part of the same organisation, connecting education with a wider professional healthcare setting.
            </p>
            
            <a 
              href="https://lch.com.pk/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-[#0a2230] text-white px-8 py-4 text-[14px] font-semibold hover:bg-gray-800 transition inline-flex items-center justify-center gap-2 w-full sm:w-auto"
            >
              Visit LCH&RI ↗
            </a>
          </div>
          
        </div>

        {/* Right Bleeding Image with Blend Effect */}
        <div className="w-full h-[450px] lg:h-full lg:w-[60%] lg:absolute lg:top-0 lg:right-0 relative z-10">
          <div className="hidden lg:block absolute top-0 left-0 w-[40%] h-full bg-gradient-to-r from-[#f4f1ea] via-[#f4f1ea]/90 to-transparent z-10 pointer-events-none"></div>
          <div className="hidden lg:block absolute bottom-0 left-0 w-full h-[15%] bg-gradient-to-t from-[#f4f1ea] to-transparent z-10 pointer-events-none"></div>
          <div className="hidden lg:block absolute top-0 left-0 w-full h-[10%] bg-gradient-to-b from-[#f4f1ea] to-transparent z-10 pointer-events-none"></div>
          
          <img 
            src="/images/organisation/hospital-home.jpg" 
            alt="Life Care Hospital Building" 
            className="object-cover object-center w-full h-full absolute inset-0"
          />

          <div className="absolute top-8 right-8 lg:top-16 lg:right-16 w-32 h-32 md:w-48 md:h-48 bg-white/40 backdrop-blur-md rounded-full shadow-2xl flex items-center justify-center p-2 md:p-3 border border-white/60 z-20">
            <div className="w-full h-full bg-white rounded-full flex items-center justify-center overflow-hidden shadow-inner p-2 md:p-4">
              <img 
                src="/images/organisation/images-3.jpeg" 
                alt="Life Care Hospital Logo" 
                className="object-contain w-full h-full" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quality at LMI */}
      <section className="bg-[#187965] text-white py-20 lg:py-32 overflow-hidden px-6 lg:px-8">
        <div className="max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="relative flex justify-center lg:justify-start order-2 lg:order-1 hidden sm:flex">
             <div className="w-48 h-48 lg:w-80 lg:h-80 rounded-full border border-white/20 flex items-center justify-center relative">
               <div className="absolute top-4 right-8 lg:top-8 lg:-right-4 w-12 h-12 lg:w-16 lg:h-16 rounded-full bg-[#cc9a66]"></div>
               <span className="font-serif text-[100px] lg:text-[150px] leading-none">Q</span>
             </div>
          </div>
          <div className="order-1 lg:order-2">
            <div className="flex items-center gap-4 mb-8">
              <div className="h-[1px] w-12 bg-white/50"></div>
              <p className="text-white font-bold tracking-[0.2em] text-[11px] uppercase">Quality at LMI</p>
            </div>
            <h2 className="font-serif text-[40px] lg:text-[52px] leading-[1.1] tracking-tight mb-8">Standards that support<br/>every stage of learning</h2>
            <p className="text-white/90 leading-[1.8] text-[15px] lg:text-[16px] max-w-xl mb-12">
              Quality is a shared responsibility across LMI. We use clear standards, learner feedback and evidence from teaching, assessment and programme review to guide improvement.
            </p>
            <Link href="/quality" className="inline-flex bg-white text-[#187965] px-8 py-4 text-[14px] font-semibold hover:bg-gray-100 transition items-center justify-center gap-2 w-full sm:w-auto">
              Explore quality assurance →
            </Link>
          </div>
        </div>
      </section>

      {/* Your Experience */}
      <section className="bg-white py-20 lg:py-32 px-6 lg:px-8">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <div className="h-[1px] w-12 bg-[#cc9a66]"></div>
            <p className="text-[#187965] font-bold tracking-[0.2em] text-[11px] uppercase">Your experience</p>
          </div>
          <h2 className="font-serif text-[40px] lg:text-[52px] text-[#0a2230] leading-[1.1] tracking-tight mb-16">More than a programme</h2>
          
          <div className="grid lg:grid-cols-2 gap-6">
            
            {/* Left Beige Card */}
            <div className="bg-[#f9f8f4] p-8 lg:p-14 flex flex-col justify-between h-full min-h-[300px] lg:min-h-[450px]">
              <div className="flex justify-between items-start mb-8">
                <div className="text-[#187965] w-8 h-8 rounded-full border border-[#187965] flex items-center justify-center">
                   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" /></svg>
                </div>
                <span className="text-gray-400 font-bold text-xs">01</span>
              </div>
              <div>
                <h3 className="font-serif text-[32px] lg:text-[40px] text-[#0a2230] leading-[1.1] mb-6">Support to participate<br/>and progress</h3>
                <p className="text-gray-700 mb-10 max-w-md text-[15px] lg:text-[16px] leading-[1.8]">Academic guidance, study support, wellbeing information and careers advice are part of the wider LMI experience.</p>
                <Link href="/student-life" className="text-[#187965] font-bold hover:underline flex items-center gap-2 text-[14px]">
                  Discover student life →
                </Link>
              </div>
            </div>
            
            <div className="flex flex-col gap-6">
              {/* Top Right White Card */}
              <div className="border border-gray-200 p-8 lg:p-10 flex-1 flex flex-col justify-between">
                <div className="flex justify-end mb-4">
                  <span className="text-gray-400 font-bold text-xs">02</span>
                </div>
                <div>
                  <h3 className="font-serif text-[24px] lg:text-[28px] text-[#0a2230] leading-[1.2] mb-4">A voice in your learning</h3>
                  <p className="text-gray-600 mb-8 text-[14px] lg:text-[15px] leading-[1.6]">Student feedback helps shape teaching, support and institutional development.</p>
                  <Link href="/student-life#student-voice" className="text-[#187965] font-bold hover:underline flex items-center gap-2 text-[14px]">
                    How student voice works →
                  </Link>
                </div>
              </div>
              
              {/* Bottom Right Blue Card */}
              <div className="bg-[#0a2230] text-white p-8 lg:p-10 flex-1 flex flex-col justify-between">
                <div className="flex justify-end mb-4">
                  <span className="text-gray-500 font-bold text-xs">03</span>
                </div>
                <div>
                  <h3 className="font-serif text-[24px] lg:text-[28px] text-white leading-[1.2] mb-4">See LMI for yourself</h3>
                  <p className="text-gray-300 mb-8 text-[14px] lg:text-[15px] leading-[1.6]">Explore the campus, meet the admissions team and ask the questions that matter to you.</p>
                  <Link href="/contact" className="text-[#cc9a66] font-bold hover:underline flex items-center gap-2 text-[14px]">
                    Plan your visit →
                  </Link>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-[#0b1828] text-white py-20 lg:py-32 border-b border-gray-800 px-6 lg:px-8">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <div className="h-[1px] w-12 bg-[#cc9a66]"></div>
            <p className="text-gray-400 font-bold tracking-[0.2em] text-[11px] uppercase">Your next step</p>
          </div>
          
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 lg:gap-10">
            <div>
              <h2 className="font-serif text-[36px] lg:text-[48px] leading-[1.1] tracking-tight mb-6">Ready to take your next step?</h2>
              <p className="text-gray-400 text-[15px] lg:text-[16px] max-w-xl">Explore your options, check the current programme status and speak to our admissions team.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 shrink-0 w-full lg:w-auto">
              <Link href="/schools/nursing-allied-health" className="bg-[#cc9a66] text-[#0a2230] px-8 py-4 text-[14px] font-semibold hover:bg-[#b88554] transition flex items-center justify-center gap-2 text-center w-full sm:w-auto">
                Find a programme →
              </Link>
              <Link href="/contact" className="border border-white text-white px-8 py-4 text-[14px] font-semibold hover:bg-white hover:text-[#0a2230] transition text-center w-full sm:w-auto">
                Contact LMI
              </Link>
            </div>
          </div>
        </div>
      </section>

    </main>
  )
}