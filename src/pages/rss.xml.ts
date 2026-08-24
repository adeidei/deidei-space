import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import type { APIContext } from "astro";

export async function GET(context: APIContext) {
	const notes = (await getCollection("notes", ({ data }) => !data.draft)).sort(
		(a, b) => b.data.publishedAt.valueOf() - a.data.publishedAt.valueOf(),
	);

	return rss({
		title: "Deidei's notes",
		description: "Curiosities, progress, and insights from the middle of making things.",
		site: context.site ?? "https://deidei.space",
		items: notes.map((note) => ({
			title: note.data.title,
			description: note.data.description,
			pubDate: note.data.publishedAt,
			link: `/notes/${note.id}/`,
		})),
	});
}
