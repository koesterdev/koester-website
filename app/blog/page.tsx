import { readFile } from 'node:fs/promises';
import { parse } from 'node:path';
import { compileMDX } from 'next-mdx-remote/rsc';
import { globby } from 'globby';
import { z } from 'zod';
import Link from 'next/link';

const BlogIndex = async () => {
  const paths = await globby('content/*.mdx');
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
  const { frontmatter } = await compileMDX<unknown>({
    source: content,
    options: { parseFrontmatter: true },
  });
  const slug = parse(post).name;
  return [slug, PostMetadata.parse(frontmatter)] as const;
};

const PostMetadata = z.object({
  title: z.string(),
  description: z.string(),
  published: z.string().date(),
  author: z.enum(['mark', 'nick']),
});

interface Props {
  post: z.infer<typeof PostMetadata>;
  slug: string;
}

export default BlogIndex;
