import { createAsyncThunk } from '@reduxjs/toolkit'
import { useFetch } from '../../api/useFetch'

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
         return response
      } catch (error) {
         throw new Error(error.message)
      }
   }
)

// accept requests to friend
export const acceptFriendRequests = createAsyncThunk(
   'friends/acceptFriendRequests',
   async (obj) => {
      try {
         const response = await useFetch({
            method: 'POST',
            url: `api/friends/accept/${obj.id}`,
         })
         obj.dispatch(getFriendRequest())
         // console.log(obj)
         return response
      } catch (error) {
         throw new Error(error.message)
      }
   }
)

// reject requests to friend
export const rejectFriendRequests = createAsyncThunk(
   'rejectRequest/recectFriendRequests',
   async (obj) => {
      try {
         const response = await useFetch({
            method: 'POST',
            url: `api/friends/reject/${obj.id}`,
         })
         obj.dispatch(getFriendRequest())
         return response
      } catch (error) {
         throw new Error(error.message)
      }
   }
)
