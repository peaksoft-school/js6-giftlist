import React from 'react'
import styled from 'styled-components'

function IconButton({ onClose, children }) {
   return <IconsButton onClick={onClose}>{children}</IconsButton>
}

export default IconButton

const IconsButton = styled.button``
