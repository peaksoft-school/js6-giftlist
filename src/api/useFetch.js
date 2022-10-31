// import { URL_BASE } from '../utils/constants/constants'

export const useFetch = async (options, responseOption) => {
   try {
      const { url, body, method } = options
      console.log(url)

      const requestOptions = {
         method: method || 'GET',
         headers: true
            ? {
                 'Content-Type': 'application/json',
                 //   Authorization: `Bearer ${'token'}`,
              }
            : { 'Content-Type': 'application/json' },
      }
      if (method !== 'GET') {
         requestOptions.body = JSON.stringify(body || {})
         console.log(body, 'body')
      }
      const response = await fetch(url, requestOptions)
      console.log(response)
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
