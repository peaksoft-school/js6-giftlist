import { configureStore } from '@reduxjs/toolkit'
import { friendRequestsSlice, friendsSlice } from './slices/FriendsSlice'
import { userSlice } from './slices/userSlice'

export const store = configureStore({
   reducer: {
      auth: userSlice.reducer,
      friends: friendsSlice.reducer,
      friendRequests: friendRequestsSlice.reducer,
   },
})
