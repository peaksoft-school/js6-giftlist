import { useDispatch } from 'react-redux'
import './App.css'
import AppRoutes from './routes/AppRoutes'
import { Login, TestSlice } from './store/slices/TestSlice'

function App() {
   // const navigate = useNavigate()
   const dispatch = useDispatch()
   const postQUestions = () => {
      dispatch(
         TestSlice({
            firstName: 'bektur',
            lastName: 'kanybekov',
            email: 'lolo@gmail.com',
            password: 'string',
         })
      )
   }

   const loginFunction = () => {
      dispatch(
         Login({
            email: 'lolo@gmail.com',
            password: 'string',
         })
      )
   }
   return (
      <div>
         <AppRoutes />
         <button onClick={postQUestions}>REGIRSTER hello</button>
         <button onClick={loginFunction}>login hello</button>
      </div>
   )
}

export default App
