import { createAsyncThunk } from '@reduxjs/toolkit'
import { useFetch } from '../../api/useFetch'
import { showSuccess } from '../../utils/helpers/helpers'

export const getUsers = createAsyncThunk('users/getUsers', async () => {
   try {
      const response = await useFetch({
         url: 'api/admin/users',
      })
      return response
   } catch (error) {
      throw new Error(error.message)
   }
})

export const usersBlock = createAsyncThunk(
   'users/usersBlock',
   async (id, { dispatch }) => {
      try {
         const response = await useFetch({
            url: `api/admin/block/${id}`,
            method: 'PUT',
         })
         showSuccess(response.status)
         dispatch(getUsers())
         return response
      } catch (error) {
         throw new Error(error.message)
      }
   }
)

export const unBlockUsers = createAsyncThunk(
   'users/unBlockUsers',
   async (id, { dispatch }) => {
      try {
         const response = await useFetch({
            url: `api/admin/unblock/${id}`,
            method: 'PUT',
         })
         showSuccess(response.status)
         dispatch(getUsers())
         return response
      } catch (error) {
         throw new Error(error.message)
      }
   }
)
