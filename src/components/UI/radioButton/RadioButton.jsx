import * as React from 'react'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormControl from '@mui/material/FormControl'
// import FormLabel from '@mui/material/FormLabel'

export default function RadioButton({ label, onChange }) {
   return (
      <FormControl>
         <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="female"
            name="radio-buttons-group"
            onChange={onChange}
         >
            <FormControlLabel value="male" control={<Radio />} label={label} />
         </RadioGroup>
      </FormControl>
   )
}
