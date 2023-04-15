import React, { useRef, useEffect } from 'react'

export default function useSmoothScrollTo(id) {
    const ref = useRef(null)
    useEffect(() => {
        const listener = e => {
            if (ref.current && location.hash === id) {
                ref.current.scrollIntoView({behavior: 'smooth'})
            }
        }
        window.addEventListener('hashchange', listener, true)
        return () => {
            window.removeEventListener('hashchange', listener)
        }
    }, [])
    return {
        'data-anchor-id': id,
        ref
    }
}