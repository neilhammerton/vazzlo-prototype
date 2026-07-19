import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  // Must match the GitHub repo name for GitHub Pages asset paths.
  base: '/vazzlo-prototype/',
  plugins: [react(), tailwindcss()],
  server: {
    watch: {
      ignored: ['**/docs/**'],
      // Native fs.watch crashes with EBUSY when freshly copied files are still
      // locked (e.g. antivirus scans); polling avoids the native watcher entirely.
      usePolling: true,
    },
  },
})
