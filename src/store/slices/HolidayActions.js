import { createAsyncThunk } from '@reduxjs/toolkit'
import format from 'date-fns/format'
import { useFetch } from '../../api/useFetch'
import { fileFetch } from '../../api/fileFetch'

export const postHoliday = createAsyncThunk(
   'holiday/postHoliday',
   async ({ data, image }) => {
      try {
         const updatedData = {
            ...data,
            dateOfHoliday: format(new Date(data.dateOfHoliday), 'yyyy-MM-dd'),
         }
         const formData = new FormData()
         formData.append('file', image)
         const fileResponse = await fileFetch({
            url: 'api/file',
            body: formData,
         })
         updatedData.image = fileResponse.link

         const response = await useFetch({
            method: 'POST',
            url: 'api/holidays',
            body: updatedData,
         })
         console.log(response)
      } catch (error) {
         console.log(error, 'hello')
         throw new Error(error.message)
      }
   }
)
export const getHoliday = createAsyncThunk('holiday/getHoliday', async () => {
   try {
      const response = await useFetch({ url: 'api/holidays' })
      console.log(response, 'resonsessee')
      return response
   } catch (error) {
      throw new Error(error.message)
   }
})
export const getHolidayById = createAsyncThunk(
   'holiday/singleHolidayById',
   async (data) => {
      const response = await useFetch({
         url: `api/holidays/${data.id}`,
      })
      return response
   }
)

export const putHoliday = createAsyncThunk(
   'holiday/putHoliday',
   async (changeableDate, { dispatch }) => {
      const dateOfHoliday = format(changeableDate.dateOfHoliday, 'yyyy-MM-dd')
      const formData = new FormData()
      try {
         const responseHoliday = {}
         if (changeableDate.image) {
            formData.set('file', changeableDate.image)
            responseHoliday.link = await fileFetch({
               url: 'api/file',
               body: formData,
            })
         }
         const response = await useFetch({
            method: 'PUT',
            url: `api/holidays/${changeableDate.id}`,
            body: {
               name: changeableDate.name,
               dateOfHoliday,
               image: changeableDate.image,
            },
         })
         dispatch(getHoliday())
         return response
      } catch (error) {
         throw new Error(error.message)
      }
   }
)

export const deleteHoliday = createAsyncThunk(
   'holiday/deleteHoliday',
   async (data, { dispatch }) => {
      try {
         const response = await useFetch({
            url: `api/holidays/${data.id}`,
            method: 'DELETE',
         })
         dispatch(getHoliday())
         return response
      } catch (error) {
         throw new Error(error.message)
      }
   }
)
