import api from '@/util/api'

export async function createBook(formData: FormData) {
  const response = await api.post('books', {
    title: formData.get('title'),
    author: formData.get('author'),
    description: formData.get('description'),
    imageUrl: formData.get('imageUrl'),
  })

  console.log(response) 
}