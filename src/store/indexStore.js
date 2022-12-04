import { configureStore } from '@reduxjs/toolkit'
import { userSlice } from './slices/userSlice'
import { authSlice } from './slices/authSlice'
import holidaySlice from './slices/HolidaySlice'
import wishSlice from './slices/WishSlice'
import charitySlice from './slices/charitySlice'
import { friendsSlice, friendRequestsSlice } from './slices/FriendsSlice'
import friendProfileSlice from './slices/FriendProfileSlice'
import lentaSlice from './slices/lentaSlice'
import complaintSlice from './slices/complaintSlice'

const store = configureStore({
   reducer: {
      user: userSlice.reducer,
      auth: authSlice.reducer,
      holiday: holidaySlice.reducer,
      wishGift: wishSlice.reducer,
      charity: charitySlice.reducer,
      friends: friendsSlice.reducer,
      friendRequests: friendRequestsSlice.reducer,
      friend: friendProfileSlice.reducer,
      lenta: lentaSlice.reducer,
      complaints: complaintSlice.reducer,
   },
})

export default store
