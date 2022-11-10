import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { postHoliday } from '../../store/slices/HolidayActions'
import Button from '../UI/Button'
import ImagePicker from '../UI/ImagePicker'
import Input from '../UI/Inputs'
import Modal from '../UI/modals/Modal'

function HomePage() {
   const [isModal, setIsModal] = useState(false)
   const [image, setImage] = useState(null)

   const dispatch = useDispatch()

   const isModalHandler = () => {
      setIsModal(true)
   }

   const getImageHandler = (image) => {
      setImage(image)
   }

   const seendingData = () => {
      if (image) {
         dispatch(
            postHoliday({
               data: {
                  name: 'dastan bratan ',
                  dateOfHoliday: '2022-11-10',
               },
               image,
            })
         )
      }
   }
   return (
      <div
         style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '300px',
         }}
      >
         <Button onClick={isModalHandler}>+ Добавить праздник</Button>
         <Modal isOpen={isModal} onClose={() => setIsModal(false)}>
            <StyledModalHoliday>
               <ImagePicker onGetImage={getImageHandler} />
               <Input />
               <DateInput type="date" />
               <Button>Отмена</Button>
               <Button onClick={seendingData}>Добавить</Button>
            </StyledModalHoliday>
         </Modal>
      </div>
   )
}

export default HomePage

const StyledModalHoliday = styled('div')`
   display: flex;
   flex-direction: column;
   gap: 10px;
`

const DateInput = styled.input``
