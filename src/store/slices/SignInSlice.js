import { createAsyncThunk } from '@reduxjs/toolkit'
import { AUTH } from '../../utils/constants/constants'
import { baseAuth } from './authSlice'

export const SingInSlice = createAsyncThunk(
   'SingInSlice',
   async (userData, { dispatch }) => {
      try {
         const request = await fetch('http://3.70.207.7/api/public/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(userData),
         })
         const response = await request.json()
         const users = {
            id: response.id,
            jwt: response.jwt,
            role: response.role,
            firstName: response.firstName,
            lastName: response.lastName,
            email: response.email,
         }
         localStorage.setItem(AUTH, JSON.stringify(users))
         dispatch(
            baseAuth({
               id: response.id,
               jwt: response.jwt,
               role: response.role,
               firstName: response.firstName,
               lastName: response.lastName,
               email: response.email,
            })
         )
      } catch (err) {
         console.log(err)
      }
   }
)
