import { URL_BASE } from '../utils/constants/constants'
import { getToken } from '../utils/helpers/helpers'

export const fileFetch = async (options) => {
   const token = getToken()
   try {
      const { url, method } = options
      const requestOptions = {
         method: method || 'POST',
         headers: {
            Authorization: `Bearer ${token}`,
         },
         body: options.body,
      }
      const response = await fetch(`${URL_BASE}/${url}`, requestOptions)
      const result = await response.json()
      if (!response.ok) {
         throw new Error(result.message)
      }
      return result
   } catch (e) {
      throw new Error(e.message)
   }
}
