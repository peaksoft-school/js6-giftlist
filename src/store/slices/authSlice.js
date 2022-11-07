import { createSlice } from '@reduxjs/toolkit'
import { AUTH } from '../../utils/constants/constants'

const initialState = {
   user: JSON.parse(localStorage.getItem(AUTH)) || {
      id: null,
      jwt: null,
      role: null,
      email: null,
      firstName: null,
      lastName: null,
   },
}

export const authSlice = createSlice({
   name: 'authSlice',
   initialState,
   reducers: {
      baseAuth(state, action) {
         const user = action.payload
         state.user.id = user.id
         state.user.jwt = user.jwt
         state.user.role = user.role
         state.user.email = user.email
         state.user.firstName = user.firstName
         state.user.lastName = user.lastName
      },
   },
})

export const { baseAuth } = authSlice.actions
export default authSlice
