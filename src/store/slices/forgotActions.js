import { createAsyncThunk } from '@reduxjs/toolkit'
import { useFetch } from '../../api/useFetch'

export const postForgotPassword = createAsyncThunk(
   'postForgotPassword',
   async (data) => {
      console.log(data)
      try {
         const resposne = await useFetch({
            method: 'POST',
            url: `api/public/forgot-password?email=${
               data.email
            }&link=${'http://localhost:3000/?open=FORGOT-PASSWORD'}`,
         })
         console.log(resposne)
         return resposne
      } catch (error) {
         console.log(error)
         throw new Error(error.message)
      }
   }
)
