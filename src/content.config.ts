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
    website: z.url().optional(),
  }),
});

// Add the education collection definition[cite: 1]
const education = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/education' }),
  schema: ({image}) => z.object({
    institution: z.string(),
    degree: z.string(),
    duration: z.string(),
    location: z.string().optional(),
    image: image().optional(),
  }),
});

const certificates = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/certificates' }),
  schema: ({ image }) => z.object({
    title: z.string(),
    issuer: z.string(),
    issueDate: z.string(),
    expirationDate: z.string().optional(),
    image: image(),
    pdf: z.string(),
  }),
});

// src/content.config.ts
const events = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/events' }),
  schema: ({ image }) => z.object({
    title: z.string(),
    organizer: z.string(),
    date: z.string(),
    category: z.array(z.string()).optional(), // "Hackathon" | "Contest" | "Conference" | ...
    image: z.union([image(), z.array(image())]).optional(),
    location: z.string().optional(),
    description: z.string().optional(),
    github: z.url().optional(),
    certificateUrl: z.string().optional(),
    galleryUrl: z.string().optional(),
    size: z.enum(['normal', 'wide', 'tall', 'large', 'single']).optional(), // controls the bento span
  }),
});

export const collections = { projects, experience, education, certificates, events };