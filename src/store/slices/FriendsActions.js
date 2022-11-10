import { createAsyncThunk } from '@reduxjs/toolkit'
import { useFetch } from '../../api/useFetch'

// get all friends
export const getFriends = createAsyncThunk(
   'friends/getAllUsersAction',
   async () => {
      try {
         const response = await useFetch({
            url: `http://3.70.207.7/api/friends`,
         })
         return response
      } catch (error) {
         throw new Error(error.message)
      }
   }
)

// get all requests
export const getFriendRequest = createAsyncThunk(
   'requests/getAllRequestsAction',
   async () => {
      try {
         const response = await useFetch({
            url: `http://3.70.207.7/api/friends/requests`,
         })
         return response
      } catch (error) {
         throw new Error(error.message)
      }
   }
)


// post requests to friend
export const postFriendRequests = createAsyncThunk(
   'postRequests/postFriendRequestsAction',
   async (obj) => {
      try {
         const response = await useFetch({
            method: 'POST',
            url: `http://3.70.207.7/api/friends/request/${obj.id}`,
         })
         obj.dispatch(getFriends(obj.userId))
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
            url: `http://3.70.207.7/api/friends/cancel/${obj.id}`,
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
   'acceptRequest/acceptFriendRequests',
   async (obj) => {
      try {
         const response = await useFetch({
            method: 'POST',
            url: `http://3.70.207.7/api/friends/accept/${obj.id}`,
         })
         obj.dispatch(getFriendRequest())
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
            url: `http://3.70.207.7/api/friends/reject/${obj.id}`,
         })
         obj.dispatch(getFriendRequest())
         return response
      } catch (error) {
         throw new Error(error.message)
      }
   }
)

// delete from friend
export const deleteFriends = createAsyncThunk(
   'friend/deleteFriendAction',
   async (obj) => {
      try {
         const response = await useFetch({
            method: 'DELETE',
            url: `http://3.70.207.7/api/friends/${obj.id}`,
         })
         obj.dispatch(getFriendRequest(obj.id))
         return response
      } catch (error) {
         throw new Error(error.message)
      }
   }
)
