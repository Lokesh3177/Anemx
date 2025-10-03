import React, { useState, useEffect, useRef } from 'react'
import useReveal from '../hooks/useReveal'

const Contact = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    details: '',
  })
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const nameRef = useRef(null)

  useEffect(() => {
    const tryFocus = () => {
      try {
        if (window.location.hash === '#contact' && nameRef.current) {
          nameRef.current.focus()
        }
      } catch (e) {
        // ignore (SSR or no window)
      }
    }

    // Try focus on mount in case the link was direct
    tryFocus()

    // Also listen for in-page navigation
    window.addEventListener('hashchange', tryFocus)
    return () => window.removeEventListener('hashchange', tryFocus)
  }, [])

  const onChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setError('')
    setSuccess('')

    if (!form.name || !form.email || !form.details) {
      setError('Please fill in required fields: Name, Email and Project Details.')
      return
    }

    // Replace this with real submit (API / email) as needed
    console.log('Contact form submitted', form)
    setSuccess('Message sent — we will get back to you shortly.')
    setForm({ name: '', email: '', company: '', details: '' })
  }

  return (
    <section id="contact" className="w-full bg-black py-16 px-4" aria-label="Contact">
      <div className="max-w-6xl mx-auto text-center">
        <h1 ref={useReveal(100)} className="text-2xl sm:text-3xl md:text-5xl font-bold text-white reveal">Get in touch</h1>
        <p className="text-white/80 max-w-3xl mx-auto mt-4">
          Ready to start your next 3D modeling project? Contact our expert team for a consultation and quote.
        </p>

        <div ref={useReveal(200)} className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8 items-start reveal">
          {/* Left column - contact info */}
          <div className="col-span-1 text-left">
            <h2 className="text-2xl text-white font-semibold mb-4">Contact</h2>

            <div className="text-white/80 mb-6">
              <h3 className="text-lg text-white font-medium mb-2">Phone Numbers</h3>
              <ul className="space-y-2">
                <li>8438097238</li>
                <li>7824961030</li>
                <li>8903618579</li>
                <li>9360043819</li>
              </ul>
            </div>

            <div className="text-white/80">
              <h3 className="text-lg text-white font-medium mb-2">Email</h3>
              <a href="mailto:anemxllp@gmail.com" className="text-blue-300 hover:underline">
                anemxllp@gmail.com
              </a>
            </div>
          </div>

          {/* Right column - form (spans 2 cols on md) */}
          <div className="md:col-span-2">
            <div className="rounded-xl border-2 border-blue-600 p-1">
              <div className="bg-[#07121a] rounded-lg p-6">
                <h3 className="text-xl text-white font-semibold mb-4">Send Us a Message</h3>

                {error && <div className="text-sm text-red-400 mb-3">{error}</div>}
                {success && <div className="text-sm text-green-400 mb-3">{success}</div>}

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <label className="flex flex-col text-left">
                      <span className="text-sm text-white/80 mb-2">Full Name *</span>
                      <input
                        name="name"
                        ref={nameRef}
                        value={form.name}
                        onChange={onChange}
                        className="bg-gray-800 text-white px-3 py-2 rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600"
                        placeholder="Your name"
                        aria-label="Full name"
                        required
                      />
                    </label>

                    <label className="flex flex-col text-left">
                      <span className="text-sm text-white/80 mb-2">Email Address *</span>
                      <input
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={onChange}
                        className="bg-gray-800 text-white px-3 py-2 rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600"
                        placeholder="you@company.com"
                        aria-label="Email address"
                        required
                      />
                    </label>
                  </div>

                  <label className="flex flex-col text-left">
                    <span className="text-sm text-white/80 mb-2">Company Name</span>
                    <input
                      name="company"
                      value={form.company}
                      onChange={onChange}
                      className="bg-gray-800 text-white px-3 py-2 rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600"
                      placeholder="Company (optional)"
                      aria-label="Company name"
                    />
                  </label>

                  <label className="flex flex-col text-left">
                    <span className="text-sm text-white/80 mb-2">Project Details *</span>
                    <textarea
                      name="details"
                      value={form.details}
                      onChange={onChange}
                      rows="6"
                      className="bg-gray-800 text-white px-3 py-2 rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600 resize-none"
                      placeholder="Describe your project, requirements, timeline..."
                      aria-label="Project details"
                      required
                    />
                  </label>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full md:w-auto bg-blue-600 hover:bg-blue-500 text-white font-semibold px-8 py-3 rounded-full transition"
                      aria-label="Send a message"
                    >
                      Send a message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact