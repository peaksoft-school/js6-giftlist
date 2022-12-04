import { createAsyncThunk } from '@reduxjs/toolkit'
import { useFetch } from '../../api/useFetch'

export const postComplaints = createAsyncThunk(
   'complain/postComplaints',
   async (data) => {
      const response = await useFetch({
         method: 'POST',
         url: 'api/complaints',
         body: data,
      })
      console.log(response, 'hello')
      return response
   }
)
