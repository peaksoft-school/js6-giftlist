import { createSlice } from '@reduxjs/toolkit'
import { getNotification } from './notificationAction'

const initialState = {
   notification: [],
}
const notificationSlice = createSlice({
   name: 'notificationSlice',
   initialState,
   reducers: {},
   extraReducers: {
      [getNotification.fulfilled]: (state, action) => {
         console.log(action.payload, 'paylloo')
         state.notification = action.payload
      },
   },
})

export default notificationSlice
