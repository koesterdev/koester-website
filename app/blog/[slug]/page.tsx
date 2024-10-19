import { parse } from 'node:path';
import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { globby } from 'globby';
import { getPostDetails } from '../post';

const BlogPost = async ({ params: { slug } }: RouteProps<'slug'>) => {
  const post = await getPostDetails(`content/${slug}.mdx`);
  if (!post?.metadata.published) {
    notFound();
  }

  return (
    <div className="min-h-screen">
      <div className="mt-48 text-center">
        <h1 className="text-3xl font-semibold">{post.metadata.title}</h1>
        <p className="mt-4 text-2xl text-gray-400">
          Posted by{' '}
          <span className="text-gray-100">{post.metadata.author.fullName}</span>{' '}
          on{' '}
          <span className="text-gray-100">
            {post.metadata.date.toLocaleDateString('en-us', {
              month: 'long',
              day: 'numeric',
              year: 'numeric',
            })}
          </span>
        </p>
      </div>
      <MDXRemote
        source={post.rawContent}
        options={{ parseFrontmatter: true }}
        components={{
          h1: ({ children }) => (
            <h2 className="mb-10 mt-20 text-2xl font-semibold text-blue-300">
              {children}
            </h2>
          ),
          p: ({ children }) => <p className="text-lg">{children}</p>,
        }}
      />
    </div>
  );
};

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
