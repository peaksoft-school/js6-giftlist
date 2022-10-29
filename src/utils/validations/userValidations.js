import * as Yup from 'yup'

export const validationSchemas = Yup.object({
   email: Yup.string()
      .email('invalid email format')
      .required('Требуется Email'),
})

export const changePassword = Yup.object({
   repeatPassword: Yup.string('').required('Требуется password'),
   newPassword: Yup.string('').required('Требуется password'),
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
   lastName: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Firstname is required'),
   email: Yup.string('')
      .email('Введите действительную электронную почту')
      .required('Требуется Email'),
   password: Yup.string()
      .required('Требуется пароль')
      .min(6, 'Пароль должен содержать не менее 6 символов'),
   firstName: Yup.string().required('Введите фамилию'),
})
