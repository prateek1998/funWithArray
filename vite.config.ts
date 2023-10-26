import { defineConfig } from 'vite';
import path from "path";
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "services": path.resolve(__dirname, "./src/services"),
      "components": path.resolve(__dirname, "./src/components"),
    },
  },
  base: "/funWithArray/dist/",
})
