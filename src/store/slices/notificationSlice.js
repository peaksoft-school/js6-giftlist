import { createSlice } from '@reduxjs/toolkit'
import { getNotification, getNotificationAdmin } from './notificationAction'

const initialState = {
   notification: [],
   notificationAdmin: [],
}
const notificationSlice = createSlice({
   name: 'notificationSlice',
   initialState,
   reducers: {},
   extraReducers: {
      [getNotification.fulfilled]: (state, action) => {
         state.notification = action.payload
      },
      [getNotificationAdmin.fulfilled]: (state, action) => {
         state.notification = action.payload
      },
   },
})

export default notificationSlice
