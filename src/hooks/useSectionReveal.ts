import { useEffect } from 'react'

export function useSectionReveal() {
  useEffect(() => {
    const sections = document.querySelectorAll('section')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement
            el.style.opacity = '1'
            el.style.transform = 'translateY(0)'
          }
        })
      },
      { threshold: 0.1 },
    )

    sections.forEach((section) => {
      const el = section as HTMLElement
      el.style.opacity = '0'
      el.style.transform = 'translateY(30px)'
      el.style.transition = 'all 0.8s ease-out'
      observer.observe(section)
    })

    return () => observer.disconnect()
  }, [])
}
