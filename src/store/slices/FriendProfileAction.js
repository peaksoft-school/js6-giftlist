import { createAsyncThunk } from '@reduxjs/toolkit'
import { useFetch } from '../../api/useFetch'
import { showSuccess, showError } from '../../utils/helpers/helpers'
// import { getCharity, getCharityById } from './charityActions'

// get profile
export const getFriendProfile = createAsyncThunk(
   'friend/friendProfile',
   async (id) => {
      try {
         const response = await useFetch({
            url: `api/profile/${id}`,
         })
         return response
      } catch (error) {
         throw new Error(error.message)
      }
   }
)

// add requests to friend
export const addFriendRequests = createAsyncThunk(
   'postRequests/postFriendRequests',
   async (obj, { dispatch }) => {
      try {
         const response = await useFetch({
            method: 'POST',
            url: `api/friends/request/${obj.id}`,
         })
         dispatch(getFriendProfile(obj.id))
         return response
      } catch (error) {
         throw new Error(error.message)
      }
   }
)

// delete from friend
export const deleteFriends = createAsyncThunk(
   'friends/deleteFriends',
   async (obj, { dispatch }) => {
      try {
         const response = await useFetch({
            method: 'DELETE',
            url: `api/friends/${obj.id}`,
         })
         dispatch(getFriendProfile(obj.id))
         return response
      } catch (error) {
         throw new Error(error.message)
      }
   }
)

// wish
export const postReserveWish = createAsyncThunk(
   'bookings/reserveBookings',
   async (obj, { dispatch }) => {
      try {
         const response = await useFetch({
            method: 'POST',
            url: `api/bookings/reserve/${obj.wishId}?isAnonymous=${obj.isAnonymous}`,
         })

         dispatch(getFriendProfile(obj.id))

         showSuccess('Успешное бронирование!')
         return response
      } catch (error) {
         throw new Error(error.message)
      }
   }
)

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

export const unReservation = createAsyncThunk(
   'bookings/unReservationBookings',
   async (obj, { dispatch }) => {
      try {
         const response = await useFetch({
            method: 'POST',
            url: `api/bookings/un-reservation/${obj.wishId}`,
         })
         if (response.message === 'Не ваш благотворительность') {
            return showError('Не ваш благотворительность')
         }
         dispatch(getFriendProfile(obj.id))
         showSuccess('Успешно снять!')

         return response
      } catch (error) {
         throw new Error(error.message)
      }
   }
)

// charity

export const reservedCharity = createAsyncThunk(
   'charity/reservedCard',

   async (obj, { dispatch }) => {
      try {
         const response = await useFetch({
            url: `api/charities/reservation/${obj.charityId}?isAnonymously=${obj.isAnonymously}`,
            method: 'POST',
         })
         if (response.message === 'Благотворительность в резерве') {
            return showError('Благотворительность в резерве')
         }

         showSuccess('Успешно забронирован!')
         dispatch(getFriendProfile(obj.id))

         return response
      } catch (error) {
         throw new Error(error.message)
      }
   }
)

export const unReservedCharity = createAsyncThunk(
   'charity/unReservedCard',
   async (obj, { dispatch }) => {
      try {
         const response = await useFetch({
            url: `api/charities/un-reservation/${obj.charityId}`,
            method: 'POST',
         })
         if (response.message === 'Не ваш благотворительность') {
            return showError('Не ваш благотворительность')
         }
         showSuccess('Успешно снят!')
         dispatch(getFriendProfile(obj.id))
         return response
      } catch (error) {
         throw new Error(error.message)
      }
   }
)
