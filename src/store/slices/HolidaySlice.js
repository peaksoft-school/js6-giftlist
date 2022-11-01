import { createAsyncThunk } from '@reduxjs/toolkit'
import { format } from 'date-fns'
import { useFetch } from '../../api/useFetch'
import { fileFetch } from '../../api/fileFetch'

export const postHoliday = createAsyncThunk(
   'holiday/postHoliday',
   async (props, { dispatch }) => {
      const date = format(props.date, 'yyyy-MM-dd')
      const formData = new FormData()
      try {
         if (props.photo) {
            formData.set('file', props.photo)
            const fileResponse = await fileFetch({
               url: 'api/file/upload',
               body: formData,
            })
            console.log(fileResponse)
         }

         const response = await useFetch({
            method: 'POST',
            url: 'api/holiday',
            body: {
               date,
               name: props.holidayName,
               photo: props.photo,
            },
         })
         dispatch(getHoliday())
         return response
      } catch (error) {
         throw new Error(error.message)
      }
   }
)
export const getHoliday = createAsyncThunk('holiday/getHoliday', async () => {
   try {
      const response = await useFetch({ url: 'api/holiday' })
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
      const formatDate = format(obj.date, 'yyyy-MM-dd')
      const formData = new FormData()
      try {
         const holidayResponse = {}
         if (obj.photo.name) {
            formData.set('file', obj.photo)
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
