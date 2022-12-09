import { createAsyncThunk } from '@reduxjs/toolkit'
import { useFetch } from '../../api/useFetch'
import { getFriendProfile } from './FriendProfileAction'
import { showSuccess } from '../../utils/helpers/helpers'

// get all friends
export const getFriends = createAsyncThunk('friends/getFriends', async () => {
   try {
      const response = await useFetch({
         url: `api/friends`,
      })
      return response
   } catch (error) {
      throw new Error(error.message)
   }
})

// get all requests
export const getFriendRequest = createAsyncThunk(
   'requests/getFriendRequest',
   async () => {
      try {
         const response = await useFetch({
            url: `api/friends/requests`,
         })
         return response
      } catch (error) {
         throw new Error(error.message)
      }
   }
)

// cancel request to friend
export const cancelFriendRequests = createAsyncThunk(
   'cancelRequest/cancelFriendRequests',
   async (obj) => {
      try {
         const response = await useFetch({
            method: 'POST',
            url: `api/friends/cancel/${obj.id}`,
         })
         obj.dispatch(getFriendRequest())
         showSuccess('Успешно отклонен!')
         return response
      } catch (error) {
         throw new Error(error.message)
      }
   }
)

// accept requests to friend
export const acceptFriendRequests = createAsyncThunk(
   'friends/acceptFriendRequests',
   async (id, { dispatch }) => {
      try {
         const response = await useFetch({
            method: 'POST',
            url: `api/friends/accept/${id}`,
         })
         dispatch(getFriendRequest())
         dispatch(getFriends())
         showSuccess('Успешно добавлен!')
         return response
      } catch (error) {
         throw new Error(error.message)
      }
   }
)

export const acceptRequestInnerPage = createAsyncThunk(
   'friends/acceptRequest',
   async (obj, { dispatch }) => {
      try {
         const response = await useFetch({
            method: 'POST',
            url: `api/friends/accept/${obj.id}`,
         })
         dispatch(getFriendProfile(obj.id))
         showSuccess('Успешно добавлен!')
         return response
      } catch (error) {
         throw new Error(error.message)
      }
   }
)

// reject requests to friend
export const rejectFriendRequests = createAsyncThunk(
   'rejectRequest/recectFriendRequests',
   async (id, { dispatch }) => {
      try {
         const response = await useFetch({
            method: 'POST',
            url: `api/friends/reject/${id}`,
         })
         dispatch(getFriendRequest())
         showSuccess('Успешно отклонен!')
         return response
      } catch (error) {
         throw new Error(error.message)
      }
   }
)

export const rejectRequestInnerPage = createAsyncThunk(
   'friends/rejectRequest',
   async (obj, { dispatch }) => {
      try {
         const response = await useFetch({
            method: 'POST',
            url: `api/friends/reject/${obj.id}`,
         })
         dispatch(getFriendProfile(obj.id))
         showSuccess('Успешно отклонен!')
         return response
      } catch (error) {
         throw new Error(error.message)
      }
   }
)
