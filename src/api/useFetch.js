export const useFetch = async (options, responseOption) => {
   try {
      const { url, body, method } = options

      const requestOptions = {
         method: method || 'GET',
         headers: 'token'
            ? {
                 'Content-Type': 'application/json',
                 Authorization: `Bearer ${'token'}`,
              }
            : { 'Content-Type': 'application/json' },
      }
      if (method !== 'GET') {
         requestOptions.body = JSON.stringify(body || {})
      }

      const response = await fetch(`${'serverBaseUrl'}/${url}`, requestOptions)
      const result = responseOption?.asText
         ? await response.text()
         : await response.json()

      if (!response.ok) {
         let errorMessage = 'Something went wrong'
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
