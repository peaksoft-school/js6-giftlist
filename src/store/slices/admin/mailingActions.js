import { createAsyncThunk } from '@reduxjs/toolkit'
import { fileFetch } from '../../../api/fileFetch'
import { useFetch } from '../../../api/useFetch'
import { showSuccess } from '../../../utils/helpers/helpers'

export const getMailing = createAsyncThunk('admin/getMailing', async () => {
   try {
      const response = await useFetch({
         url: 'api/mailing-list',
      })

      return response
   } catch (error) {
      throw new Error(error)
   }
})

export const getMailingById = createAsyncThunk(
   'admin/getMailingById',
   async (id) => {
      try {
         const response = await useFetch({
            url: `api/mailing-list/${id}`,
         })
         return response
      } catch (error) {
         throw new Error(error)
      }
   }
)
export const postMailing = createAsyncThunk(
   'admin/postMailing',
   async (data, { dispatch }) => {
      console.log(data, 'dsadfa')
      try {
         const values = { ...data }
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
            url: 'api/mailing-list',
            method: 'POST',
            body: values,
         })
         data.onClose()
         showSuccess('Успешно добавлено')
         dispatch(getMailing())
         return response
      } catch (error) {
         throw new Error(error)
      }
   }
)
