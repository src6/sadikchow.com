import { getCollection, type CollectionEntry } from "astro:content";
import { readdir } from "node:fs/promises";

const notesDir = new URL("../content/notes/", import.meta.url);

async function hasNotesContent(): Promise<boolean> {
  const entries = await readdir(notesDir, { withFileTypes: true }).catch(() => []);
  return entries.some((entry) => entry.isFile() && /\.(md|mdx)$/i.test(entry.name));
}

export async function getPublishedNotes() {
  if (!(await hasNotesContent())) return [];

  const notes: CollectionEntry<"notes">[] = await getCollection("notes");
  return notes
    .filter((post) => !post.data.draft)
    .sort((a, b) => b.data.pubDate.getTime() - a.data.pubDate.getTime());
}
