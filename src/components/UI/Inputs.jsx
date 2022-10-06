import React from 'react'
import styled from 'styled-components'

const Inputs = ({ type, placeholder }) => {
   return (
      <MainInput>
         <InputStyles type={type} placeholder={placeholder} />
      </MainInput>
   )
}

export default Inputs

const MainInput = styled.div`
   display: flex;
   flex-direction: column;
`
const InputStyles = styled.input`
   display: flex;
   flex-direction: row;
   align-items: center;
   padding: 16px 18px;
   gap: 8px;
   width: 482px;
   border: 1px solid #bdbdbd;
   border-radius: 6px;
   margin-top: 20px;
`
