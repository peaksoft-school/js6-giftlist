import React from 'react'
import styled from 'styled-components'
import IconSearch from '../../assets/images/Union.svg'

const SearchInput = () => {
   return (
      <div>
         <InputBlock>
            <img src={IconSearch} alt="" />
            <Input type="text" />
         </InputBlock>
      </div>
   )
}

export default SearchInput

const Input = styled.input`
   outline: none;
   width: 100%;
`

const InputBlock = styled.div`
   width: 200px;
   border: 1px solid black;
   display: flex;
`
