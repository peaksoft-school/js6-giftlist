import { createSlice } from '@reduxjs/toolkit'
import { getLentaActions } from './lentaActions'

const initialState = {
   lenta: [],
}
const lentaSlice = createSlice({
   name: 'lenta',
   initialState,
   reducers: {},
   extraReducers: {
      [getLentaActions.fulfilled]: (state, action) => {
         state.lenta = action.payload
      },
   },
})
// export const {} = lentaSlice.actions
export default lentaSlice
