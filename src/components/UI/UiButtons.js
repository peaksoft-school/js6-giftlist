import React from 'react'
import styled from 'styled-components'

import Button from '@mui/material/Button'
import { ReactComponent as Light } from '../../assets/svg/Vector (3).svg'

function UiButtons({ children, icon, startIcon, variant, disabled, ...props }) {
   return (
      <StyledButton
         style={props}
         variant={variant}
         {...props}
         startIcon={icon ? <Light /> : ''}
         disabled={disabled}
      >
         {children}
      </StyledButton>
   )
}

export default UiButtons

const StyledButton = styled(Button)`
   width: ${(props) => props.width || '216px'};
   height: ${(props) => props.height || '39px'};
   font-size: ${(props) => props.fontSize || '16px'};
   background: ${(props) => props.backgroundColor || 'white'};
   border-radius: ${(props) =>
      props.variant === 'outlined' ? '8px !important' : '6px !important'};
   border: ${(props) =>
      // eslint-disable-next-line no-nested-ternary
      props.variant === 'outlined'
         ? '1px solid #8D949E !important;'
         : props.variant === 'contained'
         ? '1px solid #DD8A08'
         : 'none'};
   font-weight: 500;
   color: ${(props) => props.colorDefault || 'white'};
   line-height: 17px;
   padding: ${(props) =>
      props.variant === 'outlined' ? '8px 16px' : '10px 16px'};
   gap: 10px;
   cursor: pointer;
   &:hover {
      color: ${(props) =>
         // eslint-disable-next-line no-nested-ternary
         props.variant === 'contained'
            ? '#FFFFFF !important'
            : props.variant === 'outlined'
            ? '#FFFFFF !important'
            : '#FFFFFF !important'};
      background-color: ${(props) => props.backgroundHover || 'red'};
      border: ${(props) =>
         props.variant === 'outlined' ? '1.5px solid #363636' : 'none'};
   }
   &:active {
      background-color: ${(props) => props.backgroundActive || 'white'};
      border: none;
      color: ${(props) =>
         props.variant === 'outlined' ? '#f7f7f7' : '#f7f7f7'};
   }
   &:disabled {
      background-color: ${(props) =>
         props.disabled === 'disabled'
            ? 'white !important'
            : '#1C1B1F1F !important'};
      border: ${(props) =>
         props.disabled === 'disabled' ? '1px solid #1C1B1F1F !important' : ''};

      color: ${(props) =>
         props.disabled === 'disabled'
            ? '  rgba(28, 27, 31, 0.12) !important'
            : ''};
   }
`
