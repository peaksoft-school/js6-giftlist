import * as Yup from 'yup'

export const forgotPasswordValidation = Yup.object({
   email: Yup.string()
      .email('Введите действительную электронную почту')
      .required('Требуется Email'),
})

export const changePassword = Yup.object({
   newPassword: Yup.string('').required('Требуется password'),
   repeatPassword: Yup.string('')
      .required('Требуется password')
      .oneOf(
         [Yup.ref('newPassword'), null],
         '   пароль должен совпадать с предыдущим'
      ),
})

export const signInValidation = Yup.object({
   email: Yup.string('')
      .email('Введите действительную электронную почту')
      .required('Требуется Email'),
   password: Yup.string()
      .required('Требуется пароль')
      .min(4, 'Пароль должен содержать не менее 4 символов'),
})

export const signUpValidation = Yup.object({
   lastName: Yup.string().required('Введите имя'),
   firstName: Yup.string().required('Введите фамилию'),
   email: Yup.string('')
      .email('Введите действительную электронную почту')
      .required('Требуется Email'),
   password: Yup.string()
      .required('Требуется пароль')
      .min(6, 'Пароль должен содержать не менее 4 символов'),
   confirmPassword: Yup.string().oneOf(
      [Yup.ref('password'), null],
      '   пароль должен совпадать с предыдущим'
   ),
})
