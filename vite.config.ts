import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import Icons from 'unplugin-icons/vite'
import { promises as fs } from 'fs'
import { FileSystemIconLoader } from 'unplugin-icons/loaders'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Icons({
      customCollections: {
        // key as the collection name
        'my-logo': {
          // load your custom icon lazily
          settings: () => fs.readFile('./src/assets/my-logo.svg', 'utf-8'),
        },
      },
    })
  ],
})
