import axios from 'axios'

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: '92d161148c28e2b10108e31f8f441e93',
    language: 'pt-BR',
    page: 1
  }
})

export default api
