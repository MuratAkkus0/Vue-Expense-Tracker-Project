import { fileURLToPath, URL } from 'node:url'
import { defineConfig, loadEnv } from 'vite'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig(
  ({ command, mode }) => {
    // Load env file based on `mode` in the current working directory.
    // Set the third parameter to '' to load all env regardless of the `VITE_` prefix.
    const env = loadEnv(mode, process.cwd(), '')
    return {
      // vite config
      plugins: [
        vue(),
      ],
      server: {
        port: 3000,
        // proxy: {
        //   '/api': {
        //     target: 'https://expense-tracker-vercel-api.vercel.app/',
        //     changeOrigin: true,
        //     rewrite: (path) => path.replace(/^\/api/, '')
        //   }
        // }
      },

      resolve: {
        alias: {
          '@': fileURLToPath(new URL('./src', import.meta.url))
        }
      },
      define: {
        __APP_ENV__: JSON.stringify(env.APP_ENV),
      },
    }
  })

