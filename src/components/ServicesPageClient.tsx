"use client";

import React from 'react';
import { 
  WashingMachine, 
  Shirt, 
  Sparkles, 
  Waves, 
  Grid, 
  Armchair, 
  ShoppingBag, 
  Footprints,
  ChevronDown
} from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { CTA } from '@/components/CTA';
import { StructuredData, generateFAQSchema, generateServiceSchema, generateBreadcrumbSchema } from '@/components/StructuredData';

const services = [
  {
    title: "Laundry by Kg",
    description: "Get affordable, efficient laundry services charged by the kilogram, with each item given expert care and attention.",
    icon: WashingMachine,
  },
  {
    title: "Dry Cleaning",
    description: "Our premium dry cleaning service is expertly customized for each fabric, keeping your clothes fresh, spotless, and well-maintained every time.",
    icon: Shirt,
  },
  {
    title: "Premium Laundry",
    description: "Enjoy premium laundry services with eco-friendly methods and cutting-edge technology, ensuring spotless results and premium, carefully packaged garments.",
    icon: Sparkles,
  },
  {
    title: "Steam Press",
    description: "Our steam press service offers professional handling, ensuring your clothes are wrinkle-free and polished with exceptional results.",
    icon: Waves,
  },
  {
    title: "Carpet Cleaning",
    description: "Experience premium carpet cleaning for a wide range of materials, including wool, silk, and nylon, keeping your carpets vibrant and spotless.",
    icon: Grid,
  },
  {
    title: "Sofa Cleaning",
    description: "Our specialists clean all types of sofas—leather, microfiber, wool, cotton, and more—providing top-notch service and results.",
    icon: Armchair,
  },
  {
    title: "Bag Cleaning",
    description: "Our expert cleaning methods ensure your bags, regardless of material, are treated with precision, restoring them to like-new condition.",
    icon: ShoppingBag,
  },
  {
    title: "Shoe Cleaning",
    description: "We offer customized shoe cleaning for every type, using treatments like stain repellents to help extend the life of your footwear.",
    icon: Footprints,
  }
];

const faqs = [
  {
    question: "How long does the laundry process take?",
    answer: "Our standard turnaround time is 24 to 48 hours. However, we also offer express services for same-day or next-day delivery depending on your needs."
  },
  {
    question: "Do you provide pickup and delivery services?",
    answer: "Yes, we offer convenient pickup and delivery services across Ras Al Khaimah. You can schedule a pickup through our website or by calling us directly."
  },
  {
    question: "What is the difference between laundry and dry cleaning?",
    answer: "Laundry involves washing clothes with water and detergents, while dry cleaning uses specialized solvents to clean delicate fabrics that might be damaged by water."
  },
  {
    question: "How do you handle delicate or expensive garments?",
    answer: "We treat every item with extreme care. Our experts inspect each garment to determine the best cleaning method, ensuring that delicate fabrics and intricate details are preserved."
  },
  {
    question: "Are your cleaning products eco-friendly?",
    answer: "Yes, we prioritize the use of eco-friendly and biodegradable detergents and solvents that are tough on stains but gentle on your clothes and the environment."
  }
];

export function ServicesPageClient() {
  const breadcrumbs = [
    { label: 'Home', url: 'https://aladillaundry.com' },
    { label: 'Services', url: 'https://aladillaundry.com/services' }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <StructuredData type="BreadcrumbList" data={generateBreadcrumbSchema(breadcrumbs)} />
      <StructuredData type="FAQPage" data={generateFAQSchema(faqs)} />
      {services.map((service, index) => (
        <StructuredData key={index} type="Service" data={generateServiceSchema(service.title, service.description, 'https://aladillaundry.com/services')} />
      ))}
      <Header />
      <main className="flex-1">
        {/* Hero Section for Services */}
        <section className="bg-primary/5 py-20 border-b border-primary/10">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">
              Our Professional Services
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We handle your clothes with care, giving them the attention they deserve. 
              Explore our wide range of specialized cleaning services.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-16">
              <h2 className="text-sm font-bold text-primary uppercase tracking-widest mb-3">
                Explore Our Services
              </h2>
              <p className="text-2xl md:text-3xl font-bold text-text-primary">
                Comprehensive Care for Every Item
              </p>
            </div>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {services.map((service, index) => (
                <div 
                  key={index} 
                  className="group p-8 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-xl hover:border-primary/20 transition-all duration-300 flex flex-col items-center text-center"
                >
                  <div className="w-16 h-16 bg-primary/5 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <service.icon className="w-8 h-8 text-primary group-hover:text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-text-primary mb-4">{service.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-text-primary mb-4">Frequently Asked Questions</h2>
                <p className="text-gray-600">
                  Everything you need to know about our laundry and cleaning services.
                </p>
              </div>

              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <details 
                    key={index} 
                    className="group bg-white border border-gray-200 rounded-xl overflow-hidden"
                  >
                    <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                      <h3 className="font-bold text-text-primary pr-4">{faq.question}</h3>
                      <div className="text-primary group-open:rotate-180 transition-transform duration-200">
                        <ChevronDown size={20} />
                      </div>
                    </summary>
                    <div className="px-6 pb-6 text-gray-600 text-sm leading-relaxed">
                      {faq.answer}
                    </div>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </section>

        <CTA />
      </main>
      <Footer />
    </div>
  );
}
