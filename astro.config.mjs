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
                                {label: 'Installation', slug: 'cli/commands/installation'},
                                {label: 'API Authentication', slug: 'cli/commands/api'},
                                {label: 'Minecraft Auth', slug: 'cli/commands/minecraft-auth'},
                                {label: 'Launcher', slug: 'cli/commands/launcher'},
                                {label: 'Profiles', slug: 'cli/commands/profile'},
                            ]
                        },
                        {label: 'Websocket', slug: 'cli/websocket'},
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
