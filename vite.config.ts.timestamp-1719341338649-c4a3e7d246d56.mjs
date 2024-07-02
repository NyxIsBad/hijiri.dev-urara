// vite.config.ts
import { defineConfig } from "file:///C:/Users/Nyx/Desktop/hijiri.dev-blog/node_modules/vite/dist/node/index.js";
import UnoCSS from "file:///C:/Users/Nyx/Desktop/hijiri.dev-blog/node_modules/unocss/dist/vite.mjs";
import { presetTagify, presetIcons } from "file:///C:/Users/Nyx/Desktop/hijiri.dev-blog/node_modules/unocss/dist/index.mjs";
import extractorSvelte from "file:///C:/Users/Nyx/Desktop/hijiri.dev-blog/node_modules/@unocss/extractor-svelte/dist/index.mjs";
import { imagetools } from "file:///C:/Users/Nyx/Desktop/hijiri.dev-blog/node_modules/vite-imagetools/dist/index.mjs";
import { sveltekit as SvelteKit } from "file:///C:/Users/Nyx/Desktop/hijiri.dev-blog/node_modules/@sveltejs/kit/src/exports/vite/index.js";
import { SvelteKitPWA } from "file:///C:/Users/Nyx/Desktop/hijiri.dev-blog/node_modules/@vite-pwa/sveltekit/dist/index.mjs";
import TailwindCSS from "file:///C:/Users/Nyx/Desktop/hijiri.dev-blog/node_modules/tailwindcss/lib/index.js";

// tailwind.config.ts
import typography from "file:///C:/Users/Nyx/Desktop/hijiri.dev-blog/node_modules/@tailwindcss/typography/src/index.js";
import daisyui from "file:///C:/Users/Nyx/Desktop/hijiri.dev-blog/node_modules/daisyui/src/index.js";

// src/lib/config/general.ts
var theme = [
  {
    name: "light",
    text: "\u{1F315} Light"
  },
  {
    name: "dark",
    text: "\u{1F311} Dark"
  },
  {
    name: "cupcake",
    text: "\u{1F9C1} Cupcake"
  },
  {
    name: "bumblebee",
    text: "\u{1F41D} Bumblebee"
  },
  {
    name: "emerald",
    text: "\u2733\uFE0F Emerald"
  },
  {
    name: "corporate",
    text: "\u{1F3E2} Corporate"
  },
  {
    name: "valentine",
    text: "\u{1F338} Valentine"
  },
  {
    name: "synthwave",
    text: "\u{1F303} Synthwave"
  },
  {
    name: "retro",
    text: "\u{1F307} Retro"
  },
  {
    name: "cyberpunk",
    text: "\u{1F310} Cyberpunk"
  },
  {
    name: "halloween",
    text: "\u{1F383} Halloween"
  },
  {
    name: "garden",
    text: "\u{1F3E1} Garden"
  },
  {
    name: "forest",
    text: "\u{1F332} Forest"
  },
  {
    name: "aqua",
    text: "\u{1F4A6} Aqua"
  },
  {
    name: "lofi",
    text: "\u{1F3B6} Lo-Fi"
  },
  {
    name: "pastel",
    text: "\u{1F308} Pastel"
  },
  {
    name: "fantasy",
    text: "\u{1F423} Fantasy"
  },
  {
    name: "wirefream",
    text: "\u{1F4F1} Wireframe"
  },
  {
    name: "black",
    text: "\u{1F5A4} Black"
  },
  {
    name: "luxury",
    text: "\u{1F4B0} Luxury"
  },
  {
    name: "dracula",
    text: "\u{1F9DB} Dracula"
  },
  {
    name: "cmyk",
    text: "\u{1F5A8}\uFE0F CMYK"
  },
  {
    name: "autumn",
    text: "\u{1F342} Autumn"
  },
  {
    name: "business",
    text: "\u{1F5C4}\uFE0F Business"
  },
  {
    name: "acid",
    text: "\u{1F327}\uFE0F Acid"
  },
  {
    name: "lemonade",
    text: "\u{1F34B} Lemonade"
  },
  {
    name: "night",
    text: "\u{1F303} Night"
  },
  {
    name: "coffee",
    text: "\u2615 Coffee"
  },
  {
    name: "winter",
    text: "\u2744\uFE0F Winter"
  }
];

