import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'
import dns from 'dns'

dns.setDefaultResultOrder('verbatim')

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  server: {
    port: 3000
  },
  build: {
    sourcemap: true,
    rollupOptions: {
      onLog(level, log, handler) {
        if (log.cause) {
          return
        }
        handler(level, log)
      }
    },
    outDir: 'dist'
  },
  resolve: {
    alias: {
      './runtimeConfig': './runtimeConfig.browser'
    }
  }
})
