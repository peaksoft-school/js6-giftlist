import { createSlice } from '@reduxjs/toolkit'
import { getNotification } from './notificationAction'

const initialState = {
   notification: null,
}
const notificationSlice = createSlice({
   name: 'notificationSlice',
   initialState,
   reducers: {},
   extraReducers: {
      [getNotification.fullfiled]: (state, action) => {
         state.notification = action.payload
      },
   },
})

export default notificationSlice
