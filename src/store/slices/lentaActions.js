import { createAsyncThunk } from '@reduxjs/toolkit'
import { useFetch } from '../../api/useFetch'

export const getLentaActions = createAsyncThunk(
   'feed/getLentaActions',
   async () => {
      try {
         const response = await useFetch({
            url: 'api/feed',
         })
         return response
      } catch (err) {
         throw new Error(err)
      }
   }
)

export const getSingleHoliday = createAsyncThunk(
   'lenta/getSingleHoliday',
   async (id) => {
      try {
         const response = await useFetch({
            url: `api/holidays/${id}`,
         })
         return response
      } catch (err) {
         throw new Error(err)
      }
   }
)
