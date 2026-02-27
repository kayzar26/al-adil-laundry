"use client";

import React from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { Button } from './Button';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <img 
            src="/logo.png" 
            alt="Al Adil Laundry Ras Al Khaimah Logo" 
            className="h-12 w-auto object-contain"
          />
          <span className="font-heading text-xl md:text-2xl font-bold tracking-tight text-primary hidden sm:block">
            Al Adil Laundry
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/services" className="text-sm font-medium text-text-primary hover:text-primary transition-colors">
            Services
          </Link>
          <Link href="/pricelist" className="text-sm font-medium text-text-primary hover:text-primary transition-colors">
            Pricing
          </Link>
          <Link href="/blog" className="text-sm font-medium text-text-primary hover:text-primary transition-colors">
            Blog
          </Link>
          {/* <Link href="/#about" className="text-sm font-medium text-text-primary hover:text-primary transition-colors">
            About Us
          </Link> */}
          <Link href="/#contact" className="text-sm font-medium text-text-primary hover:text-primary transition-colors">
            Contact
          </Link>
          <Link 
            href="https://wa.me/971524751616?text=I%20want%20to%20book%20laundry%20services"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button size="sm">Schedule Pickup</Button>
          </Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2 text-text-primary"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-gray-200 bg-background px-4 py-6 shadow-lg">
          <nav className="flex flex-col gap-4">
            <Link
              href="/services"
              className="text-lg font-medium text-text-primary hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              href="/pricelist"
              className="text-lg font-medium text-text-primary hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Pricing
            </Link>
            <Link
              href="/blog"
              className="text-lg font-medium text-text-primary hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Blog
            </Link>
            {/* <Link
              href="/#about"
              className="text-lg font-medium text-text-primary hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </Link> */}
            <Link
              href="/#contact"
              className="text-lg font-medium text-text-primary hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Link 
              href="https://wa.me/971524751616?text=I%20want%20to%20book%20laundry%20services"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 w-full block"
            >
              <Button className="w-full" size="md">
                Schedule Pickup
              </Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
