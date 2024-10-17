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
    <div className="min-h-screen max-w-screen-sm">
      <h1 className="mt-80 text-lg font-semibold text-blue-300">Articles</h1>
      <ul>
        {posts
          .filter(([, { published }]) => published)
          .map(([slug, post]) => (
            <PostInfo key={post.title} post={post} slug={slug} />
          ))}
      </ul>
    </div>
  );
};

const PostInfo = ({
  post: { title, author, description, date },
  slug,
}: Props) => {
  return (
    <li className="my-16">
      <Link
        data-author={author}
        className="text-xl font-semibold hover:underline data-[author=mark]:decoration-blue-300 data-[author=nick]:decoration-green-300"
        href={`/blog/${slug}`}
      >
        {title}
      </Link>
      <p className="text-lg text-gray-400">
        {date.toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        })}
        {' by '} <span>{author === 'mark' ? 'Mark' : 'Nick'}</span>
      </p>
      <p className="mt-4">{description}</p>
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
  date: z.coerce.date(),
  author: z.enum(['mark', 'nick']),
  published: z.boolean(),
});

interface Props {
  post: z.infer<typeof PostMetadata>;
  slug: string;
}

export default BlogIndex;
