import { toast } from 'react-toastify'
import store from '../../store/indexStore'

export const getToken = () => {
   return store.getState().auth.user.jwt
}

export const showSuccess = (message) => {
   toast.success(message, { position: 'top-right' })
}

export const showError = (message) => {
   toast.error(message, { position: 'top-right' })
}

export const padTo2Digits = (value) => {
   return value.toString().padStart(2, '0')
}
export const formatDate = {
   DD_MM_YY: (date) => {
      return [
         padTo2Digits(date.getDate()),
         padTo2Digits(date.getMonth() + 1),
         date.getFullYear().toString().substr(-2),
      ].join('.')
   },
}
