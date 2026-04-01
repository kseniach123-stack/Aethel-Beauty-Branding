import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

/**
 * GitHub Pages URL: https://<user>.github.io/<REPO_NAME>/
 * Vite must use the same path as `base` in production, or assets break.
 * Dev server uses `/` so local `npm run dev` stays simple.
 */
const GITHUB_PAGES_BASE = '/Aethel-Beauty-Branding/'

export default defineConfig(({ command }) => ({
  plugins: [react()],
  base: command === 'serve' ? '/' : GITHUB_PAGES_BASE,
}))
