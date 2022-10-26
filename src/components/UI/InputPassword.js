import styled from 'styled-components'
import { useState } from 'react'
import IconButton from './IconButton'
import eyeIcon from '../../assets/svg/eye-slash.svg'
import visibleIcon from '../../assets/svg/Light.svg'

const InputPassword = ({ placeholder, onChange, value, name }) => {
   const [isPassword, setIsPassword] = useState(false)

   function handleViewOnOff() {
      setIsPassword((prevState) => !prevState)
   }

   return (
      <ContainerPassword>
         <PassowrdInput
            onChange={onChange}
            placeholder={placeholder}
            type={isPassword ? 'text' : 'password'}
            value={value}
            name={name}
            setIsPassword={setIsPassword}
         />
         <IconButton
            onClick={() => handleViewOnOff()}
            image={isPassword ? visibleIcon : eyeIcon}
         />
      </ContainerPassword>
   )
}

export default InputPassword

const PassowrdInput = styled.input`
   width: 420px;
   height: 19px;
   outline: none;
   border: none;
`

const ContainerPassword = styled.div`
   display: flex;
   align-items: center;
   height: 35px;
   width: 482px;
   padding: 16px 18px 16px 18px;
   background: #fcfcfd;
   border: 1px solid #bdbdbd;
   border-radius: 6px;
   gap: 11px;
`
