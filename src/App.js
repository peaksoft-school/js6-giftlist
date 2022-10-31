import './App.css'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import HolidayCard from './components/UI/HolidayCard'
import AppRoutes from './routes/AppRoutes'
import photos from './assets/svg/Device - Macbook Pro.svg'
import { deleteHoliday, postHoliday } from './store/slices/HolidaySlice'

function App() {
   const arr = []
   const [isModal, setIsModal] = useState(false)

   const [array, setArr] = useState(arr)
   const [idModal, setIdModal] = useState(null)
   const controller = (id) => {
      setIdModal(id)
      setIsModal(true)
   }
   const dispatch = useDispatch()
   const deleteHandler = () => {
      const mewItem = array.filter((item) => item.id !== idModal)
      setArr(mewItem)
      dispatch(deleteHoliday(idModal))
      setIsModal(false)
   }

   const [value, setValue] = useState('')
   const onHandlerValue = () => {
      setArr([...array, { title: value, id: Math.random(), photo: photos }])
      dispatch(postHoliday(array))
   }
   return (
      <div>
         <AppRoutes />
         <input onChange={(e) => setValue(e.target.value)} />
         <button onClick={onHandlerValue}>add</button>
         {array.map((item) => (
            <HolidayCard
               src={item.photo}
               title={item.title}
               onClick={() => controller(item.id)}
            />
         ))}
         {isModal && (
            <div style={{ position: 'absolute', top: '500px', left: '400px' }}>
               <button onClick={() => deleteHandler()}>delete</button>
               <button>update</button>
               <button>post</button>
            </div>
         )}
      </div>
   )
}

export default App
