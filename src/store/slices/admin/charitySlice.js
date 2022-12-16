import { createSlice } from '@reduxjs/toolkit'
import {
   deleteCharity,
   getCharity,
   getCharityById,
   inputSearchCharity,
   blockedCharity,
   unBlockedCharity,
   searchingCharity,
} from './charityActions'

export const initialState = {
   error: null,
   status: null,
   singleCharity: {},
   searchCharity: [],
   isPutCharity: false,
}
const charitiesSlice = createSlice({
   name: 'charities',
   initialState,
   reducers: {},
   extraReducers: {
      [blockedCharity.fulfilled]: (state, action) => {
         state.status = action.payload.message
      },
      [blockedCharity.pending]: (state) => {
         state.status = 'pending'
      },
      [blockedCharity.rejected]: (state) => {
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
      [deleteCharity.pending]: (state) => {
         state.status = 'pending'
      },
      [deleteCharity.rejected]: (state) => {
         state.status = 'rejected'
      },
      [deleteCharity.fulfilled]: (state) => {
         state.status = 'success'
      },
      [unBlockedCharity.pending]: (state) => {
         state.status = 'pending'
      },
      [unBlockedCharity.rejected]: (state) => {
         state.status = 'rejected'
      },
      [unBlockedCharity.fulfilled]: (state) => {
         state.status = 'success'
      },
      [inputSearchCharity.fulfilled]: (state, action) => {
         state.charity.otherCharityResponses = action.payload.searchOthers
      },
      [searchingCharity.fulfilled]: (state, action) => {
         state.charity.otherCharityResponses = action.payload.searchOthers
      },
   },
})

export default charitiesSlice
