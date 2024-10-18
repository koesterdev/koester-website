import Link from 'next/link';
import { globby } from 'globby';
import { PostDetails, PostMetadata, getPostDetails } from './post';

const BlogIndex = async () => {
  const paths = await globby('content/*.mdx');
  const posts = await Promise.all(paths.map(getPostDetails));
  return (
    <div className="min-h-screen max-w-screen-sm">
      <h1 className="mt-80 text-lg font-semibold text-blue-300">Articles</h1>
      <ul>
        {posts
          .filter(
            (post): post is PostDetails => post?.metadata.published === true,
          )
          .map((post) => (
            <PostInfo
              key={post.metadata.title}
              post={post.metadata}
              url={post.url}
            />
          ))}
      </ul>
    </div>
  );
};

const PostInfo = ({
  post: { author, title, date, description },
  url,
}: Props) => {
  return (
    <li className="my-16">
      <Link
        data-author={author.id}
        className="text-xl font-semibold hover:underline data-[author=mark]:decoration-blue-300 data-[author=nick]:decoration-green-300"
        href={url}
      >
        {title}
      </Link>
      <p className="text-lg text-gray-400">
        {date.toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        })}
        {' by '} <span>{author.fullName}</span>
      </p>
      <p className="mt-4">{description}</p>
    </li>
  );
};

interface Props {
  post: PostMetadata;
  url: string;
}

export default BlogIndex;
