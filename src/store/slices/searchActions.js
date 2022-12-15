import { createAsyncThunk } from '@reduxjs/toolkit'
import { useFetch } from '../../api/useFetch'

export const searchingUser = createAsyncThunk(
   'users/searchingUser',
   async (value) => {
      const response = await useFetch({ url: `api/search/user?text=${value}` })
      return response
   }
)
