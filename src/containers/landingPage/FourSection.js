import styled from 'styled-components'
import deviceIcon from '../../assets/svg/Device - Macbook Pro.svg'

const FourSection = () => {
   return (
      <Device>
         <MainPicture src={deviceIcon} alt="device" />
         <Div>
            <Title>О проекте</Title>
            <span>
               Найти удачный подарок, который принесёт радость, не всегда
               простая задача.
            </span>
            <span>
               Благодаря нашему сервису у вас есть возможность не только
               обрадовать подарком, но и помочь другим приобрести необходимые им
               вещи.
            </span>
            <span>
               В разделе благотворительность вы можете найти список
               опубликованных вещей, забронировав, вы связываетесь с их
               обладателем.
            </span>
         </Div>
      </Device>
   )
}
export default FourSection
const Device = styled.div`
   display: flex;
   gap: 110px;
   flex-direction: row-reverse;
`

const MainPicture = styled('img')``

const Title = styled.h1`
   font-family: Inter;
   font-size: 46px;
   font-weight: 500;
   line-height: 46px;
   letter-spacing: 0em;
   text-align: left;
   color: black;
   padding-bottom: 32px;
`

const Div = styled.div`
   display: flex;
   flex-direction: column;
   width: 570px;
   gap: 15px;
   span {
      font-family: 'Inter';
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 19px;
      color: #020202;
   }
`
