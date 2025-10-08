// vite.config.ts
import { sveltekit } from "file:///C:/Users/Nyx/Desktop/urara-blog/node_modules/.pnpm/@sveltejs+kit@2.46.4_@sveltejs+vite-plugin-svelte@3.1.2_svelte@4.2.20_vite@5.4.20_@types+node_zx2sygqnpql7bqfkdnlcu7oenu/node_modules/@sveltejs/kit/src/exports/vite/index.js";
import { SvelteKitPWA as pwa } from "file:///C:/Users/Nyx/Desktop/urara-blog/node_modules/.pnpm/@vite-pwa+sveltekit@0.1.3_@sveltejs+kit@2.46.4_@sveltejs+vite-plugin-svelte@3.1.2_svelte@4.2._nrlo4zymsg6dajev6mcdejgvlq/node_modules/@vite-pwa/sveltekit/dist/index.mjs";
import LightningCSS from "file:///C:/Users/Nyx/Desktop/urara-blog/node_modules/.pnpm/postcss-lightningcss@0.7.0_postcss@8.5.6/node_modules/postcss-lightningcss/src/index.js";
import TailwindCSS from "file:///C:/Users/Nyx/Desktop/urara-blog/node_modules/.pnpm/tailwindcss@3.4.18_tsx@4.20.6_yaml@2.8.1/node_modules/tailwindcss/lib/index.js";
import unoCSS from "file:///C:/Users/Nyx/Desktop/urara-blog/node_modules/.pnpm/unocss@0.58.9_postcss@8.5.6_rollup@2.79.2_vite@5.4.20_@types+node@20.19.19_lightningcss@1.30.2_terser@5.44.0_/node_modules/unocss/dist/vite.mjs";
import { defineConfig as defineConfig2 } from "file:///C:/Users/Nyx/Desktop/urara-blog/node_modules/.pnpm/vite@5.4.20_@types+node@20.19.19_lightningcss@1.30.2_terser@5.44.0/node_modules/vite/dist/node/index.js";
import { imagetools } from "file:///C:/Users/Nyx/Desktop/urara-blog/node_modules/.pnpm/vite-imagetools@4.0.19_rollup@2.79.2/node_modules/vite-imagetools/dist/index.mjs";

// tailwind.config.ts
import typography from "file:///C:/Users/Nyx/Desktop/urara-blog/node_modules/.pnpm/@tailwindcss+typography@0.5.19_tailwindcss@3.4.18_tsx@4.20.6_yaml@2.8.1_/node_modules/@tailwindcss/typography/src/index.js";
import daisyui from "file:///C:/Users/Nyx/Desktop/urara-blog/node_modules/.pnpm/daisyui@4.12.24_postcss@8.5.6/node_modules/daisyui/src/index.js";

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
  daisyui: { themes: theme.map(({ name }) => name) },
  plugins: [typography, daisyui],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            'ul > li:has(input[type="checkbox"])': {
              listStyle: "none"
            },
            'ul > li:has(input[type="checkbox"]) ul li': {
              paddingLeft: 30
            },
            'ul:has(li):has(input[type="checkbox"])': {
              padding: 0
            }
          }
        }
      }
    }
  }
};

// uno.config.ts
import extractorSvelte from "file:///C:/Users/Nyx/Desktop/urara-blog/node_modules/.pnpm/@unocss+extractor-svelte@0.55.7/node_modules/@unocss/extractor-svelte/dist/index.mjs";
import { defineConfig, presetIcons, presetTagify, presetUno } from "file:///C:/Users/Nyx/Desktop/urara-blog/node_modules/.pnpm/unocss@0.58.9_postcss@8.5.6_rollup@2.79.2_vite@5.4.20_@types+node@20.19.19_lightningcss@1.30.2_terser@5.44.0_/node_modules/unocss/dist/index.mjs";
var uno_config_default = defineConfig({
  content: { pipeline: { include: [/\.svelte$/, /\.md?$/, /\.ts$/] } },
  extractors: [extractorSvelte],
  presets: [
    presetUno(),
    presetTagify({
      extraProperties: (matched) => matched.startsWith("i-") ? { display: "inline-block" } : {}
    }),
    presetIcons({ scale: 1.5 })
  ]
});

