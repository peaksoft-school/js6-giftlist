import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useSearchParams } from 'react-router-dom'
import styled from 'styled-components'
import useDebaunce from '../../../hooks/useDebaunce'
import {
   getCharity,
   inputSearchCharity,
   searchingCharity,
} from '../../../store/slices/charityActions'
import {
   data,
   filteredArray,
   stateOption,
} from '../../../utils/constants/constants'
import SearchInput from './SearchInputCharity'
import SearchSelect from './SelectedSearch'

const SelectInputSearch = () => {
   const dispatch = useDispatch()
   const [searchParams, setSearchParams] = useSearchParams()

   const [valueSearch, setValueSearch] = useState('')

   const [category, setCategory] = useState('')

   const searching =
      filteredArray.find((cat) => cat.name === category)?.subCategory || []

   const searchAsObject = Object.fromEntries(new URLSearchParams(searchParams))

   const searchingUsed = (state, variant) => {
      setCategory(variant)
      setSearchParams({ ...searchAsObject, [state]: variant })
      dispatch(searchingCharity({ ...searchAsObject, [state]: variant }))
   }

   const values = useDebaunce(valueSearch)

   const searchingCharities = (e) => {
      setValueSearch(e.target.value)
   }

   useEffect(() => {
      if (values) {
         dispatch(inputSearchCharity(values))
      } else {
         dispatch(getCharity())
      }
   }, [values])

   return (
      <StyleDiv>
         <SearchInput onChange={searchingCharities} value={valueSearch} />
         <SelectContainer>
            <SearchSelect
               valueKey="id"
               labelKey="name"
               options={stateOption}
               category="Состояние"
               getOptionValue={searchingUsed}
            />
            <SearchSelect
               valueKey="id"
               labelKey="name"
               options={data}
               category="Категория"
               getOptionValue={searchingUsed}
            />
            <SearchSelect
               valueKey="id"
               labelKey="name"
               category="Подкатегория"
               options={searching.map((value) => ({
                  condition: 'subCategory',
                  name: value,
               }))}
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
