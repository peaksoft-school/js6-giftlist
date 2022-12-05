import { createSlice } from '@reduxjs/toolkit'
import { getProfileInfo } from './ProfileActions'

const initialState = {
   user: {
      id: null,
      jwt: null,
      role: null,
      email: null,
      firstName: null,
      lastName: null,
      image: null,
      userData: {
         country: null,
         clothingSize: null,
         dateOfBirth: null,
         facebookLink: null,
         hobby: null,
         id: null,
         important: null,
         instagramLink: null,
         phoneNumber: null,
         shoeSize: null,
         telegramLink: null,
         vkLink: null,
      },
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
         state.user.image = user.image
      },
      logout(state) {
         // eslint-disable-next-line no-unused-vars, no-param-reassign
         state = initialState
      },
   },
   extraReducers: {
      [getProfileInfo.fulfilled]: (state, action) => {
         console.log(action.payload, 'getttt')
         const data = action.payload
         state.user.email = data.email
         state.user.firstName = data.firstName
         state.user.lastName = data.lastName
         state.user.image = data.image
         state.user.userData = data
      },
   },
})

export const { baseAuth, logout } = authSlice.actions
export default authSlice
