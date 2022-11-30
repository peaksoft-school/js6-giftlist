import { Modal } from '@mui/material'
import React from 'react'
import styled from 'styled-components'

function AddHoliday({ isOpen, onClose }) {
   return (
      <Modal open={isOpen} onClose={onClose}>
         <StyledDiv>
            <div>
               <Title>На какой праздник хотите получить?</Title>
               <hr />
               <Option>Курбан айт</Option>
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

const Option = styled('p')``

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
`
