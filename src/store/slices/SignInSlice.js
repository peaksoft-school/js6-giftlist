import { createAsyncThunk } from '@reduxjs/toolkit'
import { useFetch } from '../../api/useFetch'
import { AUTH } from '../../utils/constants/constants'
import { baseAuth } from './authSlice'

export const SingInSlice = createAsyncThunk(
   'SingInSlice',
   async (userData, { dispatch }) => {
      try {
         const response = await useFetch({
            method: 'POST',
            url: 'api/public/login',
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
      } catch (e) {
         throw new Error(e)
      }
   }
)
