import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/

export default defineConfig({
  base: '/curtain-drop/',
  build: {
    outDir: 'curtain-drop'
  },
  plugins: [reactRefresh()],
  plugins: [react()]
})