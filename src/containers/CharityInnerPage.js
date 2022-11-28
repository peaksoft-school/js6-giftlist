import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import Input from '../components/UI/Inputs'
import ImagePicker from '../components/UI/ImagePicker'
import Button from '../components/UI/Button'
import { getHolidayToSelect, postGift } from '../store/slices/WishlistActions'
import TextArea from '../components/UI/TextArea'
import { showError } from '../utils/helpers/helpers'
import BreadCrumbs from '../components/UI/BreadCrumbs'
import SelectCharity from '../components/UI/charity/SelectCharity'

function CharityInnerPage() {
   const dispatch = useDispatch()
   const navigate = useNavigate()

   const [value, setValue] = useState('')

   const [values, setValues] = useState({
      giftName: '',
      giftLink: '',
      date: '',
      description: '',
   })

   const [holidayId, setHolidayId] = useState('')

   const [image, setImage] = useState(null)

   const wish = useSelector((state) => state.wishGift)

   useEffect(() => {
      dispatch(getHolidayToSelect())
   }, [])

   const sendingData = () => {
      const formIsEmpty = Object.values({ ...values, image }).some((v) => !v)
      if (formIsEmpty) {
         return showError('Заполните все поля')
      }
      dispatch(
         postGift({
            dateOfHoliday: values.date,
            linkToGift: values.giftLink,
            wishName: values.giftName,
            holidayId,
            description: values.description,
            image,
         })
      )
      return navigate('/user/wishlist')
   }

   const onGiftNameHandler = (e) =>
      setValues({ ...values, giftName: e.target.value })
   const onGiftLinkHandler = (e) =>
      setValues({ ...values, giftLink: e.target.value })
   const textareaChangeHandler = (e) => {
      setValues({ ...values, description: e.target.value })
   }
   const onGiftDateHandler = (date) => setValues({ ...values, date })

   const getOptionValue = (id, date) => {
      setHolidayId(id)
      setValues({ ...values, date })
   }

   const navigateToWishList = () => navigate('/user/wishlist')
   const rolePaths = [
      {
         path: '/user/charity',
         pathName: 'Благотворительность/Добавить подарок',
      },
   ]

   return (
      <Div>
         <ToastContainer />
         <BreadCrumbsContainer>
            <BreadCrumbs rolePaths={rolePaths} />
         </BreadCrumbsContainer>
         <WrapperInner>
            <InnerContainer>
               <TopPart>
                  <ImagePicker setImage={setImage} image={image} />
               </TopPart>
               <BottomPart>
                  <TitleGift>Добавление вещи</TitleGift>
                  <InputInner>
                     <InputDistance>
                        <Label>Название подарка</Label>
                        <Input
                           placeholder="Введите название подарка"
                           onChange={onGiftNameHandler}
                           value={values.giftName}
                           width="396px"
                        />
                     </InputDistance>
                     <InputDistance>
                        <Label>Состояние</Label>
                        <SelectCharity
                           width="396px"
                           placeholder="Вставьте ссылку на подарок"
                           onChange={onGiftLinkHandler}
                           value={values.giftLink}
                        />
                     </InputDistance>
                  </InputInner>
                  <InputInner>
                     <InputDistance>
                        <Label>Категория</Label>
                        <SelectCharity
                           value={value}
                           setValue={setValue}
                           placeholder="Выберите праздник"
                           options={wish.selectToGift}
                           getOptionValue={getOptionValue}
                           childrenComponent={
                              <MenuButton>
                                 <Plus>+</Plus> Создать новый праздник
                              </MenuButton>
                           }
                        />
                     </InputDistance>
                     <InputDistance>
                        <Label>Подкатегория</Label>
                        <SelectCharity
                           placeholder="Выберите подкатегорию"
                           onChange={onGiftDateHandler}
                           value={values.date}
                           width="396px"
                           disabled={!value}
                        />
                     </InputDistance>
                  </InputInner>
                  <TextAreaContainer>
                     <TextArea
                        label="Описание подарка"
                        placeholder="Введите описание подарка"
                        onChange={textareaChangeHandler}
                        value={values.description}
                     />
                  </TextAreaContainer>
                  <ButtonContainer>
                     <ButtonCancel onClick={navigateToWishList}>
                        Отмена
                     </ButtonCancel>
                     <ButtonAdd onClick={sendingData}>Добавить</ButtonAdd>
                  </ButtonContainer>
               </BottomPart>
            </InnerContainer>
         </WrapperInner>
      </Div>
   )
}
export default CharityInnerPage

const WrapperInner = styled('div')`
   background-color: #ffffff;
   border-radius: 10px;
   padding-top: 15px;
   width: 100%;
   height: 100vh;
`
const Div = styled.div`
   height: 100vh;
   padding: 90px 40px 0 314px;
   background: #f7f8fa;
   width: 100%;
   display: flex;
   flex-direction: column;
`
const BreadCrumbsContainer = styled('h4')`
   padding-top: 30px;
   padding-bottom: 30px;
   font-family: 'Inter';
   font-size: 24px;
   font-weight: 500;
   line-height: 32px;
   letter-spacing: 0em;
`
const MenuButton = styled('div')`
   color: rgba(134, 57, 181, 1);
   font-family: 'Inter';
   font-style: normal;
   font-weight: 400;
   font-size: 15px;
   line-height: 24px;
   padding-left: 18px;
   width: 240px;
   padding-top: 6px;
   display: flex;
   gap: 8px;
   cursor: pointer;
`
const TextAreaContainer = styled('div')`
   display: flex;
   flex-direction: column;
   margin-top: 20px;
`
const TitleGift = styled('h4')`
   font-family: 'Inter';
   font-size: 18px;
   font-weight: 500;
   line-height: 24px;
   letter-spacing: 0.20000000298023224px;
   text-align: left;
   color: black;
`
const Plus = styled('span')`
   font-size: 25px;
   margin-top: -1px;
`
const InputInner = styled('div')`
   display: flex;
   margin-top: 16px;
   gap: 16px;
`
const BottomPart = styled('div')`
   padding-left: 21px;
   display: flex;
   flex-direction: column;
`
const InnerContainer = styled('div')`
   display: flex;
`
const ButtonContainer = styled('div')`
   display: flex;
   justify-content: right;
   padding-top: 56px;
   gap: 16px;
   font-family: 'Inter';
   font-size: 14px;
   font-weight: 500;
   line-height: 17px;
   letter-spacing: 0em;
   text-align: left;
`

const TopPart = styled('div')`
   display: flex;
   flex-direction: column;
   padding-left: 18px;
`
const Label = styled('label')`
   font-family: 'Inter';
   font-size: 12px;
   font-weight: 400;
   line-height: 15px;
   letter-spacing: 0em;
   text-align: left;
   padding-bottom: 3px;
`

const InputDistance = styled('div')`
   display: flex;
   gap: 6px;
   flex-direction: column;
   width: 100%;
`
const ButtonAdd = styled(Button)`
   &.cOnipN.MuiButton-root.MuiButton-contained {
      padding: 10px, 26px, 10px, 26px;
      background: rgba(134, 57, 181, 1);
      color: white;
   }
`
const ButtonCancel = styled(Button)`
   &.MuiButtonBase-root {
      background: #f1f1f1;
      border: 1px solid rgba(141, 148, 158, 1);
   }
   &.cOnipN.MuiButton-root.MuiButton-contained {
      padding: 10px, 26px, 10px, 26px;
      background: transparent;
      color: rgba(141, 148, 158, 1);
   }
`
