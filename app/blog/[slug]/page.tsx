import { parse } from 'node:path';
import { readFile } from 'node:fs/promises';
import { globby } from 'globby';
import { MDXRemote } from 'next-mdx-remote/rsc';

const BlogPost = async ({ params: { slug } }: RouteProps<'slug'>) => {
  const content = await readFile(`content/${slug}.mdx`);
  return <MDXRemote source={content} options={{ parseFrontmatter: true }} />;
};

export const generateStaticParams = async () => {
  const paths = await globby('content/*.mdx');
  return paths.map((path) => ({ slug: parse(path).name }));
};

interface RouteProps<T extends string> {
  params: { [slug in T]: string };
  searchParams?: Record<string, string | string[] | undefined>;
}

export default BlogPost;
