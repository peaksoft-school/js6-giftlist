import { useState } from 'react'
import styled from 'styled-components'
import ControllsMenu from './meatballs/ControllsMenu'
import Menu from './meatballs/Menu'
// import MenuItem from './meatballs/MenuItem'

const HolidayCard = ({ src, date, title }) => {
   const [isModal, setIsModal] = useState(false)
   // const holiday = []
   return (
      <ContainerCard>
         <BlockImg>
            <Image src={src} alt={title} />
         </BlockImg>
         <Title>{title}</Title>
         <DateBlock>
            <Date>{date}</Date>
            <MeadBallsWrapper>
               {isModal && (
                  <Modal>
                     <Menu>fdadfa</Menu>
                  </Modal>
               )}
            </MeadBallsWrapper>
            <ControllsMenu isOpen={() => setIsModal(!isModal)} />
         </DateBlock>
      </ContainerCard>
   )
}

export default HolidayCard

const ContainerCard = styled.div`
   width: 340px;
   border-radius: 8px;
   background: #ffffff;
   border: 1px solid #ffffff;
   border-radius: 8px;
   padding: 16px;
`
const BlockImg = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
`

const Image = styled.img`
   src: ${(p) => p.src};
   height: 149px;
   width: 317px;
   border-radius: 6px;
`
const Title = styled.p`
   font-family: 'Inter';
   font-style: normal;
   font-weight: 500;
   font-size: 16px;
   line-height: 19px;
   letter-spacing: 0.02em;
   margin-top: 16px;
`
const DateBlock = styled.div`
   display: flex;
   align-items: center;
   justify-content: space-between;
   margin-top: 14px;
`

const Date = styled.span`
   font-family: 'Inter';
   font-style: normal;
   font-weight: 400;
   font-size: 14px;
   line-height: 17px;
   color: #636c84;
`
const MeadBallsWrapper = styled('div')`
   position: relative;
`

const Modal = styled('div')`
   position: absolute;
   left: 80px;
`
