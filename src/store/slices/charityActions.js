import { createAsyncThunk } from '@reduxjs/toolkit'
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
   async (id, { dispatch }) => {
      try {
         const response = await useFetch({
            url: `api/charities/${id}`,
         })
         dispatch(getCharity())
         return response
      } catch (error) {
         throw new Error(error)
      }
   }
)

export const putCharity = createAsyncThunk(
   'charity/putCharity',
   async (changeableDate, { dispatch }) => {
      try {
         const responseHoliday = {}
         if (typeof changeableDate.body.image === 'object') {
            const formData = new FormData()
            formData.append('file', changeableDate.body.image)
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
               name: changeableDate.body.name,
               condition: changeableDate.body.condition,
               image: responseHoliday.link,
               category: changeableDate.body.category,
               subCategory: changeableDate.body.subCategory,
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
export const reservedCard = createAsyncThunk(
   'charity/reservedCard',
   async (data, { dispatch }) => {
      try {
         const response = await useFetch({
            url: `api/charities/reservation/${data.id}?isAnonymously=${data.isAnonymously}`,
            method: 'POST',
         })
         if (response.message === 'Благотворительность в резерве') {
            return showError('Благотворительность в резерве')
         }

         showSuccess('Успешно забронирован!')
         dispatch(getCharityById(data.id))
         dispatch(getCharity())

         return response
      } catch (error) {
         throw new Error(error.message)
      }
   }
)

export const searchingCharity = createAsyncThunk(
   'charity/searchingCharity',
   async (data) => {
      try {
         const response = await useFetch({
            url: `api/search/charity?${Object.keys(data)
               .map((key) => `${key}=${data[key]}`)
               .join('&')}`,
            method: 'GET',
         })
         return response
      } catch (error) {
         throw new Error(error.message)
      }
   }
)

export const inputSearchCharity = createAsyncThunk(
   'charity/inputSerchCharity',
   async (data) => {
      try {
         const response = await useFetch({
            url: `api/search/charity?text=${data}`,
            method: 'GET',
         })
         return response
      } catch (error) {
         throw new Error(error.message)
      }
   }
)
export const unReservedCard = createAsyncThunk(
   'charity/unReservedCard',
   async (id, { dispatch }) => {
      try {
         const response = await useFetch({
            url: `api/charities/un-reservation/${id}`,
            method: 'POST',
         })
         if (response.message === 'Не ваш благотворительность') {
            return showError('Не ваш благотворительность')
         }
         showSuccess('Успешно снят!')
         dispatch(getCharityById(id))
         dispatch(getCharity())
         return response
      } catch (error) {
         throw new Error(error.message)
      }
   }
)
