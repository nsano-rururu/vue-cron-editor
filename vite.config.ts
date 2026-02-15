import { defineConfig } from 'vite'
import { createVuePlugin } from 'vite-plugin-vue2'
import { resolve } from 'path'

export default defineConfig({
  plugins: [createVuePlugin()],
  base: '/vue-cron-editor',
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      '~': resolve(__dirname, 'node_modules/')
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @import "bulma/sass/utilities/functions";
          @import "bulma/sass/utilities/initial-variables";
          @import "bulma/sass/utilities/derived-variables";
          $primary: #3273dc;
          $primary-invert: findColorInvert($primary);
        `
      }
    }
  },
  build: {
    outDir: 'dist'
  },
  optimizeDeps: {
    include: ['vue', 'vuetify']
  }
})