import Link from 'next/link'

export default function FAQsPage() {
  return (
    <main className="w-full bg-[#f9f8f4]">
      
      {/* Hero Section */}
      <section className="bg-[#0a2230] text-white pt-12 pb-32 lg:pt-20 lg:pb-48 px-6 lg:px-8 relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-12 relative z-10">
          <div>
            {/* Breadcrumb */}
            <div className="text-xs text-gray-400 mb-12 flex items-center gap-2 flex-wrap">
              <Link href="/" className="hover:text-white transition">Home</Link> 
              <span>&gt;</span> 
              <Link href="/admissions" className="hover:text-white transition">Admissions</Link>
              <span>&gt;</span>
              <span className="text-white">FAQs</span>
            </div>
            
            <div className="flex items-center gap-4 mb-6">
              <div className="h-[1px] w-8 bg-[#cc9a66]"></div>
              <p className="text-gray-300 font-bold tracking-widest text-[10px] lg:text-xs uppercase">Lifecare Medical Institute</p>
            </div>
            
            <h1 className="font-serif text-5xl lg:text-7xl mb-8 leading-[1.1]">
              Admissions FAQs
            </h1>
            
            <p className="text-lg lg:text-xl text-gray-300 max-w-lg leading-relaxed font-light">
              Answers to common questions about programme status, applications, documents, fees and deadlines.
            </p>
          </div>
          
          {/* Abstract Graphic */}
          <div className="hidden lg:flex items-center justify-center relative w-full h-full">
             <div className="relative w-[320px] h-[320px] border-[1px] border-white/20 rounded-full flex items-center justify-center">
               <div className="absolute top-12 right-0 w-24 h-24 bg-[#cc9a66]"></div>
               <div className="w-[120%] h-[1px] bg-white/20 absolute -rotate-45"></div>
             </div>
          </div>
        </div>
      </section>

      {/* Accordion FAQ Section */}
      <section className="px-6 lg:px-8 relative z-20 -mt-20 lg:-mt-32 pb-24 lg:pb-32">
        <div className="max-w-[1100px] mx-auto bg-white shadow-xl border border-gray-100 p-8 lg:p-16">
          
          <div className="flex flex-col w-full">
            
            {/* FAQ 1 */}
            <details className="group border-b border-gray-200" open>
              <summary className="flex justify-between items-center font-serif text-[22px] lg:text-2xl text-[#0a2230] cursor-pointer list-none py-6 [&::-webkit-details-marker]:hidden">
                <span className="font-bold pr-8">Which programmes are currently running?</span>
                <span className="text-2xl text-[#187965] group-open:hidden transition-transform">+</span>
                <span className="text-2xl text-[#187965] hidden group-open:block transition-transform">-</span>
              </summary>
              <div className="pb-8 text-gray-600 text-[15px] leading-relaxed max-w-3xl">
                BS Nursing, Certified Nursing Assistant (CNA) and Lady Health Visitor (LHV) are currently running.
              </div>
            </details>

            {/* FAQ 2 */}
            <details className="group border-b border-gray-200" open>
              <summary className="flex justify-between items-center font-serif text-[22px] lg:text-2xl text-[#0a2230] cursor-pointer list-none py-6 [&::-webkit-details-marker]:hidden">
                <span className="font-bold pr-8">Can I apply for a programme that is in the approval process?</span>
                <span className="text-2xl text-[#187965] group-open:hidden transition-transform">+</span>
                <span className="text-2xl text-[#187965] hidden group-open:block transition-transform">-</span>
              </summary>
              <div className="pb-8 text-gray-600 text-[15px] leading-relaxed max-w-3xl">
                No. Applications can be accepted only after approval is confirmed and the programme is formally opened for applications.
              </div>
            </details>

            {/* FAQ 3 */}
            <details className="group border-b border-gray-200" open>
              <summary className="flex justify-between items-center font-serif text-[22px] lg:text-2xl text-[#0a2230] cursor-pointer list-none py-6 [&::-webkit-details-marker]:hidden">
                <span className="font-bold pr-8">What documents will I need?</span>
                <span className="text-2xl text-[#187965] group-open:hidden transition-transform">+</span>
                <span className="text-2xl text-[#187965] hidden group-open:block transition-transform">-</span>
              </summary>
              <div className="pb-8 text-gray-600 text-[15px] leading-relaxed max-w-3xl">
                Requirements vary, but applicants should normally prepare identification, academic certificates or transcripts and any programme-specific evidence requested by Admissions.
              </div>
            </details>

            {/* FAQ 4 */}
            <details className="group border-b border-gray-200" open>
              <summary className="flex justify-between items-center font-serif text-[22px] lg:text-2xl text-[#0a2230] cursor-pointer list-none py-6 [&::-webkit-details-marker]:hidden">
                <span className="font-bold pr-8">Where can I find tuition fees?</span>
                <span className="text-2xl text-[#187965] group-open:hidden transition-transform">+</span>
                <span className="text-2xl text-[#187965] hidden group-open:block transition-transform">-</span>
              </summary>
              <div className="pb-8 text-gray-600 text-[15px] leading-relaxed max-w-3xl">
                Contact Admissions for the confirmed fee schedule for your programme and intake before applying or making a payment.
              </div>
            </details>

            {/* FAQ 5 */}
            <details className="group border-b border-gray-200" open>
              <summary className="flex justify-between items-center font-serif text-[22px] lg:text-2xl text-[#0a2230] cursor-pointer list-none py-6 [&::-webkit-details-marker]:hidden">
                <span className="font-bold pr-8">How will I know the application deadline?</span>
                <span className="text-2xl text-[#187965] group-open:hidden transition-transform">+</span>
                <span className="text-2xl text-[#187965] hidden group-open:block transition-transform">-</span>
              </summary>
              <div className="pb-8 text-gray-600 text-[15px] leading-relaxed max-w-3xl">
                Use the Dates & Deadlines and Notifications pages, or obtain confirmation directly from Admissions.
              </div>
            </details>

            {/* FAQ 6 */}
            <details className="group border-b border-gray-200" open>
              <summary className="flex justify-between items-center font-serif text-[22px] lg:text-2xl text-[#0a2230] cursor-pointer list-none py-6 [&::-webkit-details-marker]:hidden">
                <span className="font-bold pr-8">Who should I contact if I need help?</span>
                <span className="text-2xl text-[#187965] group-open:hidden transition-transform">+</span>
                <span className="text-2xl text-[#187965] hidden group-open:block transition-transform">-</span>
              </summary>
              <div className="pb-8 text-gray-600 text-[15px] leading-relaxed max-w-3xl">
                Use the Contact Us page and select Admissions when submitting your enquiry.
              </div>
            </details>

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
              <h2 className="font-serif text-4xl lg:text-5xl mb-4 lg:mb-6 leading-tight">Still have a question?</h2>
              <p className="text-gray-400 text-[15px] lg:text-base max-w-xl">
                Contact Admissions and our team will direct your enquiry to the appropriate person.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 shrink-0 w-full lg:w-auto">
              <Link href="/contact" className="bg-[#cc9a66] text-[#0a2230] px-8 py-4 text-sm font-bold hover:bg-[#b88554] transition flex items-center justify-center gap-2 text-center w-full sm:w-auto">
                Contact Admissions →
              </Link>
              <Link href="/admissions/how-to-apply" className="border border-white text-white px-8 py-4 text-sm font-bold hover:bg-white hover:text-[#0a2230] transition text-center w-full sm:w-auto">
                How to Apply
              </Link>
            </div>
          </div>
        </div>
      </section>

    </main>
  )
}