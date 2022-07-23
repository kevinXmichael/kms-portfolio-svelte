import path from "path"
import { sveltekit } from "@sveltejs/kit/vite"
import WindiCSS from "vite-plugin-windicss"

/** @type {import('vite').UserConfig} */
const config = {
  plugins: [sveltekit(), WindiCSS({})],
  resolve: {
    alias: {
      "@": path.resolve("./src")
    }
  }
}

export default config
