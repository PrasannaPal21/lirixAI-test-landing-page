import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";


export default defineConfig({
  site: "https://astroship.web3templates.com",
  integrations: [tailwind(), mdx(), sitemap(), icon(), {
    name: 'rehype-plugins',
    hooks: {
      'astro:config:setup': async ({ updateConfig }) => {
        const autolink = await import('rehype-autolink-headings');
        const slug = await import('rehype-slug');
        
        updateConfig({
          markdown: {
            rehypePlugins: [
              slug.default,
              [autolink.default, { behavior: 'wrap' }]
            ]
          }
        });
      }
    }
  }],
  devToolbar: {
    enabled: false
  }
});
