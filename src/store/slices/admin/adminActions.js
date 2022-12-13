import { createAsyncThunk } from '@reduxjs/toolkit'
import { useFetch } from '../../../api/useFetch'

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

export const wishBlock = createAsyncThunk(
   'admin/wishBlock',
   async (id, { dispatch }) => {
      try {
         const response = await useFetch({
            url: `api/admin/wish-block/${id}`,
         })
         dispatch(getUsersProfile(id))
         return response
      } catch (error) {
         throw new Error(error.message)
      }
   }
)
export const unBlockWishAction = createAsyncThunk(
   'admin/unBlockWis',
   async (id, { dispatch }) => {
      try {
         const response = await useFetch({
            url: `api/admin/wish-block/${id}`,
         })
         dispatch(getUsersProfile(id))
         return response
      } catch (error) {
         throw new Error(error.message)
      }
   }
)

export const holidayBlock = createAsyncThunk(
   'admin/holidayBlock',
   async (id, { dispatch }) => {
      try {
         const response = await useFetch({
            url: `api/admin/holiday-block/${id}`,
         })
         dispatch(getUsersProfile(id))
         return response
      } catch (error) {
         throw new Error(error.message)
      }
   }
)
export const unBlockHolidayAction = createAsyncThunk(
   'admin/unBlockHolidayAction',
   async (id, { dispatch }) => {
      try {
         const response = await useFetch({
            url: `api/admin/holiday-unblock/${id}`,
            method: 'PUT',
         })
         dispatch(getUsersProfile(id))
         return response
      } catch (error) {
         throw new Error(error.message)
      }
   }
)
export const charityBlock = createAsyncThunk(
   'admin/holidayBlock',
   async (id, { dispatch }) => {
      try {
         const response = await useFetch({
            url: `api/admin/holiday-block/${id}`,
         })
         dispatch(getUsersProfile(id))
         return response
      } catch (error) {
         throw new Error(error.message)
      }
   }
)
export const unBlockCharityAction = createAsyncThunk(
   'admin/holidayBlock',
   async (id, { dispatch }) => {
      try {
         const response = await useFetch({
            url: `api/admin/holiday-block/${id}`,
         })
         dispatch(getUsersProfile(id))
         return response
      } catch (error) {
         throw new Error(error.message)
      }
   }
)
