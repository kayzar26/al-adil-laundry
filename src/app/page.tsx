import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Services } from '@/components/Services';
import { HowItWorks } from '@/components/HowItWorks';
import { Testimonials } from '@/components/Testimonials';
import { Contact } from '@/components/Contact';
import { CTA } from '@/components/CTA';
import { Footer } from '@/components/Footer';
import { StructuredData, generateOrganizationSchema, generateWebSiteSchema } from '@/components/StructuredData';
import { LatestArticles } from '@/components/LatestArticles';
import { getAllArticles } from '@/lib/mdx';

export const metadata: Metadata = {
  title: 'Home | Al Adil Laundry - Premium Laundry & Dry Cleaning',
  description: 'Welcome to Al Adil Laundry, your trusted partner for premium laundry and dry cleaning in Ras Al Khaimah. Experience quality care and convenience.',
};

export default function Home() {
  const articles = getAllArticles();
  const latestArticles = articles.slice(0, 3); // Get 3 most recent

  return (
    <>
      <Header />
      <StructuredData type="Organization" data={generateOrganizationSchema()} />
      <StructuredData type="WebSite" data={generateWebSiteSchema()} />
      
      <main className="flex-1">
        <Hero />
        <Services />
        <HowItWorks />
        <LatestArticles articles={latestArticles} />
        <Testimonials />
        <Contact />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
