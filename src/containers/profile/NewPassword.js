import React from 'react'
import styled from 'styled-components'
import { useFormik } from 'formik'
import Button from '../../components/UI/Button'
import closeIcon from '../../assets/svg/close-circle.svg'
import IconButton from '../../components/UI/IconButton'
import Modal from '../../components/UI/modals/Modal'
import { newPasswordValidation } from '../../utils/validations/userValidations'
import InputPassword from '../../components/UI/InputPassword'

const initialValues = { oldPassword: '', newPassword: '', repeatPassword: '' }

function NewPassword({ closeModal, open }) {
   const onSubmit = (values) => {
      console.log(values)
   }
   const { values, handleSubmit, handleChange, errors } = useFormik({
      initialValues,
      onSubmit,
      validationSchema: newPasswordValidation,
   })
   return (
      <Modal isOpen={open} onClose={() => closeModal(false)}>
         <ForgotPasswordDiv>
            <TopPart>
               <Title>Смена пароля</Title>
               <IconButton
                  image={closeIcon}
                  onClick={closeModal}
                  alt="iconClose"
               />
            </TopPart>
            <BottomPart>
               <InputContainer>
                  <InputPassword
                     name="oldPassword"
                     placeholder="Введите старый пароль"
                     value={values.oldPassword}
                     onChange={handleChange}
                  />
                  <Error> {errors.email}</Error>
               </InputContainer>
               <InputContainer>
                  <InputPassword
                     name="newPassword"
                     placeholder="Введите новый пароль"
                     value={values.newPassword}
                     onChange={handleChange}
                  />
                  <Error> {errors.email}</Error>
               </InputContainer>
               <InputContainer>
                  <InputPassword
                     name="repeatPassword"
                     placeholder="Повторите пароль"
                     value={values.repeatPassword}
                     onChange={handleChange}
                  />
                  <Error> {errors.email}</Error>
               </InputContainer>

               <Button onClick={handleSubmit} variant="outlined">
                  Подтвердить
               </Button>
            </BottomPart>
         </ForgotPasswordDiv>
      </Modal>
   )
}

export default NewPassword

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

const Title = styled('h4')`
   font-family: 'Inter';
   font-size: 24px;
   font-weight: 500;
   line-height: 32px;
`

const InputContainer = styled('div')`
   height: 40px;
`
