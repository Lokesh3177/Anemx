
import React from 'react'
import video from '../assets/hero.mp4'


const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen w-full bg-black" role="region" aria-label="Hero">
      {/* Background video (fills section) */}
      <video
        src={video}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover brightness-50 anim-slow-zoom"
      />

      {/* Centered overlay content */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4 text-center">
        <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold max-w-3xl anim-fade-up anim-delay-200">
          Lightweight. Strong. Reliable. Designed by ANEMX.
        </h1>

        <p className="text-white/80 mt-4 max-w-2xl text-sm sm:text-base anim-fade-up anim-delay-400">
          High-performance solutions engineered for durability and performance.
        </p>

        <div className="mt-6 flex flex-col sm:flex-row gap-4">
          <a href="#services" className="bg-[#2563EB] text-white font-semibold px-6 py-3 rounded-2xl hover:bg-blue-500 transition anim-fade-up anim-delay-600 inline-block" aria-label="Our Services">Our Services</a>

          <a href="#contact" className="bg-white text-black font-semibold px-6 py-3 rounded-2xl hover:bg-gray-200 transition anim-fade-up anim-delay-600 inline-block" aria-label="Contact Us">Contact Us</a>
        </div>
      </div>
    </section>
  )
}

export default Hero
