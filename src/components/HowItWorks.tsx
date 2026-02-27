import React from 'react';
import { Smartphone, Truck, Sparkles, CheckCircle } from 'lucide-react';

const steps = [
  {
    title: 'Schedule',
    description: 'Book a pickup time that fits your schedule via our website or phone.',
    icon: Smartphone,
  },
  {
    title: 'Pickup',
    description: 'Our professional driver collects your laundry from your doorstep.',
    icon: Truck,
  },
  {
    title: 'Clean',
    description: 'We process your clothes using premium detergents and expert care.',
    icon: Sparkles,
  },
  {
    title: 'Deliver',
    description: 'Your fresh, clean clothes are delivered back to you within 48 hours.',
    icon: CheckCircle,
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-4 mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-text-primary">
            How It Works
          </h2>
          <p className="max-w-[700px] text-gray-600 md:text-lg">
            Four simple steps to a laundry-free life.
          </p>
        </div>
        <div className="relative grid gap-12 md:grid-cols-4">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-1/4 left-0 right-0 h-0.5 bg-gray-100 -z-10"></div>
          
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center space-y-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-white shadow-lg ring-8 ring-background">
                <step.icon size={28} />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-text-primary">{step.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
