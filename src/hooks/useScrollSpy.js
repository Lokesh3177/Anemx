import { useEffect, useState } from 'react'

// useScrollSpy(ids, options)
// ids: array of section ids to observe (['home','services',...])
// returns the id of the currently active section (or null)
export default function useScrollSpy(ids = [], { rootMargin = '-40% 0px -40% 0px' } = {}) {
    const [activeId, setActiveId] = useState(null)

    useEffect(() => {
        if (!ids || ids.length === 0) return

        const elements = ids.map(id => document.getElementById(id)).filter(Boolean)
        if (elements.length === 0) return

        const observer = new IntersectionObserver(
            (entries) => {
                // Find the entry that isIntersecting with the largest intersectionRatio
                const visible = entries.filter(e => e.isIntersecting)
                if (visible.length > 0) {
                    visible.sort((a, b) => b.intersectionRatio - a.intersectionRatio)
                    setActiveId(visible[0].target.id)
                    return
                }

                // If none intersecting, pick the one nearest to top
                const sorted = entries.slice().sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)
                if (sorted.length) setActiveId(sorted[0].target.id)
            },
            { root: null, rootMargin }
        )

        elements.forEach(el => observer.observe(el))
        return () => observer.disconnect()
    }, [ids.join(','), rootMargin])

    return activeId
}
