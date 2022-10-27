import { URL_BASE } from '../utils/constants/constans'

export const fileFetch = async (options) => {
   const token = 'token'
   try {
      const { path, body, method } = options

      const requestOptions = {
         method: method || 'POST',
         headers: {
            Authorization: `Bearer ${token}`,
         },
         body: body || {},
      }
      const response = await fetch(`${URL_BASE}/${path}`, requestOptions)

      const result = await response.json()
      if (!response.ok) {
         let errorMessage = 'Что-то пошло не так'
         if (result && result.message) {
            errorMessage = result.message
         }
         throw new Error(errorMessage)
      }
      return result
   } catch (e) {
      throw new Error(e.message)
   }
}
