import { createSlice } from '@reduxjs/toolkit'
import { getLentaActions, getLentaById } from './lentaActions'

const initialState = {
   lenta: [],
   singleLenta: [],
}
const lentaSlice = createSlice({
   name: 'lenta',
   initialState,
   reducers: {},
   extraReducers: {
      [getLentaActions.fulfilled]: (state, action) => {
         state.lenta = action.payload
      },
      [getLentaById.fulfilled]: (state, action) => {
         state.singleLenta = action.payload
      },
   },
})
// export const {} = lentaSlice.actions
export default lentaSlice
