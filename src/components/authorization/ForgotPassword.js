import React from 'react'
import styled from 'styled-components'
import Inputs from '../../components/UI/Inputs'
import Button from '../../components/UI/Button'
import { ReactComponent as Close } from '../../assets/svg/close-circle.svg'

function ForgotPassword() {
   return (
      <Form>
         <div className="container">
            <Div>
               <h2>Забыли пароль?</h2>
               <Close />
            </Div>
            <DIV>
               <p>Вам будет отправлена ссылка для сброса пароля</p>
               <Inputs placeholder="Введите ваш Email" />
               <Button variant="outlined">Отправить</Button>

               <div className="cancel">
                  <a href="/">Отмена</a>
               </div>
            </DIV>
         </div>
      </Form>
   )
}

export default ForgotPassword

const Form = styled.form`
   width: 546px;
   height: 324px;
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
   p {
      width: 480px;
      height: 16px;
      color: #87898e;
   }

   .cancel {
      display: flex;
      align-items: center;
      justify-content: center;
      a {
         width: 61px;
         height: 16px;
         color: #8d949e;
         text-decoration: none;
         font-size: 16px;
      }
   }
`
