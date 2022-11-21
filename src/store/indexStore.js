import { configureStore } from '@reduxjs/toolkit'
import { userSlice } from './slices/userSlice'
import { authSlice } from './slices/authSlice'
import holidaySlice from './slices/HolidaySlice'
import { friendRequestsSlice, friendsSlice } from './slices/FriendsSlice'
import friendProfileSlice from './slices/FriendProfileSlice'

const store = configureStore({
   reducer: {
      user: userSlice.reducer,
      auth: authSlice.reducer,
      holiday: holidaySlice.reducer,
      friends: friendsSlice.reducer,
      friendRequests: friendRequestsSlice.reducer,
      friend: friendProfileSlice.reducer,
   },
})

export default store
