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

export const getLentaById = createAsyncThunk(
   'lenta/getLentaById',
   async (id) => {
      try {
         const response = await useFetch({
            url: `api/feed/${id}`,
         })
         return response
      } catch (err) {
         throw new Error(err)
      }
   }
)

export const bookedReserved = createAsyncThunk(
   'lenta/bookedReserved',
   async (data) => {
      try {
         const response = await useFetch({
            url: `api/bookings/reserve/${data.id}?isAnonymous${data.isAnonymous}`,
         })
         return response
      } catch (error) {
         throw new Error(error.message)
      }
   }
)
