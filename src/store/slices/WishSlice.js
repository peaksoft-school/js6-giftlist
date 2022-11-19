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
   name: 'wishSlice',
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
      [getWishGift.rejected]: (state) => {
         state.status = 'rejected'
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
      [putWishGift.rejected]: (state) => {
         state.status = 'rejected'
      },
      [putWishGift.fulfilled]: (state) => {
         state.status = 'success'
      },
      [deleteWishGift.pending]: (state) => {
         state.status = 'pending'
      },
      [deleteWishGift.rejected]: (state) => {
         state.status = 'rejected'
      },
      [deleteWishGift.fulfilled]: (state) => {
         state.status = 'success'
      },
      [getHolidayToSelect.fulfilled]: (state, { payload }) => {
         state.selectToGift = payload
      },
   },
})

export default wishSlice
// export const {} = wishSlice.actions
