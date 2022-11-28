import { createAsyncThunk } from '@reduxjs/toolkit'
import format from 'date-fns/format'
import { useFetch } from '../../api/useFetch'
import { fileFetch } from '../../api/fileFetch'
import { showSuccess } from '../../utils/helpers/helpers'
import { getHolidayToSelect } from './WishlistActions'

export const postHoliday = createAsyncThunk(
   'holiday/postHoliday',
   async (data, { dispatch }) => {
      try {
         const values = { ...data }
         values.dateOfHoliday = format(
            new Date(data.dateOfHoliday),
            'yyyy-MM-dd'
         )
         if (data.image) {
            const formData = new FormData()
            formData.set('file', data.image)
            const fileResponse = await fileFetch({
               url: 'api/file',
               body: formData,
            })

            values.image = fileResponse.link
         }
         const response = await useFetch({
            method: 'POST',
            url: 'api/holidays',
            body: values,
         })
         showSuccess('Успешно добавлен!')
         dispatch(getHoliday())
         dispatch(getHolidayToSelect())
         return response
      } catch (error) {
         throw new Error(error)
      }
   }
)
export const getHoliday = createAsyncThunk('holiday/getHoliday', async () => {
   try {
      const response = await useFetch({ url: 'api/holidays' })
      return response
   } catch (error) {
      throw new Error(error.message)
   }
})
export const getHolidayById = createAsyncThunk(
   'holiday/singleHolidayById',
   async (id) => {
      const response = await useFetch({
         url: `api/holidays/${id}`,
      })

      return response
   }
)

export const putHoliday = createAsyncThunk(
   'holiday/putHoliday',
   async (changeableDate, { dispatch }) => {
      const dateOfHoliday = format(
         new Date(changeableDate.body.dateOfHoliday),
         'yyyy-MM-dd'
      )
      try {
         const responseHoliday = {}
         if (typeof changeableDate.body.image === 'object') {
            const formData = new FormData()
            formData.set('file', changeableDate.body.image)
            const result = await fileFetch({
               url: 'api/file',
               body: formData,
            })
            responseHoliday.link = result.link
         } else {
            responseHoliday.link = changeableDate.body.image
         }

         const response = await useFetch({
            method: 'PUT',
            url: `api/holidays/${changeableDate.id}`,
            body: {
               name: changeableDate.body.name,
               dateOfHoliday,
               image: responseHoliday.link,
            },
         })
         dispatch(getHoliday())
         dispatch(getHolidayToSelect())
         showSuccess('Успешно изменен!')

         return response
      } catch (error) {
         throw new Error(error.message)
      }
   }
)

export const deleteHoliday = createAsyncThunk(
   'holiday/deleteHoliday',
   async (id, { dispatch }) => {
      try {
         const response = await useFetch({
            url: `api/holidays/${id}`,
            method: 'DELETE',
         })
         dispatch(getHoliday())
         showSuccess('Успешно удален!')
         return response
      } catch (error) {
         throw new Error(error.message)
      }
   }
)
