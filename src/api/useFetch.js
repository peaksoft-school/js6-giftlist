// import { URL_BASE } from '../utils/constants/constants'

export const useFetch = async (options) => {
   const token =
      'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJpc3MiOiJOdXJnYXp5IiwiZXhwIjoxNzMyMjAzNTg1LCJlbWFpbCI6ImFkbWluQGdtYWlsLmNvbSJ9.KP7eytoQ5CXLAwkmAOKPRi3bGpWPcTzIekqCkaZ78PanGOl0PbXhXAD3a91-S3cCYHEMpJDJ-svjJJtlqGT-pQ'
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

      const response = await fetch(url, requestOptions)

      if (!response.ok) {
         throw new Error('Что-то пошло не так')
      }
      return response.json()
   } catch (e) {
      throw new Error(e.message)
   }
}
