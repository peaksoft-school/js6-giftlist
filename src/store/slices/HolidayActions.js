import { createAsyncThunk } from '@reduxjs/toolkit'
import format from 'date-fns/format'
import { useFetch } from '../../api/useFetch'
import { fileFetch } from '../../api/fileFetch'

export const postHoliday = createAsyncThunk(
   'holiday/postHoliday',
   async (data, { dispatch }) => {
      const dateOfHoliday = format(data.dateOfHoliday, 'yyyy-MM-dd')
      const formData = new FormData()
      try {
         let linkPhoto = null
         if (data.image) {
            formData.set('file', data.image)
            const fileResponse = await fileFetch({
               url: 'http://3.70.207.7/api/file',
               body: formData,
            })
            linkPhoto = fileResponse.link
            console.log(linkPhoto)
         }

         const response = await useFetch({
            method: 'POST',
            url: 'http://3.70.207.7/api/holidays',
            body: {
               dateOfHoliday,
               name: data.name,
               image: data.image ? linkPhoto : null,
            },
         })
         console.log(response, 'post')
         dispatch(getHoliday())
         return response
      } catch (error) {
         console.log(error)
         throw new Error(error.message)
      }
   }
)
export const getHoliday = createAsyncThunk('holiday/getHoliday', async () => {
   try {
      const response = await useFetch({ url: 'http://3.70.207.7/api/holidays' })
      console.log(response, 'getHoliday')
      return response
   } catch (error) {
      throw new Error(error.message)
   }
})
export const getHolidayById = createAsyncThunk(
   'holiday/singleHolidayById',
   async (data) => {
      const response = await useFetch({
         url: `http://3.70.207.7/api/holidays/${data.id}`,
      })
      console.log(response, 'getByIdHoliday')
      return response
   }
)

export const putHoliday = createAsyncThunk(
   'holiday/putHoliday',
   async (changeableDate, { dispatch }) => {
      const formatDate = format(changeableDate.dateOfHoliday, 'yyyy-MM-dd')
      const formData = new FormData()
      try {
         const responseHoliday = {}
         if (changeableDate.image) {
            formData.set('file', changeableDate.image)
            responseHoliday.link = await fileFetch({
               url: 'http://3.70.207.7/api/file',
               body: formData,
            })
         }
         console.log(responseHoliday, 'lindFormData PUT')
         const response = await useFetch({
            method: 'PUT',
            url: `http://3.70.207.7/api/holidays/${changeableDate.id}`,
            body: {
               name: changeableDate.name,
               dateOfHoliday: formatDate,
               image: changeableDate.image,
            },
         })
         dispatch(getHoliday())
         console.log(response, 'put Request')
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
            url: `http://3.70.207.7/api/holidays/${data.id}`,
            method: 'DELETE',
         })
         dispatch(getHoliday())
         console.log(response, 'deleteFunctioon')
         return response
      } catch (error) {
         throw new Error(error.message)
      }
   }
)
