import { createSlice } from '@reduxjs/toolkit'

const initialState = {
   user: {
      id: null,
      jwt: null,
      role: null,
      email: null,
      firstName: null,
      lastName: null,
      photo: null,
      friend: {
         country: null,
         clothingSize: null,
         dateOfBirth: null,
         hobby: null,
         id: null,
         photo: null,
         important: null,
         phoneNumber: null,
         shoesSize: null,
      },
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
         state.user.photo = user.photo
      },
   },
})

export const { baseAuth } = authSlice.actions
export default authSlice
