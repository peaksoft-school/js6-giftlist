import { URL_BASE } from '../utils/constants/constants'
import { getToken } from '../utils/helpers/Helper'

const token = getToken()

export const useFetch = async (options, responseOption) => {
   try {
      const { url, body, method } = options

      const requestOptions = {
         method: method || 'GET',
         headers: 'token'
            ? {
                 'Content-Type': 'application/json',
                 Authorization: `Bearer ${token}`,
              }
            : { 'Content-Type': 'application/json' },
      }
      if (method !== 'GET') {
         requestOptions.body = JSON.stringify(body || {})
      }

      const response = await fetch(`${URL_BASE}/${url}`, requestOptions)
      const result = responseOption?.asText
         ? await response.text()
         : await response.json()

      if (!response.ok) {
         throw new Error('Что-то пошло не так')
      }
      return result
   } catch (e) {
      throw new Error(e.message)
   }
}
