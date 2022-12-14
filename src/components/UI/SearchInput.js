import React from 'react'
import styled from 'styled-components'
import iconSearch from '../../assets/svg/search.svg'

const SearchInput = ({ value, inputChangeHandler }) => {
   return (
      <InputBlock>
         <Icon src={iconSearch} alt="" />
         <Input
            onChange={inputChangeHandler}
            value={value}
            type="text"
            placeholder="Поиск"
         />
      </InputBlock>
   )
}

export default SearchInput

const Input = styled.input`
   outline: none;
   border: 0;
   width: 743px;
   height: 19px;
   font-family: 'Inter';
   font-style: normal;
   font-weight: 400;
   font-size: 14px;
   line-height: 17px;
   margin: 10px 18px 10px 0px;
   ::placeholder {
      font-family: 'Inter';
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 19px;
   }
`

const InputBlock = styled.div`
   width: 100%;
   height: 40px;
   border: 1px solid #bdbdbd;
   border-radius: 8px;
   display: flex;
`
const Icon = styled.img`
   width: 20px;
   height: 20px;
   margin: 10px 20px 10px 20px;
`
