import { createSlice } from '@reduxjs/toolkit'

const initialState = {
   status: null,
   user: '',
   token: '',
   error: null,
}

export const userSlice = createSlice({
   name: 'user',
   initialState,
   reducers: {},
   extraReducers: {
      testFunction(state, action) {
         localStorage.setItem('user', JSON.stringify(action.payload))
         state.user = action.payload
         state.token = action.jwt
      },
   },
})

export const { testFunction } = userSlice.actions
export default userSlice
