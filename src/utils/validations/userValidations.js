import * as Yup from 'yup'

export const validationSchemas = Yup.object({
   email: Yup.string()
      .email('invalid email format')
      .required('Требуется Email'),
})

export const changePassword = Yup.object({
   newPassword: Yup.string('').required('Требуется password'),
   repeatPassword: Yup.string('')
      .required('Требуется password')
      .label('confirm password')
      .oneOf([Yup.ref('newPassword'), null], 'парол'),
})

export const signInValidation = Yup.object({
   email: Yup.string('')
      .email('Введите действительную электронную почту')
      .required('Требуется Email'),
   password: Yup.string()
      .required('Требуется пароль')
      .min(6, 'Пароль должен содержать не менее 6 символов'),
})
export const signUpavlidation = Yup.object({
   lastName: Yup.string().required('Требуется имя'),
   email: Yup.string('')
      .email('Введите действительную электронную почту')
      .required('Требуется Email'),
   password: Yup.string()
      .required('Требуется пароль')
      .min(6, 'Пароль должен содержать не менее 6 символов'),
   firstName: Yup.string().required('Введите фамилию'),
})
