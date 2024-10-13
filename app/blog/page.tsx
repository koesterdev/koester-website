import { readFile } from 'node:fs/promises';
import { basename, dirname } from 'node:path';
import { globby } from 'globby';
import { z } from 'zod';
import matter from 'gray-matter';
import Link from 'next/link';

const BlogIndex = async () => {
  const paths = await globby('**/page.mdx');
  const posts = await Promise.all(paths.map(getPostMetadata));
  return (
    <div>
      <h1>All posts</h1>
      <ul>
        {posts.map(([slug, post]) => (
          <PostInfo key={post.title} post={post} slug={slug} />
        ))}
      </ul>
    </div>
  );
};

const PostInfo = ({
  post: { title, author, description, published },
  slug,
}: Props) => {
  return (
    <li>
      <Link href={`/blog/${slug}`}>{title}</Link>
      {description}
      {author}
      {published.toString()}
    </li>
  );
};

const getPostMetadata = async (post: string) => {
  const content = await readFile(post);
  const metadata = matter(content);
  const slug = basename(dirname(post));
  return [slug, PostMetadata.parse(metadata.data)] as const;
};

const PostMetadata = z.object({
  title: z.string(),
  description: z.string(),
  published: z.date(),
  author: z.enum(['mark', 'nick']),
});

interface Props {
  post: z.infer<typeof PostMetadata>;
  slug: string;
}

export default BlogIndex;
