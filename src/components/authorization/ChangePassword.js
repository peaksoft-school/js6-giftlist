import React from 'react'
import styled from 'styled-components'
import Inputs from '../../components/UI/Inputs'
import Button from '../../components/UI/Button'
import { ReactComponent as Close } from '../../assets/svg/close-circle.svg'

function ChangePassword() {
   return (
      <Form>
         <div className="container">
            <Div>
               <h2>Смена пароля</h2>
               <Close />
            </Div>
            <DIV>
               <Inputs placeholder="Введите новый пароль" />
               <Inputs placeholder="Повторите пароль" />
               <Button variant="outlined">Подтвердить</Button>
            </DIV>
         </div>
      </Form>
   )
}

export default ChangePassword

const Form = styled.form`
   width: 546px;
   height: 280px;
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
   }
`
