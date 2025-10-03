import { useEffect, useState, useRef } from 'react'

export default function useOnScreen(options = {}) {
    const ref = useRef(null)
    const [isOnScreen, setIsOnScreen] = useState(false)

    useEffect(() => {
        const el = ref.current
        if (!el) return

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) setIsOnScreen(true)
                })
            },
            options
        )

        observer.observe(el)
        return () => observer.disconnect()
    }, [ref.current, JSON.stringify(options)])

    return [ref, isOnScreen]
}
