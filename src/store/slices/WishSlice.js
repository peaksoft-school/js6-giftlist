import { createSlice } from '@reduxjs/toolkit'

import {
   deleteWishGift,
   getHolidayToSelect,
   getWishById,
   getWishGift,
   postGift,
   putWishGift,
} from './WishlistActions'

export const initialState = {
   error: null,
   status: null,
   wish: [],
   singleWishGift: null,
   selectToGift: [],
}
const wishSlice = createSlice({
   name: 'holiday',
   initialState,
   reducers: {},
   extraReducers: {
      [postGift.pending]: (state) => {
         state.status = 'pending'
      },
      [postGift.fulfilled]: (state) => {
         state.status = 'success'
      },
      [postGift.rejected]: (state) => {
         state.status = 'rejected'
      },
      [getWishGift.pending]: (state) => {
         state.status = 'pending'
      },
      [getWishGift.fulfilled]: (state, action) => {
         state.status = 'success'
         state.wish = action.payload
      },
      [getWishGift.rejected]: (state, action) => {
         state.status = 'rejected'
         state.error = action.error
      },
      [getWishById.pending]: (state) => {
         state.status = 'pending'
      },
      [getWishById.fulfilled]: (state, action) => {
         state.singleWishGift = action.payload
         state.status = 'success'
      },
      [getWishById.rejected]: (state, action) => {
         state.status = 'rejected'
         state.error = action.error
      },
      [putWishGift.pending]: (state) => {
         state.status = 'pending'
      },
      [putWishGift.rejected]: (state, action) => {
         state.status = 'rejected'
         state.error = action.error
      },
      [putWishGift.fulfilled]: (state) => {
         state.status = 'success'
      },
      [deleteWishGift.pending]: (state) => {
         state.status = 'pending'
      },
      [deleteWishGift.rejected]: (state, action) => {
         state.status = 'rejected'
         state.error = action.error.message
      },
      [deleteWishGift.fulfilled]: (state) => {
         state.status = 'success'
      },
      [getHolidayToSelect.fulfilled]: (state, { payload }) => {
         console.log(payload)
         state.selectToGift = payload
      },
   },
})

export default wishSlice
export const { holiday } = wishSlice.actions
