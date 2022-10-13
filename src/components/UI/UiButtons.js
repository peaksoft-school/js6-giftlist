import React from 'react'
import styled from 'styled-components'

function UiButtons({ children, onClick, icons, ...props }) {
   return (
      <div>
         <Wrapper onClick={onClick} {...props}>
            <img src={icons} alt="button" />
            <Button onClick={onClick}>{children}</Button>
         </Wrapper>
      </div>
   )
}

export default UiButtons

const Wrapper = styled.div`
   width: 216px;
   height: 39px;
   outline: none;
   background-color: ${(props) => props.color};
   padding: 10px, 24px, 10px, 16px;
   border-radius: 6px;
   border: none;
   display: flex;
   align-items: center;
   justify-content: start;
   padding-left: 18px;
   border-color: black;
   :active {
      background-color: ${(props) => props.active};
   }
   :hover {
      background-color: ${(props) => props.hover};
   }
`

const Button = styled.button`
   font-family: 'Inter';
   font-style: normal;
   font-weight: 600;
   font-size: 16px;
   line-height: 19px;
   text-align: center;
   letter-spacing: 0.03em;
   text-transform: uppercase;
   border: none;
   outline: none;
   background-color: transparent;
`
