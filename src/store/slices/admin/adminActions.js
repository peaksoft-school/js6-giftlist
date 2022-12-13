import { createAsyncThunk } from '@reduxjs/toolkit'
import { useFetch } from '../../../api/useFetch'

export const getUsersProfile = createAsyncThunk('users', async (id) => {
   try {
      const response = await useFetch({
         url: `api/admin/profile/${id}`,
      })
      return response
   } catch (error) {
      throw new Error(error.message)
   }
})
