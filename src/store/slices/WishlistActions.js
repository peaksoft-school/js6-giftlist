import { createAsyncThunk } from '@reduxjs/toolkit'
import format from 'date-fns/format'
import { useFetch } from '../../api/useFetch'
import { fileFetch } from '../../api/fileFetch'
import { showSuccess } from '../../utils/helpers/helpers'

export const postGift = createAsyncThunk(
   'wish/postGift',
   async (data, { dispatch }) => {
      console.log(data, 'data')
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

            values.image = fileResponse.linkToGift
         }
         const response = await useFetch({
            method: 'POST',
            url: 'api/wish-list',
            body: values,
         })
         console.log(response, 'post')
         showSuccess('Успешно добавлен!')
         dispatch(getWishGift())
         return response
      } catch (error) {
         console.log(error, 'errro')
         throw new Error(error)
      }
   }
)
export const getWishGift = createAsyncThunk('wish/getWishGift', async () => {
   try {
      const response = await useFetch({ url: 'api/wish-list' })
      console.log(response, 'get')
      return response
   } catch (error) {
      throw new Error(error.message)
   }
})
export const getWishById = createAsyncThunk('wish/getWishById', async (id) => {
   const response = await useFetch({
      url: `api/wish-list/${id}`,
   })

   return response
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
               name: changeableDate.body.name,
               dateOfHoliday,
               image: responseHoliday.link,
            },
         })
         dispatch(getWishGift())
         showSuccess('Успешно изменен!')

         return response
      } catch (error) {
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
