import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import envCompatible from 'vite-plugin-env-compatible'

// https://vitejs.dev/config/
export default defineConfig({
  envPrefix: "REACT_APP_",
  plugins: [
    react(),
    envCompatible()
  ],
  server: {
    host: '0.0.0.0', // Use IPv4 address
    port: 3000 // Optional: specify your port number
  }
})

