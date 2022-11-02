import { store } from '../../store/indexStore'

export const getToken = () => {
   return store.getState().auth.user.jwt
}
