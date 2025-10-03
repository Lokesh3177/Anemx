import React from 'react'
import useReveal from '../hooks/useReveal'

const features = [
  {
    id: 1,
    title: 'Precision-first designs',
    desc: 'Industry-grade 3D models focused on manufacturability, tolerances, and structural integrity.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path d="M12 2v6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M20 12h-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 22v-6
        " stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M4 12h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    id: 2,
    title: 'Quick turnarounds',
    desc: 'Efficient workflows and rapid prototyping to meet tight timelines without compromising quality.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path d="M21 12a9 9 0 11-6.219-8.48" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 7v5l3 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    id: 3,
    title: 'Seamless collaboration',
    desc: 'Clear deliverables (CAD/BOM/Drawing packs) and open collaboration with your engineering team.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path d="M17 21v-2a4 4 0 00-4-4H7a4 4 0 00-4 4v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    id: 4,
    title: 'Manufacturing-ready outputs',
    desc: 'Deliverables include drawings, GD&T callouts, and files ready for CAM and inspection.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path d="M3 7h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M7 21V7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M17 21V7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    id: 5,
    title: 'Material & process guidance',
    desc: 'Recommendations for materials and manufacturing processes to optimize cost and performance.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path d="M12 2l3 7h7l-5.5 4 2 7L12 17l-6.5 3 2-7L2 9h7l3-7z" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    id: 6,
    title: 'Quality assurance',
    desc: 'Inspection-ready models and validation checks to ensure tolerances and fit before production.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path d="M9 11l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
]

const WhyChooseUs = () => {
  const headingRef = useReveal(80)
  const introRef = useReveal(140)

  return (
    <section className="w-full bg-black py-12 px-4" aria-labelledby="why-choose-us">
      <div className="max-w-6xl mx-auto">
        <header className="text-center mb-8">
          <h2 id="why-choose-us" ref={headingRef} className="text-3xl md:text-4xl font-bold text-white reveal">Why Choose ANEMX</h2>
          <p ref={introRef} className="mt-3 text-white/80 max-w-3xl mx-auto reveal">We combine precision engineering, fast delivery, and clear collaboration to deliver production-ready 3D models and documentation.</p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <article key={f.id} ref={useReveal(180 + i * 80)} className="reveal bg-[#07121a] rounded-xl p-6 border border-gray-800 shadow-sm hover:shadow-lg transition">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-blue-600 text-white flex items-center justify-center flex-shrink-0">{f.icon}</div>
                <div>
                  <h3 className="text-white font-semibold text-lg">{f.title}</h3>
                  <p className="text-white/80 mt-2 text-sm">{f.desc}</p>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 text-center">
          <a href="#contact" className="inline-flex items-center gap-3 bg-[#2563EB] hover:bg-blue-500 text-white px-6 py-3 rounded-full font-semibold transition" aria-label="Contact ANEMX">
            Get a quote
          </a>
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs
