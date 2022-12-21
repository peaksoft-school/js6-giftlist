import styled from 'styled-components'
import { useFormik } from 'formik'
import { useDispatch } from 'react-redux'
import InputPassword from '../UI/InputPassword'
import Button from '../UI/Button'
import closeIcon from '../../assets/svg/close-circle.svg'
import IconButton from '../UI/IconButton'
import Modal from '../UI/modals/Modal'
import { changePassword } from '../../utils/validations/userValidations'
import { resetPassword } from '../../store/slices/forgotActions'

const initialValues = {
   repeatPassword: '',
   newPassword: '',
}
function ChangePassword({ onClose, open, id }) {
   const dispatch = useDispatch()
   const onSubmit = (values) => {
      dispatch(
         resetPassword({
            newPassword: values.newPassword,
            verifyPassword: values.repeatPassword,
            id,
         })
      )
      onClose()
   }

   const { values, handleChange, handleSubmit, errors } = useFormik({
      initialValues,
      onSubmit,
      validationSchema: changePassword,
   })
   return (
      <Modal isOpen={open} onClose={onClose}>
         <ChangePasswordDiv>
            <Header>
               <Title>Смена пароля</Title>
               <IconButton
                  image={closeIcon}
                  alt="closeIcon"
                  onClick={onClose}
               />
            </Header>
            <InputStyle>
               <InputContainer>
                  <InputPassword
                     name="newPassword"
                     id="newPassword"
                     placeholder="Введите новый пароль"
                     value={values.newPassword}
                     onChange={handleChange}
                  />
                  <Error>{errors.newPassword}</Error>
               </InputContainer>
               <InputContainer>
                  <InputPassword
                     name="repeatPassword"
                     id="repeatPassword"
                     placeholder="Повторите пароль"
                     value={values.repeatPassword}
                     onChange={handleChange}
                  />
                  <Error>{errors.repeatPassword}</Error>
               </InputContainer>
               <Button onClick={handleSubmit} variant="outlined">
                  Подтвердить
               </Button>
            </InputStyle>
         </ChangePasswordDiv>
      </Modal>
   )
}

export default ChangePassword

const ChangePasswordDiv = styled.div`
   background: #fff;
   border-radius: 10px;
   font-family: 'Inter';
   font-style: normal;
   font-weight: 500;
`
const Header = styled.div`
   display: flex;
   justify-content: space-between;
   cursor: pointer;
   margin-bottom: 32px;
`

const InputStyle = styled.div`
   display: flex;
   flex-direction: column;
   gap: 30px;
   font-family: 'Inter';
   font-style: normal;
   font-weight: 400;
`

const InputContainer = styled('div')`
   height: 35px;
`
const Error = styled('span')`
   color: red;
   font-size: 10px;
`

const Title = styled('h4')`
   font-family: 'Inter';
   font-size: 24px;
   font-weight: 500;
   line-height: 32px;
`
