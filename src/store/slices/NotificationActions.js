import { createAsyncThunk } from '@reduxjs/toolkit'
import useFetch from '../../api/useFetch'

export const getAllNotifications = createAsyncThunk(
   'notifications/getAllNotifications',
   async () => {
      try {
         const response = await useFetch({
            url: 'api/notifications',
         })
         return response
      } catch (error) {
         throw new Error(error)
      }
   }
)
export const readNotifications = createAsyncThunk(
   'read/asReadActions',
   async (_, { dispatch }) => {
      try {
         const response = await useFetch({
            method: 'POST',
            url: 'api/notifications',
         })
         dispatch(getAllNotifications())
         return response
      } catch (error) {
         throw new Error(error)
      }
   }
)
