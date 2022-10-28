import styled from 'styled-components'

const Input = ({ value, onChange, placeholder, name }) => {
   return (
      <MainInput>
         <InputStyles
            onChange={onChange}
            value={value}
            name={name}
            type="text"
            placeholder={placeholder}
         />
      </MainInput>
   )
}

export default Input

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
   border-style: none;
   margin: 8px 9px 8px 18px;
   outline: none;
   background: transparent;
`
