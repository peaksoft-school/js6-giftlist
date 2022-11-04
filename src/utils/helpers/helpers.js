import { toast } from 'react-toastify'
import { store } from '../../store/indexStore'

export const getToken = () => {
   return store.getState().auth.user.jwt
}

export const showSuccess = (message) => {
   toast.success(message, { position: 'top-right' })
}

export const showError = (message) => {
   toast.error(message, { position: 'top-right' })
}
