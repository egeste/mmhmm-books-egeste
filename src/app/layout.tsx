import type { Metadata } from 'next'

import Container from 'react-bootstrap/Container'

import './theme.scss'

export const metadata: Metadata = {
  title: 'mmhmm web take home challenge',
  description: 'For this take home challenge, you\'ll be building a React app to manage the books on your bookshelf. Even though we don\'t sell books at mmhmm (yet), displaying content in cards like this is surprisingly similar to how we display video thumbnails.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <Container className="my-5" style={{ width: 600 }}>
          {children}
        </Container>
      </body>
    </html>
  )
}
