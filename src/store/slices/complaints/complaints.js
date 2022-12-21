import { createAsyncThunk } from '@reduxjs/toolkit'
import { useFetch } from '../../../api/useFetch'
import { showError, showSuccess } from '../../../utils/helpers/helpers'

export const getComplaintsUser = createAsyncThunk('complaints', async () => {
   try {
      const response = await useFetch({ url: 'api/complaints' })
      return response
   } catch (error) {
      throw new Error(error.message)
   }
})

export const getComplaintsById = createAsyncThunk('complaints', async (id) => {
   try {
      const response = await useFetch({ url: `api/complaints/${id}` })
      return response
   } catch (error) {
      throw new Error(error.message)
   }
})

export const blockedCharity = createAsyncThunk(
   'charity/blockedCharity',

   async (data, { dispatch }) => {
      try {
         const response = await useFetch({
            url: `api/complaints/block/${data.wishId}`,
            method: 'GET',
         })
         if (response.message === 'Благотворительность в резерве') {
            return showError('Благотворительность в резерве')
         }

         showSuccess('Успешно заблокирован!')
         dispatch(getComplaintsById(data.id))
         dispatch(getComplaintsUser())

         return response
      } catch (error) {
         throw new Error(error.message)
      }
   }
)

export const blocked = createAsyncThunk(
   'charity/blocked',

   async (data, { dispatch }) => {
      try {
         const response = await useFetch({
            url: `api/complaints/block/${data.wishId}`,
            method: 'GET',
         })
         if (response.message === 'Благотворительность в резерве') {
            return showError('Благотворительность в резерве')
         }

         showSuccess('Успешно заблокирован!')
         dispatch(getComplaintsById(data.id))
         dispatch(getComplaintsUser())

         return response
      } catch (error) {
         throw new Error(error.message)
      }
   }
)

export const unBlockedCharity = createAsyncThunk(
   'charity/unBlockedCharity',

   async (data, { dispatch }) => {
      try {
         const response = await useFetch({
            url: `api/complaints/unblock/${data.wishId}`,
            method: 'PUT',
         })
         if (response.message === 'Благотворительность в резерве') {
            return showError('Благотворительность в резерве')
         }

         showSuccess('Успешно разблокирован!')
         dispatch(getComplaintsById(data.id))
         dispatch(getComplaintsUser())

         return response
      } catch (error) {
         throw new Error(error.message)
      }
   }
)
export const deleteCharity = createAsyncThunk(
   'charity/deleteCharity',
   async (data, { dispatch }) => {
      try {
         const response = await useFetch({
            url: `api/admin/wish/${data.wishId}`,
            method: 'DELETE',
         })
         dispatch(getComplaintsById(data.id))
         dispatch(getComplaintsUser())
         showSuccess('Успешно удален!')
         return response
      } catch (error) {
         throw new Error(error.message)
      }
   }
)
