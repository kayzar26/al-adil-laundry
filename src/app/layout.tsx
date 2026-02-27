import type { Metadata } from 'next';
import './globals.css';
import { WhatsAppButton } from '@/components/WhatsAppButton';

export const metadata: Metadata = {
  metadataBase: new URL('https://aladillaundry.com'),
  title: {
    default: 'Al Adil Laundry | Premium Laundry & Dry Cleaning in Ras Al Khaimah',
    template: '%s | Al Adil Laundry',
  },
  description: 'Al Adil Laundry offers premium laundry, dry cleaning, and specialized cleaning services in Ras Al Khaimah, UAE. Free pickup and delivery available.',
  keywords: ['laundry Ras Al Khaimah', 'dry cleaning RAK', 'carpet cleaning RAK', 'sofa cleaning Ras Al Khaimah', 'best laundry UAE'],
  authors: [{ name: 'Al Adil Laundry' }],
  creator: 'Al Adil Laundry',
  publisher: 'Al Adil Laundry',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_AE',
    url: 'https://aladillaundry.com',
    siteName: 'Al Adil Laundry',
    title: 'Al Adil Laundry | Premium Laundry & Dry Cleaning in Ras Al Khaimah',
    description: 'Expert care for your garments and home items. Free pickup and delivery in Ras Al Khaimah.',
    images: [
      {
        url: 'https://picsum.photos/1200/630',
        width: 1200,
        height: 630,
        alt: 'Al Adil Laundry Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Al Adil Laundry | Premium Laundry & Dry Cleaning',
    description: 'Expert care for your garments and home items in Ras Al Khaimah.',
    images: ['https://picsum.photos/1200/630'],
  },
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body 
        className="antialiased font-sans text-text-primary bg-background selection:bg-primary/20 min-h-screen flex flex-col"
        suppressHydrationWarning
      >
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
