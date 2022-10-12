import React, { useState } from 'react'

import styled from 'styled-components'
// import { IconButton } from '@mui/material'

import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'
import VisibilityIcon from '@mui/icons-material/Visibility'

const Inputs = ({ placeholder, setPasswordValue, passwordValue }) => {
   const [inputViewOnOff, setInputViewOnOff] = useState(false)
   const handleViewOnOff = () => {
      setInputViewOnOff((prevState) => !prevState)
   }
   return (
      <MainInput>
         <InputStyles
            type={inputViewOnOff ? 'text' : 'password'}
            placeholder={placeholder}
            onChange={(e) => setPasswordValue(e.target.value)}
            value={passwordValue}
         />
         <EyeIcon type="button" onClick={() => handleViewOnOff()}>
            {inputViewOnOff ? <VisibilityOffIcon /> : <VisibilityIcon />}
         </EyeIcon>
      </MainInput>
   )
}

export default Inputs

const MainInput = styled.div`
   display: flex;
   background: #fcfcfd;
   border: 1px solid #bdbdbd;
   border-radius: 6px;
   box-sizing: border-box;
   width: 482px;
   align-items: center;
`
const InputStyles = styled.input`
   width: 420px;
   height: 19px;
   font-family: 'Inter';
   font-style: normal;
   font-weight: 300;
   font-size: 16px;
   line-height: 19px;
   display: flex;
   align-items: center;
   color: #8d949e;
   border-style: none;
   margin: 8px 9px 8px 18px;
   outline: none;
   background: transparent;
`
const EyeIcon = styled.button`
   background: transparent;
   border: none;
   color: #87898e;
   margin-right: 18px;
`
