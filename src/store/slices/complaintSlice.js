import { createSlice } from '@reduxjs/toolkit'
import { postComplaints } from './complainActions'

const initialState = {
   status: '',
}
const complaintSlice = createSlice({
   name: 'complaints',
   initialState,
   reducers: {},
   extraReducers: {
      [postComplaints.fulfilled]: (state, action) => {
         state.status = action.payload.status
      },
   },
})
export default complaintSlice
