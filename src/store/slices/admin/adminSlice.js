import { createSlice } from '@reduxjs/toolkit'
import { getUsersProfile } from './adminActions'

const initialState = { users: [] }
const adminSlice = createSlice({
   name: 'adminSlice',
   initialState,
   reducers: {},
   extraReducers: {
      [getUsersProfile.fulfilled]: (state, action) => {
         state.users = action.payload
      },
   },
})

export default adminSlice
