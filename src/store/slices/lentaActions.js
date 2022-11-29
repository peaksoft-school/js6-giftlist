import { createAsyncThunk } from '@reduxjs/toolkit'
import { useFetch } from '../../api/useFetch'

export const getLentaActions = createAsyncThunk(
   'feed/getLentaActions',
   async () => {
      try {
         const response = await useFetch({
            url: 'api/feed',
         })
         console.log(response)
         return response
      } catch (err) {
         return console.log(err)
      }
   }
)
