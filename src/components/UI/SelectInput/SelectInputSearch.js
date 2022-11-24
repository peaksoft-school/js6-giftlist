import React, { useState } from 'react'

import styled from 'styled-components'
import { data } from '../../../utils/constants/constants'

import SearchInput from './SearchInputCharity'
import SearchSelect from './SelectedSearch'

const SelectInputSearch = ({ subCategories, country }) => {
   const [value, setValue] = useState({
      searchInput: '',
      state: '',
      category: '',
      subCategory: null,
      country: '',
   })

   const changeHandler = (fieldName, value) => {
      setValue((prev) => {
         return {
            ...prev,
            [fieldName]: value,
         }
      })
   }
   const stateOption = [{ name: 'Все' }, { name: 'Б/У' }, { name: 'Новое' }]
   return (
      <StyleDiv>
         <SearchInput
            onChange={(value) => changeHandler('searchInput', value)}
            value={value.searchInput}
         />
         <SelectContainer>
            <SearchSelect
               valueKey="id"
               labelKey="name"
               options={stateOption}
               onChange={(value) => changeHandler('state', value)}
               value={value.state}
               category="Состояние"
            />
            <SearchSelect
               valueKey="id"
               labelKey="name"
               options={data}
               onChange={(value) => changeHandler('category', value)}
               value={value.category}
               category="Категория"
            />
            <SearchSelect
               valueKey="id"
               labelKey="name"
               options={subCategories}
               onChange={(value) => changeHandler('subCategory', value)}
               value={value.subCategory}
               category="Подкатегория"
            />
            <SearchSelect
               valueKey="id"
               labelKey="name"
               options={country}
               onChange={(value) => changeHandler('country', value)}
               value={value.country}
               category="Страна"
            />
         </SelectContainer>
      </StyleDiv>
   )
}
export default SelectInputSearch

const SelectContainer = styled.div`
   width: 100%;
   display: flex;
   justify-content: flex-end;
   gap: 3px;
   max-width: 500px;
   margin-left: auto;
`

const StyleDiv = styled.div`
   width: 100%;
   height: 40px;
   border: 1px solid #bdbdbd;
   border-radius: 8px;
   padding-right: 27.5px;
   box-sizing: border-box;
   display: flex;
   align-items: center;
   justify-content: flex-start;
   :hover {
      border: 1px solid #8639b5;
   }
   :focus-within {
      border: 1px solid #8639b5;
   }
`
