// @ts-check
import {defineConfig} from 'astro/config';
import starlight from '@astrojs/starlight';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
    site: 'https://docs.cauldronmc.com',
    integrations: [
        sitemap(),
        starlight({
            title: 'Cauldron Documentation',
            logo: {
                src: './src/assets/logo.png',
            },
            favicon: '/favicon.png',
            head: [
                {tag: 'link', attrs: {rel: 'apple-touch-icon', href: '/apple-touch-icon.png'}},
            ],
            editLink: {
                baseUrl: 'https://github.com/jackcooperdev/CauldronDocs/edit/master/',
            },
            expressiveCode: {
                styleOverrides: {
                    borderRadius: '0.5rem',
                    codeFontSize: '0.85rem',
                },
            },
            social: [
                { icon: 'github', label: 'GitHub', href: 'https://github.com/jackcooperdev' }
            ],
            customCss: [
                // Replace with the actual path to your custom CSS file
                // Make sure the path is relative to your project root (e.g., './src/styles/starlight-custom.css')
                './src/styles/starlight-custom.css',
            ],

            sidebar: [
                {
                    label: 'Getting Started',
                    items: [
                        {label: 'About', slug: 'index'},
                    ],
                },
                {
                    label: 'Cauldron CLI',
                    items: [
                        {label: 'Overview', slug: 'cli/introduction'},
                        {
                            label: 'Commands',
                            items: [
                                {label: 'Launcher', slug: 'cli/commands/launcher'},
                                {label: 'Modpacks', slug: 'cli/commands/modpacks'},
                                {label: 'Installation', slug: 'cli/commands/installation'},
                            ]
                        },
                    ],
                },
                {
                    label: 'Cauldron Engine',
                    items: [
                        {label: 'Overview', slug: 'engine/introduction'},
                        {
                            label: 'Controllers',
                            items: [{autogenerate: {directory: 'engine/controllers'}}],
                        },
                        {
                            label: 'Tools',
                            items: [{autogenerate: {directory: 'engine/tools'}}],
                        },
                    ],
                },
                {
                    label: 'Cauldron Authentication',
                    items: [{autogenerate: {directory: 'authentication/'}}]
                },
                {
                    label: 'Cauldron Mod Manager',
                    items: [
                        {label: 'Overview', slug: 'modmanager/introduction'},
                        {label: 'Pack', slug: 'modmanager/pack'},
                        {label: 'Bootstrap', slug: 'modmanager/bootstrap'},
                    ],
                },
            ],
        }),
    ],
});
