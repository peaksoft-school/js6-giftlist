import React, { useState } from 'react'
import styled from 'styled-components'
import { useSearchParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import Modal from '../../components/UI/modals/Modal'
import RadioButton from '../../components/UI/radioButton/RadioButton'
import Button from '../../components/UI/Button'
import { complainArray } from '../../utils/constants/constants'
import { postComplaints } from '../../store/slices/complainActions'

function ComplainModal({ isOpen, onClose, setIsOpen }) {
   const dispatch = useDispatch()
   const [params] = useSearchParams()
   const { id } = Object.fromEntries(params)
   const [value, setValue] = useState('')
   const sendAComplaint = () => {
      dispatch(postComplaints({ complaintText: value, wishId: id }))
      setIsOpen(true)
      onClose({})
   }
   const radioValueChange = (e) => setValue(e.target.value)
   return (
      <Modal isOpen={isOpen} onClose={onClose}>
         <TitleModal>Пожаловаться</TitleModal>
         <TitleQuestion>
            Почему вы хотите пожаловаться на эту публикацию?
         </TitleQuestion>
         <ModalContainer>
            {complainArray.map((item) => (
               <ContainerCheckbox>
                  <RadioButton
                     onChange={radioValueChange}
                     value={value}
                     label={item}
                     id={Math.random()}
                     valueChildren={item}
                  />
               </ContainerCheckbox>
            ))}
            <ButtonWrapper>
               <BtnSend onClick={() => onClose({})}>Отмена</BtnSend>
               <Btn onClick={sendAComplaint}>Отправить</Btn>
            </ButtonWrapper>
         </ModalContainer>
      </Modal>
   )
}
export default ComplainModal
const Btn = styled(Button)`
   &.cOnipN.MuiButton-root.MuiButton-contained {
      border-radius: 6px;
      color: white;
      border: transparent;
      padding: 16px, 0px, 16px, 0px;
      background-color: rgba(134, 57, 181, 1);
      width: 232px;
   }
`
const BtnSend = styled(Button)`
   &.cOnipN.MuiButton-root.MuiButton-contained {
      border-radius: 6px;
      color: #8d949e;
      border: 1px solid #8d949e;
      padding: 16px, 0px, 16px, 0px;
      background-color: rgb(252, 252, 253);
      width: 232px;
   }
`
const ContainerCheckbox = styled('div')`
   display: flex;
   align-items: center;
   font-family: 'Inter';
   font-size: 14px;
   font-weight: 400;
   line-height: 16px;
   letter-spacing: 0em;
   text-align: left;
`
const ButtonWrapper = styled('div')`
   display: flex;
   justify-content: center;
   gap: 10px;
   padding-top: 39px;
`
const ModalContainer = styled('div')`
   display: flex;
   flex-direction: column;
`
const TitleQuestion = styled('h4')`
   font-family: 'Inter';
   font-size: 14px;
   font-weight: 500;
   line-height: 16px;
   letter-spacing: 0em;
   padding-bottom: 20px;
`
const TitleModal = styled('h4')`
   font-family: 'Inter';
   font-size: 24px;
   font-weight: 500;
   line-height: 32px;
   letter-spacing: 0em;
   text-align: left;
   padding-bottom: 30px;
`
