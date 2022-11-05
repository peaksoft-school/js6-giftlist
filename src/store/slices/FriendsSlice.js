import { createSlice } from '@reduxjs/toolkit'
import { getFriendRequestAction, getFriendsAction } from './FriendsActions'

const initialState = {
   friends: [],
   friendRequests: [],
   status: null,
}

export const friendsSlice = createSlice({
   name: 'friends',
   initialState,
   reducers: {},
   extraReducers: {
      [getFriendsAction.fulfilled]: (state, action) => {
         state.friends = action.payload
         state.status = 'success'
      },
   },
})

export const friendsSliceAction = friendsSlice.actions

export const friendRequestsSlice = createSlice({
   name: 'friendRequests',
   initialState,
   reducers: {},
   extraReducers: {
      [getFriendRequestAction.fulfilled]: (state, action) => {
         state.friendRequests = action.payload
         state.status = 'success'
      },
   },
})
export const friendRequestsSliceActions = friendRequestsSlice.actions
