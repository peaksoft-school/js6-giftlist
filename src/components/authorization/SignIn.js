import React, { useState } from 'react'
import styled from 'styled-components'
import { useFormik } from 'formik'
import { Link } from 'react-router-dom'
import InputPassword from '../UI/InputPassword'
import Inputs from '../UI/Inputs'
import CheckBox from '../UI/checkBox'
import Button from '../UI/Button'
import { ReactComponent as GoogleIcon } from '../../assets/svg/Google.svg'
import closeIcon from '../../assets/svg/close-circle.svg'
import IconButton from '../UI/IconButton'
import Modal from '../UI/modals/Modal'
import { signInValidation } from '../../utils/validations/userValidations'

const initialValues = {
   email: '',
   password: '',
}
function SignIn() {
   const onSubmit = (e) => {
      console.log(e)
   }
   const { handleChange, handleSubmit, values, errors } = useFormik({
      initialValues,
      onSubmit,
      validationSchema: signInValidation,
   })

   const [show, setShow] = useState(true)
   const closeHandler = () => {
      setShow(!show)
   }

   return (
      <Modal isOpen={show}>
         <Form onSubmit={handleSubmit}>
            <Div>
               <h2>Вход</h2>
               <IconButton image={closeIcon} onClick={closeHandler} />
            </Div>
            <FormStyle>
               <Inputs
                  name="email"
                  placeholder="Email"
                  value={values.email}
                  onChange={handleChange}
               />
               {errors.email}

               <InputPassword
                  name="password"
                  placeholder="Пароль"
                  value={values.password}
                  onChange={handleChange}
               />
               {errors.password}
               <div className="checkbox">
                  <CheckBox /> Запомнить меня
               </div>
               <Button type="submit" variant="outlined">
                  Войти
               </Button>
               <Link to="/">Забыли пароль?</Link>
               <Or>
                  <Line1 />
                  <p>ИЛИ</p>
                  <Line2 />
               </Or>
               <ButtonProceedWithGoogle
                  startIcon={<GoogleIcon />}
                  variant="transparent"
               >
                  Продолжить с Google
               </ButtonProceedWithGoogle>
               <p>
                  Нет аккаунта?
                  <Link to="/">Зарегистрироваться</Link>
               </p>
            </FormStyle>
         </Form>
      </Modal>
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
   .checkbox {
      display: flex;
      font-size: 14px;
      line-height: 16px;
      color: #87898e;
      gap: 10px;
   }

   p {
      display: flex;
      justify-content: center;
      font-family: 'Inter';
   }
   a {
      text-decoration: none;
      color: #3772ff;
      display: flex;
      justify-content: center;
      font-family: 'Inter';
   }
   h5 {
      color: red;
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
   }
`
