import React from 'react';
import Link from 'next/link';
import { Shirt, Wind, Sparkles, Home, ArrowRight } from 'lucide-react';
import { Button } from './Button';

const services = [
  {
    title: 'Wash & Fold',
    description: 'Everyday wear cleaned, dried, and perfectly folded.',
    icon: Shirt,
  },
  {
    title: 'Dry Cleaning',
    description: 'Specialized care for your delicate and formal garments.',
    icon: Wind,
  },
  {
    title: 'Ironing Service',
    description: 'Professional pressing for a crisp, professional look.',
    icon: Sparkles,
  },
  {
    title: 'Home & Bedding',
    description: 'Deep cleaning for curtains, duvets, and linens.',
    icon: Home,
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-4 mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-text-primary">
            Our Premium Services
          </h2>
          <p className="max-w-[700px] text-gray-600 md:text-lg">
            We offer a wide range of laundry solutions tailored to your needs.
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 mb-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-background p-8 border border-gray-200 hover:border-primary/50 transition-all hover:shadow-xl"
            >
              <div className="mb-6 inline-flex h-12 w-12 items-center justify-center bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                <service.icon size={24} />
              </div>
              <h3 className="mb-3 text-xl font-bold text-text-primary">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
        <div className="flex justify-center">
          <Link href="/services">
            <Button variant="outline" className="group">
              View All Services
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
