import { createSlice } from '@reduxjs/toolkit'
import { getMailing } from './mailingActions'

const initialState = {
   mailing: [],
}
const mailingSlice = createSlice({
   name: 'mailing',
   initialState,
   reducers: {},
   extraReducers: {
      [getMailing.fulfilled]: (state, action) => {
         state.mailing = action.payload
      },
   },
})

export default mailingSlice
