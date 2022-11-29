import React from 'react'
import styled from 'styled-components'
import Modal from '../../UI/modals/Modal'

function AddHoliday({ isOpen, onClose }) {
   return (
      <div>
         <Modal isOpen={isOpen} onClose={onClose}>
            <StyledDiv>
               <Title>На какой праздник хотите получить?</Title>
               <hr />
               <Option>Курбан айт</Option>
            </StyledDiv>
         </Modal>
      </div>
   )
}

export default AddHoliday

const StyledDiv = styled('div')``

const Title = styled('span')`
   font-family: 'Inter';
   font-size: 18px;
   font-weight: 500;
   line-height: 22px;
   letter-spacing: 0.20000000298023224px;
   text-align: left;
`

const Option = styled('p')``
