export default function validate(values) {
   const errors = {}

   if (!values.firstName.trim()) {
      errors.firstName = 'Введите имя'
   }
   if (!values.lastName.trim()) {
      errors.lastName = 'Введите фамилию'
   }

   if (!values.email) {
      errors.email = 'Требуется Email'
   } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = 'Введите действительную электронную почту'
   }
   if (!values.password) {
      errors.password = 'Требуется пароль'
   } else if (values.password.length < 6) {
      errors.password = 'Пароль должен содержать не менее 6 символов'
   }

   if (!values.password2) {
      errors.password2 = 'Требуется пароль'
   } else if (values.password2 !== values.password) {
      errors.password2 = 'Пароль должен совпадать с предыдущим'
   }
   return errors
}
