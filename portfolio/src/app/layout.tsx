import type { Metadata } from 'next'
import { Kanit } from 'next/font/google'
import './globals.css'

const kanit = Kanit({ weight: "400", subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Caroline Robbins',
  description: 'Caroline Robbins',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={kanit.className}>{children}</body>
    </html>
  )
}
