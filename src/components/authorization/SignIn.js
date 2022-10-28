import React, { useState } from 'react'
import styled from 'styled-components'
import InputPassword from '../UI/InputPassword'
import Inputs from '../UI/Inputs'
import CheckBox from '../UI/checkBox'
import Button from '../UI/Button'
import { ReactComponent as GoogleIcon } from '../../assets/svg/Google.svg'
import closeIcon from '../../assets/svg/close-circle.svg'
import IconButton from '../UI/IconButton'

import Modal from '../UI/modals/Modal'

function SignIn() {
   const handleLogin = (e) => {
      e.preventDefault()
   }

   const [show, setShow] = useState(true)
   const closeHandler = () => {
      setShow(!show)
   }

   return (
      <Modal isOpen={show}>
         <Form onSubmit={handleLogin}>
            <Div>
               <h2>Вход</h2>
               <IconButton image={closeIcon} onClick={closeHandler} />
            </Div>
            <FormStyle>
               <Inputs
                  name="email"
                  placeholder="Email"
                  // value={values.email}
                  // onChange={handleChange}
               />

               <InputPassword
                  name="password"
                  placeholder="Пароль"
                  // value={values.password}
                  // onChange={handleChange}
               />
               {/* {errors.password && <h5>{errors.password}</h5>} */}

               <div className="checkbox">
                  <CheckBox /> Запомнить меня
               </div>
               <Button type="submit" variant="outlined">
                  Войти
               </Button>
               <a href="/forgot-password">Забыли пароль?</a>
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
                  <a href="/signup">Зарегистрироваться</a>
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
   font-family: 'Inter';
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
   }
   a {
      text-decoration: none;
      color: #3772ff;
      display: flex;
      justify-content: center;
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
