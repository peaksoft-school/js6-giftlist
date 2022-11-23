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
   singleHoliday: null,
   edditModal: false,
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
         state.status = 'success'
         state.holidays = action.payload
      },
      [getHoliday.rejected]: (state, action) => {
         state.status = 'rejected'
         state.error = action.error
      },
      [getHolidayById.pending]: (state) => {
         state.status = 'pending'
      },
      [getHolidayById.fulfilled]: (state, action) => {
         state.singleHoliday = action.payload
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
         state.edditModal = true
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
export const { holiday } = holidaySlice.actions
