import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Analytics } from '@vercel/analytics/next'
import { I18nProvider } from '@/components/i18n-provider'
import { ErrorBoundary } from '@/components/error-boundary'
import './globals.css'

export const metadata: Metadata = {
  title: 'Staying in Bern - Human Connection First',
  description: 'Build lasting friendships in Bern. Join a welcoming community where authentic connections happen naturally.',
  generator: 'v0.app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
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
