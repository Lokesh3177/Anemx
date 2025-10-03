import React from 'react'
import useReveal from '../hooks/useReveal'
import aeroImg from '../assets/areo.jpg'
import mechImg from '../assets/mech.jpg'
import catiaImg from '../assets/catia.png'
import rapidImg from '../assets/rapid.png'

const services = [
  {
    id: 1,
    title: 'Aerospace Components',
    desc: 'High-precision 3D modeling for aircraft brackets and structural components, built to meet strict aerospace standards.',
    bullets: ['Aircraft Brackets', 'Structural Components', 'Aerospace Standards', 'Precision Engineering'],
    iconSrc: aeroImg,
  },
  {
    id: 2,
    title: 'Mechanical Components',
    desc: 'Expertly crafted 3D models of mechanical parts and assemblies for industrial-grade performance.',
    bullets: ['Mechanical Parts', 'Assembly Modeling', 'Industrial Components', 'Custom Solutions'],
    iconSrc: mechImg,
  },
  {
    id: 3,
    title: 'CATIA V5 Expertise',
    desc: 'Advanced 3D modeling with CATIA V5 and above, delivering professional quality and compatibility with global standards.',
    bullets: ['CATIA V5+', 'Industry Standards', 'Professional Quality', 'File Compatibility'],
    iconSrc: catiaImg,
  },
  {
    id: 4,
    title: 'Rapid Prototyping',
    desc: 'Accelerated design iterations and prototype-ready models to meet project deadlines without compromising quality.',
    bullets: ['Quick Delivery', 'Design Iterations', 'Prototype Ready', 'Time Efficient'],
    iconSrc: rapidImg,
  },
]

const Services = () => {
  return (
    <section id="services" className="w-full bg-black py-12 px-4" aria-label="Our services">
      <div className="max-w-6xl mx-auto text-center">
        <h2 ref={useReveal(120)} className="text-2xl sm:text-3xl md:text-5xl font-bold text-white reveal">Our Services</h2>
        <p className="text-white/80 max-w-3xl mx-auto mb-8 mt-5">
          Comprehensive 3D modeling solutions for aerospace and mechanical industries with unmatched precision and expertise
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, idx) => (
            <article key={s.id} ref={useReveal(180 + idx * 80)} className="rounded-2xl border-1 border-gray-700 hover:border-blue-600 p-1 transition-shadow hover:shadow-lg reveal">
              <div className="bg-[#07121a] rounded-xl p-6 h-full flex flex-col">
                <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center mb-4 overflow-hidden">
                  <img src={s.iconSrc} alt={s.title + ' icon'} width="24" height="24" loading="lazy" className="w-6 h-6 object-contain" />
                </div>

                <h3 className="text-white font-semibold text-xl mb-12">{s.title}</h3>
                <p className="text-white/80 text-sm mb-4">{s.desc}</p>

                <ul className="text-white/80 text-sm list-disc list-inside mt-auto space-y-1">
                  {s.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
