// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	site: 'https://example.com',
	integrations: [
		tailwind({
			config: {
				applyBaseStyles: false,
			},
		}),
		mdx({
			extendMarkdownConfig(config) {
				const remarkPlugins = [...(config.remarkPlugins ?? []), remarkMath];
				const rehypePlugins = [...(config.rehypePlugins ?? []), rehypeKatex];

				return {
					...config,
					remarkPlugins,
					rehypePlugins,
				};
			},
		}),
		sitemap(),
	],
	markdown: {
		remarkPlugins: [remarkMath],
		rehypePlugins: [rehypeKatex],
	},
});

