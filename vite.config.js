import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  server: {
    host: true, // Permite el acceso desde otros dispositivos en la red
    port: 5173, // Puedes cambiar el puerto si lo deseas
  },
  plugins: [react()],
})
