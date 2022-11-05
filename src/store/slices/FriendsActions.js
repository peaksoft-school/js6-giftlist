import { createAsyncThunk } from '@reduxjs/toolkit'
import { useFetch } from '../../api/useFetch'

// get all friends
export const getFriendsAction = createAsyncThunk(
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
export const getFriendRequestAction = createAsyncThunk(
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
export const postFriendRequestsAction = createAsyncThunk(
   'friendRequests/postFriendRequestsAction',
   async (id) => {
      try {
         const response = await useFetch({
            method: 'POST',
            url: `http://3.70.207.7/api/friends/request/${id}`,
         })
         id.dispatch(getFriendsAction(id.userId))
         return response
      } catch (error) {
         throw new Error(error.message)
      }
   }
)

// cancel request to friend ?????
export const cancelFriendRequests = createAsyncThunk(
   'cancelRequest/cancelFriendRequests',
   async (id) => {
      try {
         const response = await useFetch({
            method: 'POST',
            url: `http://3.70.207.7/api/friends/cancel/${id}`,
         })
         id.dispatch(getFriendRequestAction())
         return response
      } catch (error) {
         throw new Error(error.message)
      }
   }
)

// accept requests to friend
export const acceptFriendRequests = createAsyncThunk(
   'acceptRequest/acceptFriendRequests',
   async (id) => {
      try {
         const response = await useFetch({
            method: 'POST',
            url: `http://3.70.207.7/api/friends/accept/${id}`,
         })
         id.dispatch(getFriendRequestAction())
         return response
      } catch (error) {
         throw new Error(error.message)
      }
   }
)

// reject requests to friend
export const rejectFriendRequests = createAsyncThunk(
   'rejectRequest/recectFriendRequests',
   async (id) => {
      try {
         const response = await useFetch({
            method: 'POST',
            url: `http://3.70.207.7/api/friends/reject/${id}`,
         })
         id.dispatch(getFriendRequestAction())
         return response
      } catch (error) {
         throw new Error(error.message)
      }
   }
)

// delete from friend
export const deleteFriendAction = createAsyncThunk(
   'friend/deleteFriendAction',
   async (id) => {
      try {
         const response = await useFetch({
            method: 'DELETE',
            url: `http://3.70.207.7/api/friends/${id}`,
         })
         id.dispatch(getFriendRequestAction(id.userId))
         return response
      } catch (error) {
         throw new Error(error.message)
      }
   }
)
