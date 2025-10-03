import React from 'react'
import useReveal from '../hooks/useReveal'
import image from '../assets/abishek.jpg'
import image1 from '../assets/Ayyanar.jpg'
import image2 from '../assets/Gokulan.jpg'
import image3 from '../assets/Logeshwaran.jpg'

const teamMembers = [
  { id: 1, name: 'Abishek M', role: 'Founder & Chief Executive Officer(CEO)\nLead Design Engineer', img: image },
  { id: 2, name: 'Ayyanar Shiva', role: 'CO-Founder & Head of Client Relations', img: image1 },
  { id: 3, name: 'Gokulan', role: 'Head CO-Founder & Senior Design Engineer Design', img: image2 },
  { id: 4, name: 'Logeshwaran', role: 'CO-Founder & Senior Design Engineer', img: image3 },
]

const CoreTeam = () => {
  return (
    <section className="w-full bg-black py-12 px-4" role="region" aria-label="Core team">
      <div className="max-w-6xl mx-auto text-center">
        <h2 ref={useReveal(100)} className="text-2xl sm:text-3xl md:text-4xl font-bold text-white reveal">
          CREATE TEAM OF ANEMX
        </h2>

        <p className="mt-3 text-white/80 text-sm sm:text-base max-w-2xl mx-auto">
          Meet the talented individuals behind ANEMX.
        </p>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, idx) => (
            <div
              key={member.id}
              ref={useReveal(150 + idx * 80)}
              className="bg-white/3 rounded-lg p-6 flex flex-col items-center text-center min-h-[320px]  hover:border-blue-500 transition-colors reveal"
            >
              <div className="w-28 h-28 rounded-full overflow-hidden mb-4 flex items-center justify-center flex-shrink-0 border-2 border-gray-600">
                <img
                  src={member.img}
                  alt={member.name}
                  width="112"
                  height="112"
                  loading="lazy"
                  className="w-full h-full object-cover object-center block"
                />
              </div>

              <h3 className="text-white font-semibold text-lg">{member.name}</h3>
              <p className="text-white/70 text-sm mt-2 whitespace-pre-line">{member.role}</p>
            </div>
          ))}
        </div>

        <div className="mt-8">
          <h2 className="text-white text-lg font-medium max-w-3xl mx-auto">
            ANEMX is an aerospace and engineering design startup specializing in structural brackets, assemblies, and mechanical components. We provide 3D CAD modeling, drafting, and BOM preparation with a focus on lightweight, strong, and reliable designs for aerospace and industrial needs.
          </h2>
        </div>
      </div>
    </section>
  )
}
export default CoreTeam
