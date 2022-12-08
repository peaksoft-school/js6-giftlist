import { createSlice } from '@reduxjs/toolkit'
import { getUsers } from './usersActions'

const initialState = {
   users: [],
}
const usersSlice = createSlice({
   name: 'usersSlice',
   initialState,
   reducers: {},
   extraReducers: {
      [getUsers.fulfilled]: (state, action) => {
         state.users = action.payload
      },
   },
})

export default usersSlice
