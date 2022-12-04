import { createAsyncThunk } from '@reduxjs/toolkit'
import { useFetch } from '../../api/useFetch'
import { showError } from '../../utils/helpers/helpers'

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

export const wishReserved = createAsyncThunk(
   'lenta/wishReserved',
   async (data, { dispatch }) => {
      try {
         const response = await useFetch({
            url: `api/bookings/reserve/${data.id}?isAnonymous=${data.isAnonymous}`,
            method: 'POST',
         })
         dispatch(getLentaActions())
         return response
      } catch (error) {
         throw new Error(error.message)
      }
   }
)

export const wishUnReservation = createAsyncThunk(
   'lenta/wishUnReservation',
   async (id, { dispatch }) => {
      try {
         const response = await useFetch({
            url: `api/bookings/un-reservation/${id}`,
            method: 'POST',
         })
         dispatch(getLentaActions())
         if (response.message === 'Подарок не ваш!') {
            showError(response.message)
         }
         return response
      } catch (error) {
         throw new Error(error.message)
      }
   }
)

export const postHolidayinWish = createAsyncThunk(
   'lenta/postHolidayinWish',
   async (data) => {
      try {
         const response = await useFetch({
            url: `api/bookings/${data.wishId}/${data.id}`,
            method: 'POST',
         })
         return response
      } catch (error) {
         throw new Error(error.message)
      }
   }
)
