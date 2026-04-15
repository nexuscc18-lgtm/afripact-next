export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@id": "https://www.afripact.net/#business",
  "@type": ["LocalBusiness", "GeneralContractor"],
  "name": "Afripact Civils (PTY) LTD",
  "legalName": "Afripact Civils (PTY) LTD",
  "url": "https://www.afripact.net",
  "logo": "https://www.afripact.net/AfriPact.png",
  "image": "https://www.afripact.net/AfriPact.png",
  "telephone": ["+27330010397", "+27695036291"],
  "email": "quotes@afripact.net",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "193 Pine Street",
    "addressLocality": "Pietermaritzburg",
    "addressRegion": "KwaZulu-Natal",
    "postalCode": "3201",
    "addressCountry": "ZA"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": -29.6188,
    "longitude": 30.3940
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "08:00",
      "closes": "16:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Saturday"],
      "opens": "08:00",
      "closes": "14:00"
    }
  ],
  "areaServed": [
    { "@type": "City", "name": "Pietermaritzburg" },
    { "@type": "City", "name": "Durban" },
    { "@type": "State", "name": "KwaZulu-Natal" }
  ],
  "serviceArea": {
    "@type": "GeoCircle",
    "geoMidpoint": {
      "@type": "GeoCoordinates",
      "latitude": -29.6188,
      "longitude": 30.3940
    },
    "geoRadius": 500000
  },
  "hasCredential": {
    "@type": "EducationalOccupationalCredential",
    "credentialCategory": "Professional Certification",
    "name": "CIDB Grade 2CE & 2GB",
    "description": "CIDB Grade 2CE (Civil Engineering) and Grade 2GB (General Building) contractor registration. CRS number: 10262268.",
    "recognizedBy": {
      "@type": "Organization",
      "name": "Construction Industry Development Board (CIDB)"
    }
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": 5,
    "reviewCount": 3
  },
  "sameAs": [
    "https://share.google/HUbpoXqfHTWuBFAUX",
    "https://www.facebook.com/p/Afripact-Civils-61563198336813/",
    "https://www.snupit.co.za/pietermaritzburg/imbali/afripact-civils/528170"
  ],
  "founder": {
    "@type": "Person",
    "name": "Cebo Mbatha",
    "jobTitle": "Founder & CEO"
  },
  "priceRange": "$$"
}

export const organizationSchema = {
  "@context": "https://schema.org",
  "@id": "https://www.afripact.net/#organization",
  "@type": "Organization",
  "name": "Afripact Civils (PTY) LTD",
  "url": "https://www.afripact.net",
  "logo": "https://www.afripact.net/AfriPact.png",
  "founder": {
    "@type": "Person",
    "name": "Cebo Mbatha"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+27330010397",
    "contactType": "customer service",
    "availableLanguage": ["English", "Zulu"]
  }
}

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://www.afripact.net/#website",
  "url": "https://www.afripact.net",
  "name": "Afripact Civils",
  "publisher": {
    "@id": "https://www.afripact.net/#business"
  }
}
