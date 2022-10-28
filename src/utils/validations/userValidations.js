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
