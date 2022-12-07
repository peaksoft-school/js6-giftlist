import React from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import Button from '../../components/UI/Button'
import Modal from '../../components/UI/modals/Modal'
import logoutImage from '../../assets/svg/logoutImage.js.svg'
import { AUTH } from '../../utils/constants/constants'
import { logout } from '../../store/slices/authSlice'

function ProfileModal({ isOpen, onClose }) {
   const navigate = useNavigate()
   const dispatch = useDispatch()

   const logoutOfAccount = () => {
      Promise.resolve(localStorage.removeItem(AUTH)).then(() => {
         Promise.resolve(dispatch(logout())).then(() => navigate('/'))
      })
   }
   return (
      <Modal isOpen={isOpen} onClose={onClose}>
         <TopPart>
            <img src={logoutImage} alt="" />
            <Title>Вы уверены что хотите выйти?</Title>
         </TopPart>
         <ButtonWrapper>
            <ButtonCancel onClick={onClose}>Отмена</ButtonCancel>
            <Buttons onClick={logoutOfAccount}>Выйти</Buttons>
         </ButtonWrapper>
      </Modal>
   )
}

export default ProfileModal

const Title = styled('h4')`
   font-family: 'Inter';
   font-style: normal;
   font-weight: 500;
   font-size: 24px;
   line-height: 32px;
   padding-top: 16px;
   color: #23262f;
`

const ButtonWrapper = styled('div')`
   display: flex;
   justify-content: center;
   gap: 16px;
   padding-top: 26px;
`

const TopPart = styled('div')`
   display: flex;
   justify-content: center;
   flex-direction: column;
   align-items: center;
`

const Buttons = styled(Button)`
   &.cOnipN.MuiButton-root.MuiButton-contained {
      background-color: rgba(229, 53, 53, 1);
      width: 232px;
      color: white;
   }
`
const ButtonCancel = styled(Button)`
   &.cOnipN.MuiButton-root.MuiButton-contained {
      width: 232px;
      color: rgba(141, 148, 158, 1);
      :hover {
         background-color: white !important;
      }
   }
`
