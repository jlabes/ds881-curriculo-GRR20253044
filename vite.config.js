import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  root: 'src',
  build: {
    outDir: '../dist', 
    emptyOutDir: true, 
    assetsDir: '.',   
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/index.html'),
      },
      output: {
        entryFileNames: 'js/[name].js',
        chunkFileNames: 'js/[name].js',
        assetFileNames: ({ name }) => {
          if (name && name.endsWith('.css')) {
            return 'css/curriculo.[ext]';
          }
          return '[name].[ext]';
        },
      },
    },
  },
  publicDir: resolve(__dirname, 'src/public_assets_workaround'), 
});