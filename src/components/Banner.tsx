import { useCallback, useEffect, useRef } from 'react'

type BannerProps = {
  menuOpen: boolean
  onToggleMenu: () => void
  onCloseMenu: () => void
}

export function Banner({ menuOpen, onToggleMenu, onCloseMenu }: BannerProps) {
  const sidebarRef = useRef<HTMLDivElement>(null)
  const menuBtnRef = useRef<HTMLButtonElement>(null)

  const onOverlayClick = useCallback(() => {
    onCloseMenu()
  }, [onCloseMenu])

  const onNavLinkClick = useCallback(() => {
    onCloseMenu()
  }, [onCloseMenu])

  useEffect(() => {
    function onDocClick(event: MouseEvent) {
      if (!menuOpen) return
      const target = event.target as Node
      const insideSidebar = sidebarRef.current?.contains(target)
      const onMenuButton = menuBtnRef.current?.contains(target)
      if (!insideSidebar && !onMenuButton) onCloseMenu()
    }
    document.addEventListener('click', onDocClick)
    return () => document.removeEventListener('click', onDocClick)
  }, [menuOpen, onCloseMenu])

  useEffect(() => {
    if (!menuOpen) return

    const onScroll = () => {
      onCloseMenu()
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [menuOpen, onCloseMenu])

  return (
    <section className="banner">
      <button
        ref={menuBtnRef}
        type="button"
        className="menu-toggle"
        id="menuBtn"
        aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={menuOpen}
        aria-controls="side-menu"
        onClick={onToggleMenu}
      >
        <span />
        <span />
        <span />
      </button>

      <div id="side-menu" ref={sidebarRef} className={`sidebar${menuOpen ? ' active' : ''}`}>
        <div className="sidebar-content">
          <a
            href="#products"
            onClick={onNavLinkClick}
          >
            New Arrivals
          </a>
          <a
            href="#products"
            onClick={onNavLinkClick}
          >
            Special Offers
          </a>
          <a
            href="#products"
            onClick={onNavLinkClick}
          >
            Skin
          </a>
          <a
            href="#products"
            onClick={onNavLinkClick}
          >
            Makeup
          </a>
          <a
            href="#products"
            onClick={onNavLinkClick}
          >
            Body
          </a>
          <a
            href="#products"
            onClick={onNavLinkClick}
          >
            Hair
          </a>
          <a
            href="#about"
            onClick={onNavLinkClick}
          >
            About
          </a>
        </div>
      </div>
      <div
        id="overlay"
        role="presentation"
        className={`overlay${menuOpen ? ' active' : ''}`}
        onClick={onOverlayClick}
      />

      <h1> Organic in every touch</h1>
      <p>Discover our new products</p>
      <button type="button" className="banner-btn">
        Shop Now
      </button>
    </section>
  )
}
