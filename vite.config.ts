import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    proxy: {
      '/api': {
        target: 'http://localhost:5001',
        changeOrigin: true
      }
    },
  },
  envDir: './env',
  test: {
    globals: true,
    environment: 'jsdom',
    coverage: {
      provider: 'v8',
      all: true,
      include: ['src/**/*.tsx', 'src/**/*.ts'],
      exclude: ['src/main.tsx'],
      reporter: [
        ['lcov', { 'projectRoot': './src' }],
        ['json', { 'file': 'coverage.json' }],
        ['text']
      ]
    }
  }
})
