import React from 'react';
import Link from 'next/link';
import { Button } from './Button';
import { Phone } from 'lucide-react';

export function CTA() {
  return (
    <section className="py-24 bg-primary text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-96 h-96 bg-black/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Ready to Experience the Best Laundry Service?
            </h2>
            <p className="max-w-[600px] text-primary-foreground/80 md:text-xl mx-auto">
              Join thousands of happy customers in Ras Al Khaimah. Book your first pickup today and get 20% off!
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              href="https://wa.me/971524751616?text=I%20want%20to%20book%20laundry%20services"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" variant="secondary" className="w-full sm:w-auto">
                Book Your Pickup Now
              </Button>
            </Link>
            <a href="tel:+971524751616">
              <Button size="lg" variant="outline" className="w-full sm:w-auto border-white text-white hover:bg-white/10">
                <Phone className="mr-2 h-5 w-5" />
                Call Us: +971 52 475 1616
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
