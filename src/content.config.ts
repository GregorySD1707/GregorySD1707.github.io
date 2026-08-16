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

const experience = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/experience' }),
  schema: ({ image }) => z.object({
    company: z.string(),
    role: z.string(),
    duration: z.string(),
    location: z.string().optional(),
    title: z.string().optional(),
    description: z.string().optional(),
    stack: z.array(z.string()).optional(),
    github: z.url().optional(),
    demo: z.url().optional(),
    image: image().optional(),
  }),
});

export const collections = { projects, experience };