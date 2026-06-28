import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const guides = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/guides' }),
  schema: z.object({
    title: z.string(),
    shortName: z.string(),
    symbol: z.string(), // the character itself, e.g. "°"
    codepoint: z.string(),
    altCode: z.string().optional(),
    macShortcut: z.string().optional(),
    winShortcut: z.string().optional(),
    description: z.string(),
    order: z.number().default(99),
  }),
});

export const collections = { guides };
