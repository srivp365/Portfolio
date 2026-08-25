// @ts-check
import { defineConfig, fontProviders } from "astro/config";
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  integrations: [mdx()],
  fonts: [
    {
      name: "Barlow Condensed",
      provider: fontProviders.fontsource(),
      cssVariable: "--font-barlow",
      weights: [500, 600, 700, 800, 900],
      styles: ["normal"],
    },
    {
      name: "Inter",
      provider: fontProviders.fontsource(),
      cssVariable: "--font-inter",
      weights: [400, 500, 600],
      styles: ["normal"],
    },
    {
      name: "JetBrains Mono",
      provider: fontProviders.fontsource(),
      cssVariable: "--font-jetbrains",
      weights: [400, 500, 600],
      styles: ["normal"],
      fallbacks: ["monospace"], // Good practice for mono fonts
    }
  ]
  });
