import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  base:"/cuuduongthancong-clone/",
  server: {
    port: 8097
  },
  plugins: [react()],
})
