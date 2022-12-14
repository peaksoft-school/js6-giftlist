import React, { useState } from 'react'
import styled from '@emotion/styled'
import { InputLabel } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
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
import DataPicker from '../../components/UI/DataPicker'
import { profilePost } from '../../store/slices/ProfileActions'

const ProfileInnerPage = () => {
   const { email, firstName, lastName } = useSelector(
      (state) => state.auth.user
   )
   const navigate = useNavigate()

   const [information, setInformation] = useState({
      country: '',
      email,
      phoneNumber: '',
      clothingSize: '',
      shoeSize: 0,
      hobby: '',
      important: '',
      dateOfBirth: '',
      firstName,
      lastName,
      vkLink: '',
      telegramLink: '',
      instagramLink: '',
      facebookLink: '',
   })

   const dispatch = useDispatch()
   const [image, setImage] = useState(null)

   const dateOfBirthValue = (date) => {
      setInformation({ ...information, dateOfBirth: date })
   }
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
      dispatch(profilePost({ ...information, image }))
   }

   const onCancelPage = () => {
      navigate('/user/profile/my-profile')
   }
   const path = [
      {
         name: '??????????????',
         to: '/user/profile',
      },
      {
         name: '???????????????????? ?? ????????',
      },
   ]
   return (
      <Div>
         <BreadCrumbsDiv>
            <BreadCrumbs paths={path} />
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
               <SizeText>???????????????? ????????????????????</SizeText>
               <InputsDiv>
                  <InputLabel>
                     ??????
                     <Input
                        onChange={allvalueGet}
                        name="firstName"
                        type="text"
                        width="396px"
                        height="35px"
                        placeholder="??????"
                        value={information.firstName}
                     />
                  </InputLabel>
                  <InputLabel>
                     ??????????????
                     <Input
                        onChange={allvalueGet}
                        name="lastName"
                        width="396px"
                        height="35px"
                        type="text"
                        placeholder="??????????????"
                        value={information.lastName}
                     />
                  </InputLabel>
               </InputsDiv>
               <InputsDiv>
                  <InputLabel>
                     ????????????
                     <Input
                        onChange={allvalueGet}
                        name="country"
                        width="396px"
                        height="35px"
                        type="text"
                        placeholder="????????????"
                     />
                  </InputLabel>
                  <InputLabel>
                     ???????? ????????????????
                     <DataPicker
                        onChange={dateOfBirthValue}
                        width="396px"
                        height="35px"
                        type="text"
                        value={information.dateOfBirth}
                        name="dateOfBirth"
                        placeholder="?????????????? ???????? ????????????????"
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
                        placeholder="???????????????? Email"
                        value={information.email}
                     />
                  </InputLabel>
                  <InputLabel>
                     ?????????? ????????????????
                     <Input
                        name="phoneNumber"
                        onChange={allvalueGet}
                        width="396px"
                        height="35px"
                        type="number"
                        placeholder="?????????????? ?????????? ????????????????"
                     />
                  </InputLabel>
               </InputsDiv>
               <div>
                  <SizeText>??????????????</SizeText>
                  <SelectDiv>
                     <WrapperSelect>
                        <p>???????????? ????????????</p>
                        <SizePopUp
                           options={clothingSize}
                           getValue={valueclothingSize}
                           placeholder="???????????????? ???????????? ????????????"
                        />
                     </WrapperSelect>

                     <WrapperSelect2>
                        <p>???????????? ??????????</p>
                        <SizePopUp
                           getValue={valueShoeSizeHanler}
                           options={options}
                           placeholder="???????????????? ???????????? ??????????"
                        />
                     </WrapperSelect2>
                  </SelectDiv>
               </div>
               <div>
                  <SizeText>????????????????, ??????????</SizeText>
                  <DivTextArea>
                     <InputLabel style={style}>
                        ???????????????????? ?? ?????????? ?????????????????? ?? ??????????
                     </InputLabel>

                     <TextArea
                        onChange={allvalueGet}
                        name="hobby"
                        placeholder="????????????: ????????????????, ??????, ??????????, ???????????? ???????????????????????????? ????????????????????..."
                     />
                  </DivTextArea>
               </div>
               <div>
                  <SizeText>?????????? ??????????</SizeText>
                  <DivTextArea>
                     <InputLabel style={style}>?? ?????? ?????????? ???????????</InputLabel>

                     <TextArea
                        onChange={allvalueGet}
                        name="important"
                        placeholder="????????????: ???????????????? ???? ?????????????????????????? ??????????????????, ?????????????????????????????? ??????????????..."
                        value={information.important}
                     />
                  </DivTextArea>
               </div>

               <SizeText>???????????????????? ????????</SizeText>
               <DivSocial>
                  <div>
                     <IconText>??????????????</IconText>
                     <SocialDiv>
                        <img src={faceebokIcon} alt="" />
                        <Input
                           name="facebookLink"
                           width="357px"
                           height="35px"
                           placeholder="???????????????? ???????????? ???? ??????????????"
                           onChange={allvalueGet}
                           value={information.facebookLink}
                        />
                     </SocialDiv>
                  </div>
                  <div>
                     <IconText>?? ???????????????? </IconText>
                     <SocialDiv>
                        <img src={vkIcon} alt="" />
                        <Input
                           name="vkLink"
                           width="357px"
                           height="35px"
                           placeholder="???????????????? ???????????? ???? ?? ????????????????"
                           onChange={allvalueGet}
                           value={information.vkLink}
                        />
                     </SocialDiv>
                  </div>
               </DivSocial>
               <DivSocial>
                  <div>
                     <IconText>??????????????????</IconText>
                     <SocialDiv>
                        <img src={instagramIcon} alt="" />
                        <Input
                           name="instagramLink"
                           width="357px"
                           height="35px"
                           placeholder="???????????????? ???????????? ???? ??????????????????"
                           onChange={allvalueGet}
                           value={information.instagramLink}
                        />
                     </SocialDiv>
                  </div>
                  <div>
                     <IconText>???????????????? </IconText>
                     <SocialDiv>
                        <img src={telegramIcon} alt="" />
                        <Input
                           name="telegramLink"
                           width="357px"
                           height="35px"
                           placeholder="???????????????? ???????????? ???? ???????????????? "
                           onChange={allvalueGet}
                           value={information.telegramLink}
                        />
                     </SocialDiv>
                  </div>
               </DivSocial>
               <Buttons>
                  <Button variant="outlined" onClick={onCancelPage}>
                     ????????????
                  </Button>
                  <ButtonSave
                     onClick={sendInformationHandle}
                     variant="outlined"
                  >
                     ??????????????????
                  </ButtonSave>
               </Buttons>
            </ProfileDiv>
         </ProfileContainer>
      </Div>
   )
}

export default ProfileInnerPage

const ButtonSave = styled(Button)`
   & .cOnipN.MuiButton-root.MuiButton-contained {
      background-color: '#8639B5';
   }
`

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
