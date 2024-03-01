'use client'

import { useCallback } from 'react'
import { createBook } from '@/app/actions'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import FormGroup from 'react-bootstrap/FormGroup'
import FormControl from 'react-bootstrap/FormControl'
import FloatingLabel from 'react-bootstrap/FloatingLabel'
import CloseButton from 'react-bootstrap/CloseButton'
import { FormLabel } from 'react-bootstrap'

export default function NewBook() {
  const onClickClose = useCallback(() => {
    window.location.pathname = '/'
  }, [])

  const onCreateBook = useCallback(async (formData : FormData) => {
    const result = await createBook(formData)
    onClickClose()
  }, [onClickClose])

  return (
    <main>
      <section className="d-flex justify-content-between align-items-center">
        <h1>Add a new book</h1>
        <CloseButton onClick={onClickClose} />
      </section>

      <Form action={onCreateBook}>
        <div className="d-grid gap-5 my-5">
          <FormGroup>
            <FloatingLabel label="Title">
              <FormControl name="title" placeholder="Enter book title" />
            </FloatingLabel>
          </FormGroup>
          <FormGroup>
            <FloatingLabel label="Author">
              <FormControl name="author" placeholder="Enter book author" />
            </FloatingLabel>
          </FormGroup>
          <FormGroup>
            <FormLabel>Description</FormLabel>
            <FormControl name="description"
              as="textarea"
              rows={5} placeholder="Enter book description" />
          </FormGroup>
          <FormGroup>
            <FloatingLabel label="Image URL">
              <FormControl name="imageUrl" placeholder="Enter an image url for this book" />
            </FloatingLabel>
          </FormGroup>
        </div>

        <Button type="submit">
          Save
        </Button>
      </Form>
    </main>
  )
}