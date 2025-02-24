import type { Metadata } from 'next'

import './globals.css'

import { Open_Sans, Source_Code_Pro } from 'next/font/google'
 
 const sourcecodepro = Source_Code_Pro({
  subsets: ['latin'],
  display: 'swap'
})
 
const opensans = Open_Sans({
  subsets: ['latin'],
  display: 'swap' 
})


export const metadata: Metadata = {
  title: 'Kevin J Landymore',
  description: 'Public profile for Kevin J Landymore',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={opensans.className}>{children}</body>
    </html>
  )
}
