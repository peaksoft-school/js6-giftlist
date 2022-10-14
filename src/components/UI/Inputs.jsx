import React, { useState } from 'react'

import styled from 'styled-components'
import visibleEye from '../../assets/svg/eye.svg'
import unVisibleEye from '../../assets/svg/eye-slash.svg'

const Inputs = ({ placeholder, onchange, value }) => {
   const [inputViewOnOff, setInputViewOnOff] = useState(false)
   const handleViewOnOff = () => {
      setInputViewOnOff((prevState) => !prevState)
   }
   return (
      <MainInput>
         <InputStyles
            type={inputViewOnOff ? 'text' : 'password'}
            placeholder={placeholder}
            onChange={onchange}
            value={value}
         />
         <EyeIcon type="button" onClick={() => handleViewOnOff()}>
            {inputViewOnOff ? (
               <img src={visibleEye} alt="" />
            ) : (
               <img src={unVisibleEye} alt="" />
            )}
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
