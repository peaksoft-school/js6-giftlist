import { createAsyncThunk } from '@reduxjs/toolkit'
import { useFetch } from '../../api/useFetch'

export const getNotification = createAsyncThunk(
   'notification/getNotification',
   async () => {
      try {
         const response = await useFetch({
            url: 'api/notifications',
         })
         return response
      } catch (error) {
         throw new Error(error.message)
      }
   }
)
export const allAsReadNotification = createAsyncThunk(
   'notification/allAsReadNotification',
   async (_, { dispatch }) => {
      try {
         const response = await useFetch({
            url: 'api/notifications',
            method: 'POST',
         })
         dispatch(getNotification())

         console.log(response, 'respnse')
         return response
      } catch (error) {
         throw new Error(error.message)
      }
   }
)