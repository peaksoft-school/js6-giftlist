import { createAsyncThunk } from '@reduxjs/toolkit'
import { useFetch } from '../../../api/useFetch'
import { showSuccess } from '../../../utils/helpers/helpers'

export const getUsersProfile = createAsyncThunk('users', async (id) => {
   try {
      const response = await useFetch({
         url: `api/admin/profile/${id}`,
      })
      return response
   } catch (error) {
      throw new Error(error.message)
   }
})

export const wishBlock = createAsyncThunk('admin/wishBlock', async (id) => {
   try {
      const response = await useFetch({
         url: `api/admin/wish-block/${id}`,
         method: 'PUT',
      })
      return response
   } catch (error) {
      throw new Error(error.message)
   }
})
export const unBlockWishAction = createAsyncThunk(
   'admin/unBlockWish',
   async (id) => {
      try {
         const response = await useFetch({
            url: `api/admin/wish-unblock${id}`,
            method: 'PUT',
         })
         return response
      } catch (error) {
         throw new Error(error.message)
      }
   }
)
export const deleteWishAction = createAsyncThunk(
   'admin/deleteWishAction',
   async (id) => {
      try {
         const response = await useFetch({
            url: `api/admin/wish/${id}`,
            method: 'DELETE',
         })
         showSuccess(response.message)
         return response
      } catch (error) {
         throw new Error(error.message)
      }
   }
)

export const holidayBlock = createAsyncThunk(
   'admin/holidayBlock',
   async (id) => {
      try {
         const response = await useFetch({
            url: `api/admin/holiday-block/${id}`,
            method: 'PUT',
         })
         return response
      } catch (error) {
         throw new Error(error.message)
      }
   }
)
export const unBlockHolidayAction = createAsyncThunk(
   'admin/unBlockHolidayAction',
   async (id) => {
      try {
         const response = await useFetch({
            url: `api/admin/holiday-unblock${id}`,
            method: 'PUT',
         })
         return response
      } catch (error) {
         throw new Error(error.message)
      }
   }
)
export const deleteHolidayAction = createAsyncThunk(
   'admin/deleteHolidayAction',
   async (id) => {
      try {
         const response = await useFetch({
            url: `api/admin/holiday/${id}`,
            method: 'DELETE',
         })
         return response
      } catch (error) {
         throw new Error(error.message)
      }
   }
)
export const charityBlock = createAsyncThunk(
   'admin/charityBlock',
   async (id) => {
      try {
         const response = await useFetch({
            url: `api/admin/charity-block/${id}`,
            method: 'PUT',
         })
         return response
      } catch (error) {
         throw new Error(error.message)
      }
   }
)
export const unBlockCharityAction = createAsyncThunk(
   'admin/unBlockCharityAction',
   async (id) => {
      try {
         const response = await useFetch({
            url: `api/admin/charity-unblock${id}`,
            method: 'PUT',
         })
         return response
      } catch (error) {
         throw new Error(error.message)
      }
   }
)
export const deleteCharityAction = createAsyncThunk(
   'admin/deleteCharityAction',
   async (id) => {
      try {
         const response = await useFetch({
            url: `api/admin/charity${id}`,
            method: 'DELETE',
         })
         if (response.status === 'OK') {
            showSuccess('Удалено')
         }
         return response
      } catch (error) {
         throw new Error(error.message)
      }
   }
)
