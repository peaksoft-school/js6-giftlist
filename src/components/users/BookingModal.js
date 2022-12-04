import React, { useEffect, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import Modal from '../UI/modals/Modal'
import Button from '../UI/Button'
import { getHolidayToSelect } from '../../store/slices/WishlistActions'
import UiSelect from '../UI/UiSelect'
import HolidayModal from './HolidayModal'
import { addBookingsWish } from '../../store/slices/BookingActions'

function BookingModal({ onClose }) {
   const dispatch = useDispatch()

   // const { id } = useParams()
   const navigate = useNavigate()
   const [params, setParams] = useSearchParams()
   const { modal, id } = Object.fromEntries(params)
   const openModalAddedGift = () => setParams({ modal: 'CREATE-HOLIDAY' })
   const onCloseModal = () => setParams({})

   const [holidayId, setHolidayId] = useState('')
   const [valueSelect, setValueSelect] = useState('')
   const wish = useSelector((state) => state.wishGift)
   const [data, setData] = useState({
      wishName: '',
   })

   useEffect(() => {
      dispatch(getHolidayToSelect(id))
   }, [])

   const sendingData = () => {
      dispatch(addBookingsWish({ id, holId: holidayId }))

      navigate('/user/wishlist')
   }
   const getOptionValue = (id, value) => {
      setHolidayId(id)
      setData({ ...data, dateOfHoliday: value })
   }
   return (
      <>
         <Modal isOpen={modal === 'HOLIDAY'} onClose={onClose}>
            <InputDistance>
               <Label>На какой празник хотите получить?</Label>
               <UiSelect
                  value={valueSelect}
                  setValue={setValueSelect}
                  placeholder="Выберите праздник"
                  options={wish.selectToGift}
                  getOptionValue={getOptionValue}
                  childrenComponent={
                     <MenuButton onClick={openModalAddedGift}>
                        <Plus>+</Plus> Создать новый праздник
                     </MenuButton>
                  }
               />
            </InputDistance>
            <ButtonAdd onClick={sendingData}>Сохранить</ButtonAdd>
         </Modal>
         <HolidayModal
            isOpen={modal === 'CREATE-HOLIDAY'}
            onClose={onCloseModal}
         />
      </>
   )
}

export default BookingModal
const InputDistance = styled('div')`
   display: flex;
   gap: 6px;
   flex-direction: column;
   width: 100%;
`
const Label = styled('label')`
   font-family: 'Inter';
   font-size: 12px;
   font-weight: 400;
   line-height: 15px;
   letter-spacing: 0em;
`
const ButtonAdd = styled(Button)`
   &.cOnipN.MuiButton-root.MuiButton-contained {
      margin-top: 10px;
      padding: 10px, 26px, 10px, 26px;
      background: rgba(134, 57, 181, 1);
      color: white;
   }
`
const MenuButton = styled('div')`
   color: rgba(134, 57, 181, 1);
   font-family: 'Inter';
   font-style: normal;
   font-weight: 400;
   font-size: 15px;
   line-height: 24px;
   padding-left: 18px;
   width: 240px;
   padding-top: 6px;
   display: flex;
   gap: 8px;
   cursor: pointer;
`
const Plus = styled('span')`
   font-size: 25px;
   margin-top: -1px;
`
