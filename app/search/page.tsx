'use client'

import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { Suspense } from 'react'

// This acts as a database of all the text on your website
const siteContent = [
  {
    title: 'Home',
    path: '/',
    description: 'Lifecare Medical Institute provides a supportive learning environment where academic knowledge, practical experience and personal development come together in Peshawar.',
    keywords: ['home', 'empowering through education', 'ring road', 'purpose-built', 'learning environment']
  },
  {
    title: 'About LMI',
    path: '/about',
    description: 'Lifecare Medical Institute is an educational institution based in Peshawar. We provide and develop programmes that combine academic learning, practical experience and professional preparation.',
    keywords: ['about', 'opportunity', 'standards', 'support', 'institutional status', 'vision']
  },
  {
    title: 'School of Nursing & Allied Health Sciences',
    path: '/schools/nursing-allied-health',
    description: "LMI's current academic base for nursing, clinical and allied health education. Programmes currently running include BS Nursing, CNA, and LHV.",
    keywords: ['nursing', 'allied health', 'bs nursing', 'clinical', 'cna', 'lhv', 'lady health visitor']
  },
  {
    title: 'Business School',
    path: '/schools/business',
    description: 'A planned school for professionally focused business, management, leadership and enterprise education.',
    keywords: ['business', 'management', 'leadership', 'enterprise']
  },
  {
    title: 'Law School',
    path: '/schools/law',
    description: 'A planned school built around legal knowledge, ethical judgement, critical thinking and public responsibility.',
    keywords: ['law', 'legal', 'ethical', 'critical thinking']
  },
  {
    title: 'School of Engineering',
    path: '/schools/engineering',
    description: 'A planned school connecting engineering knowledge, technical capability and industry practice.',
    keywords: ['engineering', 'technical', 'industry']
  },
  {
    title: 'Quality Assurance',
    path: '/quality',
    description: 'Quality is embedded across LMI as a shared institutional responsibility. It shapes programme planning, admissions, teaching, assessment, learner support, governance and strategic decision-making.',
    keywords: ['quality', 'assurance', 'standards', 'evidence', 'improvement', 'framework', 'learner journey', 'learner voice']
  },
  {
    title: 'Student Life at LMI',
    path: '/student-life',
    description: 'Your experience at LMI is about more than completing a programme. We want students to feel welcomed, supported and able to participate fully in their learning and wider institutional life.',
    keywords: ['student life', 'academic support', 'wellbeing', 'pastoral support', 'careers', 'inclusive', 'community']
  },
  {
    title: 'Campus and Facilities',
    path: '/facilities',
    description: 'Our purpose-built campus on Ring Road, Peshawar, provides spaces for teaching, practical learning, independent study and student support.',
    keywords: ['facilities', 'campus', 'laboratories', 'library', 'computer lab', 'science lab', 'academic block']
  },
  {
    title: 'Leadership and Governance',
    path: '/governance',
    description: 'Effective governance supports academic standards, responsible decision-making and continuous improvement. Meet the Board of Governors including Dr. Shaukat Amirzadah and Prof. Dr. Sanaullah Jan.',
    keywords: ['governance', 'leadership', 'board of governors', 'dr. shaukat', 'dr. sanaullah', 'dr. mumtaz', 'dr. javed', 'oversight', 'shaukat']
  },
  {
    title: 'Partnerships',
    path: '/partnerships',
    description: 'Strong partnerships can extend opportunity, strengthen learning and connect education with employment and further study. LMI develops relationships that have a clear purpose.',
    keywords: ['partnerships', 'collaboration', 'employer engagement', 'professional', 'awarding']
  },
  {
    title: 'Contact LMI',
    path: '/contact',
    description: 'Contact our team if you have a question about programmes, admissions, visiting the campus or working with LMI. We will direct your enquiry to the appropriate member of staff.',
    keywords: ['contact', 'email', 'phone', 'location', 'map', 'directions', 'enquiry']
  }
]

function SearchResults() {
  const searchParams = useSearchParams()
  const query = searchParams.get('q')?.trim() || ''
  const lowerQuery = query.toLowerCase()

  // Filter the content based on the query
  const results = siteContent.filter(page => {
    if (!lowerQuery) return false
    return (
      page.title.toLowerCase().includes(lowerQuery) ||
      page.description.toLowerCase().includes(lowerQuery) ||
      page.keywords.some(k => k.toLowerCase().includes(lowerQuery))
    )
  })

  return (
    <>
      {/* Search Header */}
      <section className="bg-[#0a2230] text-white py-12 lg:py-20 px-6 lg:px-8">
        <div className="max-w-[1000px] mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-[1px] w-8 bg-[#cc9a66]"></div>
            <p className="text-gray-300 font-bold tracking-widest text-[10px] lg:text-xs uppercase">Search Results</p>
          </div>
          <h1 className="font-serif text-4xl lg:text-5xl mb-4">
            {query ? `Results for "${query}"` : 'Search LMI'}
          </h1>
          <p className="text-gray-400">
            {results.length} {results.length === 1 ? 'page' : 'pages'} found
          </p>
        </div>
      </section>

      {/* Search Results List */}
      <section className="py-12 lg:py-20 px-6 lg:px-8">
        <div className="max-w-[1000px] mx-auto">
          
          {!query ? (
             <div className="text-gray-500 py-12 text-center border-2 border-dashed border-gray-200">
                Please enter a search term in the navigation bar above.
             </div>
          ) : results.length === 0 ? (
            <div className="text-gray-500 py-12">
               <p className="text-xl font-serif text-[#0a2230] mb-2">No results found for "{query}".</p>
               <p>Try checking your spelling or using more general terms like "nursing", "contact", or "quality".</p>
            </div>
          ) : (
            <div className="space-y-8">
              {results.map((result, index) => (
                <div key={index} className="bg-white p-8 border border-gray-200 shadow-sm hover:shadow-md transition">
                  <Link href={result.path} className="group">
                    <h2 className="font-serif text-2xl text-[#0a2230] group-hover:text-[#187965] transition mb-3">
                      {result.title}
                    </h2>
                    <p className="text-sm text-[#187965] font-mono mb-4">lcmi.digital{result.path}</p>
                    <p className="text-gray-600 leading-relaxed">
                      {result.description}
                    </p>
                  </Link>
                </div>
              ))}
            </div>
          )}

        </div>
      </section>
    </>
  )
}

export default function SearchPage() {
  return (
    <main className="w-full bg-[#f9f8f4] min-h-screen">
      <Suspense fallback={
        <div className="py-32 text-center text-[#0a2230] font-serif text-2xl">
          Loading search results...
        </div>
      }>
        <SearchResults />
      </Suspense>
    </main>
  )
}