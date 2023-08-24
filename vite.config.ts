import { defineConfig, ConfigEnv, UserConfig, splitVendorChunkPlugin } from 'vite'
import preact from '@preact/preset-vite'
import { resolve } from 'path'
import { readdirSync } from 'fs'
import tsconfigPaths from 'vite-tsconfig-paths'
import swc from 'unplugin-swc'
// https://vitejs.dev/config/
const loadDir = (dir: string) => {
  let files = {}
  readdirSync(dir).forEach(file => {
    const [name, _] = file.split('.')
    files[`${dir}/${name}`] = resolve(__dirname, dir, file)
  })
  return files
}
const input = {
  index: resolve(__dirname, 'index.html'),
}
console.log({ input })
export default defineConfig({
  plugins: [preact(), tsconfigPaths(),
  // Vite plugin
  swc.vite()
  ],
  base: './',
  define: {
    'process.env': {}
  },
  brotliSize: false,
  publicDir: 'public',
  build: {
    brotliSize: false,
    cssMinify: true,
    manifest: true,
    minify: true,
    sourcemap: true,
    cssCodeSplit: true,
    rollupOptions: {
      plugins: [],
      input,
      treeshake: true,
    }
    //disable gzip 
  },
  onSuccess() {
    return () => {
      // do some cleanup before next build
    }
  }
} as UserConfig)