// vite.config.ts
var vite_config_default = defineConfig2({
  css: {
    postcss: {
      plugins: [TailwindCSS(tailwind_config_default), LightningCSS()]
    }
  },
  envPrefix: "URARA_",
  plugins: [
    unoCSS(uno_config_default),
    imagetools(),
    sveltekit(),
    pwa({
      manifest: false,
      registerType: "autoUpdate",
      scope: "/",
      workbox: {
        globIgnores: ["**/sw*", "**/workbox-*"],
        globPatterns: ["posts.json", "**/*.{js,css,html,svg,ico,png,webp,avif}"]
      }
    })
  ]
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiLCAidGFpbHdpbmQuY29uZmlnLnRzIiwgInNyYy9saWIvY29uZmlnL2dlbmVyYWwudHMiLCAidW5vLmNvbmZpZy50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXE55eFxcXFxEZXNrdG9wXFxcXHVyYXJhLWJsb2dcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXE55eFxcXFxEZXNrdG9wXFxcXHVyYXJhLWJsb2dcXFxcdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0M6L1VzZXJzL055eC9EZXNrdG9wL3VyYXJhLWJsb2cvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBzdmVsdGVraXQgfSBmcm9tICdAc3ZlbHRlanMva2l0L3ZpdGUnXHJcbmltcG9ydCB7IFN2ZWx0ZUtpdFBXQSBhcyBwd2EgfSBmcm9tICdAdml0ZS1wd2Evc3ZlbHRla2l0J1xyXG4vLyBAdHMtZXhwZWN0LWVycm9yIHRzKDcwMTYpXHJcbmltcG9ydCBMaWdodG5pbmdDU1MgZnJvbSAncG9zdGNzcy1saWdodG5pbmdjc3MnXHJcbmltcG9ydCBUYWlsd2luZENTUyBmcm9tICd0YWlsd2luZGNzcydcclxuaW1wb3J0IHVub0NTUyBmcm9tICd1bm9jc3Mvdml0ZSdcclxuaW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSdcclxuaW1wb3J0IHsgaW1hZ2V0b29scyB9IGZyb20gJ3ZpdGUtaW1hZ2V0b29scydcclxuXHJcbmltcG9ydCB0YWlsd2luZENvbmZpZyBmcm9tICcuL3RhaWx3aW5kLmNvbmZpZydcclxuaW1wb3J0IHVub0NvbmZpZyBmcm9tICcuL3Vuby5jb25maWcnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xyXG4gIGNzczoge1xyXG4gICAgcG9zdGNzczoge1xyXG4gICAgICBwbHVnaW5zOiBbVGFpbHdpbmRDU1ModGFpbHdpbmRDb25maWcpLCBMaWdodG5pbmdDU1MoKV0sXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgZW52UHJlZml4OiAnVVJBUkFfJyxcclxuICBwbHVnaW5zOiBbXHJcbiAgICB1bm9DU1ModW5vQ29uZmlnKSxcclxuICAgIGltYWdldG9vbHMoKSxcclxuICAgIHN2ZWx0ZWtpdCgpLFxyXG4gICAgcHdhKHtcclxuICAgICAgbWFuaWZlc3Q6IGZhbHNlLFxyXG4gICAgICByZWdpc3RlclR5cGU6ICdhdXRvVXBkYXRlJyxcclxuICAgICAgc2NvcGU6ICcvJyxcclxuICAgICAgd29ya2JveDoge1xyXG4gICAgICAgIGdsb2JJZ25vcmVzOiBbJyoqL3N3KicsICcqKi93b3JrYm94LSonXSxcclxuICAgICAgICBnbG9iUGF0dGVybnM6IFsncG9zdHMuanNvbicsICcqKi8qLntqcyxjc3MsaHRtbCxzdmcsaWNvLHBuZyx3ZWJwLGF2aWZ9J10sXHJcbiAgICAgIH0sXHJcbiAgICB9KSxcclxuICBdLFxyXG59KVxyXG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXE55eFxcXFxEZXNrdG9wXFxcXHVyYXJhLWJsb2dcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXE55eFxcXFxEZXNrdG9wXFxcXHVyYXJhLWJsb2dcXFxcdGFpbHdpbmQuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9DOi9Vc2Vycy9OeXgvRGVza3RvcC91cmFyYS1ibG9nL3RhaWx3aW5kLmNvbmZpZy50c1wiO2ltcG9ydCB0eXBlIHsgQ29uZmlnIH0gZnJvbSAndGFpbHdpbmRjc3MnXHJcbmltcG9ydCB0eXBvZ3JhcGh5IGZyb20gJ0B0YWlsd2luZGNzcy90eXBvZ3JhcGh5J1xyXG5pbXBvcnQgZGFpc3l1aSBmcm9tICdkYWlzeXVpJ1xyXG5cclxuaW1wb3J0IHsgdGhlbWUgfSBmcm9tICcuL3NyYy9saWIvY29uZmlnL2dlbmVyYWwnXHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgY29udGVudDogWycuL3NyYy8qKi8qLntodG1sLG1kLGpzLHN2ZWx0ZSx0c30nXSxcclxuICBkYWlzeXVpOiB7IHRoZW1lczogdGhlbWUubWFwKCh7IG5hbWUgfSkgPT4gbmFtZSkgfSxcclxuICBwbHVnaW5zOiBbdHlwb2dyYXBoeSwgZGFpc3l1aV0sXHJcbiAgdGhlbWU6IHtcclxuICAgIGV4dGVuZDoge1xyXG4gICAgICB0eXBvZ3JhcGh5OiB7XHJcbiAgICAgICAgREVGQVVMVDoge1xyXG4gICAgICAgICAgY3NzOiB7XHJcbiAgICAgICAgICAgICd1bCA+IGxpOmhhcyhpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0pJzoge1xyXG4gICAgICAgICAgICAgIGxpc3RTdHlsZTogJ25vbmUnLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAndWwgPiBsaTpoYXMoaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdKSB1bCBsaSc6IHtcclxuICAgICAgICAgICAgICBwYWRkaW5nTGVmdDogMzAsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICd1bDpoYXMobGkpOmhhcyhpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0pJzoge1xyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDAsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIH0sXHJcbn0gc2F0aXNmaWVzIENvbmZpZ1xyXG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXE55eFxcXFxEZXNrdG9wXFxcXHVyYXJhLWJsb2dcXFxcc3JjXFxcXGxpYlxcXFxjb25maWdcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXE55eFxcXFxEZXNrdG9wXFxcXHVyYXJhLWJsb2dcXFxcc3JjXFxcXGxpYlxcXFxjb25maWdcXFxcZ2VuZXJhbC50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vQzovVXNlcnMvTnl4L0Rlc2t0b3AvdXJhcmEtYmxvZy9zcmMvbGliL2NvbmZpZy9nZW5lcmFsLnRzXCI7aW1wb3J0IHR5cGUgeyBUaGVtZUNvbmZpZywgSGVhZENvbmZpZywgSGVhZGVyQ29uZmlnLCBGb290ZXJDb25maWcsIERhdGVDb25maWcsIEZlZWRDb25maWcgfSBmcm9tICckbGliL3R5cGVzL2dlbmVyYWwnXHJcblxyXG5leHBvcnQgY29uc3QgdGhlbWU6IFRoZW1lQ29uZmlnID0gW1xyXG4gIHtcclxuICAgIG5hbWU6ICdsaWdodCcsXHJcbiAgICB0ZXh0OiAnXHVEODNDXHVERjE1IExpZ2h0J1xyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ2RhcmsnLFxyXG4gICAgdGV4dDogJ1x1RDgzQ1x1REYxMSBEYXJrJ1xyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ2N1cGNha2UnLFxyXG4gICAgdGV4dDogJ1x1RDgzRVx1RERDMSBDdXBjYWtlJ1xyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ2J1bWJsZWJlZScsXHJcbiAgICB0ZXh0OiAnXHVEODNEXHVEQzFEIEJ1bWJsZWJlZSdcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdlbWVyYWxkJyxcclxuICAgIHRleHQ6ICdcdTI3MzNcdUZFMEYgRW1lcmFsZCdcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdjb3Jwb3JhdGUnLFxyXG4gICAgdGV4dDogJ1x1RDgzQ1x1REZFMiBDb3Jwb3JhdGUnXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAndmFsZW50aW5lJyxcclxuICAgIHRleHQ6ICdcdUQ4M0NcdURGMzggVmFsZW50aW5lJ1xyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ3N5bnRod2F2ZScsXHJcbiAgICB0ZXh0OiAnXHVEODNDXHVERjAzIFN5bnRod2F2ZSdcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdyZXRybycsXHJcbiAgICB0ZXh0OiAnXHVEODNDXHVERjA3IFJldHJvJ1xyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ2N5YmVycHVuaycsXHJcbiAgICB0ZXh0OiAnXHVEODNDXHVERjEwIEN5YmVycHVuaydcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdoYWxsb3dlZW4nLFxyXG4gICAgdGV4dDogJ1x1RDgzQ1x1REY4MyBIYWxsb3dlZW4nXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnZ2FyZGVuJyxcclxuICAgIHRleHQ6ICdcdUQ4M0NcdURGRTEgR2FyZGVuJ1xyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ2ZvcmVzdCcsXHJcbiAgICB0ZXh0OiAnXHVEODNDXHVERjMyIEZvcmVzdCdcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdhcXVhJyxcclxuICAgIHRleHQ6ICdcdUQ4M0RcdURDQTYgQXF1YSdcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdsb2ZpJyxcclxuICAgIHRleHQ6ICdcdUQ4M0NcdURGQjYgTG8tRmknXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAncGFzdGVsJyxcclxuICAgIHRleHQ6ICdcdUQ4M0NcdURGMDggUGFzdGVsJ1xyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ2ZhbnRhc3knLFxyXG4gICAgdGV4dDogJ1x1RDgzRFx1REMyMyBGYW50YXN5J1xyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ3dpcmVmcmVhbScsXHJcbiAgICB0ZXh0OiAnXHVEODNEXHVEQ0YxIFdpcmVmcmFtZSdcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdibGFjaycsXHJcbiAgICB0ZXh0OiAnXHVEODNEXHVEREE0IEJsYWNrJ1xyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ2x1eHVyeScsXHJcbiAgICB0ZXh0OiAnXHVEODNEXHVEQ0IwIEx1eHVyeSdcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdkcmFjdWxhJyxcclxuICAgIHRleHQ6ICdcdUQ4M0VcdUREREIgRHJhY3VsYSdcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdjbXlrJyxcclxuICAgIHRleHQ6ICdcdUQ4M0RcdUREQThcdUZFMEYgQ01ZSydcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdhdXR1bW4nLFxyXG4gICAgdGV4dDogJ1x1RDgzQ1x1REY0MiBBdXR1bW4nXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnYnVzaW5lc3MnLFxyXG4gICAgdGV4dDogJ1x1RDgzRFx1RERDNFx1RkUwRiBCdXNpbmVzcydcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdhY2lkJyxcclxuICAgIHRleHQ6ICdcdUQ4M0NcdURGMjdcdUZFMEYgQWNpZCdcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdsZW1vbmFkZScsXHJcbiAgICB0ZXh0OiAnXHVEODNDXHVERjRCIExlbW9uYWRlJ1xyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ25pZ2h0JyxcclxuICAgIHRleHQ6ICdcdUQ4M0NcdURGMDMgTmlnaHQnXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnY29mZmVlJyxcclxuICAgIHRleHQ6ICdcdTI2MTUgQ29mZmVlJ1xyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ3dpbnRlcicsXHJcbiAgICB0ZXh0OiAnXHUyNzQ0XHVGRTBGIFdpbnRlcidcclxuICB9XHJcbl1cclxuXHJcbmV4cG9ydCBjb25zdCBoZWFkOiBIZWFkQ29uZmlnID0ge31cclxuXHJcbmV4cG9ydCBjb25zdCBoZWFkZXI6IEhlYWRlckNvbmZpZyA9IHtcclxuICBzZWFyY2g6IHtcclxuICAgIHByb3ZpZGVyOiAnZHVja2R1Y2tnbydcclxuICB9LFxyXG4gIG5hdjogW1xyXG4gICAge1xyXG4gICAgICB0ZXh0OiAnUGVyc29uYWwgTGlmZScsXHJcbiAgICAgIGxpbms6ICcvc2l0ZS1pbmRleC9wZXJzb25hbCdcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHRleHQ6ICdDb2RpbmcgVGhpbmdzJyxcclxuICAgICAgbGluazogJy9zaXRlLWluZGV4L2RldidcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHRleHQ6ICdBSyBUaGluZ3MnLFxyXG4gICAgICBsaW5rOiAnL3NpdGUtaW5kZXgvYWtndWlkZXMnXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICB0ZXh0OiAnVHJhbnNsYXRpb25zJyxcclxuICAgICAgbGluazogJy9zaXRlLWluZGV4L3RsJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgdGV4dDogJ0Fib3V0IE1lJyxcclxuICAgICAgbGluazogJy9hYm91dC1tZS8nXHJcbiAgICB9XHJcbiAgXVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZm9vdGVyOiBGb290ZXJDb25maWcgPSB7XHJcbiAgbmF2OiBbXHJcbiAgICB7XHJcbiAgICAgIHRleHQ6ICdGZWVkJyxcclxuICAgICAgbGluazogJy9hdG9tLnhtbCdcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHRleHQ6ICdTaXRlbWFwJyxcclxuICAgICAgbGluazogJy9zaXRlbWFwLnhtbCdcclxuICAgIH1cclxuICBdXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBkYXRlOiBEYXRlQ29uZmlnID0ge1xyXG4gIGxvY2FsZXM6ICdlbi1VUycsXHJcbiAgb3B0aW9uczoge1xyXG4gICAgeWVhcjogJ251bWVyaWMnLFxyXG4gICAgd2Vla2RheTogJ2xvbmcnLFxyXG4gICAgbW9udGg6ICdzaG9ydCcsXHJcbiAgICBkYXk6ICdudW1lcmljJ1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGZlZWQ6IEZlZWRDb25maWcgPSB7fVxyXG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXE55eFxcXFxEZXNrdG9wXFxcXHVyYXJhLWJsb2dcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXE55eFxcXFxEZXNrdG9wXFxcXHVyYXJhLWJsb2dcXFxcdW5vLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vQzovVXNlcnMvTnl4L0Rlc2t0b3AvdXJhcmEtYmxvZy91bm8uY29uZmlnLnRzXCI7aW1wb3J0IGV4dHJhY3RvclN2ZWx0ZSBmcm9tICdAdW5vY3NzL2V4dHJhY3Rvci1zdmVsdGUnXHJcbmltcG9ydCB7IGRlZmluZUNvbmZpZywgcHJlc2V0SWNvbnMsIHByZXNldFRhZ2lmeSwgcHJlc2V0VW5vIH0gZnJvbSAndW5vY3NzJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcclxuICBjb250ZW50OiB7IHBpcGVsaW5lOiB7IGluY2x1ZGU6IFsvXFwuc3ZlbHRlJC8sIC9cXC5tZD8kLywgL1xcLnRzJC9dIH0gfSxcclxuICBleHRyYWN0b3JzOiBbZXh0cmFjdG9yU3ZlbHRlXSxcclxuICBwcmVzZXRzOiBbXHJcbiAgICBwcmVzZXRVbm8oKSxcclxuICAgIHByZXNldFRhZ2lmeSh7XHJcbiAgICAgIGV4dHJhUHJvcGVydGllczogKG1hdGNoZWQ6IHN0cmluZykgPT4gKG1hdGNoZWQuc3RhcnRzV2l0aCgnaS0nKSA/IHsgZGlzcGxheTogJ2lubGluZS1ibG9jaycgfSA6IHt9KSxcclxuICAgIH0pLFxyXG4gICAgcHJlc2V0SWNvbnMoeyBzY2FsZTogMS41IH0pLFxyXG4gIF0sXHJcbn0pXHJcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBeVIsU0FBUyxpQkFBaUI7QUFDblQsU0FBUyxnQkFBZ0IsV0FBVztBQUVwQyxPQUFPLGtCQUFrQjtBQUN6QixPQUFPLGlCQUFpQjtBQUN4QixPQUFPLFlBQVk7QUFDbkIsU0FBUyxnQkFBQUEscUJBQW9CO0FBQzdCLFNBQVMsa0JBQWtCOzs7QUNOM0IsT0FBTyxnQkFBZ0I7QUFDdkIsT0FBTyxhQUFhOzs7QUNBYixJQUFNLFFBQXFCO0FBQUEsRUFDaEM7QUFBQSxJQUNFLE1BQU07QUFBQSxJQUNOLE1BQU07QUFBQSxFQUNSO0FBQUEsRUFDQTtBQUFBLElBQ0UsTUFBTTtBQUFBLElBQ04sTUFBTTtBQUFBLEVBQ1I7QUFBQSxFQUNBO0FBQUEsSUFDRSxNQUFNO0FBQUEsSUFDTixNQUFNO0FBQUEsRUFDUjtBQUFBLEVBQ0E7QUFBQSxJQUNFLE1BQU07QUFBQSxJQUNOLE1BQU07QUFBQSxFQUNSO0FBQUEsRUFDQTtBQUFBLElBQ0UsTUFBTTtBQUFBLElBQ04sTUFBTTtBQUFBLEVBQ1I7QUFBQSxFQUNBO0FBQUEsSUFDRSxNQUFNO0FBQUEsSUFDTixNQUFNO0FBQUEsRUFDUjtBQUFBLEVBQ0E7QUFBQSxJQUNFLE1BQU07QUFBQSxJQUNOLE1BQU07QUFBQSxFQUNSO0FBQUEsRUFDQTtBQUFBLElBQ0UsTUFBTTtBQUFBLElBQ04sTUFBTTtBQUFBLEVBQ1I7QUFBQSxFQUNBO0FBQUEsSUFDRSxNQUFNO0FBQUEsSUFDTixNQUFNO0FBQUEsRUFDUjtBQUFBLEVBQ0E7QUFBQSxJQUNFLE1BQU07QUFBQSxJQUNOLE1BQU07QUFBQSxFQUNSO0FBQUEsRUFDQTtBQUFBLElBQ0UsTUFBTTtBQUFBLElBQ04sTUFBTTtBQUFBLEVBQ1I7QUFBQSxFQUNBO0FBQUEsSUFDRSxNQUFNO0FBQUEsSUFDTixNQUFNO0FBQUEsRUFDUjtBQUFBLEVBQ0E7QUFBQSxJQUNFLE1BQU07QUFBQSxJQUNOLE1BQU07QUFBQSxFQUNSO0FBQUEsRUFDQTtBQUFBLElBQ0UsTUFBTTtBQUFBLElBQ04sTUFBTTtBQUFBLEVBQ1I7QUFBQSxFQUNBO0FBQUEsSUFDRSxNQUFNO0FBQUEsSUFDTixNQUFNO0FBQUEsRUFDUjtBQUFBLEVBQ0E7QUFBQSxJQUNFLE1BQU07QUFBQSxJQUNOLE1BQU07QUFBQSxFQUNSO0FBQUEsRUFDQTtBQUFBLElBQ0UsTUFBTTtBQUFBLElBQ04sTUFBTTtBQUFBLEVBQ1I7QUFBQSxFQUNBO0FBQUEsSUFDRSxNQUFNO0FBQUEsSUFDTixNQUFNO0FBQUEsRUFDUjtBQUFBLEVBQ0E7QUFBQSxJQUNFLE1BQU07QUFBQSxJQUNOLE1BQU07QUFBQSxFQUNSO0FBQUEsRUFDQTtBQUFBLElBQ0UsTUFBTTtBQUFBLElBQ04sTUFBTTtBQUFBLEVBQ1I7QUFBQSxFQUNBO0FBQUEsSUFDRSxNQUFNO0FBQUEsSUFDTixNQUFNO0FBQUEsRUFDUjtBQUFBLEVBQ0E7QUFBQSxJQUNFLE1BQU07QUFBQSxJQUNOLE1BQU07QUFBQSxFQUNSO0FBQUEsRUFDQTtBQUFBLElBQ0UsTUFBTTtBQUFBLElBQ04sTUFBTTtBQUFBLEVBQ1I7QUFBQSxFQUNBO0FBQUEsSUFDRSxNQUFNO0FBQUEsSUFDTixNQUFNO0FBQUEsRUFDUjtBQUFBLEVBQ0E7QUFBQSxJQUNFLE1BQU07QUFBQSxJQUNOLE1BQU07QUFBQSxFQUNSO0FBQUEsRUFDQTtBQUFBLElBQ0UsTUFBTTtBQUFBLElBQ04sTUFBTTtBQUFBLEVBQ1I7QUFBQSxFQUNBO0FBQUEsSUFDRSxNQUFNO0FBQUEsSUFDTixNQUFNO0FBQUEsRUFDUjtBQUFBLEVBQ0E7QUFBQSxJQUNFLE1BQU07QUFBQSxJQUNOLE1BQU07QUFBQSxFQUNSO0FBQUEsRUFDQTtBQUFBLElBQ0UsTUFBTTtBQUFBLElBQ04sTUFBTTtBQUFBLEVBQ1I7QUFDRjs7O0FEakhBLElBQU8sMEJBQVE7QUFBQSxFQUNiLFNBQVMsQ0FBQyxtQ0FBbUM7QUFBQSxFQUM3QyxTQUFTLEVBQUUsUUFBUSxNQUFNLElBQUksQ0FBQyxFQUFFLEtBQUssTUFBTSxJQUFJLEVBQUU7QUFBQSxFQUNqRCxTQUFTLENBQUMsWUFBWSxPQUFPO0FBQUEsRUFDN0IsT0FBTztBQUFBLElBQ0wsUUFBUTtBQUFBLE1BQ04sWUFBWTtBQUFBLFFBQ1YsU0FBUztBQUFBLFVBQ1AsS0FBSztBQUFBLFlBQ0gsdUNBQXVDO0FBQUEsY0FDckMsV0FBVztBQUFBLFlBQ2I7QUFBQSxZQUNBLDZDQUE2QztBQUFBLGNBQzNDLGFBQWE7QUFBQSxZQUNmO0FBQUEsWUFDQSwwQ0FBMEM7QUFBQSxjQUN4QyxTQUFTO0FBQUEsWUFDWDtBQUFBLFVBQ0Y7QUFBQSxRQUNGO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQ0Y7OztBRTdCdVIsT0FBTyxxQkFBcUI7QUFDblQsU0FBUyxjQUFjLGFBQWEsY0FBYyxpQkFBaUI7QUFFbkUsSUFBTyxxQkFBUSxhQUFhO0FBQUEsRUFDMUIsU0FBUyxFQUFFLFVBQVUsRUFBRSxTQUFTLENBQUMsYUFBYSxVQUFVLE9BQU8sRUFBRSxFQUFFO0FBQUEsRUFDbkUsWUFBWSxDQUFDLGVBQWU7QUFBQSxFQUM1QixTQUFTO0FBQUEsSUFDUCxVQUFVO0FBQUEsSUFDVixhQUFhO0FBQUEsTUFDWCxpQkFBaUIsQ0FBQyxZQUFxQixRQUFRLFdBQVcsSUFBSSxJQUFJLEVBQUUsU0FBUyxlQUFlLElBQUksQ0FBQztBQUFBLElBQ25HLENBQUM7QUFBQSxJQUNELFlBQVksRUFBRSxPQUFPLElBQUksQ0FBQztBQUFBLEVBQzVCO0FBQ0YsQ0FBQzs7O0FIREQsSUFBTyxzQkFBUUMsY0FBYTtBQUFBLEVBQzFCLEtBQUs7QUFBQSxJQUNILFNBQVM7QUFBQSxNQUNQLFNBQVMsQ0FBQyxZQUFZLHVCQUFjLEdBQUcsYUFBYSxDQUFDO0FBQUEsSUFDdkQ7QUFBQSxFQUNGO0FBQUEsRUFDQSxXQUFXO0FBQUEsRUFDWCxTQUFTO0FBQUEsSUFDUCxPQUFPLGtCQUFTO0FBQUEsSUFDaEIsV0FBVztBQUFBLElBQ1gsVUFBVTtBQUFBLElBQ1YsSUFBSTtBQUFBLE1BQ0YsVUFBVTtBQUFBLE1BQ1YsY0FBYztBQUFBLE1BQ2QsT0FBTztBQUFBLE1BQ1AsU0FBUztBQUFBLFFBQ1AsYUFBYSxDQUFDLFVBQVUsY0FBYztBQUFBLFFBQ3RDLGNBQWMsQ0FBQyxjQUFjLDBDQUEwQztBQUFBLE1BQ3pFO0FBQUEsSUFDRixDQUFDO0FBQUEsRUFDSDtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbImRlZmluZUNvbmZpZyIsICJkZWZpbmVDb25maWciXQp9Cg==
