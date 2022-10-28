// import React, { useState } from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import Inputs from '../UI/Inputs'
import Button from '../UI/Button'
import closeIcon from '../../assets/svg/close-circle.svg'
import IconButton from '../UI/IconButton'
import { forgotPassword } from '../../store/slices/authSlice'

function ForgotPassword({ onClose }) {
   const dispatch = useDispatch()


   const submitHandler = (e) => {
   //    e.preventDefault()
   //    if (!emailValue) {
   //       return
   //    }
   //    if (emailValue.trim() !== '') {
   //       const data = {
   //          email: emailValue,
   //       }
   //       dispatch(forgotPassword({ data }))
   //    }
   // }

   return (
      <Form onSubmit={submitHandler}>
         <div className="container">
            <Header>
               <h2>Забыли пароль?</h2>
               <IconButton
                  image={closeIcon}
                  onClick={onClose}
                  alt="iconClose"
               />
            </Header>
            <InputStyle>
               <p>Вам будет отправлена ссылка для сброса пароля</p>
               <Inputs
                  type="email"
                  name="email"
                  placeholder="Введите ваш Email"
                  value={emailValue}
                  onChange={emailChangeHandler}
               />

               <Button type="submit" variant="outlined">
                  Отправить
               </Button>
               <button className="cancel">Отмена</button>
            </InputStyle>
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
      h5 {
         color: red;
      }
   }
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
   p {
      width: 480px;
      height: 16px;
      color: #87898e;
   }

   .cancel {
      display: flex;
      align-items: center;
      justify-content: center;
      outline: none;
      background-color: transparent;
      border: none;
      font-family: 'Inter';
      font-size: 16px;
      font-weight: 500;
      color: #8d949e;

      a {
         width: 61px;
         height: 16px;
         color: #8d949e;
         text-decoration: none;
         font-size: 16px;
      }
   }
`
