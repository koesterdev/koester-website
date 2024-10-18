import { readFile } from 'node:fs/promises';
import { parse } from 'node:path';
import { compileMDX } from 'next-mdx-remote/rsc';
import { z } from 'zod';
import { ReactElement } from 'react';

export const getPostDetails = async (
  post: string,
): Promise<PostDetails | undefined> => {
  try {
    const content = await readFile(post);
    const { frontmatter, content: compiledContent } = await compileMDX<unknown>(
      {
        source: content,
        options: { parseFrontmatter: true },
      },
    );
    return {
      metadata: PostMetadataSchema.parse(frontmatter),
      compiledContent,
      rawContent: content,
      url: `/blog/${parse(post).name}`,
    };
  } catch {
    return undefined;
  }
};

const PostMetadataSchema = z.object({
  title: z.string(),
  description: z.string(),
  date: z.coerce.date(),
  author: z
    .enum(['mark', 'nick'])
    .transform((author): AuthorDetails => authors[author]),
  published: z.boolean(),
});

export interface PostDetails {
  metadata: PostMetadata;
  compiledContent: ReactElement;
  rawContent: Buffer;
  url: string;
}
export type PostMetadata = z.infer<typeof PostMetadataSchema>;

interface AuthorDetails {
  id: 'mark' | 'nick';
  fullName: string;
}

export const authors = {
  mark: {
    id: 'mark',
    fullName: 'Mark Koester',
  } satisfies AuthorDetails,
  nick: {
    id: 'nick',
    fullName: 'Nick Koester',
  } satisfies AuthorDetails,
};
