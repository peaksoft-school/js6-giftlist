import React from 'react'
import styled from 'styled-components'
import { useFormik } from 'formik'
import Input from '../UI/Inputs'
import Button from '../UI/Button'
import closeIcon from '../../assets/svg/close-circle.svg'
import IconButton from '../UI/IconButton'
import Modal from '../UI/modals/Modal'
import { forgotPasswordValidation } from '../../utils/validations/userValidations'

const initialValues = { email: '' }

function ForgotPassword({ closeModal, open }) {
   const onSubmit = (values) => {
      console.log(values)
   }
   const { values, handleSubmit, handleChange, errors } = useFormik({
      initialValues,
      onSubmit,
      validationSchema: forgotPasswordValidation,
   })
   return (
      <Modal isOpen={open} onClose={() => closeModal(false)}>
         <ForgotPasswordDiv>
            <TopPart>
               <Title>Забыли пароль?</Title>
               <IconButton
                  image={closeIcon}
                  onClick={() => closeModal(false)}
                  alt="iconClose"
               />
            </TopPart>
            <BottomPart>
               <p>Вам будет отправлена ссылка для сброса пароля</p>
               <InputContainer>
                  <Input
                     name="email"
                     placeholder="Введите ваш Email"
                     value={values.email}
                     onChange={handleChange}
                  />
                  <Error> {errors.email}</Error>
               </InputContainer>
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

const Error = styled('span')`
   color: red;
   font-size: 13px;
`
const ButtonCancel = styled(Button)`
   &.MuiButtonBase-root {
      color: rgba(141, 148, 158, 1);
      :hover {
         background-color: transparent;
      }
   }
`

const Title = styled('h4')`
   font-family: 'Inter';
   font-size: 24px;
   font-weight: 500;
   line-height: 32px;
`

const InputContainer = styled('div')`
   height: 40px;
`
