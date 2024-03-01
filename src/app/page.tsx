import Link from 'next/link'

import Card from 'react-bootstrap/Card'
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'

import BookDeleteButton from '@/components/BookDeleteButton'

import api from '@/util/api'

const DESCRIPTION_TRUNCATE_LENGTH = 200

export const dynamic = 'force-dynamic'

export default async function Home() {
  const booksResponse = await api.get('/books')
  const books : Book[] = booksResponse.data

  return (
    <main>
      <section className="d-flex justify-content-between align-items-center">
        <h1>Bookshelf</h1>
        <Button as={Link as any} href="/new" title="Create new book">
          Add Book
        </Button>
      </section>

      <section className="d-grid gap-5 my-5">
        {books.map(book => (
          <Card key={book.id} body className="shadow">
            <Image src={book.imageUrl} alt={book.title} className="float-start me-3" />
            <div className="d-grid gap-3">
              <header>
                <BookDeleteButton book={book} />
                <h4 className="m-0">{book.title}</h4>
              </header>
              <small className="text-muted">{book.author}</small>
              <p className="m-0" title={book.description}>
                {book.description.substring(0, DESCRIPTION_TRUNCATE_LENGTH)}
                {(book.description.length > DESCRIPTION_TRUNCATE_LENGTH) && '...'}
              </p>
            </div>
          </Card>
        ))}
      </section>
    </main>
  )
}
