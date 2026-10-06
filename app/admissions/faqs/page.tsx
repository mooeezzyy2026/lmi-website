"use client"

import Link from 'next/link'
import { useState } from 'react'

export default function FAQs() {
  // State to track which FAQ item is currently open
  const [openIndex, setOpenIndex] = useState<number | null>(0); // 0 means the first item is open by default

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "Which programmes are currently running?",
      answer: "BS Nursing, Certified Nursing Assistant (CNA) and Lady Health Visitor (LHV) are currently running."
    },
    {
      question: "Can I apply for a programme that is in the approval process?",
      answer: "No. Applications can be accepted only after approval is confirmed and the programme is formally opened for applications."
    },
    {
      question: "What documents will I need?",
      answer: "Requirements vary, but applicants should normally prepare identification, academic certificates or transcripts and any programme-specific evidence requested by Admissions."
    },
    {
      question: "Where can I find tuition fees?",
      answer: "Contact Admissions for the confirmed fee schedule for your programme and intake before applying or making a payment."
    },
    {
      question: "How will I know the application deadline?",
      answer: "Use the Dates & Deadlines and Notifications pages, or obtain confirmation directly from Admissions."
    },
    {
      question: "Who should I contact if I need help?",
      answer: "Use the Contact Us page and select Admissions when submitting your enquiry."
    }
  ];

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
                <Link className="hover:text-white transition" href="/">Home</Link> &gt; <Link className="hover:text-white transition" href="/admissions">Admissions</Link> &gt; FAQs
              </p>
              <div className="flex items-center gap-4">
                <div className="h-[1px] w-12 bg-[#cc9a66]"></div>
                <p className="text-white/80 font-bold tracking-[0.2em] text-[11px] uppercase">Lifecare Medical Institute</p>
              </div>
            </div>
            
            <h1 className="font-serif text-[44px] sm:text-[56px] lg:text-[64px] leading-[1.05] tracking-tight mb-6">
              Admissions FAQs
            </h1>
            
            <p className="text-gray-300 leading-[1.8] text-[15px] lg:text-[17px] max-w-[650px]">
              Answers to common questions about programme status, applications, documents, fees and deadlines.
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

      {/* Functional FAQ Accordion Section */}
      <section className="bg-white py-20 lg:py-32 px-6 lg:px-8">
        <div className="max-w-[1000px] mx-auto">
          
          <div className="flex flex-col w-full border-t border-gray-200">
            {faqData.map((faq, index) => (
              <div key={index} className="border-b border-gray-200">
                <button 
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between items-center py-6 lg:py-8 text-left focus:outline-none"
                  aria-expanded={openIndex === index}
                >
                  <h3 className="font-serif text-[20px] lg:text-[24px] text-[#0a2230] pr-8">
                    {faq.question}
                  </h3>
                  <span className="text-[#187965] font-bold text-2xl shrink-0 leading-none">
                    {openIndex === index ? '−' : '+'}
                  </span>
                </button>
                
                {/* Expandable Content Area */}
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openIndex === index ? 'max-h-96 opacity-100 pb-8' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="text-gray-600 text-[15px] lg:text-[16px] leading-[1.8] max-w-4xl">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
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
              <h2 className="font-serif text-[32px] lg:text-[44px] leading-[1.1] tracking-tight mb-4">Still have a question?</h2>
              <p className="text-gray-400 text-[15px] lg:text-[16px] max-w-xl">Contact Admissions and our team will direct your enquiry to the appropriate person.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 shrink-0 w-full lg:w-auto">
              <Link className="bg-[#cc9a66] text-[#0a2230] px-8 py-3.5 text-[14px] font-semibold hover:bg-[#b88554] transition flex items-center justify-center gap-2 text-center w-full sm:w-auto" href="/contact">
                Contact Admissions →
              </Link>
              <Link className="border border-white text-white px-8 py-3.5 text-[14px] font-semibold hover:bg-white hover:text-[#0a2230] transition text-center w-full sm:w-auto" href="/admissions/how-to-apply">
                How to Apply
              </Link>
            </div>
          </div>
        </div>
      </section>

    </main>
  )
}