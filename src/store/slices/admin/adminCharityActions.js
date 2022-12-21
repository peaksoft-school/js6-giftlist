import { createAsyncThunk } from '@reduxjs/toolkit'
import { useFetch } from '../../../api/useFetch'
import { showError, showSuccess } from '../../../utils/helpers/helpers'

export const getAdminCharity = createAsyncThunk(
   'charity/getAdminCharity',
   async () => {
      try {
         const response = await useFetch({ url: `api/admin/charities` })
         return response
      } catch (error) {
         throw new Error(error.message)
      }
   }
)
export const getAdminCharityById = createAsyncThunk(
   'charity/getAdminCharityById',
   async (id, { dispatch }) => {
      try {
         const response = await useFetch({
            url: `api/admin/${id}`,
         })
         dispatch(getAdminCharity())
         return response
      } catch (error) {
         throw new Error(error)
      }
   }
)

export const deleteAdminCharity = createAsyncThunk(
   'charity/deleteAdminCharity',
   async (data, { dispatch }) => {
      try {
         const response = await useFetch({
            url: `api/admin/charity${data.id}`,
            method: 'DELETE',
         })
         dispatch(getAdminCharityById(data.id))
         dispatch(getAdminCharity())
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
         dispatch(getAdminCharityById(data.id))
         dispatch(getAdminCharity())

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
         dispatch(getAdminCharityById(id))
         dispatch(getAdminCharity())

         return response
      } catch (error) {
         throw new Error(error.message)
      }
   }
)

export const searchingAdminCharity = createAsyncThunk(
   'charity/searchingAdminCharity',
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

export const inputSearchAdminCharity = createAsyncThunk(
   'charity/inputSearchAdminCharity',
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
