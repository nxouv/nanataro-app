import { defineCollection, z } from "astro:content";

const projects = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.enum([
      "chrome-extension",
      "web-service",
      "desktop-app",
      "mobile-app",
      "website",
      "other",
    ]),
    date: z.string(),
    url: z.string().optional(),
    featured: z.boolean().default(false),
  }),
});

const writing = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    date: z.string(),
    category: z.enum(["product", "thought"]).optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = {
  projects,
  writing,
};
