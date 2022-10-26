import React, { useState } from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import useForm from '../../hooks/useForm'
import validate from './validate'
import InputPassword from '../UI/InputPassword'
import Button from '../UI/Button'
import Close from '../../assets/svg/close-circle.svg'
import IconButton from '../UI/IconButton'

function ChangePassword() {
   const { handleChange, values } = useForm(validate)
   const [errors, setErrors] = useState({})
   const navigate = useNavigate()

   const submitHandler = (e) => {
      e.preventDefault()
      setErrors(validate(values))
      console.log(values)
   }
   return (
      <Form onSubmit={submitHandler}>
         <div className="container">
            <Header>
               <h2>Смена пароля</h2>
               <IconButton image={Close} onClick={() => navigate('/')} />
            </Header>
            <InputStyle>
               <InputPassword
                  type="password"
                  name="password"
                  placeholder="Введите новый пароль"
                  value={values.password}
                  onChange={handleChange}
               />
               {errors.password && <h5>{errors.password}</h5>}

               <InputPassword
                  type="password"
                  name="password2"
                  placeholder="Повторите пароль"
                  value={values.password2}
                  onChange={handleChange}
               />
               {errors.password2 && <h5>{errors.password2}</h5>}

               <Button type="submit" variant="outlined">
                  Подтвердить
               </Button>
            </InputStyle>
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
`
