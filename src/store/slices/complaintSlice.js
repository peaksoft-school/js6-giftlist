import { createSlice } from '@reduxjs/toolkit'
import { postComplaints } from './complainActions'
import { getComplaintsUser } from './complaints/complaints'

const initialState = {
   status: '',
   complaints: [],
}
const complaintSlice = createSlice({
   name: 'complaints',
   initialState,
   reducers: {},
   extraReducers: {
      [postComplaints.fulfilled]: (state, action) => {
         state.status = action.payload.status
      },
      [getComplaintsUser.fulfilled]: (state, action) => {
         state.complaints = action.payload
      },
   },
})
export default complaintSlice
