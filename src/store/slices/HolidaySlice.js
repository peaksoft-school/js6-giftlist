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
      [postHoliday.pending]: (state) => {
         state.status = 'pending'
      },
      [postHoliday.fulfilled]: (state, action) => {
         const { error } = action.payload
         state.status = 'success'
         state.error = error
      },
      [postHoliday.rejected]: (state) => {
         state.status = 'rejected'
      },
      [getHoliday.pending]: (state) => {
         state.status = 'pending'
      },
      [getHoliday.fulfilled]: (state) => {
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
// export const {  } = HolidaySlice.actions
export default HolidaySlice
