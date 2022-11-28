import styled from 'styled-components'
import photoChildren from '../../assets/Images/photo.jpg'

const ThreeSection = () => {
   return (
      <Device>
         <ImageWrapper>
            <MainPicture src={photoChildren} alt="device" />
         </ImageWrapper>
         <Div>
            <Title>Благотворительность</Title>
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
export default ThreeSection

const ImageWrapper = styled.figure`
   height: 332px;
   border: 1px solid #fdfdfd;
   width: 470px;
   border-radius: 0px 120px 0px 0px;
`

const Device = styled.div`
   display: flex;
   justify-content: space-around;
   gap: 130px;
   align-items: center;
   perspective: 400px;
   & p {
      width: 500px;
      height: 182px;
      font-family: 'Inter';
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 19px;
      color: #020202;
   }
`

const MainPicture = styled('img')`
   width: 100%;
   height: 100%;
   border-radius: inherit;
   transform: translate3d(-30px, 30px, -30px);
`

const Title = styled('h1')`
   font-family: 'Inter';
   font-size: 46px;
   font-weight: 500;
   line-height: 55px;
   letter-spacing: 0em;
   text-align: left;
   color: #fdfdfd;
   padding-bottom: 32px;
`

const Div = styled.div`
   display: flex;
   flex-direction: column;
   width: 570px;

   span {
      font-family: 'Inter';
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 150%;
      color: #fdfdfd;
   }
`
