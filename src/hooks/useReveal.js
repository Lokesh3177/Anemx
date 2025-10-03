import { useEffect, useRef } from 'react'

// useReveal(delayMs)
// Returns a ref you attach to an element. When the element enters the viewport
// it receives the `anim-fade-up` animation with an inline animation-delay set
// to the provided delay (ms). The element should have the `reveal` class so it
// is initially hidden.
export default function useReveal(delay = 0, rootMargin = '0px 0px -10% 0px') {
    const ref = useRef(null)

    useEffect(() => {
        const el = ref.current
        if (!el) return

        const obs = new IntersectionObserver(
            (entries, observer) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        // set delay and apply animation class
                        try {
                            el.style.animationDelay = `${delay}ms`
                            el.classList.add('anim-fade-up')
                            // remove the invisible state if present
                            el.classList.remove('reveal')
                        } catch (e) {
                            // ignore
                        }
                        observer.unobserve(el)
                    }
                })
            },
            { threshold: 0.1, rootMargin }
        )

        obs.observe(el)
        return () => obs.disconnect()
    }, [delay, rootMargin])

    return ref
}
