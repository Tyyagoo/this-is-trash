import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';

import { MarkdownDocument } from './types';

export const getParsedFileContentBySlug = (slug: string, rootDir: string) => {
  const mdPath = join(rootDir, `${slug}.mdx`);
  const file = fs.readFileSync(mdPath);

  const { data, content } = matter(file);

  return {
    frontMatter: data,
    content,
  } as MarkdownDocument;
};

export const renderMarkdown = (content: string) => {
  return serialize(content || '');
};
