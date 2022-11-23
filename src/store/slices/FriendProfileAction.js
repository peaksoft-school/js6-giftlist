import { createAsyncThunk } from '@reduxjs/toolkit'
import { useFetch } from '../../api/useFetch'

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

// post requests to friend
export const addFriendRequests = createAsyncThunk(
   'postRequests/postFriendRequests',
   async (obj) => {
      try {
         const response = await useFetch({
            method: 'POST',
            url: `api/friends/request/${obj.id}`,
         })
         obj.dispatch(getFriendProfile(obj.id))
         console.log(response, 'response')
         return response
      } catch (error) {
         throw new Error(error.message)
      }
   }
)

// delete from friend
export const deleteFriends = createAsyncThunk(
   'friends/deleteFriends',
   async (obj) => {
      try {
         const response = await useFetch({
            method: 'DELETE',
            url: `api/friends/${obj.id}`,
         })
         obj.dispatch(getFriendProfile(obj.id))
         return response
      } catch (error) {
         throw new Error(error.message)
      }
   }
)