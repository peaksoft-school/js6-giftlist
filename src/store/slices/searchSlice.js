import { createSlice } from '@reduxjs/toolkit'

import { searchingUser } from './searchActions'

const initialState = { options: [] }
const searchSlice = createSlice({
   name: 'users',
   initialState,
   reducers: {},
   extraReducers: {
      [searchingUser.fulfilled]: (state, action) => {
         state.options = action.payload
         state.status = 'success'
      },
   },
})
export const searchSliceActions = searchSlice.actions
export default searchSlice
