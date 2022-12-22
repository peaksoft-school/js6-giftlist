import { createAsyncThunk } from '@reduxjs/toolkit'
import { useFetch } from '../../../api/useFetch'
import { showError, showSuccess } from '../../../utils/helpers/helpers'

export const getAdminCharity = createAsyncThunk(
   'charityAdmin/getAdminCharity',
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
   'charityAdmin/getAdminCharityById',
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
   'charityAdmin/deleteAdminCharity',
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
   'charityAdmin/blockedCharity',

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
   'charityAdmin/unBlockedCharity',

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
   'charityAdmin/searchingAdminCharity',
   async (data) => {
      try {
         const response = await useFetch({
            url: `api/search/charity?${Object.keys(data)
               .map((key) => `${key}=${data[key]}`)
               .join('&')}`,
            method: 'GET',
         })
         console.log(response, 'response')
         return response
      } catch (error) {
         throw new Error(error.message)
      }
   }
)

export const inputSearchAdminCharity = createAsyncThunk(
   'charityAdmin/inputSearchAdminCharity',
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
