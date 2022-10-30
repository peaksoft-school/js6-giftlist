import styled from 'styled-components'
import { useFormik } from 'formik'
import closeIcon from '../../assets/svg/close-circle.svg'
import { ReactComponent as Log } from '../../assets/svg/Google.svg'
import Modal from '../UI/modals/Modal'
import IconButton from '../UI/IconButton'
import Input from '../UI/Inputs'
import CheckBox from '../UI/checkBox'
import Button from '../UI/Button'
import InputPassword from '../UI/InputPassword'
import { signInValidation } from '../../utils/validations/userValidations'

const initialValues = {
   lastName: '',
   firstName: '',
   email: '',
   password: '',
   repeatPassword: '',
}
const SignUp = ({ open = true, onClose }) => {
   const onSubmit = (e) => {
      console.log(e, 'eeee')
   }
   const { handleChange, handleSubmit, values, errors } = useFormik({
      initialValues,
      onSubmit,
      validationSchema: signInValidation,
   })
   console.log(values)
   return (
      <Modal isOpen={open}>
         <Form onSubmit={handleSubmit}>
            <div className="container">
               <Div>
                  <h2>Регистрация</h2>
                  <IconButton image={closeIcon} onClick={onClose} />
               </Div>
               <InputStyle>
                  <Input
                     name="firstName"
                     placeholder="Имя"
                     value={values.firstName}
                     onChange={handleChange}
                  />
                  {errors.firstName && <h5>{errors.firstName}</h5>}
                  <Input
                     name="lastName"
                     placeholder="Фамилия"
                     value={values.lastName}
                     onChange={handleChange}
                  />
                  {errors.lastName && <h5>{errors.lastName}</h5>}

                  <Input
                     name="email"
                     placeholder="Email"
                     value={values.email}
                     onChange={handleChange}
                  />
                  {errors.email && <h5>{errors.email}</h5>}

                  <InputPassword
                     name="password"
                     placeholder="Введите пароль"
                     value={values.password}
                     onChange={handleChange}
                  />
                  {errors.password && <h5>{errors.password}</h5>}

                  <InputPassword
                     name="password2"
                     placeholder="Повторите пароль"
                     value={values.password2}
                     onChange={handleChange}
                  />
                  {errors.repeatPassword && <h5>{errors.repeatPassword}</h5>}
                  <div className="checkbox">
                     <CheckBox /> Подписаться на рассылку
                  </div>
                  <Button type="submit" variant="outlined">
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
