// import React, { useState } from 'react'
import styled from 'styled-components'
import { useFormik } from 'formik'
import Input from '../UI/Inputs'
import Button from '../UI/Button'
import closeIcon from '../../assets/svg/close-circle.svg'
import IconButton from '../UI/IconButton'
import Modal from '../UI/modals/Modal'
import { validationSchemas } from '../../utils/validations/userValidations'

const initialValues = { email: '' }

function ForgotPassword({ closeModal, open = true }) {
   const onSubmit = (values) => {
      console.log(values)
   }
   const { values, handleSubmit, handleChange, errors } = useFormik({
      initialValues,
      onSubmit,
      validationSchema: validationSchemas,
   })
   return (
      <Modal isOpen={open} onClose={() => closeModal(false)}>
         <ForgotPasswordDiv>
            <TopPart>
               <h2>Забыли пароль?</h2>
               <IconButton
                  image={closeIcon}
                  onClick={() => closeModal(false)}
                  alt="iconClose"
               />
            </TopPart>
            <BottomPart>
               <p>Вам будет отправлена ссылка для сброса пароля</p>
               <Input
                  name="email"
                  placeholder="Введите ваш Email"
                  value={values.email}
                  onChange={handleChange}
               />
               {errors.email}
               <Button onClick={handleSubmit} variant="outlined">
                  Отправить
               </Button>
               <ButtonCancel disableRipple variant="transparent">
                  Отмена
               </ButtonCancel>
            </BottomPart>
         </ForgotPasswordDiv>
      </Modal>
   )
}

export default ForgotPassword

const ForgotPasswordDiv = styled.div`
   font-family: 'Inter';
   font-style: normal;
   font-weight: 500;
`
const TopPart = styled.div`
   display: flex;
   justify-content: space-between;
   cursor: pointer;
   margin-bottom: 32px;
`

const BottomPart = styled.div`
   display: flex;
   flex-direction: column;
   gap: 30px;
   font-family: 'Inter';
   font-style: normal;
   font-weight: 400;
   p {
      height: 16px;
      color: #87898e;
   }
`

const ButtonCancel = styled(Button)`
   &.MuiButtonBase-root {
      color: rgba(141, 148, 158, 1);
      :hover {
         background-color: transparent;
      }
   }
`
