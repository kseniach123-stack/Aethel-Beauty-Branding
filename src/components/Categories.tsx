const categories: Array<{ id: string; className: string; label: string }> = [
  { id: 'face', className: 'facecare', label: 'Face' },
  { id: 'body', className: 'bodycare', label: 'Body' },
  { id: 'hair', className: 'haircare', label: 'Hair' },
]

export function Categories() {
  return (
    <section id="products" className="container category-grid">
      {categories.map((category) => (
        <a key={category.id} href="#" className={`category-card ${category.className}`}>
          <h3 style={{ fontFamily: 'var(--font-heading)' }}>{category.label}</h3>
        </a>
      ))}
    </section>
  )
}
