import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { format } from 'date-fns';
import remarkGfm from 'remark-gfm';
import rehypeSlug from 'rehype-slug';
import { getArticleBySlug, getAllArticles } from '@/lib/mdx';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { StructuredData, generateArticleSchema, generateBreadcrumbSchema } from '@/components/StructuredData';
import { Metadata } from 'next';

type Props = {
  params: Promise<{ slug: string }>;
};

// Generate static params for SSG
export async function generateStaticParams() {
  const articles = getAllArticles();
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

// Generate dynamic metadata for SEO
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const article = getArticleBySlug(resolvedParams.slug);

  if (!article) {
    return {
      title: 'Article Not Found | Al Adil Laundry',
    };
  }

  const { title, description, image, author } = article.frontmatter;

  return {
    title: `${title} | Al Adil Laundry`,
    description,
    authors: [{ name: author }],
    openGraph: {
      title,
      description,
      type: 'article',
      url: `https://aladillaundry.com/blog/${resolvedParams.slug}`,
      images: image ? [{ url: image }] : [],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: image ? [image] : [],
    },
    alternates: {
      canonical: `https://aladillaundry.com/blog/${resolvedParams.slug}`,
    }
  };
}

// Custom components to pass to MDX compiler for styled rendering
const components = {
  h2: (props: any) => <h2 className="text-3xl font-bold font-heading mt-12 mb-6 text-gray-900 border-b border-gray-200 pb-2" {...props} />,
  h3: (props: any) => <h3 className="text-2xl font-bold font-heading mt-8 mb-4 text-gray-800" {...props} />,
  p: (props: any) => <p className="text-lg text-gray-700 leading-relaxed mb-6" {...props} />,
  ul: (props: any) => <ul className="list-disc list-outside ml-6 mb-6 space-y-2 text-lg text-gray-700 marker:text-primary" {...props} />,
  ol: (props: any) => <ol className="list-decimal list-outside ml-6 mb-6 space-y-2 text-lg text-gray-700 marker:text-primary" {...props} />,
  li: (props: any) => <li className="pl-2" {...props} />,
  blockquote: (props: any) => (
    <blockquote className="border-l-4 border-primary bg-primary/5 p-6 rounded-r-lg my-8 italic text-gray-800 text-lg shadow-sm" {...props} />
  ),
  a: (props: any) => <a className="text-primary hover:underline font-medium underline-offset-4" {...props} />,
  strong: (props: any) => <strong className="font-bold text-gray-900" {...props} />,
};

export default async function ArticlePage({ params }: Props) {
  const resolvedParams = await params;
  const article = getArticleBySlug(resolvedParams.slug);

  if (!article) {
    notFound();
  }

  const { title, description, date, author, category, image } = article.frontmatter;
  const currentUrl = `https://aladillaundry.com/blog/${resolvedParams.slug}`;

  const breadcrumbs = [
    { label: 'Blog', href: '/blog' },
    { label: title, href: `/blog/${resolvedParams.slug}` }
  ];

  return (
    <>
      <StructuredData 
        type="Article" 
        data={generateArticleSchema(title, description, image || '/hero.jpg', date, author, currentUrl)} 
      />
      <StructuredData 
        type="BreadcrumbList" 
        data={generateBreadcrumbSchema([{label: 'Home', url: 'https://aladillaundry.com'}, {label: 'Blog', url: 'https://aladillaundry.com/blog'}, {label: title, url: currentUrl}])} 
      />

      <Header />
      
      <main className="flex-1 bg-white min-h-screen">
        {/* Article Header (Hero) */}
        <header className="bg-gray-50 border-b border-gray-200 pt-16 pb-20">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <Breadcrumbs items={breadcrumbs} />
            <div className="mt-8 mb-6 inline-flex uppercase tracking-widest text-xs font-bold text-primary bg-primary/10 px-3 py-1.5 rounded-md">
              {category}
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold font-heading text-gray-900 leading-tight mb-6">
              {title}
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8 leading-relaxed">
              {description}
            </p>
            <div className="flex items-center justify-center gap-4 text-sm font-medium text-gray-500">
              <span className="flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold">
                  {author.charAt(0)}
                </span>
                {author}
              </span>
              <span className="text-gray-300">&bull;</span>
              <time dateTime={date}>
                {format(new Date(date), 'MMMM dd, yyyy')}
              </time>
            </div>
          </div>
        </header>

        {/* Article Content */}
        <article className="container mx-auto px-4 py-16 max-w-3xl">
          {image && (
            <div className="w-full aspect-[21/9] relative -mt-32 mb-16 rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-gray-100">
              <img 
                src={image} 
                alt={title}
                className="w-full h-full object-cover"
              />
            </div>
          )}
          
          <div className="prose prose-lg prose-primary max-w-none">
            <MDXRemote 
              source={article.content} 
              components={components}
              options={{
                mdxOptions: {
                  remarkPlugins: [remarkGfm],
                  rehypePlugins: [rehypeSlug],
                },
              }}
            />
          </div>
        </article>
      </main>

      <Footer />
    </>
  );
}
