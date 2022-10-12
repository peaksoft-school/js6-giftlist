import styled from 'styled-components'

function CheckBox({ checked, onChange, ...other }) {
   return (
      <div>
         <Input
            {...other}
            type="Checkbox"
            onChange={onChange}
            checked={checked}
         />
      </div>
   )
}

export default CheckBox
const Input = styled.input`
   appearance: none;
   height: 15px;
   width: 15px;
   border: 1.6px solid #87898e;
   border-radius: 4px;
   cursor: pointer;
   display: flex;
   align-items: center;
   justify-content: center;
   outline: none;
   &[type='Checkbox']::after {
      font-family: 'Font Awesome 5 Free';
      font-weight: 900;
      width: 16px;
      font-size: 9px;
      color: white;
      content: '\f00c';
      background-color: #8639b5;
      border-color: #8639b5;
      border-radius: 6px;
      display: none;
   }
   &[type='Checkbox']:hover {
      border-color: #8639b5;
   }
   &[type='Checkbox']:checked {
      background-color: #8639b5;
      border-color: #8639b5;
   }
   &[type='Checkbox']:checked:after {
      display: block;
      background-color: block;
      width: 9px;
   }
   &:disabled {
      border-color: #0000001f;
   }
   &:disabled:hover {
      border-color: #0000001f;
   }
`
