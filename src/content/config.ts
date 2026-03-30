import { defineCollection, z } from "astro:content";

const notes = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    draft: z.boolean().default(false)
  })
});

const projects = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    tech: z.array(z.string()),
    date: z.coerce.date(),
    featured: z.boolean().default(false),
    github: z.string().url().optional(),
    demo: z.string().url().optional()
  })
});

export const collections = { notes, projects };
