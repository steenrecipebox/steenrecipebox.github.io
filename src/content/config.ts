import { defineCollection, z } from 'astro:content';

const recipebox = defineCollection({
  type: 'content',
  schema: z.object({
    title:       z.string(),
    description: z.string().optional(),
    tags:        z.array(z.string()).default([]),
    servings:    z.string().optional(),   // e.g. "4–6 servings"
    time:        z.string().optional(),   // e.g. "45 min"
    yield:       z.string().optional(),   // e.g. "1 loaf", "24 cookies"
    source:      z.string().optional(),   // attribution / cookbook name
    favorite:    z.boolean().default(false),
  }),
});

export const collections = { recipebox };
