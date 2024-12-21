import {defineConfig} from "vite"
import react from "@vitejs/plugin-react"
import legacy from "@vitejs/plugin-legacy"

export default defineConfig({
   plugins: [
      react(),
      legacy({
         targets: ["> 1%", "last 2 versions", "iOS >= 10", "not dead"],
      }),
   ],
})
