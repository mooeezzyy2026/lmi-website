import Link from 'next/link'

export default function Home() {
  return (
    <main className="w-full">
      
      {/* Hero Section */}
      <section className="bg-[#f9f8f4] pt-10 lg:pt-16 pb-16 lg:pb-24">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="space-y-6 lg:space-y-8 lg:pr-8">
            <div className="flex items-center gap-4">
              <div className="h-[1px] w-8 bg-[#e29b5d]"></div>
              <p className="text-[#187965] font-bold tracking-widest text-xs uppercase">LMI · Peshawar</p>
            </div>
            
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-7xl text-[#0a2230] leading-[1.1]">
              Lifecare Medical<br/>Institute
            </h1>
            
            <div className="space-y-2">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#0a2230]">Empowering Through Education</h2>
              <p className="text-[#187965] text-lg lg:text-xl italic font-serif">Inspiring Learning. Shaping Futures.</p>
            </div>
            
            <p className="text-gray-600 leading-relaxed max-w-lg text-sm lg:text-base">
              Lifecare Medical Institute provides a supportive learning environment where academic knowledge, practical experience and personal development come together. We help students build the confidence, skills and professional values needed for further study, employment and positive contribution to society.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-2 lg:pt-4">
              <Link href="/study/programmes" className="bg-[#0a2230] text-white px-8 py-3.5 text-sm font-bold hover:bg-gray-800 transition flex items-center justify-center gap-2 text-center">
                Explore programmes →
              </Link>
              <Link href="/contact" className="border border-[#0a2230] text-[#0a2230] px-8 py-3.5 text-sm font-bold hover:bg-[#0a2230] hover:text-white transition text-center">
                Apply or enquire
              </Link>
            </div>
          </div>
          
          {/* Image Container with Label */}
          <div className="relative h-[300px] sm:h-[450px] lg:h-[600px] w-full bg-gray-200 overflow-hidden shadow-2xl mt-8 lg:mt-0">
            <img 
              src="/images/campus/lmi-campus-exterior.jpg" 
              alt="LMI Campus" 
              className="object-cover w-full h-full absolute inset-0"
            />
            <div className="absolute bottom-0 left-0 bg-[#e29b5d] px-4 lg:px-6 py-2 lg:py-3 flex items-center gap-2">
              <span className="text-[#0a2230]">★</span>
              <p className="text-[#0a2230] font-bold tracking-widest text-[10px] lg:text-xs uppercase">Knowledge with purpose</p>
            </div>
          </div>
        </div>
      </section>

      {/* Info Cards Section */}
      <section className="bg-[#f9f8f4] pb-16 lg:pb-24 lg:-mt-8 relative z-10">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          <article className="bg-white p-8 lg:p-10 shadow-sm border border-gray-100">
            <div className="h-10 w-10 bg-teal-50 rounded flex items-center justify-center mb-6 text-teal-600">🏛️</div>
            <h3 className="font-serif text-xl lg:text-2xl text-[#0a2230] mb-3 lg:mb-4">Purpose-built<br/>learning environment</h3>
            <p className="text-gray-600 text-sm leading-relaxed">A purpose-built campus on Ring Road, Peshawar, designed to support teaching, practical learning and student development.</p>
          </article>
          <article className="bg-white p-8 lg:p-10 shadow-sm border border-gray-100">
            <div className="h-10 w-10 bg-teal-50 rounded flex items-center justify-center mb-6 text-teal-600">🎧</div>
            <h3 className="font-serif text-xl lg:text-2xl text-[#0a2230] mb-3 lg:mb-4">Teaching and<br/>student support</h3>
            <p className="text-gray-600 text-sm leading-relaxed">Clear academic guidance and access to support that helps students participate, progress and achieve.</p>
          </article>
          <article className="bg-white p-8 lg:p-10 shadow-sm border border-gray-100">
            <div className="h-10 w-10 bg-teal-50 rounded flex items-center justify-center mb-6 text-teal-600">🤝</div>
            <h3 className="font-serif text-xl lg:text-2xl text-[#0a2230] mb-3 lg:mb-4">Practical learning<br/>and progression</h3>
            <p className="text-gray-600 text-sm leading-relaxed">Learning that connects academic study with practical application, employment and further education.</p>
          </article>
        </div>
      </section>

      {/* Our Wider Organisation Section */}
      <section className="bg-[#f9f8f4] py-16 lg:py-32 px-6 lg:px-8 overflow-hidden">
        <div className="max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left Text */}
          <div className="order-2 lg:order-1">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-[1px] w-8 bg-[#e29b5d]"></div>
              <p className="text-[#187965] font-bold tracking-widest text-xs uppercase">Our wider organisation</p>
            </div>
            
            <h2 className="font-serif text-4xl lg:text-5xl text-[#0a2230] leading-tight mb-6">
              Education and<br/>healthcare, connected
            </h2>
            
            <p className="text-gray-600 text-[15px] lg:text-base leading-relaxed mb-10 max-w-lg">
              LMI and Life Care Hospital & Research Institute (LCH&RI) are part of the same organisation, connecting education with a wider professional healthcare setting.
            </p>
            
            {/* UPDATED BUTTON HERE */}
            <a 
              href="https://lch.com.pk/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-[#0a2230] text-white px-8 py-4 text-sm font-bold hover:bg-gray-800 transition inline-flex items-center justify-center gap-2 w-full sm:w-auto"
            >
              Visit LCH&RI ↗
            </a>
          </div>

          {/* Right Image & Overlapping Logo Badge */}
          <div className="relative mt-8 lg:mt-0 pr-6 pt-6 md:pr-10 md:pt-10 order-1 lg:order-2">
             
             {/* Main Hospital Image */}
             <div className="w-full aspect-square md:aspect-[4/3] relative bg-gray-200 shadow-xl">
               <img 
                 src="/images/organisation/hospital-home.jpg" 
                 alt="Life Care Hospital Building" 
                 className="object-cover w-full h-full absolute inset-0" 
               />
             </div>
             
             {/* Circular Logo Badge */}
             <div className="absolute top-0 right-0 w-32 h-32 md:w-48 md:h-48 bg-white/40 backdrop-blur-md rounded-full shadow-2xl flex items-center justify-center p-2 md:p-3 border border-white/60 z-10">
               <div className="w-full h-full bg-white rounded-full flex items-center justify-center overflow-hidden shadow-inner p-2 md:p-4">
                 <img 
                   src="/images/organisation/images-3.jpeg" 
                   alt="Life Care Hospital Logo" 
                   className="object-contain w-full h-full" 
                 />
               </div>
             </div>
             
          </div>

        </div>
      </section>

      {/* Quality at LMI */}
      <section className="bg-[#187965] text-white py-16 lg:py-32 overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="relative flex justify-center lg:justify-start order-2 lg:order-1 hidden sm:flex">
             {/* Big abstract Q graphic */}
             <div className="w-48 h-48 lg:w-80 lg:h-80 rounded-full border border-white/20 flex items-center justify-center relative">
               <div className="absolute top-4 right-8 lg:top-8 right-16 w-6 h-6 lg:w-8 lg:h-8 rounded-full bg-[#e29b5d]"></div>
               <span className="font-serif text-7xl lg:text-9xl">Q</span>
             </div>
          </div>
          <div className="order-1 lg:order-2">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-[1px] w-8 bg-white/50"></div>
              <p className="text-white font-bold tracking-widest text-xs uppercase">Quality at LMI</p>
            </div>
            <h2 className="font-serif text-4xl lg:text-5xl leading-tight mb-6">Standards that support<br/>every stage of learning</h2>
            <p className="text-white/80 leading-relaxed mb-8 lg:mb-10 text-base lg:text-lg max-w-xl">
              Quality is a shared responsibility across LMI. We use clear standards, learner feedback and evidence from teaching, assessment and programme review to guide improvement.
            </p>
            <Link href="/quality" className="inline-flex bg-white text-[#187965] px-8 py-4 text-sm font-bold hover:bg-gray-100 transition items-center justify-center gap-2 w-full sm:w-auto">
              Explore quality assurance →
            </Link>
          </div>
        </div>
      </section>

      {/* Your Experience */}
      <section className="bg-white py-16 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-[1px] w-8 bg-[#e29b5d]"></div>
            <p className="text-[#187965] font-bold tracking-widest text-xs uppercase">Your experience</p>
          </div>
          <h2 className="font-serif text-4xl lg:text-5xl text-[#0a2230] mb-10 lg:mb-16">More than a programme</h2>
          
          <div className="grid lg:grid-cols-2 gap-6">
            {/* Large Beige Card */}
            <div className="bg-[#f9f8f4] p-8 lg:p-12 flex flex-col justify-between h-full min-h-[300px] lg:min-h-[400px]">
              <div className="flex justify-between items-start mb-8">
                <div className="text-teal-600 text-2xl">🛡️</div>
                <span className="text-gray-400 font-bold text-sm">01</span>
              </div>
              <div>
                <h3 className="font-serif text-3xl lg:text-4xl text-[#0a2230] leading-tight mb-4 lg:mb-6">Support to participate<br/>and progress</h3>
                <p className="text-gray-600 mb-6 lg:mb-8 max-w-md text-sm lg:text-base">Academic guidance, study support, wellbeing information and careers advice are part of the wider LMI experience.</p>
                <Link href="/student-life" className="text-[#187965] font-bold hover:underline flex items-center gap-2 text-sm">
                  Discover student life →
                </Link>
              </div>
            </div>
            
            <div className="flex flex-col gap-6">
              {/* Top Right White Card */}
              <div className="border border-gray-200 p-8 lg:p-10 flex-1">
                <div className="flex justify-end mb-4">
                  <span className="text-gray-400 font-bold text-sm">02</span>
                </div>
                <h3 className="font-serif text-2xl lg:text-3xl text-[#0a2230] mb-3 lg:mb-4">A voice in your learning</h3>
                <p className="text-gray-600 mb-6 text-sm">Student feedback helps shape teaching, support and institutional development.</p>
                <Link href="/student-life#student-voice" className="text-[#187965] font-bold hover:underline flex items-center gap-2 text-sm">
                  How student voice works →
                </Link>
              </div>
              
              {/* Bottom Right Blue Card */}
              <div className="bg-[#0a2230] text-white p-8 lg:p-10 flex-1">
                <div className="flex justify-end mb-4">
                  <span className="text-gray-500 font-bold text-sm">03</span>
                </div>
                <h3 className="font-serif text-2xl lg:text-3xl mb-3 lg:mb-4">See LMI for yourself</h3>
                <p className="text-gray-400 mb-6 text-sm">Explore the campus, meet the admissions team and ask the questions that matter to you.</p>
                <Link href="/contact" className="text-[#e29b5d] font-bold hover:underline flex items-center gap-2 text-sm">
                  Plan your visit →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-[#0b1828] text-white py-16 lg:py-24 border-b border-gray-800">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-[1px] w-8 bg-[#e29b5d]"></div>
            <p className="text-gray-400 font-bold tracking-widest text-xs uppercase">Your next step</p>
          </div>
          
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 lg:gap-10">
            <div>
              <h2 className="font-serif text-4xl lg:text-5xl mb-4 lg:mb-6">Ready to take your next step?</h2>
              <p className="text-gray-400 text-base lg:text-lg">Explore your options, check the current programme status and speak to our admissions team.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 shrink-0 w-full lg:w-auto">
              <Link href="/schools/nursing-allied-health" className="bg-[#e29b5d] text-[#0a2230] px-8 py-4 text-sm font-bold hover:bg-[#d48c4f] transition flex items-center justify-center gap-2 text-center w-full sm:w-auto">
                Find a programme →
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