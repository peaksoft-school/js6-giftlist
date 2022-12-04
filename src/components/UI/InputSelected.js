import React, { useState } from 'react'
import styled from 'styled-components'
import searchIcon from '../../assets/svg/search.svg'
import UiSelect from './UiSelect'

function InputSelected() {
   const [isChecked, setIsChecked] = useState(false)
   const [arr, setArr] = useState([])
   const [values, setValues] = useState('')

   const onHandlerValue = (e) => {
      if (values.length === 0) setIsChecked(false)
      setValues(e.target.value)
   }
   const onHanlderOnkeyDown = (e) => {
      if (e.key === 'Enter') {
         setArr([...arr, { values }])
         setIsChecked(true)
      }
   }

   const onhandlerSelectedOne = (e) => {
      setValues(e.target.value)
   }

   return (
      <InputSearchContainer>
         <TopPart>
            <img src={searchIcon} alt="ff" />
            <Input
               placeholder="Поиск"
               onChange={onHandlerValue}
               onKeyDown={onHanlderOnkeyDown}
               defaultValue={arr.map((item) => item.values)}
               value={values}
            />
         </TopPart>
         <BottomPart gap={isChecked ? '20px' : ''}>
            <UiSelect width="77px" height="40px" />
            <Selected onChange={onhandlerSelectedOne}>
               <option value="">Категория</option>
               <option value="Крутое">Крутое</option>
               <option value="гуччи">гуччи</option>
            </Selected>
            <Selected>
               <option>Подкатегория</option>
            </Selected>
            <Selected>
               <option>Страна</option>
            </Selected>
            {isChecked && <IconDelete />}
         </BottomPart>
      </InputSearchContainer>
   )
}

export default InputSelected

const IconDelete = styled.img`
   height: 15px;
   width: 15px;
   border-radius: 0px;
`

const InputSearchContainer = styled.div`
   height: 40px;
   width: 821px;
   border-radius: 8px;
   background-color: #f5f5f5;
   color: #f5f5f5;
   display: flex;
   align-items: center;
   justify-content: end;
   gap: 10px;
   padding-right: 15px;
   padding-left: 20px;
   border: 1px solid #bdbdbd;
`

const Input = styled.input`
   border: none;
   outline: none;
   width: 300px;
`

const Selected = styled.select`
   outline: none;
   border: none;
   background-color: #f5f5f5;
`

const TopPart = styled.div`
   display: flex;
   gap: 20px;
`

const BottomPart = styled.div`
   display: flex;
   justify-content: right;
   gap: 30px;
   /* gap: 20px; */
   gap: ${(p) => p.gap};
   /* gap: ; */

   /* margin-right: 15px; */
`
