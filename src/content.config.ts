import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
// One markdown file per season in src/content/robots. Students add a season by copying a file.
const robots = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/robots' }),
  schema: z.object({
    year: z.number(),
    game: z.string(),
    name: z.string().default('[שם הרובוט]'),
    photo: z.string().optional(),
    mechanisms: z.array(z.string()).default([]),
    results: z.array(z.string()).default([]),
    code: z.string().url().optional(),
  }),
});
export const collections = { robots };
