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
      <section className="d-flex justify-content-between">
        <h1>Bookshelf</h1>
        <Button as={Link as any} href="/new">
          Add Book
        </Button>
      </section>

      {books.map(book => (
        <Card key={book.id} body>
          <pre>{JSON.stringify(book, null, 2)}</pre>
        </Card>
      ))}
    </main>
  )
}
