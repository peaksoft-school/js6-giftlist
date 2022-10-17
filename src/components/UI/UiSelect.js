import React from 'react'
import Box from '@mui/material/Box'
import FormControl from '@mui/material/FormControl'
import MenuItem from '@mui/material/MenuItem'
import SelectMui from '@mui/material/Select'
import styled from 'styled-components'

function UiSelect({
   value,
   width,
   height,
   onChange,
   options,
   getOptionLabel,
   getOptionValue,
}) {
   const handleChange = (event) => {
      onChange(event.target.value)
   }

   return (
      <BoxStyled width={width}>
         <Form height={height} fullWidth>
            <SelectMui onChange={handleChange} value={value}>
               {options?.map((item) => {
                  return (
                     <Options value={getOptionValue(item)} key={item.id}>
                        {getOptionLabel(item)}
                     </Options>
                  )
               })}
            </SelectMui>
         </Form>
      </BoxStyled>
   )
}
export default UiSelect

const Options = styled(MenuItem)`
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
`
const BoxStyled = styled(Box)`
   width: ${(props) => props.width || '396px'};
   background: #ffffff;
   border-radius: 2px;
   & fieldset {
      border: 1px solid #c4c4c4 !important;
   }
`
