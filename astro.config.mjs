import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
    site: "https://jdis.ca",

    integrations: [sitemap()],

    vite: {
        plugins: [tailwindcss()],
    },
});
