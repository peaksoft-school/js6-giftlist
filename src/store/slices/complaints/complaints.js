import { createAsyncThunk } from '@reduxjs/toolkit'
import { useFetch } from '../../../api/useFetch'

export const getComplaintsUser = createAsyncThunk('complaints', async () => {
   try {
      const response = await useFetch({ url: 'api/complaints' })
      return response
   } catch (error) {
      throw new Error(error.message)
   }
})

export const getComplaintsById = createAsyncThunk('complaints', async (id) => {
   try {
      const response = await useFetch({ url: `api/complaints/${id}` })
      return response
   } catch (error) {
      throw new Error(error.message)
   }
})
