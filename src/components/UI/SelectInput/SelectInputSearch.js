import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import styled from 'styled-components'
import { searchingCharity } from '../../../store/slices/charityActions'
import { data, filteredArray } from '../../../utils/constants/constants'

import SearchInput from './SearchInputCharity'
import SearchSelect from './SelectedSearch'

const SelectInputSearch = () => {
   const dispatch = useDispatch()

   const [value, setValue] = useState({
      searchInput: '',
      state: '',
      category: '',
      subCategory: null,
      country: '',
   })
   const changeHandler = (fieldName, value) => {
      console.log(value, fieldName, 'vvvvv')
      setValue((prev) => {
         return {
            ...prev,
            [fieldName]: value,
         }
      })
   }
   const stateOption = [
      {
         name: 'Все',
         condition: 'condition',
      },
      {
         name: 'Б/У',
         condition: 'condition',
      },

      {
         name: 'Новый',
         condition: 'condition',
      },
   ]
   const [category, setCategory] = useState()
   const searching =
      filteredArray.find((cat) => cat.name === category)?.subCategory || []

   const searchingUsed = (state, variant) => {
      console.log(variant, 'varianttt', searching)
      setCategory(variant)
      dispatch(searchingCharity({ state, variant }))
   }
   const subCategoryHandler = (state, variant) => {
      console.log(variant, 'name')
      dispatch(searchingCharity({ sub: variant, subTask: 'subTask' }))
   }
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
               getOptionValue={searchingUsed}
            />
            <SearchSelect
               valueKey="id"
               labelKey="name"
               options={data}
               onChange={(value) => changeHandler('category', value)}
               value={value.category}
               category="Категория"
               getOptionValue={searchingUsed}
            />
            <SearchSelect
               valueKey="id"
               labelKey="name"
               onChange={(value) => changeHandler('subCategory', value)}
               value={value.subCategory}
               category="Подкатегория"
               options={searching.map((value) => ({ name: value }))}
               getOptionValue={subCategoryHandler}
            />
            <SearchSelect
               valueKey="id"
               labelKey="name"
               onChange={(value) => changeHandler('country', value)}
               value={value.country}
               category="Страна"
               getOptionValue={searchingUsed}
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
