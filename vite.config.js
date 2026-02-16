// vite.config.js - Aggressive Code Splitting
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],

  build: {
    target: 'es2015',
    chunkSizeWarningLimit: 500, // Warn at 500 KB instead of 1000 KB

    rollupOptions: {
      output: {
        manualChunks(id) {
          // ✅ Split node_modules into smaller chunks
          if (id.includes('node_modules')) {
            // React core (always needed)
            if (id.includes('react/') || id.includes('react-dom/')) {
              return 'react-core';
            }

            // React Router (only for routing)
            if (id.includes('react-router')) {
              return 'react-router';
            }

            // GSAP animations
            if (id.includes('gsap')) {
              return 'gsap';
            }

            // Icons
            if (id.includes('lucide-react')) {
              return 'lucide';
            }

            // Framer Motion (if used)
            if (id.includes('framer-motion')) {
              return 'framer';
            }

            // All other node_modules
            return 'vendor';
          }

          // ✅ Split your own code by routes/features
          if (id.includes('/src/pages/')) {
            const pageName = id.split('/pages/')[1].split('/')[0];
            return `page-${pageName}`;
          }

          if (id.includes('/src/Components/')) {
            const componentName = id.split('/Components/')[1].split('/')[0];
            return `component-${componentName}`;
          }
        },
      },
    },

    // ✅ More aggressive minification
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ['console.log', 'console.info'], // Remove specific console methods
        passes: 2, // Run compression twice
      },
      mangle: {
        safari10: true,
      },
    },
  },

  // ✅ Optimize dependencies
  optimizeDeps: {
    include: ['react', 'react-dom'],
    exclude: ['@vite/client', '@vite/env'], // Don't pre-bundle these
  },
});
