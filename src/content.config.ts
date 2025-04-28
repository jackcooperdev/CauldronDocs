// src/content/config.ts
import {defineCollection, z} from 'astro:content';
import {docsSchema} from '@astrojs/starlight/schema';

export const collections = {
    docs: defineCollection({
        schema: docsSchema({
            extend: z.object({
                banner: z.object({content: z.string()}).default({
                    content:
                        '🚧 This project and documentation is under construction and may be inaccurate. Packages and APIS may not be ready or available. 🚧',
                }),
            }),
        }),
    }),
};