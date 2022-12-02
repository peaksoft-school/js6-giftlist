import React, { useState } from 'react'
import styled from '@emotion/styled'
import { InputLabel } from '@mui/material'
import { useDispatch } from 'react-redux'
import BreadCrumbs from '../../components/UI/BreadCrumbs'
import Button from '../../components/UI/Button'
import ImagePicker from '../../components/UI/ImagePicker'
import Input from '../../components/UI/Inputs'
import TextArea from '../../components/UI/TextArea'
import faceebokIcon from '../../assets/svg/facebookIcon.svg'
import instagramIcon from '../../assets/svg/instagram.svg'
import vkIcon from '../../assets/svg/Vk.svg'
import telegramIcon from '../../assets/svg/telegramIcon.svg'
import SizePopUp from '../../components/UI/SizePopUp'
import { clothingSize, options } from '../../utils/constants/constants'
import { postProfile } from '../../store/slices/ProfileActions'
import DataPicker from '../../components/UI/DataPicker'

const ProfileInnerPage = () => {
   const [information, setInformation] = useState({
      country: '',
      email: '',
      phoneNumber: '',
      clothingSize: '',
      shoeSize: 0,
      hobby: '',
      important: '',
      dateOfBirth: '',
   })

   const dispatch = useDispatch()

   const dateOfBirthValue = (date) => {
      setInformation({ ...information, dateOfBirth: date })
   }
   const [image, setImage] = useState(null)

   const allvalueGet = (e) => {
      setInformation({
         ...information,
         [e.target.name]: e.target.value,
      })
   }
   const valueShoeSizeHanler = (value) => {
      setInformation({ ...information, shoeSize: value })
   }
   const valueclothingSize = (value) => {
      setInformation({ ...information, clothingSize: value })
   }

   const sendInformationHandle = () => {
      dispatch(postProfile({ ...information, photo: image }))
   }

   const pathTranslate = {
      Profile: 'Профиль',
      InnerPage: 'Рассказать о себе',
   }

   return (
      <Div>
         <BreadCrumbsDiv>
            <BreadCrumbs translate={pathTranslate} />
         </BreadCrumbsDiv>
         <ProfileContainer>
            <div>
               <ImagePicker
                  id="editProfile"
                  image={image}
                  setImage={setImage}
               />
            </div>
            <ProfileDiv>
               <SizeText>Основная информация</SizeText>
               <InputsDiv>
                  <InputLabel>
                     Имя
                     <Input
                        name="firstName"
                        type="text"
                        width="396px"
                        height="35px"
                        placeholder="Имя"
                     />
                  </InputLabel>
                  <InputLabel>
                     Фамилия
                     <Input
                        name="lastName"
                        width="396px"
                        height="35px"
                        type="text"
                        placeholder="Фамилия"
                     />
                  </InputLabel>
               </InputsDiv>
               <InputsDiv>
                  <InputLabel>
                     Страна
                     <Input
                        onChange={allvalueGet}
                        name="country"
                        width="396px"
                        height="35px"
                        type="text"
                        placeholder="Страна"
                     />
                  </InputLabel>
                  <InputLabel>
                     Дата рождения
                     <DataPicker
                        onChange={dateOfBirthValue}
                        width="396px"
                        height="35px"
                        type="text"
                        value={information.dateOfBirth}
                        name="dateOfBirth"
                        placeholder="Укажите дату рождения"
                     />
                  </InputLabel>
               </InputsDiv>
               <InputsDiv>
                  <InputLabel>
                     Email
                     <Input
                        onChange={allvalueGet}
                        name="email"
                        width="396px"
                        height="35px"
                        type="email"
                        placeholder="Напишите Email"
                     />
                  </InputLabel>
                  <InputLabel>
                     Номер телефона
                     <Input
                        name="phoneNumber"
                        onChange={allvalueGet}
                        width="396px"
                        height="35px"
                        type="number"
                        placeholder="Введите номер телефона"
                     />
                  </InputLabel>
               </InputsDiv>
               <div>
                  <SizeText>Размеры</SizeText>
                  <SelectDiv>
                     <WrapperSelect>
                        <p>Размер одежды</p>
                        <SizePopUp
                           options={clothingSize}
                           getValue={valueclothingSize}
                           placeholder="Выберите размер одежды"
                        />
                     </WrapperSelect>

                     <WrapperSelect2>
                        <p>Размер обуви</p>
                        <SizePopUp
                           getValue={valueShoeSizeHanler}
                           options={options}
                           placeholder="Выберите размер обуви"
                        />
                     </WrapperSelect2>
                  </SelectDiv>
               </div>
               <div>
                  <SizeText>Интересы, хобби</SizeText>
                  <DivTextArea>
                     <InputLabel style={style}>
                        Расскажите о своих интересах и хобби
                     </InputLabel>

                     <TextArea
                        onChange={allvalueGet}
                        name="hobby"
                        placeholder="Пример: плавание, бег, танцы, чтение художественной литературы..."
                     />
                  </DivTextArea>
               </div>
               <div>
                  <SizeText>Важно знать</SizeText>
                  <DivTextArea>
                     <InputLabel style={style}>О чем важно знать?</InputLabel>

                     <TextArea
                        onChange={allvalueGet}
                        name="important"
                        placeholder="Пример: аллергия на синтетические материалы, непереносимость лактозы..."
                     />
                  </DivTextArea>
               </div>

               <SizeText>Социальные сети</SizeText>
               <DivSocial>
                  <div>
                     <IconText>Фейсбук</IconText>
                     <SocialDiv>
                        <img src={faceebokIcon} alt="" />
                        <Input
                           name="facebookLink"
                           width="357px"
                           height="35px"
                           placeholder="Вставьте ссылку на фейсбук"
                        />
                     </SocialDiv>
                  </div>
                  <div>
                     <IconText>В контакте </IconText>
                     <SocialDiv>
                        <img src={vkIcon} alt="" />
                        <Input
                           name="vkLink"
                           width="357px"
                           height="35px"
                           placeholder="Вставьте ссылку на в контакте "
                        />
                     </SocialDiv>
                  </div>
               </DivSocial>
               <DivSocial>
                  <div>
                     <IconText>Инстаграм</IconText>
                     <SocialDiv>
                        <img src={instagramIcon} alt="" />
                        <Input
                           name="instagramLink"
                           width="357px"
                           height="35px"
                           placeholder="Вставьте ссылку на инстаграм"
                        />
                     </SocialDiv>
                  </div>
                  <div>
                     <IconText>Телеграм </IconText>
                     <SocialDiv>
                        <img src={telegramIcon} alt="" />
                        <Input
                           name="telegramLink"
                           width="357px"
                           height="35px"
                           placeholder="Вставьте ссылку на телеграм "
                        />
                     </SocialDiv>
                  </div>
               </DivSocial>
               <Buttons>
                  <Button variant="outlined">отмена</Button>
                  <Button onClick={sendInformationHandle} variant="contained">
                     Сохранить
                  </Button>
               </Buttons>
            </ProfileDiv>
         </ProfileContainer>
      </Div>
   )
}

