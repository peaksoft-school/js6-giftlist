import { createSlice } from '@reduxjs/toolkit'
import {
   addFriendRequests,
   cancelToFriendsAction,
   // cancelToFriendsAction,
   getFriendProfile,
   postReserveWish,
   unReservation,
} from './FriendProfileAction'

const initialState = {
   friend: [],
   status: false,
}
const friendProfileSlice = createSlice({
   name: 'friend',
   initialState,
   reducers: {},
   extraReducers: {
      [getFriendProfile.fulfilled]: (state, action) => {
         state.friend = action.payload
      },
      [postReserveWish.pending]: (state) => {
         state.status = 'pending'
      },
      [postReserveWish.fulfilled]: (state) => {
         state.status = 'success'
      },
      [postReserveWish.rejected]: (state) => {
         state.status = 'rejected'
      },
      [unReservation.pending]: (state) => {
         state.status = 'pending'
      },
      [unReservation.fulfilled]: (state) => {
         state.status = 'success'
      },
      [unReservation.rejected]: (state) => {
         state.status = 'rejected'
      },
      [addFriendRequests.fulfilled]: (state) => {
         state.status = true
      },
      [cancelToFriendsAction.fulfilled]: (state) => {
         state.status = false
      },
   },
})
export const friendProfileSliceActions = friendProfileSlice.actions
export default friendProfileSlice
