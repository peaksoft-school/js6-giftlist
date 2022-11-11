import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import HolidayCard from '../components/UI/HolidayCard'
import HolidayModal from '../components/users/HolidayModal'
import { getHoliday } from '../store/slices/HolidayActions'

function HolidaysPage() {
   const todos = useSelector((state) => state.holiday)

   const dispatch = useDispatch()

   const [isModal, setIsModal] = useState(false)

   const onHandlerOpen = () => setIsModal(true)

   const onControllHandler = () => {}

   useEffect(() => {
      dispatch(getHoliday())
   }, [])
   return (
      <div>
         <div>
            <HolidayModal isOpen={isModal} onClose={() => setIsModal(false)} />
            <button onClick={onHandlerOpen}>add</button>
         </div>

         {todos.holidays?.map((item) => (
            <HolidayCard
               src={item.image}
               key={item.id}
               title={item.name}
               date={item.dateOfHoliday}
               onClick={onControllHandler}
            />
         ))}
      </div>
   )
}

export default HolidaysPage
