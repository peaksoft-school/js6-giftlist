import * as React from 'react'
// import MenuItem from '@mui/material/MenuItem'
// import { styled as styles } from '@mui/material/'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import styled from 'styled-components'

const UiSelect = () => {
   const selectMenu = [
      'Электроника',
      'Одежда',
      'Школа',
      'Дом и сад',
      'Обувь',
      'Транспорт',
   ]
   const [age, setAge] = React.useState('')

   const handleChange = (event) => {
      setAge(event.target.value)
   }

   return (
      <div>
         <SelectContainer>
            <Select value={age} onChange={handleChange}>
               {selectMenu.map((item) => {
                  return <CustomMenuItem value={item}>{item}</CustomMenuItem>
               })}
            </Select>
         </SelectContainer>
         <div>
            {/* <SelectItem name="" id="">
               {selectMenu.map((elem) => {
                  return (
                     <Items>
                        <option value={elem}>{elem}\</option>
                     </Items>
                  )
               })}
            </SelectItem> */}
         </div>
      </div>
   )
}

export default UiSelect

// const Items = styled.optgroup`
//    width: 100px;
//    height: 50px;
//    border: 2px solid red;
//    background-color: blue;
//    padding: 10px;
//    font-size: 40px;
//    :hover {
//       background-color: red;
//    }
// `
// const SelectItem = styled.select`
//    width: 400px;
//    height: 40px;
// `
const CustomMenuItem = styled.li`
   padding: 2px;
   margin: 4px;
   border-bottom: 1px solid grey;
   :hover {
      background: rgba(134, 57, 181, 0.4);
   }
`
const SelectContainer = styled(FormControl)`
   width: 396px;
   box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.16);
   &.MuiButtonBase-root {
      background-color: none;
   }
   &.Mui-selected:hover {
      background: rgba(134, 57, 181, 0.4);
   }
   &.MuiMenuItem-root:hover {
      background: rgba(134, 57, 181, 0.4);
   }
`
// const Listyle = styled(MenuItem)`
//    :hover {
//       background: rgba(134, 57, 181, 0.4);
//    }
//    &.Mui-selected {
//       background: rgba(134, 57, 181, 0.2);
//    }
//    &.MuiButtonBase-root:hover {
//       background: rgba(134, 57, 181, 0.4);
//    }
//    &.MuiTouchRipple-root:active {
//       background: rgba(134, 57, 181, 0.4);
//    }
//    .MuiTouchRipple-root:active {
//       background-color: red;
//    }
//    &.Mui-selected:hover {
//       background: rgba(134, 57, 181, 0.4);
//    }
// `
