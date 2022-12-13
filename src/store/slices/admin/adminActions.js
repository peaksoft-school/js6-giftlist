import { createAsyncThunk } from '@reduxjs/toolkit'
import { useFetch } from '../../../api/useFetch'

export const getUsersProfile = createAsyncThunk('users', async (data) => {
   try {
      const response = await useFetch({
         url: `api/admin/profile/${data.id}`,
      })
      return response
   } catch (error) {
      throw new Error(error.message)
   }
})
