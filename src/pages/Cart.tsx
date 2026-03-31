import { Link } from 'react-router-dom'
import { Header } from '../components/Header'

export default function Cart() {
  return (
    <>
      <Header />
      <div className="container" style={{ padding: '100px 20px 80px', maxWidth: 720 }}>
      <h1 style={{ fontFamily: 'var(--font-heading)', marginBottom: 16 }}>Cart</h1>
      <p style={{ fontFamily: 'var(--font-body)', marginBottom: 24 }}>Your cart is empty.</p>
      <Link to="/" style={{ color: 'var(--brand-dark)', fontFamily: 'var(--font-body)' }}>
        ← Back to home
      </Link>
    </div>
    </>
  )
}