export default ProfileInnerPage

const Div = styled('div')`
   height: 100vh;
   padding: 90px 40px 0 314px;
   background: #f7f8fa;
   width: 100%;
`
const style = {
   fontSize: '12px',
}
const BreadCrumbsDiv = styled('div')`
   margin-left: 20px;
`
const ProfileContainer = styled('form')`
   width: 1086px;
   height: 1262px;
   background: #ffffff;
   border-radius: 10px;
   margin-left: 20px;
   padding: 12px;
   display: flex;
   margin-top: 20px;
`
const ProfileDiv = styled('div')`
   margin-top: -11px;
   padding-left: 10px;
   h1 {
      font-family: 'Inter';
      font-style: normal;
      font-weight: 400;
      font-size: 18px;
      line-height: 22px;
   }
`
const InputsDiv = styled('div')`
   display: flex;
   justify-content: space-around;
   margin-top: 20px;
   label {
      font-size: 12px;
      :last-child {
         margin-left: 10px;
      }
   }
`
const SizeText = styled('h1')`
   margin-top: 24px;
   margin-left: 8px;
   margin-bottom: 20px;
`
const SocialDiv = styled('div')`
   display: flex;
   margin-left: 15px;
   img {
      padding-right: 7px;
      padding-left: 5px;
   }
`
const IconText = styled('p')`
   font-size: 12px;
   margin-left: 58px;
   margin-bottom: 6px;
   font-family: 'Inter';
   font-style: normal;
   font-weight: 400;
   font-size: 12px;
   line-height: 15px;
   color: #464444;
`

const DivSocial = styled('div')`
   display: flex;
   margin-top: 14px;
`
const Buttons = styled('div')`
   display: flex;
   justify-content: flex-end;
   margin-top: 60px;
   button {
      margin: 8px;
   }
`
const DivTextArea = styled('div')`
   margin-left: 8px;
`
const SelectDiv = styled('div')`
   display: flex;
   justify-content: center;
   p {
      font-family: 'Inter';
      font-style: normal;
      font-weight: 400;
      font-size: 12px;
      line-height: 15px;
      color: #464444;
   }
`
const WrapperSelect = styled('div')`
   width: 390px;
   p {
      margin-bottom: 5px;
   }
`
const WrapperSelect2 = styled('div')`
   width: 390px;
   margin-left: 30px;
   p {
      margin-bottom: 5px;
   }
`
