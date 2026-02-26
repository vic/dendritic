// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import starlight from '@astrojs/starlight';

import mermaid from 'astro-mermaid';
import catppuccin from "@catppuccin/starlight";

// https://astro.build/config
export default defineConfig({
	experimental: {
		fonts: [
			{
				provider: fontProviders.google(),
				name: "Victor Mono",
				cssVariable: "--sl-font",
			},
		],
	},
	integrations: [
		mermaid({
			theme: 'forest',
			autoTheme: true
		}),
		starlight({
			title: '@vic\'s Dendritic Libs',
			sidebar: [
				{
					label: 'Ecosystem',
					items: [
						{ label: 'Overview', slug: 'ecosystem/overview' },
						{ label: 'Why Dendritic?', slug: 'motivation' },
						{ label: 'flake-aspects', slug: 'ecosystem/flake-aspects' },
						{ label: 'den', slug: 'ecosystem/den' },
						{ label: 'flake-file', slug: 'ecosystem/flake-file' },
						{ label: 'import-tree', slug: 'ecosystem/import-tree' },
						{ label: 'dendrix', slug: 'ecosystem/dendrix' },
						{ label: 'checkmate', slug: 'ecosystem/checkmate' },
						{ label: 'with-inputs', slug: 'ecosystem/with-inputs' },
						{ label: 'denful', slug: 'ecosystem/denful' },
						{ label: 'dendritic-unflake', slug: 'ecosystem/dendritic-unflake' },
					],
				},
				{
					label: 'Support',
					items: [
						{ label: 'Sponsor', slug: 'sponsor' },
						{ label: 'Hire Victor', slug: 'hire' },
						{ label: 'Nix Consultancy', slug: 'consultancy' },
					],
				},
			],
			components: {
				Sidebar: './src/components/Sidebar.astro',
				Footer: './src/components/Footer.astro',
				SocialIcons: './src/components/SocialIcons.astro',
				PageSidebar: './src/components/PageSidebar.astro',
			},
			plugins: [
				catppuccin({
					dark: { flavor: "macchiato", accent: "mauve" },
					light: { flavor: "latte", accent: "mauve" },
				}),
			],
			customCss: [
				'./src/styles/custom.css'
			],
		}),
	],
});
