import React from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Ahmed Al Mansouri',
    role: 'Business Professional',
    content: 'The best laundry service in RAK. My suits always come back looking brand new and the delivery is always on time.',
    rating: 5,
  },
  {
    name: 'Sarah Jenkins',
    role: 'Expat Resident',
    content: 'So convenient! I love the wash and fold service. It saves me so much time every week. Highly recommended!',
    rating: 5,
  },
  {
    name: 'Mohammed Rashid',
    role: 'Local Resident',
    content: 'Great attention to detail. They handled my traditional wear with extreme care. Very professional staff.',
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-4 mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-text-primary">
            What Our Customers Say
          </h2>
          <p className="max-w-[700px] text-gray-600 md:text-lg">
            Don't just take our word for it. Here's what our community thinks.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-background p-8 border border-gray-200 shadow-sm relative">
              <Quote className="absolute top-4 right-4 h-8 w-8 text-primary/10" />
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-gray-600 italic mb-6 leading-relaxed">"{testimonial.content}"</p>
              <div>
                <p className="font-bold text-text-primary">{testimonial.name}</p>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
