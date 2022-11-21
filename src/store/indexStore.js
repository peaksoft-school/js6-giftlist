import { configureStore } from '@reduxjs/toolkit'
import { userSlice } from './slices/userSlice'
import { authSlice } from './slices/authSlice'
import holidaySlice from './slices/HolidaySlice'
import wishSlice from './slices/WishSlice'
import charitySlice from './slices/charitySlice'

const store = configureStore({
   reducer: {
      user: userSlice.reducer,
      auth: authSlice.reducer,
      holiday: holidaySlice.reducer,
      wishGift: wishSlice.reducer,
      charity: charitySlice.reducer,
   },
})

export default store
