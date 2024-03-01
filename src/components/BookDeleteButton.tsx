'use client'

import Button from 'react-bootstrap/Button'
import { FaTrashCan } from 'react-icons/fa6'

import api from '@/util/api'

interface BookDeleteButtonProps {
  book : Book
}

export default function BookDeleteButton({ book } : BookDeleteButtonProps) {
  const onClickDelete = (book : Book) => async () => {
    await api.delete(`/books/${book.id}`)
    window.location.reload()
  }

  return (
    <Button variant="link"
      className="float-end text-muted p-0"
      title="Delete this book"
      onClick={onClickDelete(book)}
    >
      <FaTrashCan />
    </Button>
  )
}
