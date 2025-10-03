import React, { useRef, useState, useEffect } from 'react'
import useReveal from '../hooks/useReveal'
import useOnScreen from '../hooks/useOnScreen'
import proj1 from '../assets/project1.mp4'
import proj2 from '../assets/project2.mp4'
import proj3 from '../assets/project3.mp4'


const projects = [
  {
    src: proj1,
    title: 'Aerospace Bracket Assembly',
    desc: 'Lightweight bracket optimized for stiffness and manufacturability. Designed with aerospace standards in mind.',
  },
  {
    src: proj2,
    title: 'Landing Gear Component',
    desc: 'High-load structural part built for strength and durability. Stress-tested and optimized for titanium machining.',
  },
  {
    src: proj3,
    title: 'Control Panel Housing',
    desc: 'Ergonomic enclosure design with integrated mounting features, ready for sheet-metal fabrication.',
  },
]

const Projects = () => {
  const videoRef = useRef(null)
  const [containerRef, isVisible] = useOnScreen({ rootMargin: '0px 0px -10% 0px' })
  const [currentIndex, setCurrentIndex] = useState(0)


  const handleEnded = () => {
    if (currentIndex < projects.length - 1) {
      setCurrentIndex(currentIndex + 1)
    } else {
      setCurrentIndex(0)
    }
  }

  useEffect(() => {
    const vid = videoRef.current
    if (!vid) return

    if (isVisible) {
      // set the correct src, load and play
      vid.src = projects[currentIndex].src
      try {
        vid.load()
        const p = vid.play()
        if (p && typeof p.then === 'function') p.catch(() => { })
      } catch (e) {
        // ignore play errors (autoplay policies)
      }
    } else {
      // pause and clear source to free memory
      try { vid.pause() } catch (e) { }
      vid.removeAttribute('src')
      try { vid.load() } catch (e) { }
    }

    // When currentIndex changes while visible, update src
  }, [isVisible, currentIndex])

  return (
    <section className="w-full bg-black py-16 px-4" aria-label="Projects showcase">
      <div className="max-w-300 mx-auto text-center">
        <h2 ref={useReveal(120)} className="text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-6 reveal">Projects</h2>
        <p className="text-white/80 max-w-2xl mx-auto mb-8">
          A curated selection of three projects, presented through sequential video demonstrations with detailed descriptions of their design and engineering aspects.
        </p>

        {/* Single Card */}
        <div ref={containerRef} className={`bg-[#07121a] rounded-2xl overflow-hidden border border-gray-700 shadow-lg ${isVisible ? 'anim-fade-up anim-delay-200' : 'opacity-0'}`}>
          <video
            ref={videoRef}
            preload="metadata"
            muted
            playsInline
            onEnded={handleEnded}
            className="w-full h-[300px] sm:h-[400px] object-cover"
          />
          <div className="p-4 text-left">
            <h3 className="text-white text-lg font-semibold mb-1">
              {projects[currentIndex].title}
            </h3>
            <p className="text-white/70 text-sm mb-2">
              {projects[currentIndex].desc}
            </p>
            <p className="text-white/50 text-xs">
              Project {currentIndex + 1} of {projects.length}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
