import React from 'react'
import { Modal as MUIModal } from '@mui/material'
import styled from 'styled-components'

const BackdropProps = { timeout: 500 }
function Modal({ isOpen, onClose, children }) {
   return (
      <MUIModal BackdropProps={BackdropProps} open={isOpen} onClose={onClose}>
         <CenteredContainer>{children}</CenteredContainer>
      </MUIModal>
   )
}

export default Modal

const CenteredContainer = styled.div`
   position: absolute;
   left: 50%;
   top: 50%;
   transform: translate(-50%, -50%);
   background-color: white;
   outline: none;
   padding: 24px 32px;
   border-radius: 12px;
`
