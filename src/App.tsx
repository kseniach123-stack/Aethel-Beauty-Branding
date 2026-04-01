import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'

/**
 * Must match `base` in vite.config.ts (via import.meta.env.BASE_URL).
 * Example: `/Aethel-Beauty-Branding/` → basename `/Aethel-Beauty-Branding`.
 */
function routerBasename(): string | undefined {
  const raw = import.meta.env.BASE_URL
  if (raw === '/') return undefined
  const trimmed = raw.replace(/\/$/, '')
  return trimmed === '' ? undefined : trimmed
}

export default function App() {
  return (
    <BrowserRouter basename={routerBasename()}>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}
