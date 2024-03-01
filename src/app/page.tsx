'use server'

import Link from 'next/link'
import api from '@/util/api'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

export default async function Home() {
  const booksResponse = await api.get('/books')
  const books : Book[] = booksResponse.data

  return (
    <main>
      
      {books.map(book => (
        <Card key={book.id} body>
          <pre>{JSON.stringify(book, null, 2)}</pre>
        </Card>
      ))}

      <Button as={Link as any} href="/new">
        Add Book
      </Button>
      
    </main>
  )
}
