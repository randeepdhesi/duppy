import type { Metadata } from 'next'
import { Fraunces, DM_Sans } from 'next/font/google'
import './globals.css'

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  display: 'swap',
  axes: ['SOFT', 'WONK'],
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://duppy.ai'),
  title: 'Duppy — The Invisible Operator',
  description:
    'Duppy connects your ERP, email, CRM, and calendar into one voice-powered operator. Built for your brand, deployed in days.',
  openGraph: {
    title: 'Duppy — The Invisible Operator',
    description:
      'Duppy connects your ERP, email, CRM, and calendar into one voice-powered operator. Built for your brand, deployed in days.',
    url: 'https://duppy.ai',
    siteName: 'Duppy',
    type: 'website',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Duppy — The Invisible Operator' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Duppy — The Invisible Operator',
    description:
      'Duppy connects your ERP, email, CRM, and calendar into one voice-powered operator. Built for your brand, deployed in days.',
    images: ['/og-image.jpg'],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${fraunces.variable} ${dmSans.variable} antialiased`} style={{ fontFamily: 'var(--font-dm-sans), system-ui, sans-serif' }}>
        {children}
      </body>
    </html>
  )
}
