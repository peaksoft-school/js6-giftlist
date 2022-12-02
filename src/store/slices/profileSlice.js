import { createSlice } from '@reduxjs/toolkit'
import {
   getProfile,
   getProfileById,
   postProfile,
   putProfile,
} from './ProfileActions'

export const initialState = {
   error: null,
   status: null,
   profile: [],
}
const profileSlice = createSlice({
   name: 'profileSlice',
   initialState,
   reducers: {},
   extraReducers: {
      [postProfile.pending]: (state) => {
         state.status = 'pending'
      },
      [postProfile.fulfilled]: (state) => {
         state.status = 'success'
      },
      [postProfile.rejected]: (state) => {
         state.status = 'rejected'
      },
      [getProfile.pending]: (state) => {
         state.status = 'pending'
      },
      [getProfile.fulfilled]: (state, action) => {
         console.log(action.payload, 'getProfile')
         state.status = 'success'
         state.profile = action.payload
      },
      [getProfile.rejected]: (state) => {
         state.status = 'rejected'
      },
      [getProfileById.pending]: (state) => {
         state.status = 'pending'
      },
      [getProfileById.fulfilled]: () => {},
      [getProfileById.rejected]: (state) => {
         state.status = 'rejected'
      },
      [putProfile.pending]: (state) => {
         state.status = 'pending'
      },
      [putProfile.rejected]: (state) => {
         state.status = 'rejected'
      },
      [putProfile.fulfilled]: (state) => {
         state.status = 'success'
      },
   },
})

export default profileSlice
// export const {} = wishSlice.actions
