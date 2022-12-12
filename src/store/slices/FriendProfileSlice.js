import { createSlice } from '@reduxjs/toolkit'
import {
   getFriendProfile,
   postReserveWish,
   unReservation,
} from './FriendProfileAction'

const initialState = {
   friend: [],
   status: null,
}
const friendProfileSlice = createSlice({
   name: 'friend',
   initialState,
   reducers: {},
   extraReducers: {
      [getFriendProfile.fulfilled]: (state, action) => {
         state.friend = action.payload
         state.status = 'success'
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
   },
})
export const friendProfileSliceActions = friendProfileSlice.actions
export default friendProfileSlice
