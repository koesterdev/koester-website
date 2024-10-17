import { parse } from 'node:path';
import { readFile } from 'node:fs/promises';
import { z } from 'zod';
import { globby } from 'globby';
import { MDXRemote, compileMDX } from 'next-mdx-remote/rsc';
import { notFound } from 'next/navigation';

const BlogPost = async ({ params: { slug } }: RouteProps<'slug'>) => {
  const content = await getPostContent(slug);
  if (!content) {
    notFound();
  }

  return (
    <div className="min-h-screen">
      <MDXRemote source={content} options={{ parseFrontmatter: true }} />
    </div>
  );
};

const getPostContent = async (post: string) => {
  try {
    const details = await getPostDetails(post);
    if (!details?.metadata.published) {
      return undefined;
    }
    return details.rawContent;
  } catch {
    return undefined;
  }
};

const getPostDetails = async (post: string) => {
  try {
    const content = await readFile(`content/${post}.mdx`);
    const { frontmatter, content: compiledContent } = await compileMDX<unknown>(
      {
        source: content,
        options: { parseFrontmatter: true },
      },
    );
    return {
      metadata: FrontmatterSchema.parse(frontmatter),
      content: compiledContent,
      rawContent: content,
    };
  } catch {
    return undefined;
  }
};

const FrontmatterSchema = z.object({
  title: z.string(),
  published: z.boolean(),
});

export const generateStaticParams = async () => {
  const paths = await globby('content/*.mdx');
  return paths.map((path) => ({ slug: parse(path).name }));
};

export const generateMetadata = async ({
  params: { slug },
}: RouteProps<'slug'>) => {
  const post = await getPostDetails(slug);
  if (!post) {
    return undefined;
  }
  return { title: `${post.metadata.title} | Koester` };
};

interface RouteProps<T extends string> {
  params: { [slug in T]: string };
  searchParams?: Record<string, string | string[] | undefined>;
}

export default BlogPost;
