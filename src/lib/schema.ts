export const localBusinessSchema = {
  "@context": "https://schema.org",
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
  "areaServed": {
    "@type": "State",
    "name": "KwaZulu-Natal"
  },
  "hasCredential": "CIDB Grade 2CE & 2GB | CRS 10262268",
  "founder": {
    "@type": "Person",
    "name": "Cebo Mbatha",
    "jobTitle": "Founder & CEO"
  },
  "priceRange": "$$"
}

export const organizationSchema = {
  "@context": "https://schema.org",
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
