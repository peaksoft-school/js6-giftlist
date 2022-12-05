import styled from 'styled-components'

import iconSearch from '../../../assets/svg/search.svg'

const SearchInputCharity = ({ onChange, value }) => {
   return (
      <InputBlock>
         <IconSearch src={iconSearch} alt="icon" />
         <StyleInput
            type="search"
            placeholder="Поиск"
            onChange={onChange}
            value={value}
         />
      </InputBlock>
   )
}

export default SearchInputCharity

const InputBlock = styled.div`
   display: flex;
   align-items: center;
`
const IconSearch = styled.img`
   width: 20px;
   height: 20px;
   position: relative;
   left: 20px;
   margin: 0px;
`
const StyleInput = styled.input`
   border: none;
   outline: none;
   margin-left: 40px;
   font-family: 'Inter', sans-serif;
   font-style: normal;
   font-weight: 400;
   font-size: 14px;
   line-height: 24px;
   color: #020202;
   &::placeholder {
      font-family: 'Inter', sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 17px;
      letter-spacing: 0.02em;
      color: #8d949e;
   }
`
