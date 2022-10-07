import styled from 'styled-components'
import controlsIcon from '../../../assets/svg/Controls Icon (1).svg'

function ControllsMenu({ reverseIcon, isOpen }) {
   return (
      <MeadBallsBtn onClick={isOpen}>
         <ImgControlls src={controlsIcon} reverse={reverseIcon} />
      </MeadBallsBtn>
   )
}

export default ControllsMenu

const ImgControlls = styled.img`
   src: ${(p) => p.src};
   transform: ${(p) => p.reverse};
`
const MeadBallsBtn = styled.button`
   cursor: pointer;
   border: none;
   background-color: transparent;
`
