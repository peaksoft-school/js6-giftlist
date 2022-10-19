import React from 'react'
import styled from 'styled-components'
import photo from '../assets/svg/IconUser.svg'

function Header() {
   return (
      <ContainerHeader>
         <LeftPart>
            <Input />
            <img src={photo} alt="alt" />
         </LeftPart>
         <RightPart> </RightPart>
      </ContainerHeader>
   )
}

export default Header

const ContainerHeader = styled.div`
   width: 1146px;
   background: #ffffff;
   box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.15);
   height: 86px;
   position: fixed;
   display: flex;
   align-items: center;
   justify-content: center;
   /* right: 50px; */
`

const LeftPart = styled.div``

const RightPart = styled.div``

const Input = styled.input`
   height: 40px;
   width: 821px;
   border-radius: 8px;
   padding: 6px 18px 6px 18px;
   outline: none;
`
