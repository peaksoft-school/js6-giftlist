import { createAsyncThunk } from '@reduxjs/toolkit'
import format from 'date-fns/format'
import { useFetch } from '../../api/useFetch'
import { fileFetch } from '../../api/fileFetch'
import { showError, showSuccess } from '../../utils/helpers/helpers'

export const postGift = createAsyncThunk(
   'wish/postGift',
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
            url: 'api/wish-list',
            body: values,
         })
         showSuccess('Успешно добавлен!')
         dispatch(getWishGift())
         return response
      } catch (error) {
         showError(error.message)
         throw new Error(error)
      }
   }
)
export const getWishGift = createAsyncThunk('wish/getWishGift', async () => {
   try {
      const response = await useFetch({ url: 'api/wish-list' })
      return response
   } catch (error) {
      throw new Error(error.message)
   }
})
export const getWishById = createAsyncThunk('wish/getWishById', async (id) => {
   try {
      const response = await useFetch({
         url: `api/wish-list/${id}`,
      })
      return response
   } catch (error) {
      throw new Error(error)
   }
})

export const putWishGift = createAsyncThunk(
   'wish/putWishGift',
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
            url: `api/wish-list/${changeableDate.id}`,
            body: {
               wishName: changeableDate.body.wishName,
               dateOfHoliday,
               image: responseHoliday.link,
               linkToGift: changeableDate.body.linkToGift,
               description: changeableDate.body.description,
            },
         })
         dispatch(getWishGift())
         showSuccess('Успешно изменен!')
         // changeableDate.navigate('/user/wishlist')
         return response
      } catch (error) {
         showError(error.message)
         throw new Error(error.message)
      }
   }
)

export const deleteWishGift = createAsyncThunk(
   'wish/deleteWishGift',
   async (id, { dispatch }) => {
      try {
         const response = await useFetch({
            url: `api/wish-list/${id}`,
            method: 'DELETE',
         })
         dispatch(getWishGift())
         showSuccess('Успешно удален!')
         return response
      } catch (error) {
         throw new Error(error.message)
      }
   }
)

export const getHolidayToSelect = createAsyncThunk(
   'holiday/getHolidayName',
   async () => {
      const response = await useFetch({
         url: 'api/holidays',
      })
      return response
   }
)
