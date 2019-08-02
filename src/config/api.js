import { create } from 'apisauce'
 
// define the api
const api = create({
  baseURL: 'http://localhost:8000/api/v1',
  headers: { Accept: 'application/json' },
})

export default api;