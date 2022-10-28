import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import useForm from '../../hooks/useForm'
import InputPassword from '../UI/InputPassword'
import Inputs from '../UI/Inputs'
import CheckBox from '../UI/checkBox'
import Button from '../UI/Button'
import { ReactComponent as GoogleIcon } from '../../assets/svg/Google.svg'
import { ReactComponent as Close } from '../../assets/svg/close-circle.svg'
import IconButton from '../UI/IconButton'
import validate from './validate'

import Modal from '../UI/modals/Modal'
import { signInUser } from '../../store/slices/authSlice'

function SignIn() {
   const dispatch = useDispatch()
   const auth = useSelector((state) => state.auth)
   const { handleChange, values } = useForm(validate)
   const [errors, setErrors] = useState({})
   const handleLogin = (e) => {
      // console.log(email, password)
      e.preventDefault()
      console.log(values)
      setErrors(validate(values))
      dispatch(signInUser(values))
      openHandler()
   }

   const [show, setShow] = useState(true)
   const navigate = useNavigate()
   const openHandler = () => {
      console.log(auth)
      if (auth.user.jwt) {
         setShow(!show)
         navigate('/')
      }
   }
   const closeHandler = () => {
      if (show) {
         setShow(navigate('/'))
      }
   }
   return (
      <Modal isOpen={show}>
         <Form onSubmit={handleLogin}>
            <div className="container">
               <Div>
                  <h2>Вход</h2>
                  <IconButton image={<Close />} onClick={closeHandler} />
               </Div>
               <FormStyle>
                  <Inputs
                     name="email"
                     placeholder="Email"
                     value={values.email}
                     onChange={handleChange}
                  />
                  {errors.email && <h5>{errors.email}</h5>}

                  <InputPassword
                     name="password"
                     placeholder="Пароль"
                     value={values.password}
                     onChange={handleChange}
                  />
                  {errors.password && <h5>{errors.password}</h5>}

                  <div className="checkbox">
                     <CheckBox /> Запомнить меня
                  </div>
                  <Button
                     type="submit"
                     variant="outlined"
                     // onClick={openHandler}
                  >
                     Войти
                  </Button>
                  <a href="/forgot-password">Забыли пароль?</a>
                  <Or>
                     <Line1 />
                     <p>ИЛИ</p>
                     <Line2 />
                  </Or>
                  <Button startIcon={<GoogleIcon />} variant="contained">
                     Продолжить с Google
                  </Button>
                  <p>
                     Нет аккаунта?
                     <a href="/signup">Зарегистрироваться</a>
                  </p>
               </FormStyle>
            </div>
         </Form>
      </Modal>
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

const FormStyle = styled.div`
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
   h5 {
      color: red;
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
