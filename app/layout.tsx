import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Analytics } from '@vercel/analytics/next'
import { I18nProvider } from '@/components/i18n-provider'
import { ErrorBoundary } from '@/components/error-boundary'
import './globals.css'

const siteUrl = 'https://staying-in-bern.vercel.app'
const siteName = 'Staying in Bern'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Staying in Bern - Human Connection First',
    template: '%s | Staying in Bern'
  },
  description: 'Build lasting friendships in Bern, Switzerland. Join a welcoming community where locals and volunteers connect through authentic cultural exchange, shared meals, and meaningful experiences.',
  keywords: [
    'Bern community',
    'cultural exchange',
    'volunteering Bern',
    'Switzerland',
    'international community',
    'local connections',
    'Bern events',
    'language exchange',
    'Swiss culture',
    'community integration',
    'LGBTQ+ friendly',
    'inclusive community',
    'Staying in Bern'
  ],
  authors: [{ name: 'Staying in Bern' }],
  creator: 'Staying in Bern',
  publisher: 'Staying in Bern',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    alternateLocale: ['de_CH', 'es_ES'],
    url: siteUrl,
    siteName,
    title: 'Staying in Bern - Human Connection First',
    description: 'Build lasting friendships in Bern, Switzerland. Join a welcoming community where locals and volunteers connect through authentic cultural exchange.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Staying in Bern - Community gathering in Bern, Switzerland',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Staying in Bern - Human Connection First',
    description: 'Build lasting friendships in Bern, Switzerland. Join our welcoming community for authentic cultural exchange.',
    images: ['/og-image.jpg'],
    creator: '@stayinginbern',
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
  alternates: {
    canonical: siteUrl,
    languages: {
      'en': `${siteUrl}`,
      'de': `${siteUrl}?lang=de`,
      'es': `${siteUrl}?lang=es`,
    },
  },
  verification: {
    // Add your verification codes when available
    // google: 'google-verification-code',
    // yandex: 'yandex-verification-code',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Staying in Bern',
    url: siteUrl,
    logo: `${siteUrl}/logo.png`,
    description: 'A welcoming community in Bern, Switzerland where locals and volunteers connect through authentic cultural exchange and meaningful experiences.',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Bern',
      addressCountry: 'CH'
    },
    sameAs: [
      'https://www.instagram.com/stayinginbern/',
      'https://www.facebook.com/people/Staying-in-Bern/61579405777769/',
      'https://www.linkedin.com/company/connect-bern-staying-in-bern/about/',
      'https://www.meetup.com/meetup-bern/events/jvqxstyhcnbdc/'
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'hello@stayinginbern.ch',
      contactType: 'Customer Service',
      availableLanguage: ['en', 'de', 'es']
    }
  }

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <ErrorBoundary>
          <I18nProvider>
            {children}
          </I18nProvider>
        </ErrorBoundary>
        <Analytics />
      </body>
    </html>
  )
}
