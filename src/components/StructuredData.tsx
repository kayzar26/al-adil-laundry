import React from 'react';

// Common Types
type SchemaType = 'Organization' | 'WebSite' | 'Article' | 'BreadcrumbList' | 'FAQPage' | 'Service' | 'ItemList' | 'LocalBusiness' | 'DryCleaningOrLaundry';

interface StructuredDataProps {
  type: SchemaType;
  data: Record<string, any>;
}

export function StructuredData({ type, data }: StructuredDataProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': type,
    ...data,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// Helper functions for easy schema generation across the site

export const generateOrganizationSchema = () => ({
  name: "Al Adil Laundry",
  url: "https://aladillaundry.com",
  logo: "https://aladillaundry.com/logo.png",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+971-52-475-1616",
    contactType: "customer service",
    areaServed: "AE",
    availableLanguage: ["en", "ar"]
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "Block 10 - Sheikh Khalifa City - Al Dhait South",
    addressLocality: "Ras Al Khaimah",
    addressCountry: "AE"
  }
});

export const generateWebSiteSchema = () => ({
  name: "Al Adil Laundry",
  url: "https://aladillaundry.com",
  potentialAction: {
    "@type": "SearchAction",
    target: "https://aladillaundry.com/search?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
});

export const generateBreadcrumbSchema = (breadcrumbs: { label: string; url: string }[]) => ({
  itemListElement: breadcrumbs.map((crumb, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: crumb.label,
    item: crumb.url
  }))
});

export const generateArticleSchema = (
  title: string, 
  description: string, 
  image: string, 
  datePublished: string, 
  authorName: string,
  url: string
) => ({
  headline: title,
  description: description,
  image: image.startsWith('http') ? image : `https://aladillaundry.com${image}`,
  datePublished: datePublished,
  dateModified: datePublished,
  author: {
    "@type": "Person",
    name: authorName
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": url
  },
  publisher: {
    "@type": "Organization",
    name: "Al Adil Laundry",
    logo: {
      "@type": "ImageObject",
      url: "https://aladillaundry.com/logo.png"
    }
  }
});

export const generateLocalBusinessSchema = () => ({
  "@type": "DryCleaningOrLaundry",
  "name": "Al Adil Laundry",
  "image": "https://aladillaundry.com/logo.png",
  "@id": "https://aladillaundry.com",
  "url": "https://aladillaundry.com",
  "telephone": "+971524751616",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Block 10 - Sheikh Khalifa City - Al Dhait South",
    "addressLocality": "Ras Al Khaimah",
    "addressCountry": "AE"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 25.715035999999998,
    "longitude": 55.899636799999996
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Saturday",
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday"
      ],
      "opens": "08:00",
      "closes": "22:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Friday"
      ],
      "opens": "16:00",
      "closes": "22:00"
    }
  ]
});

export const generateServiceSchema = (name: string, description: string, url: string) => ({
  "@type": "Service",
  "name": name,
  "description": description,
  "provider": {
    "@type": "DryCleaningOrLaundry",
    "name": "Al Adil Laundry",
    "url": "https://aladillaundry.com"
  },
  "areaServed": {
    "@type": "City",
    "name": "Ras Al Khaimah"
  },
  "url": url
});

export const generateFAQSchema = (faqs: { question: string, answer: string }[]) => ({
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
});

export const generateItemListSchema = (items: { name: string, description?: string, price?: string }[]) => ({
  "itemListElement": items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "item": {
      "@type": "Offer",
      "name": item.name,
      "description": item.description,
      "price": item.price ? item.price.replace(/[^0-9.-]+/g,"") : "0",
      "priceCurrency": "AED"
    }
  }))
});
