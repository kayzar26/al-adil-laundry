"use client";

import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-4 mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-text-primary">
            Contact Us
          </h2>
          <p className="max-w-[700px] text-gray-600 md:text-lg">
            Have questions? Visit us or get in touch. We're here to help you with all your laundry needs.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2 items-start">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="flex flex-col p-6 bg-gray-50 border border-gray-200 rounded-xl">
                <MapPin className="h-6 w-6 text-primary mb-4" />
                <h3 className="font-bold text-text-primary mb-2">Our Location</h3>
                <a 
                  href="https://maps.app.goo.gl/FvUQ8fFm17U2pUNB6" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm text-gray-600 hover:text-primary transition-colors block"
                >
                  Block 10 - Sheikh Khalifa City<br />
                  Al Dhait South, Ras Al Khaimah<br />
                  United Arab Emirates
                </a>
              </div>
              <div className="flex flex-col p-6 bg-gray-50 border border-gray-200 rounded-xl">
                <Phone className="h-6 w-6 text-primary mb-4" />
                <h3 className="font-bold text-text-primary mb-2">Phone</h3>
                <a 
                  href="tel:+971524751616" 
                  className="text-sm text-gray-600 hover:text-primary transition-colors block"
                >
                  +971 52 475 1616
                </a>
              </div>
              <div className="flex flex-col p-6 bg-gray-50 border border-gray-200 rounded-xl">
                <Mail className="h-6 w-6 text-primary mb-4" />
                <h3 className="font-bold text-text-primary mb-2">Email</h3>
                <p className="text-sm text-gray-600">
                  info@aladillaundry.com
                </p>
              </div>
              <div className="flex flex-col p-6 bg-gray-50 border border-gray-200 rounded-xl">
                <Clock className="h-6 w-6 text-primary mb-4" />
                <h3 className="font-bold text-text-primary mb-2">Working Hours</h3>
                <p className="text-sm text-gray-600">
                  Sat - Thu: 8:00 AM - 10:00 PM<br />
                  Fri: 4:00 PM - 10:00 PM
                </p>
              </div>
            </div>

            {/* Simple Form Placeholder or more info */}
            <div className="p-8 bg-primary/5 border border-primary/10 rounded-2xl">
              <h3 className="text-xl font-bold text-text-primary mb-4">Quick Inquiry</h3>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="grid gap-4 sm:grid-cols-2">
                  <input 
                    type="text" 
                    placeholder="Your Name" 
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20"
                  />
                  <input 
                    type="email" 
                    placeholder="Your Email" 
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20"
                  />
                </div>
                <textarea 
                  placeholder="Your Message" 
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20"
                ></textarea>
                <button 
                  type="submit"
                  className="w-full bg-primary text-white font-bold py-3 rounded-lg hover:bg-primary/90 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>

          {/* Map Embed */}
          <div className="h-full min-h-[400px] rounded-2xl overflow-hidden border border-gray-200 shadow-sm">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4483.98813816502!2d55.899636799999996!3d25.715035999999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ef6759ab82b795b%3A0x2cfcf5863b6ab54a!2sAl%20Adil%20Laundry!5e1!3m2!1sen!2sin!4v1772131418508!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Al Adil Laundry Location"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}

