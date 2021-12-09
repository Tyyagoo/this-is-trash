import styles from './articles.module.css';
import fs from 'fs';
import { join } from 'path';
import { GetStaticPaths, GetStaticProps } from 'next';
import { ParsedUrlQuery } from 'querystring';
import {
  getParsedFileContentBySlug,
  renderMarkdown,
  MarkdownRenderingResult,
} from '@personal/markdown';
import { mdxElements } from '@personal/shared/mdx-elements';
import { MDXRemote } from 'next-mdx-remote';

const ARTICLES_FOLDER = join(process.cwd(), '_articles');
export interface ArticleProps extends ParsedUrlQuery {
  slug: string;
}

export const getStaticPaths: GetStaticPaths<ArticleProps> = async () => {
  const paths = fs
    .readdirSync(ARTICLES_FOLDER)
    .map((path) => path.replace(/\.mdx?$/, ''))
    .map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<MarkdownRenderingResult> = async ({
  params,
}: {
  params: ArticleProps;
}) => {
  const markdown = getParsedFileContentBySlug(params.slug, ARTICLES_FOLDER);
  const html = await renderMarkdown(markdown.content);
  return {
    props: {
      frontMatter: markdown.frontMatter,
      html,
    },
  };
};

export function Article({ frontMatter, html }: MarkdownRenderingResult) {
  return (
    <div className="md:container md:mx-auto">
      <article>
        <h1 className="text-3xl font-bold hover:text-gray-700 pb-4">
          {frontMatter.title}
        </h1>
        <div>by {frontMatter.author.name}</div>
        <hr />

        <main>
          <MDXRemote {...html} components={mdxElements} />
        </main>
      </article>
    </div>
  );
}

export default Article;
