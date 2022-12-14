import { createAsyncThunk } from '@reduxjs/toolkit'
import { useFetch } from '../../api/useFetch'
import { showSuccess } from '../../utils/helpers/helpers'

export const postForgotPassword = createAsyncThunk(
   'postForgotPassword',
   async (data) => {
      try {
         const resposne = await useFetch({
            method: 'PUT',
            url: `api/public/forgot-password?email=${data.email}&link=http://localhost:3000/?test=FORGOT-PASSWORD`,
         })
         showSuccess('Ссылка отправлено')
         return resposne
      } catch (error) {
         throw new Error(error.message)
      }
   }
)

export const resetPassword = createAsyncThunk('resetPassword', async (data) => {
   try {
      const resposne = await useFetch({
         method: 'PUT',
         url: 'api/public/change-password',
         body: data,
      })

      showSuccess('Успешно изменено')
      return resposne
   } catch (error) {
      throw new Error(error.message)
   }
})
