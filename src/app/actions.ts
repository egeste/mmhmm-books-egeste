import api from '@/util/api'
import * as yup from 'yup'

const bookValidator = yup.object().shape({
  title: yup.string()
    .max(255, 'Title exceeds max length (255)')
    .required('Title is required'),
  author: yup.string()
    .max(255, 'Name exceeds max length (255)')
    .required('Author is required'),
  description: yup.string()
    .required('Description is required'),
  imageUrl: yup.string()
    .url('Must be a valid URL')
    .required('Image URL is required')
}).required()

export async function createBook(formData: FormData) {
  const inputBook = {
    title: formData.get('title'),
    author: formData.get('author'),
    description: formData.get('description'),
    imageUrl: formData.get('imageUrl'),
  }

  // Will throw if there's a validation error
  const validatedBook = await bookValidator.validate(inputBook)

  // Will throw if the API call fails
  await api.post('books', validatedBook)
}
