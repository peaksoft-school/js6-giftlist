import { createAsyncThunk } from '@reduxjs/toolkit'
import { useFetch } from '../../../api/useFetch'
import { showError, showSuccess } from '../../../utils/helpers/helpers'

export const getCharity = createAsyncThunk('charity/getCharity', async () => {
   try {
      const response = await useFetch({ url: 'api/admin/charities' })
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
            url: `api/admin/${id}`,
         })
         dispatch(getCharity())
         return response
      } catch (error) {
         throw new Error(error)
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
