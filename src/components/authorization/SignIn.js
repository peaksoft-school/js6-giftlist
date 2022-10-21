import React from 'react'
import styled from 'styled-components'
import InputPassword from '../UI/InputPassword'
import Inputs from '../UI/Inputs'
import CheckBox from '../UI/checkBox'
import Button from '../UI/Button'
import { ReactComponent as GoogleIcon } from '../../assets/svg/Google.svg'
import { ReactComponent as Close } from '../../assets/svg/close-circle.svg'
import IconButton from '../UI/IconButton'

function SignIn() {
   return (
      <Form onSubmit={(e) => e.preventDefault()}>
         <div className="container">
            <Div>
               <h2>Вход</h2>
               <IconButton image={<Close />} />
            </Div>
            <DIV>
               <Inputs placeholder="Email" />
               <InputPassword placeholder="Пароль" />
               <div className="checkbox">
                  <CheckBox /> Запомнить меня
               </div>
               <Button variant="outlined">Войти</Button>
               <a href="/">Забыли пароль?</a>

               <Or>
                  <Line1 />
                  <p>ИЛИ</p>
                  <Line2 />
               </Or>

               <Button startIcon={<GoogleIcon />} variant="contained">
                  Продолжить с Google
               </Button>
               <p>
                  Нет аккаунта? <a href="/">Зарегистрироваться</a>
               </p>
            </DIV>
         </div>
      </Form>
   )
}

export default SignIn

const Form = styled.form`
   width: 546px;
   height: 544px;
   background: #fff;
   border-radius: 10px;
   font-family: 'Inter';
   font-style: normal;
   font-weight: 500;
   display: flex;
   flex-direction: column;
   .container {
      margin: 24px 32px;
      h2 {
         font-size: 24px;
         line-height: 32px;
         color: #23262f;
      }
   }
`
const Div = styled.div`
   display: flex;
   justify-content: space-between;
   cursor: pointer;
   margin-bottom: 32px;
`

const DIV = styled.div`
   display: flex;
   flex-direction: column;
   gap: 30px;
   font-family: 'Inter';
   font-style: normal;
   font-weight: 400;
   .checkbox {
      width: 135px;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-around;
      font-size: 14px;
      line-height: 16px;
      color: #87898e;
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
`
const Or = styled('div')`
   display: flex;
   justify-content: space-between;
   align-items: center;
   font-family: 'Inter';
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
   height: 0px;
`
const Line2 = styled('hr')`
   border: 1px solid #f1f1f1;
   width: 206.5px;
   height: 0px;
`
