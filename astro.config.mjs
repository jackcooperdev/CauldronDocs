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
            social: {
                github: 'https://github.com/jackcooperdev',
            },
            sidebar: [
                {
                    label: 'Getting Started',
                    items: [
                        {label: 'About', slug: 'index'},
                    ],
                },
                {
                    label: 'Cauldron Agent',
                    items: [
                        {label: 'Overview', slug: 'agent/introduction'},
                    ],
                },
                {
                    label: 'Cauldron Engine',
                    items: [
                        {label: 'Overview', slug: 'engine/introduction'},
                        {
                            label: 'Controllers',
                            autogenerate: {directory: 'engine/controllers'},
                        },
                        {
                            label: 'Tools',
                            autogenerate: {directory: 'engine/tools'},
                        },
                    ],
                },
                {
                    label: 'Cauldron Authentication',
                    autogenerate: {directory: 'authentication/'}
                },
                {
                    label: 'packwiz_js',
                    slug: 'packwizjs',
                },
            ],
        }),
    ],
});
