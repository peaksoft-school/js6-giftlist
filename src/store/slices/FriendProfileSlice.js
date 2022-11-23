import { createSlice } from '@reduxjs/toolkit'
import { getFriendProfile } from './FriendProfileAction'

const initialState = {
   friend: [],
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
   },
})
export const friendProfileSliceActions = friendProfileSlice.actions
export default friendProfileSlice
