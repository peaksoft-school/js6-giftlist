import React from 'react'
import { Modal as MUIModal } from '@mui/material'
import styled from 'styled-components'

function Modal({ isOpen, onClose, children }) {
   return (
      <MUIModal open={isOpen} onClose={onClose}>
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
`
