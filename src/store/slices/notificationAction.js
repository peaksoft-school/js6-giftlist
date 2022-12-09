import { createAsyncThunk } from '@reduxjs/toolkit'
import { useFetch } from '../../api/useFetch'

export const getNotification = createAsyncThunk(
   'notification/getNotification',
   async () => {
      try {
         const response = await useFetch({
            url: 'api/notifications',
         })
         console.log(response, 'respnse')
         return response
      } catch (error) {
         throw new Error(error.message)
      }
   }
)
