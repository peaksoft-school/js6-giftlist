import { createAsyncThunk } from '@reduxjs/toolkit'
import { useFetch } from '../../api/useFetch'

export const postForgotPassword = createAsyncThunk(
   'postForgotPassword',
   async (data) => {
      try {
         const resposne = await useFetch({
            method: 'POST',
            url: `api/public/forgot-password?email=${
               data.email
            }&link=${`http://localhost:3000/?test=FORGOT-PASSWORD`}`,
         })
         return resposne
      } catch (error) {
         throw new Error(error.message)
      }
   }
)

export const resetPassword = createAsyncThunk('resetPassword', async (data) => {
   console.log(data)
   try {
      const resposne = await useFetch({
         method: 'POST',
         url: 'api/public/change-password',
         body: data,
      })
      console.log(resposne)
      return resposne
   } catch (error) {
      throw new Error(error.message)
   }
})
