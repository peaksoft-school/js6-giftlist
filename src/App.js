import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { AUTH } from './utils/constants/constants'
import { baseAuth } from './store/slices/authSlice'
import AppRoutes from './routes/AppRoutes'
import './App.css'

function App() {
   const dispatch = useDispatch()
   const autoLogin = () => {
      const storedUser = JSON.parse(localStorage.getItem(AUTH))
      if (storedUser) {
         dispatch(baseAuth(storedUser))
      }
   }

   useEffect(() => {
      autoLogin()
   }, [])

   return <AppRoutes />
}

export default App
