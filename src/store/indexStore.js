import { configureStore } from '@reduxjs/toolkit'
import { friendsSlice, friendRequestsSlice } from './slices/FriendsSlice'
import { userSlice } from './slices/userSlice'
import { authSlice } from './slices/authSlice'
import friendProfileSlice from './slices/FriendProfileSlice'

const store = configureStore({
   reducer: {
      user: userSlice.reducer,
      auth: authSlice.reducer,
      friends: friendsSlice.reducer,
      friendRequests: friendRequestsSlice.reducer,
      friend: friendProfileSlice.reducer,
   },
})

export default store
