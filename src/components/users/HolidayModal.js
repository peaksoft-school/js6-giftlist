import React, { useState } from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import Input from '../UI/Inputs'
import Modal from '../UI/modals/Modal'
import ImagePicker from '../UI/ImagePicker'
import Button from '../UI/Button'
import { postHoliday } from '../../store/slices/HolidayActions'

function HolidayModal({ isOpen, onClose }) {
   const [holidaysData, setHolidaysData] = useState({ title: '', date: '' })

   const [image, setImage] = useState(null)

   const dispatch = useDispatch()

   const getImageHandler = (images) => setImage(images)

   const sendingData = () => {
      if (!holidaysData.date && !holidaysData.title && !image) return
      dispatch(
         postHoliday({
            image,
            name: holidaysData.title,
            dateOfHoliday: holidaysData.date,
         })
      )
      setImage(null)
      setHolidaysData({ date: '', title: '' })
      onClose()
   }

   const onHolidayTitleHanlder = (e) =>
      setHolidaysData({ ...holidaysData, title: e.target.value })

   const onHolidayDateHandler = (e) =>
      setHolidaysData({ ...holidaysData, date: e.target.value })

   return (
      <div>
         <Modal isOpen={isOpen} onClose={onClose}>
            <StyledModalHoliday>
               <TopPart>
                  <Title>Добавление праздника</Title>
                  <ImagePicker onGetImage={getImageHandler} />
               </TopPart>
               <BottomPart>
                  <InputDistance>
                     <Label>Название праздника</Label>
                     <Input
                        placeholder="Введите название праздника"
                        onChange={onHolidayTitleHanlder}
                        value={holidaysData.title}
                     />
                  </InputDistance>
                  <InputDistance>
                     <Label>Дата праздника</Label>
                     <Input
                        placeholder="Укажите дату праздника"
                        onChange={onHolidayDateHandler}
                        value={holidaysData.date}
                        type="date"
                     />
                  </InputDistance>
               </BottomPart>
               <ButtonContainer>
                  <ButtonCancel onClick={onClose}>Отмена</ButtonCancel>
                  <ButtonAdd onClick={sendingData}>Добавить</ButtonAdd>
               </ButtonContainer>
            </StyledModalHoliday>
         </Modal>
      </div>
   )
}

export default HolidayModal

const StyledModalHoliday = styled.div`
   border-radius: 10px;
   height: 545px;
   display: flex;
   flex-direction: column;
   gap: 40px;
`
const Title = styled('h4')`
   text-align: center;
   margin-bottom: 32px;
   font-family: 'Inter';
   font-size: 24px;
   font-weight: 500;
   line-height: 32px;
   letter-spacing: 0em;
`

const BottomPart = styled('div')`
   width: 480px;
   justify-content: center;
   display: flex;
   flex-direction: column;
   gap: 30px;
`
const ButtonContainer = styled('div')`
   display: flex;
   justify-content: center;
   gap: 17px;
`

const TopPart = styled('div')`
   display: flex;
   align-items: center;
   flex-direction: column;
`
const Label = styled('label')`
   font-family: 'Inter';
   font-size: 12px;
   font-weight: 400;
   line-height: 15px;
   letter-spacing: 0em;
`

const InputDistance = styled('div')`
   display: flex;
   gap: 6px;
   flex-direction: column;
`
const ButtonAdd = styled(Button)`
   &.cOnipN.MuiButton-root.MuiButton-contained {
      width: 232px;
      background: rgba(134, 57, 181, 1);
      color: white;
   }
`
const ButtonCancel = styled(Button)`
   &.MuiButtonBase-root {
      background: #f1f1f1;
      border: 1px solid rgba(141, 148, 158, 1);
   }
   &.cOnipN.MuiButton-root.MuiButton-contained {
      width: 232px;
      background: transparent;
      color: rgba(141, 148, 158, 1);
   }
`
