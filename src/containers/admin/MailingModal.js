import React, { useState } from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import Input from '../../components/UI/Inputs'
import Modal from '../../components/UI/modals/Modal'
import ImagePicker from '../../components/UI/ImagePicker'
import Button from '../../components/UI/Button'
import { postMailing } from '../../store/slices/admin/mailingActions'

function MailingModal({ isOpen, onClose }) {
   const [data, setData] = useState({
      text: '',
      name: '',
   })

   const [image, setImage] = useState(null)

   const dispatch = useDispatch()

   const sendingData = () => {
      dispatch(
         postMailing({
            image,
            name: data.name,
            text: data.text,
         })
      )
   }

   const onMailingNameHandle = (e) => setData({ ...data, name: e.target.value })

   const onHanlderMailing = (e) => setData({ ...data, text: e.target.value })

   return (
      <div>
         <Modal isOpen={isOpen} onClose={onClose}>
            <StyledModalHoliday>
               <TopPart>
                  <Title>Создание рассылки</Title>
                  <ImagePicker setImage={setImage} image={image} />
               </TopPart>
               <BottomPart>
                  <InputDistance>
                     <Label>Тема</Label>
                     <Input
                        placeholder="Введите тему рассылки"
                        onChange={onMailingNameHandle}
                        value={data.name}
                     />
                  </InputDistance>
                  <InputDistance>
                     <Label>Текст рассылки</Label>
                     <Input
                        placeholder="Введите текст рассылки"
                        onChange={onHanlderMailing}
                        value={data.text}
                        width="483px"
                     />
                  </InputDistance>
               </BottomPart>
               <ButtonContainer>
                  <ButtonCancel onClick={onClose}>Отмена</ButtonCancel>
                  <ButtonAdd onClick={sendingData}>Отправить</ButtonAdd>
               </ButtonContainer>
            </StyledModalHoliday>
         </Modal>
      </div>
   )
}

export default MailingModal

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
