import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Juli Foundation',
  description: 'Juli Education Foundation is a charitable non-government organization ',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">

      <body>{children}</body>
    </html>
  )
}
