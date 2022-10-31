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
import { signUpavlidation } from '../../utils/validations/userValidations'

const initialValues = {
   lastName: '',
   firstName: '',
   email: '',
   password: '',
   confirmPassword: '',
}
const SignUp = ({ open = true, onClose }) => {
   const onSubmit = (e) => {
      console.log(e, 'eeee')
   }
   const { handleChange, handleSubmit, values, errors } = useFormik({
      initialValues,
      onSubmit,
      validationSchema: signUpavlidation,
   })
   console.log(values)
   return (
      <Modal isOpen={open}>
         <Form onSubmit={handleSubmit}>
            <Div>
               <Title>Регистрация</Title>
               <IconButton image={closeIcon} onClick={onClose} />
            </Div>
            <InputStyle>
               <InputContainer>
                  <Input
                     name="firstName"
                     placeholder="Имя"
                     value={values.firstName}
                     onChange={handleChange}
                  />
                  <Error>{errors.firstName}</Error>
               </InputContainer>
               <InputContainer>
                  <Input
                     name="lastName"
                     placeholder="Фамилия"
                     value={values.lastName}
                     onChange={handleChange}
                  />
                  <Error>{errors.lastName}</Error>
               </InputContainer>
               <InputContainer>
                  <Input
                     name="email"
                     placeholder="Email"
                     value={values.email}
                     onChange={handleChange}
                  />
                  <Error>{errors.email}</Error>
               </InputContainer>
               <InputContainer>
                  <InputPassword
                     name="password"
                     placeholder="Введите пароль"
                     value={values.password}
                     onChange={handleChange}
                  />
                  <Error>{errors.password}</Error>
               </InputContainer>
               <InputContainer>
                  <InputPassword
                     name="confirmPassword"
                     placeholder="Повторите пароль"
                     value={values.confirmPassword}
                     onChange={handleChange}
                  />
                  <Error>{errors.confirmPassword}</Error>
               </InputContainer>
               <CheckBoxDiv className="checkbox">
                  <CheckBox /> Подписаться на рассылку
               </CheckBoxDiv>
               <Button type="submit" variant="outlined">
                  Создать аккаунт
               </Button>
               <OrDiv className="or">
                  <Line1 />
                  <span>ИЛИ</span>
                  <Line2 />
               </OrDiv>
               <RegisterGoogle startIcon={<Log />} variant="contained">
                  Зарегистрироваться с Google
               </RegisterGoogle>
               <Login>
                  У вас уже есть аккаунт? <a href="/signin">Войти </a>
               </Login>
            </InputStyle>
         </Form>
      </Modal>
   )
}

export default SignUp

const Form = styled.form`
   background: #fff;
   border-radius: 10px;
   font-family: 'Inter';
   font-style: normal;
   font-weight: 500;
   display: flex;
   align-items: center;
   flex-direction: column;
`

const InputContainer = styled('div')`
   height: 44px;
`
const Div = styled.div`
   display: flex;
   justify-content: space-between;
   cursor: pointer;
   margin-bottom: 32px;
   gap: 300px;
`
const InputStyle = styled.div`
   display: flex;
   flex-direction: column;
   gap: 20px;
   font-family: 'Inter';
   font-style: normal;
   font-weight: 400;
`

const Title = styled('h4')`
   font-family: 'Inter';
   font-size: 24px;
   font-weight: 500;
   line-height: 32px;
   letter-spacing: 0em;
`

const CheckBoxDiv = styled('div')`
   width: 210px;
   display: flex;
   flex-direction: row;
   align-items: center;
   justify-content: space-around;
   font-size: 14px;
   line-height: 16px;
   color: #87898e;
`
const OrDiv = styled('div')`
   width: 100%;
   text-align: center;
   border: 0px solid #f1f1f1;
   line-height: 0.1em;
   margin: 10px 0 20px;
   background: #f1f1f1;
   span {
      background-color: #fff;
      font-family: 'Inter';
      font-size: 14px;
      font-weight: 400;
   }
`

const Line2 = styled('hr')`
   border: 0px solid #f1f1f1;
   width: 206.5px;
`
const Line1 = styled('hr')`
   border: 0px solid #f1f1f1;
   width: 206.5px;
`

const RegisterGoogle = styled(Button)`
   &.MuiButtonBase-root {
      text-transform: none;
   }
`
const Login = styled('div')`
   display: flex;
   justify-content: center;
   gap: 3px;
`

const Error = styled('span')`
   color: red;
`
