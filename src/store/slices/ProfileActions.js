import { createAsyncThunk } from '@reduxjs/toolkit'
// import { format, parse } from 'date-fns'
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
   'edit/profile',
   async (data, { dispatch }) => {
      console.log(data, 'putMethod')
      const formData = new FormData()
      try {
         const dataUser = JSON.parse(localStorage.getItem(AUTH))
         const date = format(new Date(data.body.dateOfBirth), 'yyyy-MM-dd')
         const responseFile = {}
         if (data.body.image.name) {
            formData.set('file', data.body.image)
            responseFile.link = await useFetch({
               url: 'api/file',
               body: formData,
            })
            console.log(responseFile, 'fotkuPostav')
         }
         const response = await useFetch({
            url: `api/profile/${data.id}`,
            method: 'PUT',
            body: {
               firstName: data.body.firstName,
               lastName: data.body.lastName,
               email: data.body.email,
               image: data.body.image.name
                  ? responseFile.link.link
                  : data.body.image,
               country: data.body.country,
               dateOfBirth: date,
               phoneNumber: data.body.phoneNumber,
               clothingSize: data.body.clothingSize,
               shoeSize: data.body.shoeSize,
               hobby: data.body.hobby,
            },
         })

         localStorage.setItem(
            AUTH,
            JSON.stringify({
               ...dataUser,
               firstName: data.firstName,
               lastName: data.lastName,
               image: data.image.name ? responseFile.link.link : data.image,
            })
         )
         showSuccess('Успешно редактирован!')
         dispatch(getProfileInfo())
         return response
      } catch (error) {
         showError('Что-то пошло не так!')
         throw new Error('Что-то пошло не так!')
      }
   }
)
