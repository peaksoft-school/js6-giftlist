import { createAsyncThunk } from '@reduxjs/toolkit'
import { useFetch } from '../../../api/useFetch'
import { showError, showSuccess } from '../../../utils/helpers/helpers'

export const getCharity = createAsyncThunk('charity/allCharity', async () => {
   try {
      const response = await useFetch({ url: `api/admin/charities` })
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
   async (data, { dispatch }) => {
      try {
         const response = await useFetch({
            url: `api/admin/charity${data.id}`,
            method: 'DELETE',
         })
         dispatch(getCharityById(data.id))
         dispatch(getCharity())
         showSuccess('Успешно удален!')
         return response
      } catch (error) {
         throw new Error(error.message)
      }
   }
)
export const blockedCharity = createAsyncThunk(
   'charity/blockedCharity',

   async (data, { dispatch }) => {
      try {
         const response = await useFetch({
            url: `api/admin/charity-block/${data.id}`,
            method: 'PUT',
         })
         if (response.message === 'Благотворительность в резерве') {
            return showError('Благотворительность в резерве')
         }

         showSuccess('Успешно заблокирован!')
         dispatch(getCharityById(data.id))
         dispatch(getCharity())

         return response
      } catch (error) {
         throw new Error(error.message)
      }
   }
)

export const unBlockedCharity = createAsyncThunk(
   'charity/unBlockedCharity',

   async (id, { dispatch }) => {
      try {
         const response = await useFetch({
            url: `api/admin/charity-unblock${id}`,
            method: 'PUT',
         })
         if (response.message === 'Благотворительность в резерве') {
            return showError('Благотворительность в резерве')
         }

         showSuccess('Успешно разблокирован!')
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
