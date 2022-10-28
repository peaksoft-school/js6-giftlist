import { useState } from 'react'

const useForm = () => {
   const [values, setValues] = useState({
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      password2: '',
      // link: '',
   })

   const handleChange = (e) => {
      const nextFormState = {
         ...values,
         [e.target.name]: e.target.value,
      }
      setValues(nextFormState)
   }

   return { handleChange, values }
}

export default useForm
