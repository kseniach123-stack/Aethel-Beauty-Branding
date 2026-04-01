/**
 * GitHub Pages serves unknown paths as 404. Copy SPA shell so client routes work on refresh.
 */
import { copyFileSync, existsSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = dirname(fileURLToPath(import.meta.url))
const dist = join(root, '..', 'dist')
const indexHtml = join(dist, 'index.html')
const notFound = join(dist, '404.html')

if (!existsSync(indexHtml)) {
  console.warn('copy-404: dist/index.html missing — run vite build first')
  process.exit(0)
}
copyFileSync(indexHtml, notFound)
console.log('copy-404: wrote dist/404.html')
