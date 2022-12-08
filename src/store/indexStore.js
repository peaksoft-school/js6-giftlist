import { configureStore } from '@reduxjs/toolkit'
import { authSlice } from './slices/authSlice'
import holidaySlice from './slices/HolidaySlice'
import profileSlice from './slices/profileSlice'
import wishSlice from './slices/WishSlice'
import charitySlice from './slices/charitySlice'
import { friendsSlice, friendRequestsSlice } from './slices/FriendsSlice'
import friendProfileSlice from './slices/FriendProfileSlice'
import bookingSlice from './slices/BookingSlice'
import usersSlice from './slices/usersSlice'

const store = configureStore({
   reducer: {
      auth: authSlice.reducer,
      holiday: holidaySlice.reducer,
      profile: profileSlice.reducer,
      wishGift: wishSlice.reducer,
      charity: charitySlice.reducer,
      friends: friendsSlice.reducer,
      friendRequests: friendRequestsSlice.reducer,
      friend: friendProfileSlice.reducer,
      booking: bookingSlice.reducer,
      users: usersSlice.reducer,
   },
})

export default store
