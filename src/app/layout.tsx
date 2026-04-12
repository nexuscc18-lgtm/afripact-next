import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { AuthProvider } from '@/contexts/AuthContext';
import LayoutShell from '@/components/LayoutShell';
import { localBusinessSchema, organizationSchema } from '@/lib/schema';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: {
    default: 'Afripact Civils | Civil Engineering Contractors KZN',
    template: '%s | Afripact Civils',
  },
  description:
    'CIDB-registered civil engineering contractor (Grade 2CE, 2GB) based in Pietermaritzburg, KwaZulu-Natal. Earthworks, site preparation, stormwater, and civil infrastructure.',
  metadataBase: new URL('https://www.afripact.net'),
  verification: {
    google: '--F9c1OjxdcwIkighiTW4eiJzf0NIgtO3Zvi9oNFOps',
  },
  openGraph: {
    siteName: 'Afripact Civils',
    locale: 'en_ZA',
    type: 'website',
  },
  icons: {
    icon: '/AfriPact.png',
    apple: '/AfriPact.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <AuthProvider>
          <LayoutShell>{children}</LayoutShell>
        </AuthProvider>
      </body>
    </html>
  );
}
