import { createAsyncThunk } from '@reduxjs/toolkit'
import { useFetch } from '../../api/useFetch'
import { AUTH } from '../../utils/constants/constants'
import { baseAuth } from './authSlice'
import { showError } from '../../utils/helpers/helpers'

export const SignInActions = createAsyncThunk(
   'SingInSlice',
   async (userData, { dispatch }) => {
      console.log(userData)
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
            lastname: response.lastname,
            email: response.email,
         }

         localStorage.setItem(AUTH, JSON.stringify(users))
         dispatch(
            baseAuth({
               id: response.id,
               jwt: response.jwt,
               role: response.role,
               firstName: response.firstName,
               lastname: response.lastname,
               email: response.email,
            })
         )
      } catch (e) {
         showError(e.message || 'что-то пошло не так')
      }
   }
)
