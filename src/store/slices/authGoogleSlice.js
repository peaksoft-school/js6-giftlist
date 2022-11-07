import { createSlice } from '@reduxjs/toolkit'

const initialState = {
   email: null,
   jwt: null,
   id: null,
}

const authGoogleSlice = createSlice({
   name: 'user',
   initialState,
   reducers: {
      setUser(state, action) {
         state.email = action.payload.email
         state.jwt = action.payload.jwt
         state.id = action.payload.id
      },
      removeUser(state) {
         state.email = null
         state.jwt = null
         state.id = null
      },
   },
})

export const { setUser, removeUser } = authGoogleSlice.actions
export default authGoogleSlice.reducer
