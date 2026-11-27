import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'

const isTest =
  process.env.VITEST === 'true' || process.env.NODE_ENV === 'test'

export default defineConfig({
  resolve: {
    alias: isTest
      ? {
          customer_remote: fileURLToPath(
            new URL('./src/customerRemote', import.meta.url)
          ),
        }
      : {},
  },

  plugins: [
    react(),

    ...(!isTest
      ? [
          federation({
            name: 'host_app',
            remotes: {
              customer_remote:
                'https://customer-remote-m4rp.vercel.app/assets/remoteEntry.js',
            },
            shared: ['react', 'react-dom'],
          }),
        ]
      : []),
  ],

  test: {
    environment: 'jsdom',
    setupFiles: './src/setupTests.js',
  },
})