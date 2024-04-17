import { defineConfig as defineViteConfig, mergeConfig } from 'vite'
import { defineConfig as defineVitestConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'
import dns from 'dns'

dns.setDefaultResultOrder('verbatim')

const viteConfig = defineViteConfig({
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

const vitestConfig = defineVitestConfig({
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './src/setup.ts'
  }
})
// https://vitejs.dev/config/
export default mergeConfig(viteConfig, vitestConfig)
