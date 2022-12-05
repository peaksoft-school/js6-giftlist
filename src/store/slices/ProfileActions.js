import { createAsyncThunk } from '@reduxjs/toolkit'
// import { format, parse } from 'date-fns'
// import { format } from 'date-fns'
import { format } from 'date-fns'
import { useFetch } from '../../api/useFetch'
import { fileFetch } from '../../api/fileFetch'
import { showError, showSuccess } from '../../utils/helpers/helpers'
import { AUTH } from '../../utils/constants/constants'

export const profilePost = createAsyncThunk(
   'profile/postProfile',
   async (data, { dispatch }) => {
      console.log(data)
      try {
         const formData = new FormData()
         const responseFile = {}
         if (data.photo.name) {
            formData.set('file', data.image)
            responseFile.link = await fileFetch({
               url: 'api/file',
               body: formData,
            })
         }
         const response = await useFetch({
            url: 'api/profile',
            method: 'POST',
            body: {
               firstName: data.firstName,
               lastName: data.lastName,
               email: data.email,
               image: data.image.name ? responseFile.link.link : data.image,
               city: data.city,
               dateOfBirth: data.dateOfBirth,
               phoneNumber: data.phoneNumber,
               clothingSize: data.clothingSize,
               shoeSize: data.shoeSize,
               hobby: data.hobby,
               important: data.important,
               instagramLink: data.instagramLink,
               telegramLink: data.telegramLink,
               facebookLink: data.facebookLink,
               vkLink: data.vkLink,
            },
         })
         const dataUSer = JSON.parse(localStorage.getItem(AUTH))
         localStorage.setItem(
            AUTH,
            JSON.stringify({
               ...dataUSer,
               firstName: data.firstName,
               lastName: data.lastName,
               photo: responseFile?.link.link,
            })
         )
         dispatch(getProfileInfo())
         showSuccess('Успешно добавлено')
         return response
      } catch {
         showError('Вышла ошибка!')
         throw new Error('Что-то пошло не так')
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
         console.log(response)
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
      console.log(changeableDate, 'daddada')
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
               name: changeableDate.body.name,
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
         showSuccess('Успешно изменен!')

         return response
      } catch (error) {
         console.log(error, 'error')
         throw new Error(error.message)
      }
   }
)
