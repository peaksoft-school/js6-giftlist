import { createAsyncThunk } from '@reduxjs/toolkit'
import { useFetch } from '../../api/useFetch'
import { getCharity, getCharityById } from './charityActions'
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
   async (data, { dispatch }) => {
      try {
         const response = await useFetch({
            method: 'POST',
            url: `api/bookings/un-reservation/${data.id}`,
         })
         showSuccess('Успешно снять!')
         dispatch(getBookedGifts())
         return response
      } catch (error) {
         throw new Error(error.message)
      }
   }
)
export const unReservation = createAsyncThunk(
   'bookings/unReservationBookings',
   async (data, { dispatch }) => {
      try {
         const response = await useFetch({
            method: 'POST',
            url: `api/charities/un-reservation/${data.id}`,
         })
         showSuccess('Успешно снять!')
         dispatch(getBookedGifts())
         dispatch(getCharityById(data.id))
         dispatch(getCharity())
         return response
      } catch (error) {
         throw new Error(error.message)
      }
   }
)
