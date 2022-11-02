/* eslint-disable no-return-assign */
/* eslint-disable prefer-destructuring */
import { useDispatch } from 'react-redux'
import './App.css'
import { useRef } from 'react'
import AppRoutes from './routes/AppRoutes'
import {
   getHolidayById,
   postHoliday,
   putHoliday,
} from './store/slices/HolidayActions'

function App() {
   const dispatch = useDispatch()
   const e = useRef(null)
   const seendingDate = () => {
      dispatch(
         postHoliday({
            image: e.current,
            name: 'besk',
            dateOfHoliday: new Date(),
         })
      )
   }
   const putMehtodFunction = () => {
      dispatch(
         putHoliday({
            image: e.current,
            name: 'bekadeveloper',
            dateOfHoliday: new Date(),
            id: 17,
         })
      )
   }
   const deleteFunction = () => {
      dispatch(
         getHolidayById({
            id: 15,
         })
      )
   }

   // const login = async () => {
   //    const response = await fetch('http://3.70.207.7/api/public/login', {
   //       method: 'POST',
   //       headers: { 'Content-Type': 'application/json' },
   //       body: JSON.stringify({ email: 'log@gmail.com', password: 'birekion' }),
   //    })
   //    const result = await response.json()
   //    localStorage.setItem('jwt', JSON.stringify(result.jwt))
   //    console.log(result)
   // }

   // const reginsterFunction = async () => {
   //    const response = await fetch('http://3.70.207.7/api/public/register', {
   //       method: 'POST',
   //       headers: { 'Content-Type': 'application/json' },
   //       body: JSON.stringify({
   //          firstName: 'lain',
   //          lastName: 'lain',
   //          email: 'log@gmail.com',
   //          password: 'birekion',
   //       }),
   //    })
   //    const result = await response.json()
   //    console.log('register', result)
   //    return result
   // }
   return (
      <div>
         <input onChange={(f) => (e.current = f.target.files[0])} type="file" />
         <AppRoutes />
         <button onClick={seendingDate}>add</button>
         {/* <button onClick={login}>login</button> */}
         {/* <button onClick={reginsterFunction}>regtister</button> */}
         <button onClick={putMehtodFunction}>Put</button>
         <button onClick={deleteFunction}>Delete</button>
      </div>
   )
}

export default App
