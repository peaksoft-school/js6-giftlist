import { Modal } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useSearchParams } from 'react-router-dom'
import styled from 'styled-components'
import { getHoliday } from '../../../store/slices/HolidayActions'
import { postHolidayinWish } from '../../../store/slices/lentaActions'

function AddHoliday({ isOpen, onClose, openAddModalHoliday }) {
   const { holidays } = useSelector((state) => state.holiday)
   const [params] = useSearchParams()
   const { wishId } = Object.fromEntries(params)
   const dispatch = useDispatch()

   useEffect(() => {
      dispatch(getHoliday())
   }, [])
   console.log(holidays)
   const addWishToHoliday = (id) => {
      dispatch(postHolidayinWish({ id, wishId }))
   }
   return (
      <Modal open={isOpen} onClose={onClose}>
         <StyledDiv>
            <div>
               <Title>На какой праздник хотите получить?</Title>
               <hr />
               <Line>
                  {holidays.map((item) => (
                     <Option onClick={() => addWishToHoliday(item.id)}>
                        {item.name}
                     </Option>
                  ))}
               </Line>
               <MenuButton onClick={openAddModalHoliday}>
                  <Plus>+</Plus> Создать новый праздник
               </MenuButton>
            </div>
         </StyledDiv>
      </Modal>
   )
}

export default AddHoliday

const Title = styled('span')`
   font-family: 'Inter';
   font-size: 18px;
   font-weight: 500;
   line-height: 22px;
   letter-spacing: 0.20000000298023224px;
   text-align: left;
`
const Plus = styled('span')`
   font-size: 25px;
   margin-top: -1px;
`
const MenuButton = styled('div')`
   color: rgba(134, 57, 181, 1);
   font-family: 'Inter';
   font-style: normal;
   font-weight: 400;
   font-size: 15px;
   line-height: 24px;
   width: 240px;
   padding-top: 6px;
   display: flex;
   gap: 8px;
   cursor: pointer;
`
const Option = styled('p')`
   cursor: pointer;
   font-family: 'Inter';
   font-size: 16px;
   font-weight: 400;
   line-height: 24px;
   letter-spacing: 0px;
   text-align: left;
`

const StyledDiv = styled('div')`
   position: absolute;
   left: 50%;
   top: 50%;
   transform: translate(-50%, -50%);
   background-color: white;
   outline: none;
   background: #ffffff;
   box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.16);
   border-radius: 3px;
   display: flex;
   padding: 16px 16px;
   div hr {
      margin: 15px 0px 15px 0px;
   }
`

const Line = styled('div')`
   display: flex;
   gap: 16px;
   flex-direction: column;
`
