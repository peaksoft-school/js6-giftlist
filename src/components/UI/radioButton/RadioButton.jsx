import * as React from 'react'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormControl from '@mui/material/FormControl'

export default function RadioButton({ onChange, label, value, valueChildren }) {
   return (
      <FormControl component="fieldset">
         <RadioGroup
            aria-label="gender"
            name="gender1"
            value={value}
            onChange={onChange}
         >
            <FormControlLabel
               value={valueChildren}
               control={<Radio />}
               label={label}
            />
         </RadioGroup>
      </FormControl>
   )
}
