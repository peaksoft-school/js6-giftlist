import { configureStore } from '@reduxjs/toolkit'
import { userSlice } from './slices/userSlice'
import { authSlice } from './slices/authSlice'
import authGoogleSlice from './slices/authGoogleSlice'

export const store = configureStore({
   reducer: {
      user: userSlice.reducer,
      auth: authSlice.reducer,
      authGoogle: authGoogleSlice,
   },
})
