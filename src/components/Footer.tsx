"use client";

import React from 'react';
import Link from 'next/link';
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail } from 'lucide-react';

export function Footer() {
  const [year, setYear] = React.useState(2026);

  React.useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-gray-50 text-gray-600 py-16 border-t border-gray-200">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900">Al Adil Laundry</h3>
            <p className="text-sm leading-relaxed">
              Providing premium laundry and dry cleaning services in Ras Al Khaimah since 2010. We pride ourselves on quality, convenience, and customer satisfaction.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-primary transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-gray-900 font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-sm">
              <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
              <li><Link href="/services" className="hover:text-primary transition-colors">Services</Link></li>
              <li><Link href="/pricelist" className="hover:text-primary transition-colors">Pricing</Link></li>
              <li><Link href="/blog" className="hover:text-primary transition-colors">Blog</Link></li>
              <li><Link href="/#contact" className="hover:text-primary transition-colors">Contact Us</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-gray-900 font-bold mb-6">Services</h4>
            <ul className="space-y-4 text-sm">
              <li><Link href="/services" className="hover:text-primary transition-colors">Wash & Fold</Link></li>
              <li><Link href="/services" className="hover:text-primary transition-colors">Dry Cleaning</Link></li>
              <li><Link href="/services" className="hover:text-primary transition-colors">Ironing Service</Link></li>
              <li><Link href="/services" className="hover:text-primary transition-colors">Curtain Cleaning</Link></li>
              <li><Link href="/services" className="hover:text-primary transition-colors">Bedding & Linens</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-gray-900 font-bold mb-6">Contact Info</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex gap-3 items-start">
                <MapPin size={18} className="text-primary shrink-0 mt-1" />
                <a 
                  href="https://maps.app.goo.gl/FvUQ8fFm17U2pUNB6" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors block"
                >
                  Block 10 - Sheikh Khalifa City - Al Dhait South<br/>Ras Al Khaimah - United Arab Emirates
                </a>
              </li>
              <li className="flex gap-3 items-center">
                <Phone size={18} className="text-primary shrink-0" />
                <a href="tel:+971524751616" className="hover:text-primary transition-colors">
                  +971 52 475 1616
                </a>
              </li>
              <li className="flex gap-3">
                <Mail size={18} className="text-primary shrink-0" />
                <span>info@aladillaundry.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-gray-200 text-center text-xs">
          <p>Developed by <Link href="https://instagram.com/_kayzar_" target="_blank" rel="noopener noreferrer">Kayzar</Link> for Al Adil Laundry</p>
        </div>
      </div>
    </footer>
  );
}

