import { createAsyncThunk } from '@reduxjs/toolkit'
import { useFetch } from '../../api/useFetch'

import { showSuccess } from '../../utils/helpers/helpers'

export const getBookedWishes = createAsyncThunk(
   'bookings/getBookingsWishes',
   async () => {
      try {
         const response = await useFetch({
            url: 'api/bookings/wishes',
         })
         return response
      } catch (error) {
         throw new Error(error)
      }
   }
)
export const getBookedGifts = createAsyncThunk(
   'bookingsGiftsCard/getBookingsGifts',
   async () => {
      try {
         const response = await useFetch({
            url: 'api/bookings/gifts',
         })
         return response
      } catch (error) {
         throw new Error(error)
      }
   }
)

// post
export const addBookingsWish = createAsyncThunk(
   'bookings/addBookings',
   async (obj) => {
      try {
         const response = await useFetch({
            method: 'POST',
            url: `api/bookings/${obj.id}/${obj.holId}`,
         })
         showSuccess('Успешно добавлен!')
         return response
      } catch (error) {
         throw new Error(error)
      }
   }
)

export const postUnReservation = createAsyncThunk(
   'bookings/unReservationBookings',
   async (id, { dispatch }) => {
      try {
         const response = await useFetch({
            method: 'POST',
            url: `api/bookings/un-reservation/${id}`,
         })
         dispatch(getBookedWishes())
         dispatch(getBookedGifts())
         showSuccess('Успешно снять бронь!')
         return response
      } catch (error) {
         throw new Error(error.message)
      }
   }
)
export const postReserveWish = createAsyncThunk(
   'bookings/reserveBookings',
   async (id, { dispatch }) => {
      try {
         const response = await useFetch({
            method: 'POST',
            url: `api/bookings/reserve/${id}`,
         })
         dispatch(getBookedWishes())
         dispatch(getBookedGifts())
         showSuccess('Успешное бронирование!')
         return response
      } catch (error) {
         throw new Error(error.message)
      }
   }
)
