// import { URL_BASE } from '../utils/constants/constants'

export const fileFetch = async (options) => {
   const token =
      'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJpc3MiOiJOdXJnYXp5IiwiZXhwIjoxNzMyMjAzNTg1LCJlbWFpbCI6ImFkbWluQGdtYWlsLmNvbSJ9.KP7eytoQ5CXLAwkmAOKPRi3bGpWPcTzIekqCkaZ78PanGOl0PbXhXAD3a91-S3cCYHEMpJDJ-svjJJtlqGT-pQ'
   try {
      const { url, body, method } = options
      console.log(body)
      const requestOptions = {
         method: method || 'POST',
         headers: {
            Authorization: `Bearer ${token}`,
         },
         body: body || {},
      }
      const response = await fetch(url, requestOptions)

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
