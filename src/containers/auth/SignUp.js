import React from 'react'
import styled from 'styled-components'
import Inputs from '../../components/UI/Inputs'
import CheckBox from '../../components/UI/checkBox'
import Button from '../../components/UI/Button'
import { ReactComponent as Log } from '../../assets/svg/Google.svg'
import { ReactComponent as Close } from '../../assets/svg/close-circle.svg'

function SignUp() {
   return (
      <Form>
         <div className="container">
            <Div>
               <h2>Регистрация</h2>
               <Close />
            </Div>
            <DIV>
               <Inputs placeholder="Имя" />
               <Inputs placeholder="Фамилия" />
               <Inputs placeholder="Email" />
               <Inputs placeholder="Введите пароль" />
               <Inputs placeholder="Повторите пароль" />
               <div className="checkbox">
                  <CheckBox /> Подписаться на рассылку
               </div>
               <Button variant="outlined">Создать аккаунт</Button>
               <div className="or">
                  <h2>
                     <span>ИЛИ</span>
                  </h2>
               </div>
               <Button startIcon={<Log />} variant="contained">
                  Зарегистрироваться с Google
               </Button>
               <p>
                  У вас уже есть аккаунт? <a href="/">Войти </a>
               </p>
            </DIV>
         </div>
      </Form>
   )
}

export default SignUp

const Form = styled.form`
   width: 546px;
   height: 629px;
   background: #fff;
   border-radius: 10px;
   font-family: 'Inter';
   font-style: normal;
   font-weight: 500;
   display: flex;
   flex-direction: column;
   .container {
      margin: 24px 32px;
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
   gap: 20px;
   font-family: 'Inter';
   font-style: normal;
   font-weight: 400;
   .checkbox {
      width: 210px;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-around;
      font-size: 14px;
      line-height: 16px;
      color: #87898e;
   }
   .or {
      h2 {
         width: 100%;
         text-align: center;
         border: 0px solid #f1f1f1;
         line-height: 0.1em;
         margin: 10px 0 20px;
         background: #f1f1f1;
      }

      h2 span {
         background: white;
         padding: 0 10px;
         font-size: 14px;
      }
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
