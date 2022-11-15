import React, { useState } from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { useSearchParams } from 'react-router-dom'
import Input from '../components/UI/Inputs'
import ImagePicker from '../components/UI/ImagePicker'
import Button from '../components/UI/Button'
import DataPicker from '../components/UI/DataPicker'
import { postGift } from '../store/slices/WishlistActions'
import Textarea from '../components/UI/Textarea'
import UiSelect from '../components/UI/UiSelect'
import { ReactComponent as Plus } from '../assets/svg/plus.svg'

function WishInnerPage({ onClose }) {
   const [giftName, setGiftName] = useState('')
   const [giftLink, setGiftLink] = useState('')

   const [date, setDate] = useState(null)

   const [params] = useSearchParams()

   const { modal } = Object.fromEntries(params)

   const [image, setImage] = useState(null)

   const dispatch = useDispatch()

   const sendingData = () => {
      dispatch(postGift(modal))
   }

   const onGiftNameHandler = (e) => setGiftName(e.target.value)
   const onGiftLinkHandler = (e) => setGiftLink(e.target.value)

   const onHolidayDateHandler = (dateHoliday) => setDate(dateHoliday)

   const options = ['fdsafdsa', 'fdsafdsafdsa']

   const getOptionValue = (e) => {
      console.log(e)
   }
   const getOptionLabel = (e) => {
      console.log(e)
   }
   return (
      <Div>
         <Title>Список желаний</Title>
         <InnerContainer>
            <TopPart>
               <ImagePicker setImage={setImage} image={image} />
            </TopPart>
            <BottomPart>
               <TitleGift>Добавление желаемого подарка</TitleGift>
               <InputInner>
                  <InputDistance>
                     <Label>Название подарка</Label>
                     <Input
                        placeholder="Введите название подарка"
                        onChange={onGiftNameHandler}
                        value={giftName}
                        width="396px"
                     />
                  </InputDistance>
                  <InputDistance>
                     <Label>Ссылка на подарок</Label>
                     <Input
                        width="396px"
                        placeholder="Вставьте ссылку на подарок"
                        onChange={onGiftLinkHandler}
                        value={giftLink}
                     />
                  </InputDistance>
               </InputInner>
               <InputInner>
                  <InputDistance>
                     <Label>Праздник</Label>
                     <UiSelect
                        placeholder="Выберите праздник"
                        options={options}
                        getOptionValue={getOptionValue}
                        getOptionLabel={getOptionLabel}
                        addOption={
                           <MenuButton>
                              <Plus /> Создать новый праздник
                           </MenuButton>
                        }
                     />
                  </InputDistance>
                  <InputDistance>
                     <Label>Дата праздника</Label>
                     <DataPicker
                        placeholder="Укажите дату праздника"
                        onChange={onHolidayDateHandler}
                        value={date}
                        width="396px"
                     />
                  </InputDistance>
               </InputInner>
               <TextArea>
                  <Textarea
                     label="Описание подарка"
                     placeholder="Введите описание подарка"
                  />
               </TextArea>
               <ButtonContainer>
                  <ButtonCancel onClick={onClose}>Отмена</ButtonCancel>
                  <ButtonAdd onClick={sendingData}>Добавить</ButtonAdd>
               </ButtonContainer>
            </BottomPart>
         </InnerContainer>
      </Div>
   )
}

export default WishInnerPage
const Div = styled.div`
   height: 100vh;
   padding: 90px 40px 0 314px;
   background: rgba(255, 255, 255, 1);
   width: 100%;
   display: flex;
   flex-direction: column;
   flex-wrap: wrap;
`
const Title = styled('h4')`
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
`
const TextArea = styled('div')`
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
