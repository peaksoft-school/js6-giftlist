import { configureStore } from '@reduxjs/toolkit'
import holidaySlice from './slices/HolidaySlice'
import { authSlice } from './slices/authSlice'
import profileSlice from './slices/profileSlice'
import wishSlice from './slices/WishSlice'
import charitySlice from './slices/charitySlice'
import { friendsSlice, friendRequestsSlice } from './slices/FriendsSlice'
import friendProfileSlice from './slices/FriendProfileSlice'

const store = configureStore({
   reducer: {
      holiday: holidaySlice.reducer,
      auth: authSlice.reducer,
      profile: profileSlice.reducer,
      wishGift: wishSlice.reducer,
      charity: charitySlice.reducer,
      friends: friendsSlice.reducer,
      friendRequests: friendRequestsSlice.reducer,
      friend: friendProfileSlice.reducer,
   },
})

export default store
