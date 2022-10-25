import { createSlice } from '@reduxjs/toolkit'
import { AUTH } from '../../utils/constants/constants'
import { Login, TestSlice } from './TestSlice'

const initialState = {
   user: JSON.parse(localStorage.getItem(AUTH)) || {
      jwt: null,
      role: null,
   },
}

export const userSlice = createSlice({
   name: 'user',
   initialState,
   reducers: {},
   extraReducers: {
      [TestSlice.fulfilled]: (state, action) => {
         const newItems = action.payload
         console.log(action.payload)
         localStorage.setItem(
            AUTH,
            JSON.stringify({ role: newItems.role, jwt: newItems.jwt })
         )
         state.jwt = newItems.jwt
         state.token = newItems.token
      },

      [Login.fulfilled]: (state, action) => {
         const newItems = action.payload
         console.log(action.payload)
         localStorage.setItem(
            AUTH,
            JSON.stringify({ role: newItems.role, jwt: newItems.jwt })
         )

         state.jwt = newItems.jwt
         state.role = newItems.role
      },
   },
})

// export const { testFunction } = userSlice.actions
export default userSlice
