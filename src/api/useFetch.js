// import { URL_BASE } from '../utils/constants/constants'

export const useFetch = async (options) => {
   const token = JSON.parse(localStorage.getItem('jwt'))
   console.log(token)

   try {
      const { url, body, method } = options

      const requestOptions = {
         method: method || 'GET',
         headers: token
            ? {
                 Authorization: `Bearer ${token}`,
                 'Content-Type': 'application/json',
              }
            : { 'Content-Type': 'application/json' },
      }
      if (method !== 'GET' && body) {
         requestOptions.body = JSON.stringify(body || {})
      }
      const response = await fetch(url, requestOptions)
      console.log(response, 'reeee')

      if (!response.ok) {
         throw new Error('Что-то пошло не так')
      }
      return response.json()
   } catch (e) {
      throw new Error(e.message)
   }
}
