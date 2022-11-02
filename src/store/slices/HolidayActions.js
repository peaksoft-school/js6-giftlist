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
            formData.append('file', data.image)
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
         dispatch(getHoliday())
         console.log(response, 'post')
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
      return response
   } catch (error) {
      throw new Error(error.message)
   }
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
   async (obj, { dispatch }) => {
      const formatDate = format(obj.dateOfHoliday, 'yyyy-MM-dd')
      const formData = new FormData()
      try {
         const holidayResponse = {}
         if (obj.photo.name) {
            formData.set('file', obj.image)
            holidayResponse.link = await fileFetch({
               url: 'api/file/upload',
               body: formData,
            })
         }
         const response = await useFetch({
            method: 'PUT',
            url: `api/holiday/${obj.id}`,
            body: {
               name: obj.name,
               date: formatDate,
               photo: obj.photo,
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
            url: `api/holiday/${data.id}`,
            method: 'DELETE',
         })
         dispatch(getHoliday())
         return response
      } catch (error) {
         throw new Error(error.message)
      }
   }
)
