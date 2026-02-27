import { Metadata } from 'next';
import Link from 'next/link';
import { format } from 'date-fns';
import { getAllArticles } from '@/lib/mdx';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Breadcrumbs } from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Blog | Al Adil Laundry',
  description: 'Read the latest articles on garment care, dry cleaning tips, and laundry best practices.',
};

export default function BlogIndex() {
  const articles = getAllArticles();

  const breadcrumbs = [
    { label: 'Blog', href: '/blog' }
  ];

  return (
    <>
      <Header />
      <main className="flex-1 bg-gray-50 min-h-screen py-16">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <Breadcrumbs items={breadcrumbs} />
          
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold font-heading text-gray-900 mb-4">
              Laundry & Garment Care Blog
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl">
              Expert advice, tips, and insights to help you maintain the quality and longevity of your wardrobe and home textiles.
            </p>
          </div>

          {articles.length > 0 ? (
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
                        {format(new Date(article.frontmatter.date), 'MMMM dd, yyyy')}
                      </span>
                    </div>
                    <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors line-clamp-2">
                      {article.frontmatter.title}
                    </h2>
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
          ) : (
            <div className="text-center py-20 bg-white rounded-2xl border border-gray-100">
              <h3 className="text-xl font-medium text-gray-900 mb-2">No articles found</h3>
              <p className="text-gray-500">Check back later for new content!</p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
