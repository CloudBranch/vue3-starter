import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Pages from 'vite-plugin-pages'
import { VitePWA } from 'vite-plugin-pwa'
import Inspect from 'vite-plugin-inspect'
import { resolve } from 'path'

/** @type { import('vite').UserConfig } */
export default defineConfig(({ command }) => {
  const config = {
    resolve: {
      alias: {
        '@': resolve(__dirname, './src')
      }
    },
    build: {
      chunkSizeWarningLimit: 1024,
      minify: true
    },
    plugins: [vue(), Pages(), VitePWA(), Inspect()]
  }

  if (command === 'serve') {
    return {
      // dev specific config
      ...config,
      server: {
        port: 3000
      }
    }
  } else {
    // command === 'build'
    return {
      // build specific config
      ...config
    }
  }
})
