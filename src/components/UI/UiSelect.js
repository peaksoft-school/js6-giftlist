import FormControl from '@mui/material/FormControl'
import MenuItem from '@mui/material/MenuItem'
import SelectMui from '@mui/material/Select'
import { useEffect } from 'react'
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
   value,
   setValue,
}) {
   const handleChange = (event) => {
      setValue(event.target.value)
   }
   useEffect(() => {
      if (value) {
         options.map((item) => {
            return getOptionValue(item.id, item.dateOfHoliday)
         })
      }
   }, [options, value])

   return (
      <Form height={height} width={width}>
         <SelectMui
            onChange={handleChange}
            value={value}
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
