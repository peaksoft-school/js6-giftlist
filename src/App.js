import { useDispatch } from 'react-redux'
import './App.css'
import AppRoutes from './routes/AppRoutes'
import photos from './assets/svg/Device - Macbook Pro.svg'
import { postHoliday } from './store/slices/HolidayActions'

function App() {
   const dispatch = useDispatch()
   const seendingDate = () => {
      dispatch(
         postHoliday({
            photo: photos,
            name: 'beka',
            date: '2022 - 11 - 02',
         })
      )
   }
   return (
      <div>
         <AppRoutes />
         <button onClick={seendingDate}>add</button>
      </div>
   )
}

export default App
