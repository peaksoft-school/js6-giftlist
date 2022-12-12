import { createSlice } from '@reduxjs/toolkit'
// import { deleteCharity } from '../charityActions'
import {
   deleteCharity,
   getCharity,
   getCharityById,
   inputSearchCharity,
   reservedCard,
   searchingCharity,
} from './charityActions'

export const initialState = {
   error: null,
   status: null,
   charity: {},
   singleCharity: {},
   searchCharity: [],
   isPutCharity: false,
}
const charitySlice = createSlice({
   name: 'charity',
   initialState,
   reducers: {},
   extraReducers: {
      [reservedCard.fulfilled]: (state, action) => {
         state.status = action.payload.message
      },
      [getCharity.pending]: (state) => {
         state.status = 'pending'
      },
      [getCharity.fulfilled]: (state, action) => {
         state.status = 'success'
         state.charity = action.payload
      },
      [getCharity.rejected]: (state) => {
         state.status = 'rejected'
      },
      [getCharityById.pending]: (state) => {
         state.status = 'pending'
      },
      [getCharityById.fulfilled]: (state, action) => {
         state.singleCharity = action.payload
         state.status = 'success'
      },
      [getCharity.rejected]: (state) => {
         state.status = 'rejected'
      },
      [deleteCharity.pending]: (state) => {
         state.status = 'pending'
      },
      [deleteCharity.rejected]: (state) => {
         state.status = 'rejected'
      },
      [deleteCharity.fulfilled]: (state) => {
         state.status = 'success'
      },
      [inputSearchCharity.fulfilled]: (state, action) => {
         state.charity.otherCharityResponses = action.payload.searchOthers
      },
      [searchingCharity.fulfilled]: (state, action) => {
         state.charity.otherCharityResponses = action.payload.searchOthers
      },
   },
})

export default charitySlice
// export const {} = wishSlice.actions

// import { createSlice } from '@reduxjs/toolkit'

// import {
//    getCategories,
//    getCharitiesWithFilter,
//    getGiftsById,
//    getSubCategories,
// } from './charityAction'

// const initialState = {
//    categories: [],
//    subCategories: [],
//    charities: [],
//    giftById: {},
// }

// const charitySearching = createSlice({
//    name: 'searching',
//    initialState,
//    extraReducers: {
//       [getCategories.fulfilled]: (state, { payload }) => {
//          state.categories = payload
//       },
//       [getSubCategories.fulfilled]: (state, { payload }) => {
//          state.subCategories = payload
//       },
//       [getCharitiesWithFilter.fulfilled]: (state, { payload }) => {
//          state.charities = payload
//       },
//       [getGiftsById.fulfilled]: (state, { payload }) => {
//          state.giftById = payload
//       },
//    },
// })

// export const SearchingActions = charitySearching.actions
// export default charitySearching
