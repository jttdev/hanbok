
import { Suspense } from 'react';
import { AuthProvider } from '@/contexts/AuthContext';
import { AdminProvider } from '@/contexts/AdminContext';
import { LanguageProvider } from '@/contexts/LanguageContext';
import "../styles/globals.scss";
import NavBar from '@/components/NavBar';
import Script from 'next/script';
import { PopupProvider } from '@/contexts/PopupContext';
import Image from 'next/image';
import ClientLayoutWrapper from '@/components/ClientLayoutWrapper';
import { ThemeProvider } from '@/contexts/ThemeContext';
import RedditPixel from '@/components/RedditPixel';

export const metadata = {
  title: "Hanbok - Multi-Language Learning Tool",
  description: "Learn Korean, Chinese, Japanese, Spanish, and more languages with AI-powered sentence analysis, vocabulary tools, and cultural insights.",
  keywords: "language learning, Korean, Chinese, Japanese, Spanish, Italian, French, German, Dutch, Russian, Turkish, vocabulary, grammar, translation",
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/hanbokicon.png', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png' }
    ],
    shortcut: ['/favicon.ico'],
  },
  manifest: '/manifest.json',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://hanbokstudy.com/',
    title: 'Hanbok - Multi-Language Learning Tool',
    description: 'Learn Korean, Chinese, Japanese, Spanish, and more languages with AI-powered sentence analysis, vocabulary tools, and cultural insights.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Hanbok Language Learning',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hanbok - Multi-Language Learning Tool',
    description: 'Learn Korean, Chinese, Japanese, Spanish, and more languages with AI-powered sentence analysis, vocabulary tools, and cultural insights.',
    images: ['/twitter-image.png'],
    creator: '@fifltriggi'
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="/hanbokicon-512x512.png" />
      </head>
      <body>
        <AuthProvider>
          <AdminProvider>
            <LanguageProvider>
              <ThemeProvider>
                <PopupProvider>
                  <ClientLayoutWrapper>
                    <Script
                      src="https://accounts.google.com/gsi/client"
                      strategy="afterInteractive"
                    />
                    <script defer src="https://umami.ovel.sh/script.js" data-website-id="ef4f8c80-9b1d-4d10-87f3-8b3f5c3963e8"></script>
                    <RedditPixel />                    
                    <Suspense fallback={<div>Loading...</div>}>
                      {children}
                    </Suspense>
                  </ClientLayoutWrapper>
                </PopupProvider>
              </ThemeProvider>
            </LanguageProvider>
          </AdminProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
