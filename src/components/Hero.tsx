import React from 'react';
import Link from 'next/link';
import { Button } from './Button';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-background pt-16 md:pt-24 lg:pt-32 pb-16">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
          <div className="flex flex-col justify-center space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center border border-primary/20 bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                <span className="flex h-2 w-2 bg-primary mr-2"></span>
                Serving Ras Al Khaimah, UAE
              </div>
              <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl xl:text-6xl/none text-text-primary">
                Premium Laundry & Dry Cleaning Services
              </h1>
              <p className="max-w-[600px] text-lg text-gray-600 md:text-xl leading-relaxed">
                Experience the convenience of professional laundry care. We collect, clean, and deliver your clothes fresh and ready to wear.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="https://wa.me/971524751616?text=I%20want%20to%20book%20laundry%20services"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" className="group w-full sm:w-auto">
                  Schedule a Pickup
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1 inline-block" />
                </Button>
              </Link>
              <Link href="/pricelist">
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  View Pricing
                </Button>
              </Link>
            </div>
            <div className="flex items-center gap-6 pt-4">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium text-gray-600">Free Pickup</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium text-gray-600">48h Delivery</span>
              </div>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-[500px] lg:max-w-none">
            <div className="aspect-square overflow-hidden bg-gray-100 relative">
              <img
                src="/hero.jpg"
                alt="Al Adil Laundry Shop Front in Ras Al Khaimah offering premium dry cleaning"
                className="object-cover w-full h-full"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent mix-blend-multiply"></div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -left-6 h-24 w-24 rounded-full bg-primary/10 blur-2xl"></div>
            <div className="absolute -top-6 -right-6 h-32 w-32 rounded-full bg-accent/5 blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
