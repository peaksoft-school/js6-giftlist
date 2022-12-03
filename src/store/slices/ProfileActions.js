import { createAsyncThunk } from '@reduxjs/toolkit'
import format from 'date-fns/format'
import { useFetch } from '../../api/useFetch'
import { fileFetch } from '../../api/fileFetch'
import { showError, showSuccess } from '../../utils/helpers/helpers'
import { AUTH } from '../../utils/constants/constants'

// export const postProfile = createAsyncThunk(
//    'profile/postProfile',
//    async (data, { dispatch }) => {
//       try {
//          const values = { ...data }
//          values.dateOfBirth = format(new Date(data.dateOfBirth), 'yyyy-MM-dd')
//          if (data.image) {
//             const formData = new FormData()
//             formData.set('file', data.image)
//             const fileResponse = await fileFetch({
//                url: 'api/file',
//                body: formData,
//             })

//             values.image = fileResponse.link
//          }
//          const response = await useFetch({
//             method: 'POST',
//             url: 'api/profile',
//             body: values,
//          })
//          console.log(response, 'responoo')
//          const dataUser = JSON.parse(localStorage.getItem(AUTH))
//          localStorage.setItem(
//             AUTH,
//             JSON.stringify({
//                ...dataUser,
//                firstName: values.firstName,
//                lastName: values.lastName,
//                image: values.image,
//             })
//          )
//          dispatch(getProfileFullInfo())
//          showSuccess('Успешно добавлен!')
//          return response
//       } catch (error) {
//          throw new Error(error)
//       }
//    }
// )

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
