// lib/markdown.ts

import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDir = path.join(process.cwd(), "data", "posts");

export function getAllPosts(
  locale: string
): { slug: string; title: string; date: string }[] {
  const files = fs
    .readdirSync(postsDir)
    .filter((f) => f.endsWith(`.${locale}.md`));

  return files
    .map((filename) => {
      const slug = filename.replace(`.${locale}.md`, "");
      const fullPath = path.join(postsDir, filename);
      const fileContent = fs.readFileSync(fullPath, "utf8");
      const { data } = matter(fileContent);
      return { slug: slug, title: data.title, date: data.date };
    })
    .sort((a, b) => {
      // Sort by date in descending order (newest first)
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    });
}

export async function getPostBySlug(
  slug: string,
  locale: string
): Promise<{ slug: string; title: string; date: string; content: string }> {
  const filePath = path.join(postsDir, `${slug}.${locale}.md`);
  const fileContent = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContent);
  return { slug: slug, title: data.title, date: data.date, content };
}
