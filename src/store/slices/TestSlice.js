import { createAsyncThunk } from '@reduxjs/toolkit'

export const TestSlice = createAsyncThunk('hello', async (data) => {
   const newFetch = await fetch('http://3.70.207.7/api/public/register/', {
      method: 'POST',
      headers: {
         'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
   })
   const result = await newFetch.json()
   console.log(result)
})
