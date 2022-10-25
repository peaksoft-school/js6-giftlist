import { useDispatch } from 'react-redux'
import './App.css'
import AppRoutes from './routes/AppRoutes'
import { TestSlice } from './store/slices/TestSlice'

function App() {
   const dispatch = useDispatch()
   const postQUestions = () => {
      dispatch(
         TestSlice({
            firstName: 'bektur',
            lastName: 'kanybekov',
            email: 'serik@gmail.com',
            password: 'string',
         })
      )
   }
   return (
      <div>
         <AppRoutes />
         <button onClick={postQUestions}>hello</button>
      </div>
   )
}

export default App
