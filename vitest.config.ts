import { defineConfig } from 'vitest/config'
import { createVuePlugin } from 'vite-plugin-vue2'
import { resolve } from 'path'

export default defineConfig({
  plugins: [createVuePlugin()],
  test: {
    environment: 'jsdom',
    globals: true
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      '~': resolve(__dirname, 'node_modules')
    }
})