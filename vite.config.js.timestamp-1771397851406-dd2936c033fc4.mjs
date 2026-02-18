// vite.config.js
import { defineConfig } from "file:///F:/myPortfolio/myProtFolio/node_modules/vite/dist/node/index.js";
import react from "file:///F:/myPortfolio/myProtFolio/node_modules/@vitejs/plugin-react/dist/index.mjs";
import { visualizer } from "file:///F:/myPortfolio/myProtFolio/node_modules/rollup-plugin-visualizer/dist/plugin/index.js";
import viteImagemin from "file:///F:/myPortfolio/myProtFolio/node_modules/vite-plugin-imagemin/dist/index.mjs";
var vite_config_default = defineConfig({
  plugins: [
    react(),
    // ✅ Bundle analyzer
    visualizer({
      open: true,
      gzipSize: true,
      brotliSize: true
    }),
    // ✅ Image optimization
    viteImagemin({
      gifsicle: {
        optimizationLevel: 7,
        interlaced: false
      },
      optipng: {
        optimizationLevel: 7
      },
      mozjpeg: {
        quality: 80
        // Reduce from 100 to 80
      },
      pngquant: {
        quality: [0.8, 0.9],
        speed: 4
      },
      svgo: {
        plugins: [
          {
            name: "removeViewBox"
          },
          {
            name: "removeEmptyAttrs",
            active: false
          }
        ]
      }
    })
  ],
  build: {
    // ✅ Target modern browsers
    target: "es2015",
    // ✅ Reduce chunk size warnings
    chunkSizeWarningLimit: 1e3,
    rollupOptions: {
      output: {
        // ✅ Manual chunks for better code splitting
        manualChunks: {
          // Vendor chunks
          "react-vendor": ["react", "react-dom", "react-router-dom"],
          "gsap-vendor": ["gsap"],
          "framer-vendor": ["framer-motion"],
          // Feature chunks
          icons: ["lucide-react"]
        },
        // ✅ Better file naming
        chunkFileNames: "assets/js/[name]-[hash].js",
        entryFileNames: "assets/js/[name]-[hash].js",
        assetFileNames: ({ name }) => {
          if (/\.(gif|jpe?g|png|svg|webp)$/.test(name ?? "")) {
            return "assets/images/[name]-[hash][extname]";
          }
          if (/\.css$/.test(name ?? "")) {
            return "assets/css/[name]-[hash][extname]";
          }
          return "assets/[name]-[hash][extname]";
        }
      }
    },
    // ✅ Minification
    minify: "terser",
    terserOptions: {
      compress: {
        drop_console: true,
        // Remove console.logs in production
        drop_debugger: true
      }
    }
  },
  // ✅ Optimize dependencies
  optimizeDeps: {
    include: ["react", "react-dom", "react-router-dom"]
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJGOlxcXFxteVBvcnRmb2xpb1xcXFxteVByb3RGb2xpb1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRjpcXFxcbXlQb3J0Zm9saW9cXFxcbXlQcm90Rm9saW9cXFxcdml0ZS5jb25maWcuanNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Y6L215UG9ydGZvbGlvL215UHJvdEZvbGlvL3ZpdGUuY29uZmlnLmpzXCI7Ly8gdml0ZS5jb25maWcuanMgLSBQZXJmb3JtYW5jZSBPcHRpbWl6ZWRcclxuaW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSc7XHJcbmltcG9ydCByZWFjdCBmcm9tICdAdml0ZWpzL3BsdWdpbi1yZWFjdCc7XHJcbmltcG9ydCB7IHZpc3VhbGl6ZXIgfSBmcm9tICdyb2xsdXAtcGx1Z2luLXZpc3VhbGl6ZXInO1xyXG5pbXBvcnQgdml0ZUltYWdlbWluIGZyb20gJ3ZpdGUtcGx1Z2luLWltYWdlbWluJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XHJcbiAgcGx1Z2luczogW1xyXG4gICAgcmVhY3QoKSxcclxuXHJcbiAgICAvLyBcdTI3MDUgQnVuZGxlIGFuYWx5emVyXHJcbiAgICB2aXN1YWxpemVyKHtcclxuICAgICAgb3BlbjogdHJ1ZSxcclxuICAgICAgZ3ppcFNpemU6IHRydWUsXHJcbiAgICAgIGJyb3RsaVNpemU6IHRydWUsXHJcbiAgICB9KSxcclxuXHJcbiAgICAvLyBcdTI3MDUgSW1hZ2Ugb3B0aW1pemF0aW9uXHJcbiAgICB2aXRlSW1hZ2VtaW4oe1xyXG4gICAgICBnaWZzaWNsZToge1xyXG4gICAgICAgIG9wdGltaXphdGlvbkxldmVsOiA3LFxyXG4gICAgICAgIGludGVybGFjZWQ6IGZhbHNlLFxyXG4gICAgICB9LFxyXG4gICAgICBvcHRpcG5nOiB7XHJcbiAgICAgICAgb3B0aW1pemF0aW9uTGV2ZWw6IDcsXHJcbiAgICAgIH0sXHJcbiAgICAgIG1vempwZWc6IHtcclxuICAgICAgICBxdWFsaXR5OiA4MCwgLy8gUmVkdWNlIGZyb20gMTAwIHRvIDgwXHJcbiAgICAgIH0sXHJcbiAgICAgIHBuZ3F1YW50OiB7XHJcbiAgICAgICAgcXVhbGl0eTogWzAuOCwgMC45XSxcclxuICAgICAgICBzcGVlZDogNCxcclxuICAgICAgfSxcclxuICAgICAgc3Znbzoge1xyXG4gICAgICAgIHBsdWdpbnM6IFtcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZTogJ3JlbW92ZVZpZXdCb3gnLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZTogJ3JlbW92ZUVtcHR5QXR0cnMnLFxyXG4gICAgICAgICAgICBhY3RpdmU6IGZhbHNlLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICBdLFxyXG4gICAgICB9LFxyXG4gICAgfSksXHJcbiAgXSxcclxuXHJcbiAgYnVpbGQ6IHtcclxuICAgIC8vIFx1MjcwNSBUYXJnZXQgbW9kZXJuIGJyb3dzZXJzXHJcbiAgICB0YXJnZXQ6ICdlczIwMTUnLFxyXG5cclxuICAgIC8vIFx1MjcwNSBSZWR1Y2UgY2h1bmsgc2l6ZSB3YXJuaW5nc1xyXG4gICAgY2h1bmtTaXplV2FybmluZ0xpbWl0OiAxMDAwLFxyXG5cclxuICAgIHJvbGx1cE9wdGlvbnM6IHtcclxuICAgICAgb3V0cHV0OiB7XHJcbiAgICAgICAgLy8gXHUyNzA1IE1hbnVhbCBjaHVua3MgZm9yIGJldHRlciBjb2RlIHNwbGl0dGluZ1xyXG4gICAgICAgIG1hbnVhbENodW5rczoge1xyXG4gICAgICAgICAgLy8gVmVuZG9yIGNodW5rc1xyXG4gICAgICAgICAgJ3JlYWN0LXZlbmRvcic6IFsncmVhY3QnLCAncmVhY3QtZG9tJywgJ3JlYWN0LXJvdXRlci1kb20nXSxcclxuICAgICAgICAgICdnc2FwLXZlbmRvcic6IFsnZ3NhcCddLFxyXG4gICAgICAgICAgJ2ZyYW1lci12ZW5kb3InOiBbJ2ZyYW1lci1tb3Rpb24nXSxcclxuXHJcbiAgICAgICAgICAvLyBGZWF0dXJlIGNodW5rc1xyXG4gICAgICAgICAgaWNvbnM6IFsnbHVjaWRlLXJlYWN0J10sXHJcbiAgICAgICAgIFxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIC8vIFx1MjcwNSBCZXR0ZXIgZmlsZSBuYW1pbmdcclxuICAgICAgICBjaHVua0ZpbGVOYW1lczogJ2Fzc2V0cy9qcy9bbmFtZV0tW2hhc2hdLmpzJyxcclxuICAgICAgICBlbnRyeUZpbGVOYW1lczogJ2Fzc2V0cy9qcy9bbmFtZV0tW2hhc2hdLmpzJyxcclxuICAgICAgICBhc3NldEZpbGVOYW1lczogKHsgbmFtZSB9KSA9PiB7XHJcbiAgICAgICAgICBpZiAoL1xcLihnaWZ8anBlP2d8cG5nfHN2Z3x3ZWJwKSQvLnRlc3QobmFtZSA/PyAnJykpIHtcclxuICAgICAgICAgICAgcmV0dXJuICdhc3NldHMvaW1hZ2VzL1tuYW1lXS1baGFzaF1bZXh0bmFtZV0nO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaWYgKC9cXC5jc3MkLy50ZXN0KG5hbWUgPz8gJycpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAnYXNzZXRzL2Nzcy9bbmFtZV0tW2hhc2hdW2V4dG5hbWVdJztcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHJldHVybiAnYXNzZXRzL1tuYW1lXS1baGFzaF1bZXh0bmFtZV0nO1xyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG5cclxuICAgIC8vIFx1MjcwNSBNaW5pZmljYXRpb25cclxuICAgIG1pbmlmeTogJ3RlcnNlcicsXHJcbiAgICB0ZXJzZXJPcHRpb25zOiB7XHJcbiAgICAgIGNvbXByZXNzOiB7XHJcbiAgICAgICAgZHJvcF9jb25zb2xlOiB0cnVlLCAvLyBSZW1vdmUgY29uc29sZS5sb2dzIGluIHByb2R1Y3Rpb25cclxuICAgICAgICBkcm9wX2RlYnVnZ2VyOiB0cnVlLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICB9LFxyXG5cclxuICAvLyBcdTI3MDUgT3B0aW1pemUgZGVwZW5kZW5jaWVzXHJcbiAgb3B0aW1pemVEZXBzOiB7XHJcbiAgICBpbmNsdWRlOiBbJ3JlYWN0JywgJ3JlYWN0LWRvbScsICdyZWFjdC1yb3V0ZXItZG9tJ10sXHJcbiAgfSxcclxufSk7XHJcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFDQSxTQUFTLG9CQUFvQjtBQUM3QixPQUFPLFdBQVc7QUFDbEIsU0FBUyxrQkFBa0I7QUFDM0IsT0FBTyxrQkFBa0I7QUFFekIsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsU0FBUztBQUFBLElBQ1AsTUFBTTtBQUFBO0FBQUEsSUFHTixXQUFXO0FBQUEsTUFDVCxNQUFNO0FBQUEsTUFDTixVQUFVO0FBQUEsTUFDVixZQUFZO0FBQUEsSUFDZCxDQUFDO0FBQUE7QUFBQSxJQUdELGFBQWE7QUFBQSxNQUNYLFVBQVU7QUFBQSxRQUNSLG1CQUFtQjtBQUFBLFFBQ25CLFlBQVk7QUFBQSxNQUNkO0FBQUEsTUFDQSxTQUFTO0FBQUEsUUFDUCxtQkFBbUI7QUFBQSxNQUNyQjtBQUFBLE1BQ0EsU0FBUztBQUFBLFFBQ1AsU0FBUztBQUFBO0FBQUEsTUFDWDtBQUFBLE1BQ0EsVUFBVTtBQUFBLFFBQ1IsU0FBUyxDQUFDLEtBQUssR0FBRztBQUFBLFFBQ2xCLE9BQU87QUFBQSxNQUNUO0FBQUEsTUFDQSxNQUFNO0FBQUEsUUFDSixTQUFTO0FBQUEsVUFDUDtBQUFBLFlBQ0UsTUFBTTtBQUFBLFVBQ1I7QUFBQSxVQUNBO0FBQUEsWUFDRSxNQUFNO0FBQUEsWUFDTixRQUFRO0FBQUEsVUFDVjtBQUFBLFFBQ0Y7QUFBQSxNQUNGO0FBQUEsSUFDRixDQUFDO0FBQUEsRUFDSDtBQUFBLEVBRUEsT0FBTztBQUFBO0FBQUEsSUFFTCxRQUFRO0FBQUE7QUFBQSxJQUdSLHVCQUF1QjtBQUFBLElBRXZCLGVBQWU7QUFBQSxNQUNiLFFBQVE7QUFBQTtBQUFBLFFBRU4sY0FBYztBQUFBO0FBQUEsVUFFWixnQkFBZ0IsQ0FBQyxTQUFTLGFBQWEsa0JBQWtCO0FBQUEsVUFDekQsZUFBZSxDQUFDLE1BQU07QUFBQSxVQUN0QixpQkFBaUIsQ0FBQyxlQUFlO0FBQUE7QUFBQSxVQUdqQyxPQUFPLENBQUMsY0FBYztBQUFBLFFBRXhCO0FBQUE7QUFBQSxRQUdBLGdCQUFnQjtBQUFBLFFBQ2hCLGdCQUFnQjtBQUFBLFFBQ2hCLGdCQUFnQixDQUFDLEVBQUUsS0FBSyxNQUFNO0FBQzVCLGNBQUksOEJBQThCLEtBQUssUUFBUSxFQUFFLEdBQUc7QUFDbEQsbUJBQU87QUFBQSxVQUNUO0FBQ0EsY0FBSSxTQUFTLEtBQUssUUFBUSxFQUFFLEdBQUc7QUFDN0IsbUJBQU87QUFBQSxVQUNUO0FBQ0EsaUJBQU87QUFBQSxRQUNUO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQTtBQUFBLElBR0EsUUFBUTtBQUFBLElBQ1IsZUFBZTtBQUFBLE1BQ2IsVUFBVTtBQUFBLFFBQ1IsY0FBYztBQUFBO0FBQUEsUUFDZCxlQUFlO0FBQUEsTUFDakI7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUFBO0FBQUEsRUFHQSxjQUFjO0FBQUEsSUFDWixTQUFTLENBQUMsU0FBUyxhQUFhLGtCQUFrQjtBQUFBLEVBQ3BEO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
