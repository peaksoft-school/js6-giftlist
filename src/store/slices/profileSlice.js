import { createSlice } from '@reduxjs/toolkit'
import { getProfileInfo, putProfile } from './ProfileActions'

export const initialState = {
   email: null,
   firstName: null,
   lastName: null,
   image: null,
   id: null,
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
}
const profileSlice = createSlice({
   name: 'profileSlice',
   initialState,
   reducers: {},
   extraReducers: {
      [getProfileInfo.fulfilled]: (state, action) => {
         console.log(action.payload, 'postSlice')
         state.userData = action.payload
         state.image = action.payload.image
      },

      [putProfile.fulfilled]: (state) => {
         state.status = 'success'
      },
   },
})

export default profileSlice
