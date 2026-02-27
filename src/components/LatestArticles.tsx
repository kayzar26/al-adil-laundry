import React from 'react';
import Link from 'next/link';
import { format } from 'date-fns';
import { ArrowRight } from 'lucide-react';
import { ArticleData } from '@/lib/mdx';

export function LatestArticles({ articles }: { articles: ArticleData[] }) {
  if (!articles || articles.length === 0) return null;

  return (
    <section className="py-24 bg-gray-50 border-t border-gray-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-gray-900 font-heading">
              Latest from the Blog
            </h2>
            <p className="max-w-[600px] text-gray-600 md:text-lg">
              Expert advice, tips, and insights to help you maintain the quality and longevity of your wardrobe.
            </p>
          </div>
          <Link 
            href="/blog" 
            className="group flex items-center text-primary font-semibold hover:text-primary/80 transition-colors"
          >
            View All Articles
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <Link 
              key={article.slug} 
              href={`/blog/${article.slug}`}
              className="group flex flex-col bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all border border-gray-100 h-full"
            >
              <div className="aspect-[16/9] w-full relative overflow-hidden bg-gray-100">
                {article.frontmatter.image && (
                  <img 
                    src={article.frontmatter.image} 
                    alt={article.frontmatter.title}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                  />
                )}
              </div>
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-primary bg-primary/10 px-2 py-1 rounded">
                    {article.frontmatter.category}
                  </span>
                  <span className="text-sm text-gray-500">
                    {format(new Date(article.frontmatter.date), 'MM MMMM, yyyy')}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors line-clamp-2">
                  {article.frontmatter.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3 flex-1">
                  {article.frontmatter.description}
                </p>
                <div className="mt-auto pt-4 border-t border-gray-100 text-sm font-medium text-primary flex items-center">
                  Read Article &rarr;
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
