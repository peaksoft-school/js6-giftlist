import { createAsyncThunk } from '@reduxjs/toolkit'
import { useFetch } from '../../api/useFetch'
import { AUTH } from '../../utils/constants/constants'
import { baseAuth } from './authSlice'

export const SignUpActions = createAsyncThunk(
   'SignUpSlice',
   async (userData, { dispatch }) => {
      try {
         const response = await useFetch({
            method: 'POST',
            url: 'api/public/register',
            body: userData,
         })
         const users = {
            id: response.id,
            jwt: response.jwt,
            role: response.role,
            firstName: response.firstName,
            lastName: response.lastName,
            email: response.email,
         }
         const json = JSON.stringify(users)
         localStorage.setItem(AUTH, json)
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
      } catch (e) {
         throw new Error(e.message)
      }
   }
)