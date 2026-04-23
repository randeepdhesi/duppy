import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Duppy.ai — AI Operating Systems for Business',
  description:
    'Duppy builds AI operating systems that connect your ERP, email, calendar, and CRM into one voice-driven interface — branded to your company, trained on your data, deployed in days.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  )
}
