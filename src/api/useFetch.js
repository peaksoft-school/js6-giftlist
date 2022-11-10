import { URL_BASE } from '../utils/constants/constants'

import { getToken } from '../utils/helpers/helpers'

const token = getToken()

export const useFetch = async (options, responseConfig) => {
   try {
      const { url, body, method } = options

      const requestOptions = {
         method: method || 'GET',
         headers: token
            ? {
                 'Content-Type': 'application/json',
                 Authorization: `Bearer ${token}`,
              }
            : { 'Content-Type': 'application/json' },
      }
      if (method !== 'GET' && body) {
         requestOptions.body = JSON.stringify(body || {})
      }
<<<<<<< HEAD

      const response = await fetch(`${url}`, requestOptions)
      const result = responseOption?.asText
=======
      const response = await fetch(`${URL_BASE}/${url}`, requestOptions)
      const result = responseConfig?.asText
>>>>>>> 02c7d283404ed19220964344ba50efdff78d7a0e
         ? await response.text()
         : await response.json()
      if (!response.ok) {
         throw new Error(result.message)
      }
      return result
   } catch (e) {
      throw new Error(e.message)
   }
}
