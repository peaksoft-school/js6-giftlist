import React, { useState } from 'react'
import FormControl from '@mui/material/FormControl'
import MenuItem from '@mui/material/MenuItem'
import SelectMui from '@mui/material/Select'
import styled from 'styled-components'

const Placeholder = ({ children }) => {
   return <div style={{ color: '#8D949E' }}>{children}</div>
}
function UiSelect({
   width,
   height,
   options,
   getOptionValue,
   childrenComponent,
   placeholder,
}) {
   const [value, setValue] = useState('')
   const handleChange = (event) => {
      setValue(event.target.value)
   }

   return (
      <Form height={height} width={width}>
         <SelectMui
            onChange={handleChange}
            value={value}
            defaultValue={23}
            displayEmpty
            renderValue={
               value !== ''
                  ? undefined
                  : () => <Placeholder>{placeholder}</Placeholder>
            }
         >
            {options?.map((item) => {
               return (
                  <Option
                     key={item.id}
                     onClick={() => getOptionValue(item.id, item.dateOfHoliday)}
                     value={item.name}
                  >
                     {item.name}
                  </Option>
               )
            })}
            {childrenComponent}
         </SelectMui>
      </Form>
   )
}
export default UiSelect

const Option = styled(MenuItem)`
   &.css-kk1bwy-MuiButtonBase-root-MuiMenuItem-root:hover {
      background: rgba(134, 57, 181, 0.4) !important;
   }
   &.css-kk1bwy-MuiButtonBase-root-MuiMenuItem-root.Mui-selected {
      background: rgba(134, 57, 181, 0.2) !important;
   }
`

const Form = styled(FormControl)`
   & > div {
      height: ${(props) => props.height || '35px'};
   }
   width: ${(props) => props.width || '396px'};
   background: #ffffff;
   border-radius: 2px;
   & fieldset {
      border: 1px solid #c4c4c4 !important;
   }
`
