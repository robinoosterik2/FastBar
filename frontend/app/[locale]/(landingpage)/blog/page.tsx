// app/[locale]/blog/page.tsx

import Link from "next/link";
import { getAllPosts } from "@/lib/markdown";

export default async function Blog({ params }: { params: { locale: string } }) {
  const posts = getAllPosts(params.locale);

  return (
    <div className="max-w-2xl mx-auto py-12">
      <h1 className="text-3xl font-bold mb-6">Blog</h1>
      <ul className="space-y-4">
        {posts.map((post) => (
          <li key={post.slug}>
            <Link
              href={`/${params.locale}/blog/${post.slug}`}
              className="text-blue-600 hover:underline"
            >
              {post.title}
            </Link>
            <p className="text-gray-500 text-sm">{post.date}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
