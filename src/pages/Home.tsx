import { useCallback, useState } from 'react'
import { About } from '../components/About'
import { Banner } from '../components/Banner'
import { CartSidebar } from '../components/CartSidebar'
import { Categories } from '../components/Categories'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { useSectionReveal } from '../hooks/useSectionReveal'

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [cartOpen, setCartOpen] = useState(false)
  const [cartItems, setCartItems] = useState<Array<{ id: string; name: string; quantity: number }>>([])

  useSectionReveal()

  const onToggleMenu = useCallback(() => {
    setMenuOpen((v) => !v)
  }, [])

  const onCloseMenu = useCallback(() => {
    setMenuOpen(false)
  }, [])

  const onOpenCart = useCallback(() => {
    setCartOpen(true)
  }, [])

  const onCloseCart = useCallback(() => {
    setCartOpen(false)
  }, [])

  const onIncrease = useCallback((id: string) => {
    setCartItems((items) =>
      items.map((item) => (item.id === id ? { ...item, quantity: item.quantity + 1 } : item)),
    )
  }, [])

  const onDecrease = useCallback((id: string) => {
    setCartItems((items) =>
      items
        .map((item) => (item.id === id ? { ...item, quantity: item.quantity - 1 } : item))
        .filter((item) => item.quantity > 0),
    )
  }, [])

  const onRemove = useCallback((id: string) => {
    setCartItems((items) => items.filter((item) => item.id !== id))
  }, [])

  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <>
      <Header onCartClick={onOpenCart} cartCount={cartCount} />
      <Banner menuOpen={menuOpen} onToggleMenu={onToggleMenu} onCloseMenu={onCloseMenu} />
      <CartSidebar
        isOpen={cartOpen}
        onClose={onCloseCart}
        cartCount={cartCount}
        items={cartItems}
        onIncrease={onIncrease}
        onDecrease={onDecrease}
        onRemove={onRemove}
      />
      <Categories />
      <About />
      <Footer />
    </>
  )
}
