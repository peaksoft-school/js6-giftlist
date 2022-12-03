import { createAsyncThunk } from '@reduxjs/toolkit'
import format from 'date-fns/format'
import { useFetch } from '../../api/useFetch'
import { fileFetch } from '../../api/fileFetch'
import { showSuccess } from '../../utils/helpers/helpers'

export const postProfile = createAsyncThunk(
   'profile/postProfile',
   async (data, { dispatch }) => {
      try {
         const values = { ...data }
         values.dateOfBirth = format(new Date(data.dateOfBirth), 'yyyy-MM-dd')
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
            url: 'api/profile',
            body: values,
         })
         dispatch(getProfileFullInfo())
         showSuccess('Успешно добавлен!')
         return response
      } catch (error) {
         throw new Error(error)
      }
   }
)

export const getProfile = createAsyncThunk('profile/getProfile', async () => {
   try {
      const response = await useFetch({ url: 'api/profile/me' })
      return response
   } catch (error) {
      throw new Error(error.message)
   }
})
export const getProfileFullInfo = createAsyncThunk(
   'profile/getProfileFullInfo',
   async () => {
      try {
         const response = await useFetch({ url: 'api/profile' })
         return response
      } catch (error) {
         throw new Error(error.message)
      }
   }
)
export const getProfileById = createAsyncThunk(
   'profile/getProfileById',
   async (id) => {
      const response = await useFetch({
         url: `api/profile/${id}`,
      })

      return response
   }
)

export const putProfile = createAsyncThunk(
   'profile/putProfile',
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
            url: `api/holidays/${changeableDate.id}`,
            body: {
               name: changeableDate.body.name,
               dateOfHoliday,
               image: responseHoliday.link,
            },
         })
         dispatch(getProfile())
         showSuccess('Успешно изменен!')

         return response
      } catch (error) {
         throw new Error(error.message)
      }
   }
)
