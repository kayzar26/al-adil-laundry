import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { CTA } from '@/components/CTA';
import { StructuredData, generateItemListSchema, generateBreadcrumbSchema } from '@/components/StructuredData';

export const metadata: Metadata = {
  title: 'Pricing | Al Adil Laundry',
  description: 'Our comprehensive pricing list for wash & fold, dry cleaning, ironing, shoe care, and bag care services in Ras Al Khaimah.',
  openGraph: {
    title: 'Pricing | Al Adil Laundry',
    description: 'Our comprehensive pricing list for wash & fold, dry cleaning, ironing, shoe care, and bag care services in Ras Al Khaimah.',
    url: 'https://aladillaundry.com/pricelist',
  },
  alternates: {
    canonical: '/pricelist',
  }
};

const pricingData = [
  {
    category: "Wash & Fold (Everyday Laundry)",
    desc: "Typically includes items that can be washed and tumble-dried.",
    items: [
      { name: "Standard Bag", price: "AED 75" }
    ]
  },
  {
    category: "Bed & Bath (Home Linens)",
    desc: "Includes bedsheets, towels, and other home linens.",
    items: [
      { name: "Standard Bag", price: "AED 85" }
    ]
  },
  {
    category: "Clean & Press (Dry Cleaning & Laundry)",
    desc: "Expert cleaning and pressing tailored to individual garments.",
    items: [
      { name: "T-shirt / Shirt / Shorts / Pyjamas", price: "AED 3" },
      { name: "Suit (2pc)", price: "AED 25" },
      { name: "Suit Jacket", price: "AED 15" },
      { name: "Pants / Jeans / Skirt", price: "AED 3" },
      { name: "Dress (Basic)", price: "AED 15" },
      { name: "Shaila (Hijab)", price: "AED 4" },
      { name: "Dress (Complex Material)", price: "AED 95" },
      { name: "Abaya (Basic)", price: "AED 10" },
      { name: "Abaya (Delicate)", price: "AED 45" },
      { name: "Kandura", price: "AED 5" },
      { name: "Kandura Ladies", price: "AED 10" },
      { name: "Sari", price: "AED 61" },
      { name: "Jacket / Overcoat", price: "AED 66 - 76" },
      { name: "Winter Overcoat", price: "AED 251" },
      { name: "Bedsheet", price: "AED 25" },
      { name: "Comforter / Duvet", price: "AED 20" },
      { name: "Blanket", price: "AED 15" },
      { name: "Pillow", price: "AED 19" },
      { name: "Curtain (per sqm)", price: "AED 25" },
      { name: "Carpet (Regular/Wool per sqm)", price: "AED 35 - 50" }
    ]
  },
  {
    category: "Press Only (Steaming & Ironing)",
    desc: "Professional pressing for items that are already clean.",
    items: [
      { name: "T-shirt / Shirt / Shorts", price: "AED 11" },
      { name: "Pants / Jeans / Skirt", price: "AED 17" },
      { name: "Suit Jacket", price: "AED 38" },
      { name: "Suit (2pc)", price: "AED 55" },
      { name: "Dress (Basic)", price: "AED 32" },
      { name: "Dress (Evening/Formal)", price: "AED 45" },
      { name: "Abaya", price: "AED 15 - 24" },
      { name: "Kandura", price: "AED 12" }
    ]
  },
  {
    category: "Shoe Care",
    desc: "Cleaning, protection, and restoration for footwear.",
    items: [
      { name: "Formal Shoes", price: "AED 15" },
      { name: "Sports Sneakers", price: "AED 15" },
      { name: "Designer Sneakers / Formal", price: "AED 145" },
      { name: "Boots", price: "From AED 170" },
      { name: "Sandals / Espadrilles", price: "AED 85 - 90" },
      { name: "Restoration (Light/Heavy)", price: "+AED 50 - 170" },
      { name: "Sole Replacement", price: "+AED 550" }
    ]
  },
  {
    category: "Bag Care",
    desc: "Expert cleaning and restoration for bags and accessories.",
    items: [
      { name: "Clutch / Purse", price: "AED 110" },
      { name: "Standard Handbag / Briefcase", price: "AED 325" },
      { name: "Backpack", price: "AED 250" },
      { name: "Suitcase", price: "AED 350" },
      { name: "Oversized Handbag", price: "AED 450" },
      { name: "Belt", price: "AED 100" }
    ]
  }
];

export default function Pricing() {
  const breadcrumbs = [
    { label: 'Home', url: 'https://aladillaundry.com' },
    { label: 'Pricing', url: 'https://aladillaundry.com/pricelist' }
  ];

  const allItems = pricingData.flatMap(category => category.items);

  return (
    <>
      <StructuredData type="BreadcrumbList" data={generateBreadcrumbSchema(breadcrumbs)} />
      <StructuredData type="ItemList" data={generateItemListSchema(allItems)} />
      <Header />
      <main className="flex-1 bg-gray-50 min-h-screen">
        <section className="bg-primary/5 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold font-heading text-gray-900 mb-6">
                Clear & Transparent Pricing
              </h1>
              <p className="text-lg text-gray-600">
                Premium care for your garments with straightforward pricing. No hidden fees, just exceptional service tailored to your needs.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="space-y-16">
              {pricingData.map((section, idx) => (
                <div key={idx} className="space-y-6">
                  <div className="border-b-2 border-primary/20 pb-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 font-heading">
                      {section.category}
                    </h2>
                    <p className="text-gray-600 mt-2 text-lg">
                      {section.desc}
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
                    {section.items.map((item, itemIdx) => (
                      <div 
                        key={itemIdx} 
                        className="flex justify-between items-end border-b border-gray-200 border-dashed pb-3"
                      >
                        <span className="text-gray-800 text-lg font-medium pr-4">{item.name}</span>
                        <span className="text-primary text-xl font-bold whitespace-nowrap">{item.price}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <CTA />
      <Footer />
    </>
  );
}
