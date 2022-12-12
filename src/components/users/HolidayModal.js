import React, { useState } from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import Input from '../UI/Inputs'
import Modal from '../UI/modals/Modal'
import ImagePicker from '../UI/ImagePicker'
import Button from '../UI/Button'
import { postHoliday } from '../../store/slices/HolidayActions'
import DataPicker from '../UI/DataPicker'

function HolidayModal({ isOpen, onClose }) {
   const [holidayTitle, setHolidaysData] = useState('')

   const [date, setDate] = useState(null)

   const [image, setImage] = useState(null)

   const dispatch = useDispatch()

   const sendingData = () => {
      if (!date && !holidayTitle && !image[0]) return
      dispatch(
         postHoliday({
            image,
            name: holidayTitle,
            dateOfHoliday: date,
         })
      )
      setImage(null)
      setHolidaysData('')
      setDate('')
      onClose()
   }

   const onHolidayTitleHanlder = (e) => setHolidaysData(e.target.value)

   const onHolidayDateHandler = (dateHoliday) => setDate(dateHoliday)

   return (
      <div>
         <Modal isOpen={isOpen} onClose={onClose}>
            <StyledModalHoliday>
               <TopPart>
                  <Title>Добавление праздника</Title>
                  <ImagePicker setImage={setImage} image={image} />
               </TopPart>
               <BottomPart>
                  <InputDistance>
                     <Label>Название праздника</Label>
                     <Input
                        placeholder="Введите название праздника"
                        onChange={onHolidayTitleHanlder}
                        value={holidayTitle}
                     />
                  </InputDistance>
                  <InputDistance>
                     <Label>Дата праздника</Label>
                     <DataPicker
                        placeholder="Укажите дату праздника"
                        onChange={onHolidayDateHandler}
                        value={date}
                        width="483px"
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
   width: 100%;
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
