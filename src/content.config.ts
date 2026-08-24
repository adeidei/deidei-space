import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const notes = defineCollection({
	loader: glob({ pattern: "**/*.md", base: "./src/data/notes" }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		kind: z.enum(["curiosity", "progress", "insight"]),
		publishedAt: z.coerce.date(),
		updatedAt: z.coerce.date().optional(),
		draft: z.boolean().default(false),
	}),
});

export const collections = { notes };
