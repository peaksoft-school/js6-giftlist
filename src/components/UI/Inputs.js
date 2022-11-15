import styled from 'styled-components'

const Input = ({ value, onChange, placeholder, name, type, width }) => {
   return (
      <MainInput width={width}>
         <InputStyles
            onChange={onChange}
            value={value}
            name={name}
            type={type || 'text'}
            placeholder={placeholder}
            autoComplete="off"
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
   width: ${(p) => p.width || '480'};
   padding: 8px 9px 8px 18px;
   align-items: center;
`
const InputStyles = styled.input`
   width: 445px;
   height: 19px;
   font-family: 'Inter';
   font-style: normal;
   font-weight: 300;
   font-size: 16px;
   line-height: 19px;
   display: flex;
   align-items: center;
   border-style: none;
   outline: none;
   background: transparent;
`
