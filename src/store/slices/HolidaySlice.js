import { createSlice } from '@reduxjs/toolkit'

import {
   getHoliday,
   postHoliday,
   getHolidayById,
   putHoliday,
   deleteHoliday,
} from './HolidayActions'

const initialState = {
   error: null,
   status: null,
}
const HolidaySlice = createSlice({
   name: 'holidaySlice',
   initialState,
   reducers: {},
   extraReducers: {
      [postHoliday.pending]: (state, action) => {
         console.log(action.payload, 'postHoliday Pending')
         state.status = 'pending'
      },
      [postHoliday.fulfilled]: (state, action) => {
         state.status = 'success'
         state.error = action.payload.error
         console.log(action.payload, 'fullfiled')
      },
      [postHoliday.rejected]: (state) => {
         state.status = 'rejected'
      },
      [getHoliday.pending]: (state) => {
         state.status = 'pending'
      },
      [getHoliday.fulfilled]: (state, action) => {
         console.log(action.payload, 'getHoliday')
         state.status = 'success'
      },
      [getHoliday.rejected]: (state, action) => {
         state.status = 'rejected'
         state.error = action.error
      },
      [getHolidayById.pending]: (state) => {
         state.status = 'pending'
      },
      [getHolidayById.fulfilled]: (state) => {
         state.status = 'success'
      },
      [getHolidayById.rejected]: (state, action) => {
         state.status = 'rejected'
         state.error = action.error
      },
      [putHoliday.pending]: (state) => {
         state.status = 'pending'
      },
      [putHoliday.rejected]: (state, action) => {
         state.status = 'rejected'
         state.error = action.error
      },
      [putHoliday.fulfilled]: (state) => {
         state.status = 'success'
         state.editmodal = true
      },
      [deleteHoliday.pending]: (state) => {
         state.status = 'pending'
      },
      [deleteHoliday.rejected]: (state, action) => {
         state.status = 'rejected'
         state.error = action.error.message
      },
      [deleteHoliday.fulfilled]: (state) => {
         state.status = 'success'
      },
   },
})
export const { clearHoliday } = HolidaySlice.actions
export default HolidaySlice
