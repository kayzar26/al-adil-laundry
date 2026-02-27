import { Metadata } from 'next';
import { ServicesPageClient } from '@/components/ServicesPageClient';

export const metadata: Metadata = {
  title: 'Our Services',
  description: 'Explore our wide range of professional laundry and cleaning services in Ras Al Khaimah, including dry cleaning, carpet cleaning, and sofa cleaning.',
  openGraph: {
    title: 'Our Services | Al Adil Laundry',
    description: 'Professional laundry and cleaning services in Ras Al Khaimah.',
    url: 'https://aladillaundry.com/services',
  },
  alternates: {
    canonical: '/services',
  }
};

export default function ServicesPage() {
  return <ServicesPageClient />;
}
