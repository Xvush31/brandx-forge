import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Toaster } from '@/components/ui/toaster';
import { Toaster as Sonner } from '@/components/ui/sonner';
import { TooltipProvider } from '@/components/ui/tooltip';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'TechLoop - Le reconditionné dont vous êtes fier',
  description: 'Des produits tech premium reconditionnés avec soin, garantis 12 mois et jusqu\'à 70% moins cher que le neuf.',
  keywords: 'reconditionné, smartphone, laptop, tablet, tech, premium, garantie, éco-responsable',
  authors: [{ name: 'TechLoop' }],
  creator: 'TechLoop',
  publisher: 'TechLoop',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://techloop.fr'),
  alternates: {
    canonical: '/',
    languages: {
      'fr-FR': '/fr',
      'en-US': '/en',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://techloop.fr',
    title: 'TechLoop - Le reconditionné dont vous êtes fier',
    description: 'Des produits tech premium reconditionnés avec soin, garantis 12 mois et jusqu\'à 70% moins cher que le neuf.',
    siteName: 'TechLoop',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'TechLoop - Reconditionné Premium',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TechLoop - Le reconditionné dont vous êtes fier',
    description: 'Des produits tech premium reconditionnés avec soin, garantis 12 mois et jusqu\'à 70% moins cher que le neuf.',
    images: ['/og-image.jpg'],
    creator: '@techloop',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000, // 1 minute
      cacheTime: 5 * 60 * 1000, // 5 minutes
      retry: 3,
      refetchOnWindowFocus: false,
    },
  },
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#3B82F6" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      </head>
      <body className={inter.className}>
        <QueryClientProvider client={queryClient}>
          <TooltipProvider>
            {children}
            <Toaster />
            <Sonner />
          </TooltipProvider>
        </QueryClientProvider>
      </body>
    </html>
  );
}
