import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'https://us-central1-all-turtles-interview.cloudfunctions.net',
  headers: { 'Authorization': `steveregester` }
})

export default apiClient
