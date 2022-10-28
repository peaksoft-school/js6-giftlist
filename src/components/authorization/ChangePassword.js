import styled from 'styled-components'
import { useFormik } from 'formik'
import InputPassword from '../UI/InputPassword'
import Button from '../UI/Button'
import closeIcon from '../../assets/svg/close-circle.svg'
import IconButton from '../UI/IconButton'
import Modal from '../UI/modals/Modal'
import { changePassword } from '../../utils/validations/userValidations'

const initialValues = {
   repeatPassword: '',
   newPassword: '',
}
function ChangePassword({ onClose, open }) {
   const onSubmit = (values) => {
      console.log(values)
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
               <h2>Смена пароля</h2>
               <IconButton
                  image={closeIcon}
                  alt="closeIcon"
                  onClick={onClose}
               />
            </Header>
            <InputStyle>
               <InputPassword
                  name="newPassword"
                  id="newPasswordf"
                  placeholder="Введите новый пароль"
                  value={values.newPassword}
                  onChange={handleChange}
               />
               {errors.newPassword}
               <InputPassword
                  name="repeatPassword"
                  id="repeatPassword"
                  placeholder="Повторите пароль"
                  value={values.repeatPassword}
                  onChange={handleChange}
               />
               {errors.repeatPassword}
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
