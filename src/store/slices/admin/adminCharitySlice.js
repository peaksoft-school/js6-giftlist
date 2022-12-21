import { createSlice } from '@reduxjs/toolkit'
import {
   blockedCharity,
   deleteAdminCharity,
   getAdminCharity,
   getAdminCharityById,
   inputSearchAdminCharity,
   searchingAdminCharity,
   unBlockedCharity,
} from './adminCharityActions'

export const initialState = {
   error: null,
   status: null,
   singleAdminCharity: {},
   searchAdminCharity: [],
   isPutAdminCharity: false,
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
      [getAdminCharity.pending]: (state) => {
         state.status = 'pending'
      },
      [getAdminCharity.fulfilled]: (state, action) => {
         state.status = 'success'
         state.charity = action.payload
      },
      [getAdminCharity.rejected]: (state) => {
         state.status = 'rejected'
      },
      [getAdminCharityById.pending]: (state) => {
         state.status = 'pending'
      },
      [getAdminCharityById.fulfilled]: (state, action) => {
         state.singleCharity = action.payload
         state.status = 'success'
      },
      [getAdminCharityById.rejected]: (state) => {
         state.status = 'rejected'
      },
      [deleteAdminCharity.pending]: (state) => {
         state.status = 'pending'
      },
      [deleteAdminCharity.rejected]: (state) => {
         state.status = 'rejected'
      },
      [deleteAdminCharity.fulfilled]: (state) => {
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
      [inputSearchAdminCharity.fulfilled]: (state, action) => {
         state.charity.otherCharityResponses = action.payload.searchOthers
      },
      [searchingAdminCharity.fulfilled]: (state, action) => {
         console.log(action.payload, 'adction')
         state.charity.otherCharityResponses = action.payload.searchOthers
      },
   },
})

export default charitiesSlice
