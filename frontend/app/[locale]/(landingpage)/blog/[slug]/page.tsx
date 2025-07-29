// app/[locale]/blog/[slug]/page.tsx

import { getPostBySlug, getAllPosts } from "@/lib/markdown";
import { Divider } from "@heroui/react";
import { remark } from "remark";
import html from "remark-html";

type Props = {
  params: { locale: string; slug: string };
};

export async function generateStaticParams() {
  const locales = ["en", "nl"];
  const params = [];

  for (const locale of locales) {
    const posts = getAllPosts(locale);
    for (const post of posts) {
      params.push({ locale, slug: post.slug });
    }
  }

  return params;
}

export default async function BlogPost({ params }: Props) {
  const { locale, slug } = params;
  const post = await getPostBySlug(slug, locale);

  const processed = await remark().use(html).process(post.content);
  const contentHtml = processed.toString();

  return (
    <article className="max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      <p className="text-sm text-gray-500 mb-2">{post.date}</p>
      <Divider />
      <div
        className="prose dark:prose-invert max-w-none mx-4 my-8"
        dangerouslySetInnerHTML={{ __html: contentHtml }}
      />
    </article>
  );
}
