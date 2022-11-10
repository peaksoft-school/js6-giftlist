import { configureStore } from '@reduxjs/toolkit'
import { friendRequestsSlice, friendsSlice } from './slices/FriendsSlice'
import { userSlice } from './slices/userSlice'
import { authSlice } from './slices/authSlice'

export const store = configureStore({
   reducer: {
      user: userSlice.reducer,
      auth: authSlice.reducer,
   },
})
