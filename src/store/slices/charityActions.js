import { createAsyncThunk } from '@reduxjs/toolkit'
import format from 'date-fns/format'
import { useFetch } from '../../api/useFetch'
import { fileFetch } from '../../api/fileFetch'
import { showError, showSuccess } from '../../utils/helpers/helpers'

export const postCharity = createAsyncThunk(
   'charity/postCharity',
   async (data, { dispatch }) => {
      try {
         const values = { ...data }
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
            url: 'api/charities',
            body: values,
         })
         showSuccess('Успешно добавлен!')
         dispatch(getCharity())
         return response
      } catch (error) {
         showError(error.message)
         throw new Error(error)
      }
   }
)
export const getCharity = createAsyncThunk('charity/getCharity', async () => {
   try {
      const response = await useFetch({ url: 'api/charities' })
      return response
   } catch (error) {
      throw new Error(error.message)
   }
})
export const getCharityById = createAsyncThunk(
   'charity/getCharityById',
   async (id) => {
      try {
         const response = await useFetch({
            url: `api/charities/${id}`,
         })
         return response
      } catch (error) {
         throw new Error(error)
      }
   }
)

export const putCharity = createAsyncThunk(
   'charity/putCharity',
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
            url: `api/charities/${changeableDate.id}`,
            body: {
               wishName: changeableDate.body.wishName,
               dateOfHoliday,
               image: responseHoliday.link,
               linkToGift: changeableDate.body.linkToGift,
               description: changeableDate.body.description,
            },
         })
         dispatch(getCharity())
         showSuccess('Успешно изменен!')
         return response
      } catch (error) {
         showError(error.message)
         throw new Error(error.message)
      }
   }
)

export const deleteCharity = createAsyncThunk(
   'charity/deleteCharity',
   async (id, { dispatch }) => {
      try {
         const response = await useFetch({
            url: `api/charities/${id}`,
            method: 'DELETE',
         })
         dispatch(getCharity())
         showSuccess('Успешно удален!')
         return response
      } catch (error) {
         throw new Error(error.message)
      }
   }
)
