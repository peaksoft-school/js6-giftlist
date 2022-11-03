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
      const response = await fetch(`${URL_BASE}/${url}`, requestOptions)
      const result = responseConfig?.asText
         ? await response.text()
         : await response.json()
      if (!response.ok) {
         throw new Error(result.message)
      }
      console.log(result, 'resutlll')
      return result
   } catch (e) {
      console.log(e, 'useFetch')
      throw new Error(e.message)
   }
}
