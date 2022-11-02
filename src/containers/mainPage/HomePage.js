import React from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import { ReactComponent as Facebook } from '../../assets/svg/facebook.svg'
import { ReactComponent as Vk } from '../../assets/svg/wk.svg'
import { ReactComponent as Instagram } from '../../assets/svg/instagram.svg'
import OneImage from '../../assets/Images/mainImage/1.png'
import TwoImage from '../../assets/Images/mainImage/2.png'
import Button from '../../components/UI/Button'

function HomePage() {
   const navigate = useNavigate()
   return (
      <Main>
         <Container>
            <Text>
               <p>О проекте</p>
               <h1>Gift list</h1>
               <p>Благотворительность</p>
            </Text>
            <Div>
               <Icons>
                  <div>
                     <a href="https://www.facebook.com/">
                        <Facebook />
                     </a>
                     <a href="https://vk.com/">
                        <Vk />
                     </a>
                     <a href="https://www.instagram.com/">
                        <Instagram />
                     </a>
                  </div>

                  <Image>
                     <img src={OneImage} alt="oneimg" />
                  </Image>
               </Icons>

               <Title>
                  <h1>Социальная сеть нового поколения</h1>
                  <p>
                     Всегда подскажет, что подарить близким и осуществит твои
                     желания
                  </p>
                  <MyButton
                     variant="outlined"
                     width="291px"
                     onClick={() => navigate('/signin')}
                  >
                     Войти
                  </MyButton>

                  <RegisBtn
                     variant="contained"
                     onClick={() => navigate('/signup')}
                  >
                     Регистрация
                  </RegisBtn>
               </Title>

               <div className="div">
                  <img src={TwoImage} alt="twoimg" />
                  <p className="scroll">&#8592; Листайте вниз</p>
               </div>
            </Div>
         </Container>
      </Main>
   )
}
export default HomePage

const Main = styled.div`
   width: 1440px;
   height: 800px;
   margin: 0;
   background-color: #8639b5;
`
const Container = styled.div`
   width: 1170px;
   height: 649px;
   margin: 0px 135px 120px 135px;
   font-family: 'Inter';
   font-style: normal;
   font-weight: 500;
`
const Text = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;
   h1 {
      margin-left: 371px;
      margin-right: 285px;
      margin-top: 31px;
      font-size: 24px;
      text-transform: uppercase;
      color: #ffffff;
   }
   p {
      margin-top: 31px;
      font-size: 16px;
      color: #fdfdfd;
   }
`
const Div = styled.div`
   margin-top: 73px;
   display: flex;
   justify-content: space-between;
   .div {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: end;
      gap: 150px;
   }
   img {
      width: 240px;
      height: 300px;
   }
   .scroll {
      font-weight: 400;
      font-size: 14px;
      text-align: center;
      color: #ffffff;
      transform: rotate(-90deg);
      padding-top: 100px;
   }
   .down {
      width: 8px;
      height: 16px;
   }
`
const Icons = styled.div`
   width: 270px;
   height: 126px;
   display: flex;
   flex-direction: column;
   div {
      display: flex;
      flex-direction: column;
      gap: 30px;
   }
   img {
      width: 22px;
      height: 22px;
      margin-top: 30px;
   }
`
const Image = styled.div`
   width: 270px;
   height: 330px;
   margin-top: 100px;
   img {
      width: 240px;
      height: 300px;
   }
`
const Title = styled.div`
   width: 542px;
   height: 353px;
   margin-top: 120px;
   display: flex;
   flex-direction: column;
   align-items: center;
   h1 {
      height: 130px;
      font-size: 54px;
      text-align: center;
      color: #ffffff;
   }
   p {
      width: 338px;
      height: 48px;
      margin-top: 30px;
      font-weight: 400;
      font-size: 16px;
      line-height: 150%;
      text-align: center;
      color: #ffffff;
   }
`
const MyButton = styled(Button)`
   width: 291px !important;
   height: 39px;
   margin-top: 50px !important;
   background: linear-gradient(225deg, #fa2b56 0%, #f91c3d 100%);
   border-radius: 6px;
   border: none;
   color: #ffffff;
`
const RegisBtn = styled(Button)`
   width: 291px !important;
   height: 39px;
   background: rgba(255, 255, 255, 0.1) !important;
   margin-top: 30px !important;
   border: none;
   border: 1px solid #ffffff !important;
   border-radius: 6px;
   font-weight: 500;
   font-size: 16px;
   line-height: 19px;
   letter-spacing: 0.03em;
   text-transform: uppercase;
   color: #ffffff !important;
`
