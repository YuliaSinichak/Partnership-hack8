import './globals.css'
import type { Metadata } from 'next'

import { inter } from './fonts'

import Providers from '@/redux/Providers'

export const metadata: Metadata = {
  title: 'Partnership Hackath0n`8',
  description: 'Best Hackath0n`8 partnership broshure',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-black`}>{children}</body>
    </html>
  )
}
