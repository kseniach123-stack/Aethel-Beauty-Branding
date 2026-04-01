type CartSidebarProps = {
  isOpen: boolean
  onClose: () => void
  cartCount: number
  items: Array<{ id: string; name: string; quantity: number }>
  onIncrease: (id: string) => void
  onDecrease: (id: string) => void
  onRemove: (id: string) => void
}

export function CartSidebar({
  isOpen,
  onClose,
  cartCount,
  items,
  onIncrease,
  onDecrease,
  onRemove,
}: CartSidebarProps) {
  return (
    <>
      <aside className={`cart-sidebar${isOpen ? ' active' : ''}`} aria-hidden={!isOpen}>
        <div className="cart-sidebar-header">
          <h3>Cart</h3>
          <button type="button" className="cart-close" onClick={onClose} aria-label="Close cart">
            ×
          </button>
        </div>
        {cartCount > 0 ? (
          <>
            <p className="cart-items-text">{cartCount} item(s) in your cart.</p>
            <ul className="cart-list">
              {items.map((item) => (
                <li key={item.id} className="cart-list-item">
                  <span>{item.name}</span>
                  <div className="cart-qty-controls">
                    <button type="button" onClick={() => onDecrease(item.id)}>
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button type="button" onClick={() => onIncrease(item.id)}>
                      +
                    </button>
                    <button type="button" className="cart-remove-btn" onClick={() => onRemove(item.id)}>
                      Remove
                    </button>
                  </div>
                </li>
              ))}
            </ul>
            <div className="cart-actions">
              <button type="button" className="cart-btn cart-btn-secondary" onClick={onClose}>
                Continue shopping
              </button>
              <button type="button" className="cart-btn cart-btn-primary">
                Checkout
              </button>
            </div>
          </>
        ) : (
          <>
            <p className="cart-empty-text">Empty cart</p>
            <div className="cart-actions">
              <button type="button" className="cart-btn cart-btn-secondary" onClick={onClose}>
                Continue shopping
              </button>
              <button type="button" className="cart-btn cart-btn-primary">
                Checkout
              </button>
            </div>
          </>
        )}
      </aside>
      <div
        className={`cart-overlay${isOpen ? ' active' : ''}`}
        role="presentation"
        onClick={onClose}
      />
    </>
  )
}
