import React, { useState, useEffect } from 'react'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import Select from '@mui/material/Select'
import { styled } from '@mui/material/styles'
import MenuItem from '../meatballs/MenuItem'

const SelectedSearch = ({
   category,
   onChange,
   options,
   getOptionValue,
   setCategory,
}) => {
   const [values, setValues] = useState('')
   const [px, setPx] = useState('')
   const handleChange = (event) => {
      setValues(event.target.value)
      onChange(event.target.value)
      setCategory(event.target.value)
   }
   useEffect(() => {
      if (category.length === 6) {
         setPx(category.length * 18)
      } else if (category.length >= 12) {
         setPx(category.length * 13)
      } else if (category.length < 12) {
         setPx(category.length * 15)
      }
   }, [category])

   return (
      <Sel widthPx={px}>
         <FormControl>
            {values === '' ? (
               <TextPlaceholder
                  disableAnimation
                  shrink={false}
                  focused={false}
                  id="item_type_label"
               >
                  {category}
               </TextPlaceholder>
            ) : null}
            <Select
               MenuProps={{
                  PaperProps: {
                     sx: {
                        bgcolor: 'white',
                        '& .MuiMenuItem-root': {
                           paddingBottom: '10px',
                           paddingTop: '10px',
                        },
                        '& .Mui-selected ': {
                           backgroundColor: 'rgba(134, 57, 181, 0.4)',
                        },
                        '& .css-6hp17o-MuiList-root-MuiMenu-list': {
                           padding: '0px',
                        },
                     },
                  },
               }}
               value={values}
               onChange={handleChange}
            >
               <MenuWrapper>
                  {options?.map((item) => {
                     return (
                        <Option
                           key={item}
                           value={item?.name}
                           onclick={() =>
                              getOptionValue(item.condition, item.name)
                           }
                        >
                           {item.name}
                        </Option>
                     )
                  })}
               </MenuWrapper>
            </Select>
         </FormControl>
      </Sel>
   )
}

export default SelectedSearch

const MenuWrapper = styled('div')`
   display: flex;
   flex-direction: column;
   align-items: flex-start;
   row-gap: 10px;
   padding: 10px 0;
   font-family: 'Inter';
   font-style: normal;
   font-weight: 400;
   font-size: 14px;
   line-height: 24px;
   /* identical to box height, or 171% */

   color: #020202;
`

const TextPlaceholder = styled(InputLabel)`
   height: 20px;
   width: 120px;
   text-align: center;
   margin-top: -13.7px;
   font-family: 'Inter', sans-serif;
   font-style: normal;
   font-weight: 400;
   font-size: 14px;
   color: #8d949e;
`
const Sel = styled('div')`
   & .css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input {
      padding: 0;
      font-family: 'Inter', sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 24px;
      color: #020202;
   }
   & .css-1nrlq1o-MuiFormControl-root {
      width: ${(props) => props.text || `${props.widthPx}px`};
      padding-left: 25px;
      margin-right: -10px;
   }
   & .css-1d3z3hw-MuiOutlinedInput-notchedOutline {
      border: none;
      width: auto;
   }
`

const Option = styled(MenuItem)`
   &.css-kk1bwy-MuiButtonBase-root-MuiMenuItem-root:hover {
      background: rgba(134, 57, 181, 0.4) !important;
   }
   &.css-kk1bwy-MuiButtonBase-root-MuiMenuItem-root.Mui-selected {
      background: rgba(134, 57, 181, 0.2) !important;
      font-family: 'Inter';
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 24px;
      color: #020202;
      /* identical to box height, or 171% */
   }
`
