import { URL_BASE } from '../utils/constants/constants'
import { getToken } from '../utils/helpers/helpers'

export const fileFetch = async (options) => {
   const token = getToken()
   try {
      const { url, body, method } = options

      const requestOptions = {
         method: method || 'POST',
         headers: {
            Authorization: `Bearer ${token}`,
         },
         body: body || {},
      }
<<<<<<< HEAD
      const response = await fetch(url, requestOptions)
=======
      const response = await fetch(`${URL_BASE}/${url}`, requestOptions)
>>>>>>> 02c7d283404ed19220964344ba50efdff78d7a0e

      const result = await response.json()
      if (!response.ok) {
         throw new Error('Что-то пошло не так')
      }
      return result
   } catch (e) {
      throw new Error(e.message)
   }
}
