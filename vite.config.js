import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  root: 'src', 
  base: '/ds881-curriculo-GRR20253044/', 
  build: {
    outDir: '../dist', 
    emptyOutDir: true, 
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/index.html'),
      },
      output: {
        entryFileNames: 'js/[name].js',
        chunkFileNames: 'js/[name].js',
        assetFileNames: ({ name }) => {
          if (name && name.endsWith('.css')) {
            return 'css/[name].[ext]';
          }
          return '[name].[ext]';
        },
      },
    },
  },
  publicDir: resolve(__dirname, 'src/resources'), 
});