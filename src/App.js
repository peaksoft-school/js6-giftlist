import { useState } from 'react'
import { useDispatch } from 'react-redux'
import './App.css'
import HolidayCard from './components/UI/HolidayCard'
import AppRoutes from './routes/AppRoutes'
import photos from './assets/svg/Device - Macbook Pro.svg'
import { postHoliday } from './store/slices/HolidaySlice'

function App() {
   const dispatch = useDispatch()
   const [array, setArray] = useState([])
   const [value, setValue] = useState('')
   const seendigDate = () => {
      setArray([...array, { title: value }])
      dispatch(postHoliday({ photo: photos, title: value, date: '12.04.22' }))
   }

   return (
      <div>
         <AppRoutes />
         <input onChange={(e) => setValue(e.target.value)} value={value} />
         <button onClick={seendigDate}>create</button>
         {array.map((item) => (
            <HolidayCard title={item.title} />
         ))}
      </div>
   )
}

export default App
