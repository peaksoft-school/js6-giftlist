import { createSlice } from '@reduxjs/toolkit'
import {
   deleteCharity,
   getCharity,
   getCharityById,
   postCharity,
   putCharity,
} from './charityActions'

export const initialState = {
   error: null,
   status: null,
   charity: [],
   singleCharity: {},
}
const charitySlice = createSlice({
   name: 'charity',
   initialState,
   reducers: {},
   extraReducers: {
      [postCharity.pending]: (state) => {
         state.status = 'pending'
      },
      [postCharity.fulfilled]: (state) => {
         state.status = 'success'
      },
      [postCharity.rejected]: (state) => {
         state.status = 'rejected'
      },
      [getCharity.pending]: (state) => {
         state.status = 'pending'
      },
      [getCharity.fulfilled]: (state, action) => {
         state.status = 'success'
         state.charity = action.payload
      },
      [getCharity.rejected]: (state) => {
         state.status = 'rejected'
      },
      [getCharityById.pending]: (state) => {
         state.status = 'pending'
      },
      [getCharityById.fulfilled]: (state, action) => {
         state.singleCharity = action.payload
         state.status = 'success'
      },
      [getCharity.rejected]: (state) => {
         state.status = 'rejected'
      },
      [putCharity.pending]: (state) => {
         state.status = 'pending'
      },
      [putCharity.rejected]: (state) => {
         state.status = 'rejected'
      },
      [putCharity.fulfilled]: (state) => {
         state.status = 'success'
      },
      [deleteCharity.pending]: (state) => {
         state.status = 'pending'
      },
      [deleteCharity.rejected]: (state) => {
         state.status = 'rejected'
      },
      [deleteCharity.fulfilled]: (state) => {
         state.status = 'success'
      },
   },
})

export default charitySlice
// export const {} = wishSlice.actions