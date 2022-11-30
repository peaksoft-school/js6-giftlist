import { createSlice } from '@reduxjs/toolkit'
import { getLentaActions, getSingleHoliday } from './lentaActions'

const initialState = {
   lenta: [],
   singleHoliday: [],
}
const lentaSlice = createSlice({
   name: 'lenta',
   initialState,
   reducers: {},
   extraReducers: {
      [getLentaActions.fulfilled]: (state, action) => {
         state.lenta = action.payload
      },
      [getSingleHoliday.fulfilled]: (state, action) => {
         state.singleHoliday = action.payload
      },
   },
})
// export const {} = lentaSlice.actions
export default lentaSlice
