import { MDXRemoteSerializeResult } from 'next-mdx-remote';

interface Author {
  name: string;
}

export interface FrontMatter {
  title: string;
  excerpt: string;
  date: string;
  author: Author;
}

export interface MarkdownDocument {
  frontMatter: FrontMatter;
  content: string;
}

export interface MarkdownRenderingResult {
  frontMatter: FrontMatter;
  html: MDXRemoteSerializeResult;
}