// tailwind.config.ts
var tailwind_config_default = {
  content: ["./src/**/*.{html,md,js,svelte,ts}"],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            'ul:has(li):has(input[type="checkbox"])': {
              padding: 0
            },
            'ul > li:has(input[type="checkbox"])': {
              listStyle: "none"
            },
            'ul > li:has(input[type="checkbox"]) ul li': {
              paddingLeft: 30
            }
          }
        }
      }
    }
  },
  plugins: [typography, daisyui],
  daisyui: { themes: theme.map(({ name }) => name) }
};

// vite.config.ts
import LightningCSS from "file:///C:/Users/Nyx/Desktop/hijiri.dev-blog/node_modules/postcss-lightningcss/src/index.js";
var vite_config_default = defineConfig({
  envPrefix: "URARA_",
  build: {
    sourcemap: false,
    rollupOptions: {
      cache: false
    }
  },
  css: {
    postcss: {
      plugins: [TailwindCSS(tailwind_config_default), LightningCSS()]
    }
  },
  plugins: [
    UnoCSS({
      content: { pipeline: { include: [/\.svelte$/, /\.md?$/, /\.ts$/] } },
      extractors: [extractorSvelte],
      presets: [
        presetTagify({
          extraProperties: (matched) => matched.startsWith("i-") ? { display: "inline-block" } : {}
        }),
        presetIcons({ scale: 1.5 })
      ]
    }),
    imagetools(),
    SvelteKit(),
    SvelteKitPWA({
      registerType: "autoUpdate",
      manifest: false,
      scope: "/",
      workbox: {
        globPatterns: ["posts.json", "**/*.{js,css,html,svg,ico,png,webp,avif}"],
        globIgnores: ["**/sw*", "**/workbox-*"]
      }
    })
  ]
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiLCAidGFpbHdpbmQuY29uZmlnLnRzIiwgInNyYy9saWIvY29uZmlnL2dlbmVyYWwudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxOeXhcXFxcRGVza3RvcFxcXFxoaWppcmkuZGV2LWJsb2dcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXE55eFxcXFxEZXNrdG9wXFxcXGhpamlyaS5kZXYtYmxvZ1xcXFx2aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vQzovVXNlcnMvTnl4L0Rlc2t0b3AvaGlqaXJpLmRldi1ibG9nL3ZpdGUuY29uZmlnLnRzXCI7Ly8gdml0ZSBkZWZpbmUgY29uZmlnXG5pbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJ1xuLy8gdml0ZSBwbHVnaW5cbmltcG9ydCBVbm9DU1MgZnJvbSAndW5vY3NzL3ZpdGUnXG5pbXBvcnQgeyBwcmVzZXRUYWdpZnksIHByZXNldEljb25zIH0gZnJvbSAndW5vY3NzJ1xuaW1wb3J0IGV4dHJhY3RvclN2ZWx0ZSBmcm9tICdAdW5vY3NzL2V4dHJhY3Rvci1zdmVsdGUnXG5pbXBvcnQgeyBpbWFnZXRvb2xzIH0gZnJvbSAndml0ZS1pbWFnZXRvb2xzJ1xuaW1wb3J0IHsgc3ZlbHRla2l0IGFzIFN2ZWx0ZUtpdCB9IGZyb20gJ0BzdmVsdGVqcy9raXQvdml0ZSdcbmltcG9ydCB7IFN2ZWx0ZUtpdFBXQSB9IGZyb20gJ0B2aXRlLXB3YS9zdmVsdGVraXQnXG4vLyBwb3N0Y3NzICYgdGFpbHdpbmRjc3NcbmltcG9ydCBUYWlsd2luZENTUyBmcm9tICd0YWlsd2luZGNzcydcbmltcG9ydCB0YWlsd2luZENvbmZpZyBmcm9tICcuL3RhaWx3aW5kLmNvbmZpZydcbi8vIEB0cy1leHBlY3QtZXJyb3IgdHMoNzAxNilcbmltcG9ydCBMaWdodG5pbmdDU1MgZnJvbSAncG9zdGNzcy1saWdodG5pbmdjc3MnXG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIGVudlByZWZpeDogJ1VSQVJBXycsXG4gIGJ1aWxkOiB7XG4gICAgc291cmNlbWFwOiBmYWxzZSxcbiAgICByb2xsdXBPcHRpb25zOiB7XG4gICAgICBjYWNoZTogZmFsc2VcbiAgICB9XG4gIH0sXG4gIGNzczoge1xuICAgIHBvc3Rjc3M6IHtcbiAgICAgIHBsdWdpbnM6IFtUYWlsd2luZENTUyh0YWlsd2luZENvbmZpZyksIExpZ2h0bmluZ0NTUygpXVxuICAgIH1cbiAgfSxcbiAgcGx1Z2luczogW1xuICAgIFVub0NTUyh7XG4gICAgICBjb250ZW50OiB7IHBpcGVsaW5lOiB7IGluY2x1ZGU6IFsvXFwuc3ZlbHRlJC8sIC9cXC5tZD8kLywgL1xcLnRzJC9dIH0gfSxcbiAgICAgIGV4dHJhY3RvcnM6IFtleHRyYWN0b3JTdmVsdGVdLFxuICAgICAgcHJlc2V0czogW1xuICAgICAgICBwcmVzZXRUYWdpZnkoe1xuICAgICAgICAgIGV4dHJhUHJvcGVydGllczogKG1hdGNoZWQ6IHN0cmluZykgPT4gKG1hdGNoZWQuc3RhcnRzV2l0aCgnaS0nKSA/IHsgZGlzcGxheTogJ2lubGluZS1ibG9jaycgfSA6IHt9KVxuICAgICAgICB9KSxcbiAgICAgICAgcHJlc2V0SWNvbnMoeyBzY2FsZTogMS41IH0pXG4gICAgICBdXG4gICAgfSksXG4gICAgaW1hZ2V0b29scygpLFxuICAgIFN2ZWx0ZUtpdCgpLFxuICAgIFN2ZWx0ZUtpdFBXQSh7XG4gICAgICByZWdpc3RlclR5cGU6ICdhdXRvVXBkYXRlJyxcbiAgICAgIG1hbmlmZXN0OiBmYWxzZSxcbiAgICAgIHNjb3BlOiAnLycsXG4gICAgICB3b3JrYm94OiB7XG4gICAgICAgIGdsb2JQYXR0ZXJuczogWydwb3N0cy5qc29uJywgJyoqLyoue2pzLGNzcyxodG1sLHN2ZyxpY28scG5nLHdlYnAsYXZpZn0nXSxcbiAgICAgICAgZ2xvYklnbm9yZXM6IFsnKiovc3cqJywgJyoqL3dvcmtib3gtKiddXG4gICAgICB9XG4gICAgfSlcbiAgXVxufSlcbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcTnl4XFxcXERlc2t0b3BcXFxcaGlqaXJpLmRldi1ibG9nXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxOeXhcXFxcRGVza3RvcFxcXFxoaWppcmkuZGV2LWJsb2dcXFxcdGFpbHdpbmQuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9DOi9Vc2Vycy9OeXgvRGVza3RvcC9oaWppcmkuZGV2LWJsb2cvdGFpbHdpbmQuY29uZmlnLnRzXCI7aW1wb3J0IHR5cGUgeyBDb25maWcgfSBmcm9tICd0YWlsd2luZGNzcydcbmltcG9ydCB0eXBvZ3JhcGh5IGZyb20gJ0B0YWlsd2luZGNzcy90eXBvZ3JhcGh5J1xuaW1wb3J0IGRhaXN5dWkgZnJvbSAnZGFpc3l1aSdcblxuaW1wb3J0IHsgdGhlbWUgfSBmcm9tICcuL3NyYy9saWIvY29uZmlnL2dlbmVyYWwnXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgY29udGVudDogWycuL3NyYy8qKi8qLntodG1sLG1kLGpzLHN2ZWx0ZSx0c30nXSxcbiAgdGhlbWU6IHtcbiAgICBleHRlbmQ6IHtcbiAgICAgIHR5cG9ncmFwaHk6IHtcbiAgICAgICAgREVGQVVMVDoge1xuICAgICAgICAgIGNzczoge1xuICAgICAgICAgICAgJ3VsOmhhcyhsaSk6aGFzKGlucHV0W3R5cGU9XCJjaGVja2JveFwiXSknOiB7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDBcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAndWwgPiBsaTpoYXMoaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdKSc6IHtcbiAgICAgICAgICAgICAgbGlzdFN0eWxlOiAnbm9uZSdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAndWwgPiBsaTpoYXMoaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdKSB1bCBsaSc6IHtcbiAgICAgICAgICAgICAgcGFkZGluZ0xlZnQ6IDMwXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9LFxuICBwbHVnaW5zOiBbdHlwb2dyYXBoeSwgZGFpc3l1aV0sXG4gIGRhaXN5dWk6IHsgdGhlbWVzOiB0aGVtZS5tYXAoKHsgbmFtZSB9KSA9PiBuYW1lKSB9XG59IHNhdGlzZmllcyBDb25maWdcbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcTnl4XFxcXERlc2t0b3BcXFxcaGlqaXJpLmRldi1ibG9nXFxcXHNyY1xcXFxsaWJcXFxcY29uZmlnXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxOeXhcXFxcRGVza3RvcFxcXFxoaWppcmkuZGV2LWJsb2dcXFxcc3JjXFxcXGxpYlxcXFxjb25maWdcXFxcZ2VuZXJhbC50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vQzovVXNlcnMvTnl4L0Rlc2t0b3AvaGlqaXJpLmRldi1ibG9nL3NyYy9saWIvY29uZmlnL2dlbmVyYWwudHNcIjtpbXBvcnQgdHlwZSB7IFRoZW1lQ29uZmlnLCBIZWFkQ29uZmlnLCBIZWFkZXJDb25maWcsIEZvb3RlckNvbmZpZywgRGF0ZUNvbmZpZywgRmVlZENvbmZpZyB9IGZyb20gJyRsaWIvdHlwZXMvZ2VuZXJhbCdcblxuZXhwb3J0IGNvbnN0IHRoZW1lOiBUaGVtZUNvbmZpZyA9IFtcbiAge1xuICAgIG5hbWU6ICdsaWdodCcsXG4gICAgdGV4dDogJ1x1RDgzQ1x1REYxNSBMaWdodCdcbiAgfSxcbiAge1xuICAgIG5hbWU6ICdkYXJrJyxcbiAgICB0ZXh0OiAnXHVEODNDXHVERjExIERhcmsnXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAnY3VwY2FrZScsXG4gICAgdGV4dDogJ1x1RDgzRVx1RERDMSBDdXBjYWtlJ1xuICB9LFxuICB7XG4gICAgbmFtZTogJ2J1bWJsZWJlZScsXG4gICAgdGV4dDogJ1x1RDgzRFx1REMxRCBCdW1ibGViZWUnXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAnZW1lcmFsZCcsXG4gICAgdGV4dDogJ1x1MjczM1x1RkUwRiBFbWVyYWxkJ1xuICB9LFxuICB7XG4gICAgbmFtZTogJ2NvcnBvcmF0ZScsXG4gICAgdGV4dDogJ1x1RDgzQ1x1REZFMiBDb3Jwb3JhdGUnXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAndmFsZW50aW5lJyxcbiAgICB0ZXh0OiAnXHVEODNDXHVERjM4IFZhbGVudGluZSdcbiAgfSxcbiAge1xuICAgIG5hbWU6ICdzeW50aHdhdmUnLFxuICAgIHRleHQ6ICdcdUQ4M0NcdURGMDMgU3ludGh3YXZlJ1xuICB9LFxuICB7XG4gICAgbmFtZTogJ3JldHJvJyxcbiAgICB0ZXh0OiAnXHVEODNDXHVERjA3IFJldHJvJ1xuICB9LFxuICB7XG4gICAgbmFtZTogJ2N5YmVycHVuaycsXG4gICAgdGV4dDogJ1x1RDgzQ1x1REYxMCBDeWJlcnB1bmsnXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAnaGFsbG93ZWVuJyxcbiAgICB0ZXh0OiAnXHVEODNDXHVERjgzIEhhbGxvd2VlbidcbiAgfSxcbiAge1xuICAgIG5hbWU6ICdnYXJkZW4nLFxuICAgIHRleHQ6ICdcdUQ4M0NcdURGRTEgR2FyZGVuJ1xuICB9LFxuICB7XG4gICAgbmFtZTogJ2ZvcmVzdCcsXG4gICAgdGV4dDogJ1x1RDgzQ1x1REYzMiBGb3Jlc3QnXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAnYXF1YScsXG4gICAgdGV4dDogJ1x1RDgzRFx1RENBNiBBcXVhJ1xuICB9LFxuICB7XG4gICAgbmFtZTogJ2xvZmknLFxuICAgIHRleHQ6ICdcdUQ4M0NcdURGQjYgTG8tRmknXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAncGFzdGVsJyxcbiAgICB0ZXh0OiAnXHVEODNDXHVERjA4IFBhc3RlbCdcbiAgfSxcbiAge1xuICAgIG5hbWU6ICdmYW50YXN5JyxcbiAgICB0ZXh0OiAnXHVEODNEXHVEQzIzIEZhbnRhc3knXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAnd2lyZWZyZWFtJyxcbiAgICB0ZXh0OiAnXHVEODNEXHVEQ0YxIFdpcmVmcmFtZSdcbiAgfSxcbiAge1xuICAgIG5hbWU6ICdibGFjaycsXG4gICAgdGV4dDogJ1x1RDgzRFx1RERBNCBCbGFjaydcbiAgfSxcbiAge1xuICAgIG5hbWU6ICdsdXh1cnknLFxuICAgIHRleHQ6ICdcdUQ4M0RcdURDQjAgTHV4dXJ5J1xuICB9LFxuICB7XG4gICAgbmFtZTogJ2RyYWN1bGEnLFxuICAgIHRleHQ6ICdcdUQ4M0VcdUREREIgRHJhY3VsYSdcbiAgfSxcbiAge1xuICAgIG5hbWU6ICdjbXlrJyxcbiAgICB0ZXh0OiAnXHVEODNEXHVEREE4XHVGRTBGIENNWUsnXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAnYXV0dW1uJyxcbiAgICB0ZXh0OiAnXHVEODNDXHVERjQyIEF1dHVtbidcbiAgfSxcbiAge1xuICAgIG5hbWU6ICdidXNpbmVzcycsXG4gICAgdGV4dDogJ1x1RDgzRFx1RERDNFx1RkUwRiBCdXNpbmVzcydcbiAgfSxcbiAge1xuICAgIG5hbWU6ICdhY2lkJyxcbiAgICB0ZXh0OiAnXHVEODNDXHVERjI3XHVGRTBGIEFjaWQnXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAnbGVtb25hZGUnLFxuICAgIHRleHQ6ICdcdUQ4M0NcdURGNEIgTGVtb25hZGUnXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAnbmlnaHQnLFxuICAgIHRleHQ6ICdcdUQ4M0NcdURGMDMgTmlnaHQnXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAnY29mZmVlJyxcbiAgICB0ZXh0OiAnXHUyNjE1IENvZmZlZSdcbiAgfSxcbiAge1xuICAgIG5hbWU6ICd3aW50ZXInLFxuICAgIHRleHQ6ICdcdTI3NDRcdUZFMEYgV2ludGVyJ1xuICB9XG5dXG5cbmV4cG9ydCBjb25zdCBoZWFkOiBIZWFkQ29uZmlnID0ge31cblxuZXhwb3J0IGNvbnN0IGhlYWRlcjogSGVhZGVyQ29uZmlnID0ge1xuICBzZWFyY2g6IHtcbiAgICBwcm92aWRlcjogJ2R1Y2tkdWNrZ28nXG4gIH0sXG4gIG5hdjogW1xuICAgIHtcbiAgICAgIHRleHQ6ICdQZXJzb25hbCBMaWZlJyxcbiAgICAgIGxpbms6ICcvc2l0ZS1pbmRleC9wZXJzb25hbCdcbiAgICB9LFxuICAgIHtcbiAgICAgIHRleHQ6ICdDb2RpbmcgVGhpbmdzJyxcbiAgICAgIGxpbms6ICcvc2l0ZS1pbmRleC9kZXYnXG4gICAgfSxcbiAgICB7XG4gICAgICB0ZXh0OiAnVHJhbnNsYXRpb25zJyxcbiAgICAgIGxpbms6ICcvc2l0ZS1pbmRleC90bCdcbiAgICB9LFxuICAgIHtcbiAgICAgIHRleHQ6ICdBYm91dCBNZScsXG4gICAgICBsaW5rOiAnL2Fib3V0LW1lLydcbiAgICB9XG4gIF1cbn1cblxuZXhwb3J0IGNvbnN0IGZvb3RlcjogRm9vdGVyQ29uZmlnID0ge1xuICBuYXY6IFtcbiAgICB7XG4gICAgICB0ZXh0OiAnRmVlZCcsXG4gICAgICBsaW5rOiAnL2F0b20ueG1sJ1xuICAgIH0sXG4gICAge1xuICAgICAgdGV4dDogJ1NpdGVtYXAnLFxuICAgICAgbGluazogJy9zaXRlbWFwLnhtbCdcbiAgICB9XG4gIF1cbn1cblxuZXhwb3J0IGNvbnN0IGRhdGU6IERhdGVDb25maWcgPSB7XG4gIGxvY2FsZXM6ICdlbi1VUycsXG4gIG9wdGlvbnM6IHtcbiAgICB5ZWFyOiAnbnVtZXJpYycsXG4gICAgd2Vla2RheTogJ2xvbmcnLFxuICAgIG1vbnRoOiAnc2hvcnQnLFxuICAgIGRheTogJ251bWVyaWMnXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IGZlZWQ6IEZlZWRDb25maWcgPSB7fVxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUNBLFNBQVMsb0JBQW9CO0FBRTdCLE9BQU8sWUFBWTtBQUNuQixTQUFTLGNBQWMsbUJBQW1CO0FBQzFDLE9BQU8scUJBQXFCO0FBQzVCLFNBQVMsa0JBQWtCO0FBQzNCLFNBQVMsYUFBYSxpQkFBaUI7QUFDdkMsU0FBUyxvQkFBb0I7QUFFN0IsT0FBTyxpQkFBaUI7OztBQ1R4QixPQUFPLGdCQUFnQjtBQUN2QixPQUFPLGFBQWE7OztBQ0FiLElBQU0sUUFBcUI7QUFBQSxFQUNoQztBQUFBLElBQ0UsTUFBTTtBQUFBLElBQ04sTUFBTTtBQUFBLEVBQ1I7QUFBQSxFQUNBO0FBQUEsSUFDRSxNQUFNO0FBQUEsSUFDTixNQUFNO0FBQUEsRUFDUjtBQUFBLEVBQ0E7QUFBQSxJQUNFLE1BQU07QUFBQSxJQUNOLE1BQU07QUFBQSxFQUNSO0FBQUEsRUFDQTtBQUFBLElBQ0UsTUFBTTtBQUFBLElBQ04sTUFBTTtBQUFBLEVBQ1I7QUFBQSxFQUNBO0FBQUEsSUFDRSxNQUFNO0FBQUEsSUFDTixNQUFNO0FBQUEsRUFDUjtBQUFBLEVBQ0E7QUFBQSxJQUNFLE1BQU07QUFBQSxJQUNOLE1BQU07QUFBQSxFQUNSO0FBQUEsRUFDQTtBQUFBLElBQ0UsTUFBTTtBQUFBLElBQ04sTUFBTTtBQUFBLEVBQ1I7QUFBQSxFQUNBO0FBQUEsSUFDRSxNQUFNO0FBQUEsSUFDTixNQUFNO0FBQUEsRUFDUjtBQUFBLEVBQ0E7QUFBQSxJQUNFLE1BQU07QUFBQSxJQUNOLE1BQU07QUFBQSxFQUNSO0FBQUEsRUFDQTtBQUFBLElBQ0UsTUFBTTtBQUFBLElBQ04sTUFBTTtBQUFBLEVBQ1I7QUFBQSxFQUNBO0FBQUEsSUFDRSxNQUFNO0FBQUEsSUFDTixNQUFNO0FBQUEsRUFDUjtBQUFBLEVBQ0E7QUFBQSxJQUNFLE1BQU07QUFBQSxJQUNOLE1BQU07QUFBQSxFQUNSO0FBQUEsRUFDQTtBQUFBLElBQ0UsTUFBTTtBQUFBLElBQ04sTUFBTTtBQUFBLEVBQ1I7QUFBQSxFQUNBO0FBQUEsSUFDRSxNQUFNO0FBQUEsSUFDTixNQUFNO0FBQUEsRUFDUjtBQUFBLEVBQ0E7QUFBQSxJQUNFLE1BQU07QUFBQSxJQUNOLE1BQU07QUFBQSxFQUNSO0FBQUEsRUFDQTtBQUFBLElBQ0UsTUFBTTtBQUFBLElBQ04sTUFBTTtBQUFBLEVBQ1I7QUFBQSxFQUNBO0FBQUEsSUFDRSxNQUFNO0FBQUEsSUFDTixNQUFNO0FBQUEsRUFDUjtBQUFBLEVBQ0E7QUFBQSxJQUNFLE1BQU07QUFBQSxJQUNOLE1BQU07QUFBQSxFQUNSO0FBQUEsRUFDQTtBQUFBLElBQ0UsTUFBTTtBQUFBLElBQ04sTUFBTTtBQUFBLEVBQ1I7QUFBQSxFQUNBO0FBQUEsSUFDRSxNQUFNO0FBQUEsSUFDTixNQUFNO0FBQUEsRUFDUjtBQUFBLEVBQ0E7QUFBQSxJQUNFLE1BQU07QUFBQSxJQUNOLE1BQU07QUFBQSxFQUNSO0FBQUEsRUFDQTtBQUFBLElBQ0UsTUFBTTtBQUFBLElBQ04sTUFBTTtBQUFBLEVBQ1I7QUFBQSxFQUNBO0FBQUEsSUFDRSxNQUFNO0FBQUEsSUFDTixNQUFNO0FBQUEsRUFDUjtBQUFBLEVBQ0E7QUFBQSxJQUNFLE1BQU07QUFBQSxJQUNOLE1BQU07QUFBQSxFQUNSO0FBQUEsRUFDQTtBQUFBLElBQ0UsTUFBTTtBQUFBLElBQ04sTUFBTTtBQUFBLEVBQ1I7QUFBQSxFQUNBO0FBQUEsSUFDRSxNQUFNO0FBQUEsSUFDTixNQUFNO0FBQUEsRUFDUjtBQUFBLEVBQ0E7QUFBQSxJQUNFLE1BQU07QUFBQSxJQUNOLE1BQU07QUFBQSxFQUNSO0FBQUEsRUFDQTtBQUFBLElBQ0UsTUFBTTtBQUFBLElBQ04sTUFBTTtBQUFBLEVBQ1I7QUFBQSxFQUNBO0FBQUEsSUFDRSxNQUFNO0FBQUEsSUFDTixNQUFNO0FBQUEsRUFDUjtBQUNGOzs7QURqSEEsSUFBTywwQkFBUTtBQUFBLEVBQ2IsU0FBUyxDQUFDLG1DQUFtQztBQUFBLEVBQzdDLE9BQU87QUFBQSxJQUNMLFFBQVE7QUFBQSxNQUNOLFlBQVk7QUFBQSxRQUNWLFNBQVM7QUFBQSxVQUNQLEtBQUs7QUFBQSxZQUNILDBDQUEwQztBQUFBLGNBQ3hDLFNBQVM7QUFBQSxZQUNYO0FBQUEsWUFDQSx1Q0FBdUM7QUFBQSxjQUNyQyxXQUFXO0FBQUEsWUFDYjtBQUFBLFlBQ0EsNkNBQTZDO0FBQUEsY0FDM0MsYUFBYTtBQUFBLFlBQ2Y7QUFBQSxVQUNGO0FBQUEsUUFDRjtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUFBLEVBQ0EsU0FBUyxDQUFDLFlBQVksT0FBTztBQUFBLEVBQzdCLFNBQVMsRUFBRSxRQUFRLE1BQU0sSUFBSSxDQUFDLEVBQUUsS0FBSyxNQUFNLElBQUksRUFBRTtBQUNuRDs7O0FEaEJBLE9BQU8sa0JBQWtCO0FBRXpCLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFdBQVc7QUFBQSxFQUNYLE9BQU87QUFBQSxJQUNMLFdBQVc7QUFBQSxJQUNYLGVBQWU7QUFBQSxNQUNiLE9BQU87QUFBQSxJQUNUO0FBQUEsRUFDRjtBQUFBLEVBQ0EsS0FBSztBQUFBLElBQ0gsU0FBUztBQUFBLE1BQ1AsU0FBUyxDQUFDLFlBQVksdUJBQWMsR0FBRyxhQUFhLENBQUM7QUFBQSxJQUN2RDtBQUFBLEVBQ0Y7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNQLE9BQU87QUFBQSxNQUNMLFNBQVMsRUFBRSxVQUFVLEVBQUUsU0FBUyxDQUFDLGFBQWEsVUFBVSxPQUFPLEVBQUUsRUFBRTtBQUFBLE1BQ25FLFlBQVksQ0FBQyxlQUFlO0FBQUEsTUFDNUIsU0FBUztBQUFBLFFBQ1AsYUFBYTtBQUFBLFVBQ1gsaUJBQWlCLENBQUMsWUFBcUIsUUFBUSxXQUFXLElBQUksSUFBSSxFQUFFLFNBQVMsZUFBZSxJQUFJLENBQUM7QUFBQSxRQUNuRyxDQUFDO0FBQUEsUUFDRCxZQUFZLEVBQUUsT0FBTyxJQUFJLENBQUM7QUFBQSxNQUM1QjtBQUFBLElBQ0YsQ0FBQztBQUFBLElBQ0QsV0FBVztBQUFBLElBQ1gsVUFBVTtBQUFBLElBQ1YsYUFBYTtBQUFBLE1BQ1gsY0FBYztBQUFBLE1BQ2QsVUFBVTtBQUFBLE1BQ1YsT0FBTztBQUFBLE1BQ1AsU0FBUztBQUFBLFFBQ1AsY0FBYyxDQUFDLGNBQWMsMENBQTBDO0FBQUEsUUFDdkUsYUFBYSxDQUFDLFVBQVUsY0FBYztBQUFBLE1BQ3hDO0FBQUEsSUFDRixDQUFDO0FBQUEsRUFDSDtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
