import React from 'react'
import styled from 'styled-components'
import MuiButton from '@mui/material/Button'

function Button({ children, fullWidth, variant, ...props }) {
   return (
      <StyledButton
         fullWidth={fullWidth}
         variant={variant || 'contained'}
         {...props}
      >
         {children}
      </StyledButton>
   )
}

export default Button

const StyledButton = styled(MuiButton)`
   &.MuiButton-root.MuiButton-outlined {
      border-radius: 6px;
      width: auto;
      color: white;
      border: transparent;
      background-color: #8639b5;
      &:hover {
         background-color: red;
         background-color: #612386;
      }
      &:active {
         background-color: #ab62d8;
      }
      &:disabled {
         background-color: rgba(28, 27, 31, 0.12);
      }
   }

   &.MuiButton-root.MuiButton-contained {
      width: auto;
      background-color: #fff;
      color: #8d949e;
      border-radius: 8px;
      &:hover {
         background-color: #612386;
         color: #fff;
      }
      &:active {
         background-color: #612386;
         color: #fff;
      }
      &:disabled {
         background-color: #1c1b1f1f;
         color: #1c1b1f1f;
      }
   }
`
