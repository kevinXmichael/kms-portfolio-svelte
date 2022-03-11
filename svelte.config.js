import adapter from "@sveltejs/adapter-auto"
import path from "path"
import WindiCSS from "vite-plugin-windicss"

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter(),
    vite: {
      resolve: {
        alias: {
          "@": path.resolve("./src")
        }
      },
      plugins: [[WindiCSS({})]]
    }
  }
}

export default config
