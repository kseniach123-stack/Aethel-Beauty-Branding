import { useState, type FormEvent } from 'react'

const emailOk = (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim())

export function Footer() {
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')

  function onSubmit(e: FormEvent) {
    e.preventDefault()
    if (!email.trim()) {
      setError('Please enter your email.')
      return
    }
    if (!emailOk(email)) {
      setError('Please enter a valid email address.')
      return
    }
    setError('')
    // Demo: no backend
    alert('Thanks — we will be in touch soon.')
    setEmail('')
  }

  return (
    <footer id="contact" className="main-footer">
      <div className="footer-container container">
        <div className="footer-brand">
          <h2>Aethel</h2>
          <p>Pure. Organic. Noble.</p>
        </div>

        <div className="footer-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Shipping</a>
        </div>

        <div className="footer-newsletter">
          <p>Join our brand</p>
          <form onSubmit={onSubmit} noValidate>
            <div className="input-group">
              <input
                type="email"
                name="email"
                placeholder="YOUR EMAIL"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value)
                  if (error) setError('')
                }}
                autoComplete="email"
                aria-invalid={Boolean(error)}
              />
              <button type="submit">Join</button>
            </div>
            {error ? <p className="newsletter-error">{error}</p> : null}
          </form>
        </div>
      </div>
      <p className="copyright">© 2026 AETHEL BEAUTY. ALL RIGHTS RESERVED.</p>
    </footer>
  )
}
