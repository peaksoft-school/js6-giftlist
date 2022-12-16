import { configureStore } from '@reduxjs/toolkit'
import { authSlice } from './slices/authSlice'
import holidaySlice from './slices/HolidaySlice'
import profileSlice from './slices/profileSlice'
import wishSlice from './slices/WishSlice'
import charitySlice from './slices/charitySlice'
import { friendsSlice, friendRequestsSlice } from './slices/FriendsSlice'
import friendProfileSlice from './slices/FriendProfileSlice'
import lentaSlice from './slices/lentaSlice'
import complaintSlice from './slices/complaintSlice'
import bookingSlice from './slices/BookingSlice'
import searchSlice from './slices/searchSlice'
import notificationSlice from './slices/notificationSlice'
import charitiesSlice from './slices/admin/charitySlice'

const store = configureStore({
   reducer: {
      auth: authSlice.reducer,
      search: searchSlice.reducer,
      holiday: holidaySlice.reducer,
      profile: profileSlice.reducer,
      wishGift: wishSlice.reducer,
      charity: charitySlice.reducer,
      friends: friendsSlice.reducer,
      friendRequests: friendRequestsSlice.reducer,
      friend: friendProfileSlice.reducer,
      lenta: lentaSlice.reducer,
      complaints: complaintSlice.reducer,
      booking: bookingSlice.reducer,
      notification: notificationSlice.reducer,
      charities: charitiesSlice.reducer,
   },
})

export default store
