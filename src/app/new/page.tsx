'use client'

import { createBook } from '@/app/actions'

import { Formik } from 'formik'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import FormGroup from 'react-bootstrap/FormGroup'
import FormControl from 'react-bootstrap/FormControl'
import FloatingLabel from 'react-bootstrap/FloatingLabel'

export default function NewBook() {
  return (
    <main>
      <h1>Add a new book</h1>

      <Formik initialValues={{} as any} onSubmit={createBook}>
        {({ values, errors, handleChange, handleBlur, handleSubmit }) => (
          <Form onSubmit={handleSubmit}>
            <div className="d-grid gap-3 mb-3">
              <FormGroup>
                <FloatingLabel label="Title">
                  <FormControl name="title"
                    placeholder="Enter book title"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </FloatingLabel>
              </FormGroup>
              <FormGroup>
                <FloatingLabel label="Author">
                  <FormControl name="author"
                    placeholder="Enter book author"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </FloatingLabel>
              </FormGroup>
              <FormGroup>
                <FloatingLabel label="Description">
                  <FormControl name="description"
                    as="textarea"
                    rows={5}
                    placeholder="Enter book description"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </FloatingLabel>
              </FormGroup>
              <FormGroup>
                <FloatingLabel label="Image URL">
                  <FormControl name="imageUrl"
                    placeholder="Enter an image url for this book"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </FloatingLabel>
              </FormGroup>
            </div>

            <Button type="submit">
              Save
            </Button>
          </Form>
        )}
      </Formik>
    </main>
  )
}