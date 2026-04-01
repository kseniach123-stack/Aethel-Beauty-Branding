import { useCallback } from 'react'

type BannerProps = {
  menuOpen: boolean
  onToggleMenu: () => void
  onCloseMenu: () => void
}

export function Banner({ menuOpen, onToggleMenu, onCloseMenu }: BannerProps) {
  const onOverlayClick = useCallback(() => {
    onCloseMenu()
  }, [onCloseMenu])

  const onNavLinkClick = useCallback(() => {
    onCloseMenu()
  }, [onCloseMenu])

  return (
    <section className="banner">
      <button
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

      <div id="side-menu" className={`sidebar${menuOpen ? ' active' : ''}`}>
        <div className="sidebar-content">
          <a href="#products" onClick={onNavLinkClick}>
            New Arrivals
          </a>
          <a href="#products" onClick={onNavLinkClick}>
            Special Offers
          </a>
          <a href="#products" onClick={onNavLinkClick}>
            Skin
          </a>
          <a href="#products" onClick={onNavLinkClick}>
            Makeup
          </a>
          <a href="#products" onClick={onNavLinkClick}>
            Body
          </a>
          <a href="#products" onClick={onNavLinkClick}>
            Hair
          </a>
          <a href="#about" onClick={onNavLinkClick}>
            About
          </a>
        </div>
        <div
          id="overlay"
          role="presentation"
          className={`overlay${menuOpen ? ' active' : ''}`}
          onClick={onOverlayClick}
        />
      </div>

      <h1> Organic in every touch</h1>
      <p>Discover our new products</p>
      <button type="button" className="banner-btn">
        Shop Now
      </button>
    </section>
  )
}
