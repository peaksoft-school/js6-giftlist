import styled from 'styled-components'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import useForm from '../../hooks/useForm'
import Close from '../../assets/svg/close-circle.svg'
import { ReactComponent as Log } from '../../assets/svg/Google.svg'
import Modal from '../UI/modals/Modal'
import IconButton from '../UI/IconButton'
import Inputs from '../UI/Inputs'
import CheckBox from '../UI/checkBox'
import Button from '../UI/Button'
import InputPassword from '../UI/InputPassword'
import validate from './validate'

const SignUp = () => {
   const { handleChange, values } = useForm(validate)
   const [errors, setErrors] = useState({})
   const [show, setShow] = useState(true)
   const navigate = useNavigate()

   const closeHandler = () => {
      if (show) {
         setShow(navigate('/'))
      }
   }

   const handleSubmit = (e) => {
      e.preventDefault()
      console.log(values)
      setErrors(validate(values))
   }

   return (
      <Modal isOpen={show}>
         <Form onSubmit={handleSubmit}>
            <div className="container">
               <Div>
                  <h2>Регистрация</h2>
                  <IconButton image={Close} onClick={closeHandler} />
               </Div>
               <InputStyle>
                  <Inputs
                     type="text"
                     name="username"
                     placeholder="Имя"
                     value={values.username}
                     onChange={handleChange}
                  />
                  {errors.username && <h5>{errors.username}</h5>}
                  <Inputs
                     type="text"
                     name="lastname"
                     placeholder="Фамилия"
                     value={values.lastname}
                     onChange={handleChange}
                  />
                  {errors.lastname && <h5>{errors.lastname}</h5>}

                  <Inputs
                     type="email"
                     name="email"
                     placeholder="Email"
                     value={values.email}
                     onChange={handleChange}
                  />
                  {errors.email && <h5>{errors.email}</h5>}

                  <InputPassword
                     type="password"
                     name="password"
                     placeholder="Введите пароль"
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
                  <div className="checkbox">
                     <CheckBox /> Подписаться на рассылку
                  </div>
                  <Button
                     type="submit"
                     variant="outlined"
                     // onClick={closeHandler}
                  >
                     Создать аккаунт
                  </Button>
                  <div className="or">
                     <h2>
                        <span>ИЛИ</span>
                     </h2>
                  </div>
                  <Button startIcon={<Log />} variant="contained">
                     Зарегистрироваться с Google
                  </Button>
                  <p>
                     У вас уже есть аккаунт? <a href="/signin">Войти </a>
                  </p>
               </InputStyle>
            </div>
         </Form>
      </Modal>
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
const InputStyle = styled.div`
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
   h5 {
      color: red;
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
