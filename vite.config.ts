import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/chipify/projects/26bfce0e-cb0a-4c27-80ad-48427bd4d003/preview/',
  plugins: [react()],
  server: {
    port: 5109,
    host: '0.0.0.0',
    strictPort: true,
    hmr: {
      // HMR will be proxied through our backend
      port: 5109,
    }
  }
})
