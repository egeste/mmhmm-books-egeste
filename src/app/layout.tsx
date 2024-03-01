import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import Container from 'react-bootstrap/Container'

import './theme.scss'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Container>
          {children}
        </Container>
      </body>
    </html>
  )
}
