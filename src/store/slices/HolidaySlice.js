import { createSlice } from '@reduxjs/toolkit'
import {
   getHoliday,
   postHoliday,
   getHolidayById,
   putHoliday,
   deleteHoliday,
} from './HolidayActions'

export const initialState = {
   error: null,
   status: null,
   holidays: [],
}
const holidaySlice = createSlice({
   name: 'holiday',
   initialState,
   reducers: {},
   extraReducers: {
      [postHoliday.pending]: (state) => {
         state.status = 'pending'
      },
      [postHoliday.fulfilled]: (state) => {
         state.status = 'success'
      },
      [postHoliday.rejected]: (state) => {
         state.status = 'rejected'
      },
      [getHoliday.pending]: (state) => {
         state.status = 'pending'
      },
      [getHoliday.fulfilled]: (state, action) => {
         state.holidays = action.payload
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

export default holidaySlice
// export const { } = HolidaySlice.actions
