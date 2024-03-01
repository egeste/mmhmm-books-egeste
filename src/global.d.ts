interface BookForm {
  description : string
  imageUrl : string
  author : string
  title : string
}

interface Book extends BookForm {
  id : string
}
