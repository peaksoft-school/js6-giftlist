/* eslint-disable no-return-assign */
/* eslint-disable prefer-destructuring */
import { useDispatch } from 'react-redux'
import './App.css'
import { useRef } from 'react'
import AppRoutes from './routes/AppRoutes'
import { postHoliday } from './store/slices/HolidayActions'

function App() {
   const dispatch = useDispatch()
   const e = useRef(null)
   const seendingDate = () => {
      dispatch(
         postHoliday({
            image: e.current,
            name: 'current',
            dateOfHoliday: new Date(),
         })
      )
   }
   return (
      <div>
         <input onChange={(f) => (e.current = f.target.files[0])} type="file" />
         <AppRoutes />
         <button onClick={seendingDate}>add</button>
      </div>
   )
}

export default App
