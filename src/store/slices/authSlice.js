import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = {
   msg: '',
   user: '',
   token: '',
   loading: false,
   error: false,
}

const api = process.env.REACT_APP_API_URL

export const signUpUser = createAsyncThunk('signUpUser', async (body) => {
   const response = await fetch(`${api}/api/public/register`, {
      method: 'post',
      headers: {
         'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
   })
   if (!response.ok) {
      throw new Error('Sending failed')
   }
   const data = await response.json()
   return data
})

export const signInUser = createAsyncThunk('signInUser', async (body) => {
   const response = await fetch(`${api}/api/public/login`, {
      method: 'POST',
      headers: {
         'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
   })
   const data = await response.json()
   return data
})

export const forgotPassword = createAsyncThunk(
   'forgotPassword',
   async (params) => {
      try {
         const response = await fetch(`${api}/api/public/forgot-password`, {
            method: 'POST',
            headers: {
               'Content-Type': 'application/json',
            },
            body: JSON.stringify(params),
         })
         const data = await response.json()
         return data
      } catch (error) {
         console.error(error)
         return error
      }
   }
)

export const authSlice = createSlice({
   name: 'auth',
   initialState,
   reducers: {
      addToken: (state) => {
         state.token = localStorage.getItem('token')
      },
      addUser: (state) => {
         state.user = localStorage.getItem('user')
      },
      restore: (state) => {
         if (!state.user.jwt) {
            state.user = localStorage.getItem('user')
         }
      },
   },

   extraReducers: {
      // signin
      [signInUser.pending]: (state) => {
         state.loading = true
      },
      [signInUser.fulfilled]: (state, { payload }) => {
         state.loading = false
         if (payload.error) {
            state.error = payload.error
         } else {
            state.msg = payload.msg
            state.token = payload.jwt
            state.user = payload

            localStorage.setItem('user', payload?.payload)
         }
      },
      [signInUser.rejected]: (state) => {
         state.loading = true
      },
      // signup
      [signUpUser.pending]: (state) => {
         state.loading = true
      },
      [signUpUser.fulfilled]: (state, { payload: { error } }) => {
         state.loading = false
         if (error) {
            state.error = error
         } else {
            state.error = false
            state.msg = 'singed'
         }
      },
      [signUpUser.rejected]: (state) => {
         state.loading = true
      },
      [forgotPassword.rejected]: (state) => {
         state.error = true
      },
      [forgotPassword.fulfilled]: (state, { payload: { error } }) => {
         if (error) {
            state.error = error
         } else {
            state.error = false
         }
      },
   },
})

export const { addToken, addUser, restore } = authSlice.actions
export default authSlice
