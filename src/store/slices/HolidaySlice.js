import { createAsyncThunk } from '@reduxjs/toolkit'
import { useFetch } from '../../api/useFetch'

export const postHoliday = createAsyncThunk(
   'holiday/postHoliday',
   async (data) => {
      console.log(data)

      try {
         const response = await useFetch({
            method: 'POST',
            url: 'https://test-giftlist-a1777-default-rtdb.europe-west1.firebasedatabase.app/test.json',
            body: data,
         })
         return response
      } catch (error) {
         throw new Error(error.message)
      }
   }
)
export const getHoliday = createAsyncThunk('holiday/getHoliday', async () => {
   const response = await useFetch({
      url: 'https://test-giftlist-a1777-default-rtdb.europe-west1.firebasedatabase.app/test.json',
   })
   return response
})
export const getHolidayById = createAsyncThunk(
   'holiday/singleHolidayById',
   async (id) => {
      const response = await useFetch({ url: `api/holiday/${id}` })
      return response
   }
)

export const putHoliday = createAsyncThunk(
   'holiday/putHoliday',
   async (data) => {
      try {
         const response = await useFetch({
            method: 'PUT',
            url: `api/holiday/${data.id}`,
            body: {},
         })
         return response
      } catch (error) {
         throw new Error(error.message)
      }
   }
)

export const deleteHoliday = createAsyncThunk(
   'holiday/deleteHoliday',
   async (data) => {
      try {
         const response = await useFetch({
            url: `api/holiday/${data.id}`,
            method: 'DELETE',
         })
         return response
      } catch (error) {
         throw new Error(error.message)
      }
   }
)
