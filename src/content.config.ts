import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: ({ image }) => z.object({
    title: z.string(),
    stack: z.array(z.string()),
    github: z.url().optional(),
    demo: z.url().optional(),
    image: image().optional(), // Utilizamos el helper de imagen de Astro
    description: z.string().optional(),
    role: z.string().optional(),
    location: z.string().optional(),
    duration: z.string().optional(),
  }),
});

export const collections = { projects };