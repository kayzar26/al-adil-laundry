import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const contentDirectory = path.join(process.cwd(), 'content/articles');

export interface ArticleFrontmatter {
  title: string;
  description: string;
  date: string;
  author: string;
  category: string;
  image: string;
  [key: string]: any;
}

export interface ArticleData {
  slug: string;
  frontmatter: ArticleFrontmatter;
  content: string;
}

export function getArticleSlugs(): string[] {
  try {
    return fs.readdirSync(contentDirectory);
  } catch (error) {
    console.error('Could not read content directory', error);
    return [];
  }
}

export function getArticleBySlug(slug: string): ArticleData | null {
  try {
    // Remove .mdx if present to get raw slug
    const realSlug = slug.replace(/\.mdx$/, '');
    const fullPath = path.join(contentDirectory, `${realSlug}.mdx`);
    
    if (!fs.existsSync(fullPath)) return null;

    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
      slug: realSlug,
      frontmatter: data as ArticleFrontmatter,
      content,
    };
  } catch (error) {
    console.error(`Error reading article with slug ${slug}:`, error);
    return null;
  }
}

export function getAllArticles(): ArticleData[] {
  const slugs = getArticleSlugs();
  const articles = slugs
    .map((slug) => getArticleBySlug(slug))
    .filter((article): article is ArticleData => article !== null)
    // sort articles by date in descending order
    .sort((a, b) => (new Date(a.frontmatter.date) > new Date(b.frontmatter.date) ? -1 : 1));
  
  return articles;
}
