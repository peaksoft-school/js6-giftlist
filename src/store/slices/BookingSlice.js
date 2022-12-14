import { createSlice } from '@reduxjs/toolkit'

import {
   getBookedGifts,
   getBookedWishes,
   postUnReservation,
} from './BookingActions'

const initialState = {
   bookedWishes: [],
   bookedGifts: { getAllGifts: [], getReservedCharity: [] },
   error: null,
   status: null,
}

const bookingSlice = createSlice({
   name: 'booking',
   initialState,
   extraReducers: {
      [getBookedWishes.pending]: (state) => {
         state.status = 'pending'
      },
      [getBookedWishes.fulfilled]: (state, { payload }) => {
         state.bookedWishes = payload
      },
      [getBookedWishes.rejected]: (state) => {
         state.status = 'rejected'
      },
      [getBookedGifts.pending]: (state) => {
         state.status = 'pending'
      },
      [getBookedGifts.fulfilled]: (state, { payload }) => {
         state.bookedGifts = payload
      },
      [getBookedGifts.rejected]: (state) => {
         state.status = 'rejected'
      },
      [postUnReservation.pending]: (state) => {
         state.status = 'pending'
      },
      [postUnReservation.fulfilled]: (state) => {
         state.status = 'success'
      },
      [postUnReservation.rejected]: (state) => {
         state.status = 'rejected'
      },
   },
})

export const bookingAction = bookingSlice.actions
export default bookingSlice
