import { createSlice } from '@reduxjs/toolkit'
import {
   postProfile,
   getProfile,
   getProfileById,
   getProfileFullInfo,
   putProfile,
} from './ProfileActions'

export const initialState = {
   error: null,
   status: null,
   profile: [],
   userInfo: [],
}
const profileSlice = createSlice({
   name: 'profileSlice',
   initialState,
   reducers: {},
   extraReducers: {
      [postProfile.fulfilled]: (state) => {
         state.status = 'success'
      },
      [getProfile.pending]: (state) => {
         state.status = 'pending'
      },
      [getProfileFullInfo.fulfilled]: (state, action) => {
         state.userInfo = action.payload
      },
      [getProfile.fulfilled]: (state, action) => {
         state.status = 'success'
         state.profile = action.payload
      },
      [getProfile.rejected]: (state) => {
         state.status = 'rejected'
      },
      [getProfileById.pending]: (state) => {
         state.status = 'pending'
      },
      [getProfileById.rejected]: (state) => {
         state.status = 'rejected'
      },
      [putProfile.fulfilled]: (state) => {
         state.status = 'success'
      },
   },
})

export default profileSlice
// export const {} = wishSlice.actions
