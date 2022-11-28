import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useFormik } from 'formik'
import { ToastContainer } from 'react-toastify'
import InputPassword from '../UI/InputPassword'
import Inputs from '../UI/Inputs'
import CheckBox from '../UI/checkBox'
import Button from '../UI/Button'
import { ReactComponent as GoogleIcon } from '../../assets/svg/Google.svg'
import closeIcon from '../../assets/svg/close-circle.svg'
import IconButton from '../UI/IconButton'
import Modal from '../UI/modals/Modal'
import { signInValidation } from '../../utils/validations/userValidations'
import { SignInActions } from '../../store/slices/SignInActions'
import 'react-toastify/dist/ReactToastify.css'
import { authGoogleActions } from '../../store/slices/authGoogleActions'

const initialValues = {
   email: '',
   password: '',
}

function SignIn({ open, onClose }) {
   const dispatch = useDispatch()

   const onSubmit = (userData) => {
      dispatch(SignInActions(userData))
   }

   const { handleChange, handleSubmit, values, errors } = useFormik({
      initialValues,
      onSubmit,
      validationSchema: signInValidation,
      validateOnChange: false,
   })

   const signInWithGoogle = () => {
      dispatch(authGoogleActions())
   }

   return (
      <>
         <ToastContainer />
         <Modal isOpen={open}>
            <Form onSubmit={handleSubmit}>
               <Div>
                  <Title>Вход</Title>
                  <IconButton
                     image={closeIcon}
                     onClick={() => onClose(false)}
                  />
               </Div>
               <FormStyle>
                  <InputContainer>
                     <Inputs
                        name="email"
                        placeholder="Email"
                        value={values.email}
                        onChange={handleChange}
                     />
                     <Error>{errors.email}</Error>
                  </InputContainer>
                  <InputContainer>
                     <InputPassword
                        name="password"
                        placeholder="Пароль"
                        value={values.password}
                        onChange={handleChange}
                     />
                     <Error>{errors.password}</Error>
                  </InputContainer>
                  <CheckBoxDiv className="checkbox">
                     <CheckBox /> Запомнить меня
                  </CheckBoxDiv>
                  <Button type="submit" variant="outlined">
                     Войти
                  </Button>
                  <Link to="/forgotPassword">Забыли пароль?</Link>
                  <Or>
                     <Line1 />
                     <p>ИЛИ</p>
                     <Line2 />
                  </Or>
                  <ButtonProceedWithGoogle
                     onClick={signInWithGoogle}
                     startIcon={<GoogleIcon />}
                     variant="transparent"
                  >
                     Продолжить с Google
                  </ButtonProceedWithGoogle>
                  <Register>
                     Нет аккаунта?
                     <Link to="/">Зарегистрироваться</Link>
                  </Register>
               </FormStyle>
            </Form>
         </Modal>
      </>
   )
}

export default SignIn

const Form = styled.form`
   background: #fff;
   border-radius: 10px;
   font-family: 'Inter';
   font-style: normal;
   font-weight: 500;
   display: flex;
   flex-direction: column;
`
const Div = styled.div`
   display: flex;
   justify-content: space-between;
   cursor: pointer;
   margin-bottom: 32px;
`

const FormStyle = styled.div`
   display: flex;
   flex-direction: column;
   gap: 30px;
   font-style: normal;
   font-weight: 400;
   a {
      text-decoration: none;
      color: #3772ff;
      font-family: 'Inter';
      text-align: center;
   }
`

const Or = styled('div')`
   display: flex;
   justify-content: space-between;
   align-items: center;
   font-style: normal;
   font-weight: 400;
   font-size: 14px;
   line-height: 16px;
   font-family: 'Inter', sans-serif;
   color: #23262f;
`
const Line1 = styled('hr')`
   border: 1px solid #f1f1f1;
   width: 206.5px;
`
const Line2 = styled('hr')`
   border: 1px solid #f1f1f1;
   width: 206.5px;
`

const ButtonProceedWithGoogle = styled(Button)`
   &.MuiButtonBase-root {
      text-transform: none;
      background: #f1f1f1;
   }
`

const InputContainer = styled('div')`
   height: 44px;
`

const Title = styled('h4')`
   font-family: 'Inter';
   font-size: 24px;
   font-weight: 500;
   line-height: 32px;
   letter-spacing: 0em;
`

const CheckBoxDiv = styled('div')`
   display: flex;
   font-size: 14px;
   line-height: 16px;
   color: #87898e;
   gap: 10px;
`

const Register = styled('div')`
   display: flex;
   justify-content: center;
   gap: 3px;
   padding-left: 30px;
`

const Error = styled('span')`
   color: red;
   font-size: 13px;
`
