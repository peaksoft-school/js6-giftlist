import { createAsyncThunk } from '@reduxjs/toolkit'
import { format } from 'date-fns'
import { useFetch } from '../../api/useFetch'
import { fileFetch } from '../../api/fileFetch'
import { AUTH } from '../../utils/constants/constants'

export const profilePost = createAsyncThunk(
   'profile/profilePost',
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
         const userData = JSON.parse(localStorage.getItem(AUTH))
         localStorage.setItem(
            AUTH,
            JSON.stringify({
               ...userData,
               firstName: values.firstName,
               lastName: values.lastName,
               image: values.image,
            })
         )
         dispatch(getProfileInfo())
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
export const getProfileInfo = createAsyncThunk(
   'profile/getProfileInfo',
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
      const dateOfBirth = format(
         new Date(changeableDate.body.dateOfBirth),
         'yyyy-MM-dd'
      )
      try {
         const dataUser = JSON.parse(localStorage.getItem(AUTH))
         const reponsePhoto = {}
         if (typeof changeableDate.body.image === 'object') {
            const formData = new FormData()
            formData.set('file', changeableDate.body.image)
            const result = await fileFetch({
               url: 'api/file',
               body: formData,
            })
            reponsePhoto.link = result.link
         } else {
            reponsePhoto.link = changeableDate.body.image
         }

         const response = await useFetch({
            method: 'PUT',
            url: `api/profile/${changeableDate.id}`,
            body: {
               firstName: changeableDate.body.firstName,
               lastName: changeableDate.body.lastName,
               dateOfBirth,
               image: reponsePhoto.link,
               country: changeableDate.body.country,
               phoneNumber: changeableDate.body.phoneNumber,
               shoeSize: 44,
               clothingSize: changeableDate.body.clothingSize,
               hobby: changeableDate.body.hobby,
               important: changeableDate.body.important,
            },
         })
         localStorage.setItem(
            AUTH,
            JSON.stringify({
               ...dataUser,
               firstName: changeableDate.body.firstName,
               lastName: changeableDate.body.lastName,
               image: changeableDate.body.image.name
                  ? reponsePhoto.link
                  : changeableDate.body.image,
            })
         )
         dispatch(getProfileInfo())

         return response
      } catch (error) {
         throw new Error(error.message)
      }
   }
)
