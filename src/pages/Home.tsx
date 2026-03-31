import { useCallback, useState } from 'react'
import { About } from '../components/About'
import { Banner } from '../components/Banner'
import { Categories } from '../components/Categories'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { useSectionReveal } from '../hooks/useSectionReveal'

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false)

  useSectionReveal()

  const onToggleMenu = useCallback(() => {
    setMenuOpen((v) => !v)
  }, [])

  const onCloseMenu = useCallback(() => {
    setMenuOpen(false)
  }, [])

  return (
    <>
      <Header />
      <Banner menuOpen={menuOpen} onToggleMenu={onToggleMenu} onCloseMenu={onCloseMenu} />
      <Categories />
      <About />
      <Footer />
    </>
  )
}
