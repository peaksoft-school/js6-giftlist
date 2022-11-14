import { createAsyncThunk } from '@reduxjs/toolkit'
import { useFetch } from '../../api/useFetch'
import signInWithGoogle from '../../firebase/firebase'
import { AUTH } from '../../utils/constants/constants'
import { baseAuth } from './authSlice'

export const authGoogleActions = createAsyncThunk(
   'auth-google',
   async (_, { dispatch }) => {
      try {
         const user = await signInWithGoogle()

         console.log(user, 'userr')
         const response = await useFetch({
            method: 'POST',
            url: `api/public/auth-google?tokenId=${user.accessToken}`,
         })
         console.log(response, 'ehlllllo')

         const users = {
            id: response.id,
            jwt: response.jwt,
            role: response.role,
            email: response.email,
            firstName: response.firstName,
            lastName: response.lastName,
         }
         const data = JSON.stringify(users)
         localStorage.setItem(AUTH, data)
         dispatch(
            baseAuth({
               id: response.id,
               jwt: response.jwt,
               role: response.role,
               email: response.email,
               firstName: response.firstName,
               lastName: response.lastName,
            })
         )
      } catch (e) {
         throw new Error(e || 'Что-то пошло не так!')
      }
   }
)
