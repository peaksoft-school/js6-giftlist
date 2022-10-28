import React, { useState } from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import useForm from '../../hooks/useForm'
import validate from './validate'
import Inputs from '../UI/Inputs'
import Button from '../UI/Button'
import { ReactComponent as Close } from '../../assets/svg/close-circle.svg'
import IconButton from '../UI/IconButton'
import { forgotPassword } from '../../store/slices/authSlice'

function ForgotPassword() {
   const { handleChange, values } = useForm(validate)
   const [errors, setErrors] = useState({})
   const [show, setShow] = useState(false)
   const navigate = useNavigate()
   const dispatch = useDispatch()
   const auth = useSelector((state) => state.auth)

   const closeHandler = () => {
      if (!show) {
         setShow(navigate('/'))
      }
   }
   const submitHandler = (e) => {
      e.preventDefault()
      setErrors(validate(values))
      dispatch(forgotPassword(values))
      if (!auth.error) {
         navigate('/change-password')
      }
   }

   return (
      <Form onSubmit={submitHandler}>
         <div className="container">
            <Header>
               <h2>Забыли пароль?</h2>
               <IconButton image={<Close />} onClick={closeHandler} />
            </Header>
            <InputStyle>
               <p>Вам будет отправлена ссылка для сброса пароля</p>
               <Inputs
                  type="email"
                  name="email"
                  placeholder="Введите ваш Email"
                  value={values.email}
                  onChange={handleChange}
               />
               {errors.email && <h5>{errors.email}</h5>}

               <Button type="submit" variant="outlined">
                  Отправить
               </Button>

               <div className="cancel">
                  <a href="/">Отмена</a>
               </div>
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
      a {
         width: 61px;
         height: 16px;
         color: #8d949e;
         text-decoration: none;
         font-size: 16px;
      }
   }
`
