import React from 'react'
import useReveal from '../hooks/useReveal'
import logo from '../assets/logo.png'

const stats = [
  { id: 1, label: 'Founded', value: '2025' },
  { id: 2, label: 'Specialization', value: 'Aerospace & Mechanical' },
  { id: 3, label: 'Software', value: 'CATIA V5+' },
  { id: 4, label: 'Email', value: 'anemxllp@gmail.com' },
  { id: 5, label: 'Completed Projects', value: '25+' },
  { id: 6, label: 'Contact', value: '8438097238' },
 
]

const About = () => {
  return (
    <section id="about" className="w-full bg-black text-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 ref={useReveal(150)} className="text-4xl md:text-6xl font-serif text-center font-bold mb-12 reveal">About Anemx</h1>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* left image + description */}
          <div className="lg:col-span-6 flex flex-col items-center lg:items-start">
            <img
              ref={useReveal(180)}
              src={logo}
              alt="ANEMX logo"
              width="224"
              height="224"
              loading="lazy"
              className="w-56 h-56 object-contain rounded-sm mb-6 shadow-lg reveal"
            />

            <p className="text-center lg:text-left text-white/80 max-w-2xl leading-relaxed whitespace-pre-line">
              ANEMX is a specialized 3D modeling company dedicated to providing precision engineering
              solutions for aerospace and mechanical industries. With expertise in CATIA V5 and above,
              we deliver high-quality 3D models that meet the most stringent industry standards.
            </p>

            <p className="mt-6 text-center lg:text-left text-white/80 max-w-2xl leading-relaxed">
              Our focus on aircraft structural brackets and mechanical components has established us as
              a trusted partner for companies requiring precise, reliable, and professionally crafted
              3D models. We combine technical expertise with innovative approaches to deliver
              exceptional results.
            </p>
          </div>

          {/* right stats card */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end">
            <div className="w-full max-w-md bg-[#05121a] rounded-2xl p-6 shadow-md border border-black/40">
              <div className="space-y-4">
                {stats.map((s) => (
                  <div
                    key={s.id}
                    className="flex items-center justify-between bg-[#071826] rounded-lg px-4 py-3 shadow-sm"
                  >
                    <span className="font-medium text-white/90">{s.label}</span>
                    <span className="font-semibold text-white">{s.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* footer blurb */}
        <div className="mt-14 border-t border-white/6 pt-10">
          <p className="text-center text-white/80 max-w-4xl mx-auto">
            ANEMX is an aerospace and engineering design startup specializing in structural brackets,
            assemblies, and mechanical components. We provide 3D CAD modeling, drafting, and BOM
            preparation with a focus on lightweight, strong, and reliable designs for aerospace and
            industrial needs.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About
