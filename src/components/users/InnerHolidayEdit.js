import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams, useSearchParams } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import {
   getHolidayToSelect,
   getWishById,
   putWishGift,
} from '../../store/slices/WishlistActions'
import ImagePicker from '../UI/ImagePicker'
import Input from '../UI/Inputs'
import Button from '../UI/Button'
import TextArea from '../UI/TextArea'
import UiSelect from '../UI/UiSelect'
import DataPicker from '../UI/DataPicker'
import HolidayModal from './HolidayModal'

function InnerHolidayEdit() {
   const dispatch = useDispatch()

   const [params, setParams] = useSearchParams()

   const [valueSelect, setValueSelect] = useState('')

   const { modal } = Object.fromEntries(params)

   const wish = useSelector((state) => state.wishGift)

   const { id } = useParams()

   const navigate = useNavigate()

   const [holidayId, setHolidayId] = useState('')

   const [data, setData] = useState({
      dateOfHoliday: '',
      linkToGift: '',
      wishName: '',
      description: '',
   })

   const [image, setImage] = useState(null)

   useEffect(() => {
      dispatch(getWishById(id))
         .unwrap()
         .then((item) => {
            setImage(item.image)
            setData({
               ...data,
               dateOfHoliday: item.holiday.localDate,
               wishName: item.wishName,
               linkToGift: item.linkToGift,
               description: item.description,
            })
            setValueSelect(item.holiday.name)
         })
   }, [])

   useEffect(() => {
      dispatch(getHolidayToSelect())
   }, [])
   const sendingData = () => {
      dispatch(
         putWishGift({
            id,
            body: {
               dateOfHoliday: data.dateOfHoliday,
               linkToGift: data.linkToGift,
               wishName: data.wishName,
               holidayId,
               description: data.description,
               image,
            },
         })
      )
      navigate('/user/holidays')
   }

   const onGetValueDescription = (e) => {
      setData({ ...data, description: e.target.value })
   }
   const onGiftNameHandler = (e) =>
      setData({ ...data, wishName: e.target.value })
   const onGiftLinkHandler = (e) =>
      setData({ ...data, linkToGift: e.target.value })

   const onGiftDateHandler = (date) => setData({ ...data, dateOfHoliday: date })

   const getOptionValue = (id, value) => {
      setHolidayId(id)
      setData({ ...data, dateOfHoliday: value })
   }

   const openModalAddedGift = () => setParams({ modal: 'CREATE-HOLIDAY' })

   const onCloseModal = () => setParams({})

   const navigateToWishPage = () => navigate('/user/holidays')
   return (
      <Div>
         <ToastContainer />
         <Title>Список желаний</Title>
         <WrapperInner>
            <InnerContainer>
               <TopPart>
                  <ImagePicker setImage={setImage} image={image} />
               </TopPart>
               <BottomPart>
                  <TitleGift>Редактировать</TitleGift>
                  <InputInner>
                     <InputDistance>
                        <Label>Название подарка</Label>
                        <Input
                           placeholder="Введите название подарка"
                           onChange={onGiftNameHandler}
                           value={data.wishName}
                           width="396px"
                        />
                     </InputDistance>
                     <InputDistance>
                        <Label>Ссылка на подарок</Label>
                        <Input
                           width="396px"
                           placeholder="Вставьте ссылку на подарок"
                           onChange={onGiftLinkHandler}
                           value={data.linkToGift}
                        />
                     </InputDistance>
                  </InputInner>
                  <InputInner>
                     <InputDistance>
                        <Label>Праздник</Label>
                        <UiSelect
                           value={valueSelect}
                           setValue={setValueSelect}
                           placeholder="Выберите праздник"
                           options={wish.selectToGift}
                           getOptionValue={getOptionValue}
                           childrenComponent={
                              <MenuButton onClick={openModalAddedGift}>
                                 <Plus>+</Plus> Создать новый праздник
                              </MenuButton>
                           }
                        />
                     </InputDistance>
                     <InputDistance>
                        <Label>Дата праздника</Label>
                        <DataPicker
                           placeholder="Укажите дату праздника"
                           onChange={onGiftDateHandler}
                           value={data.dateOfHoliday}
                           width="396px"
                        />
                     </InputDistance>
                  </InputInner>
                  <TextAreaContainer>
                     <TextArea
                        value={data.description}
                        onChange={onGetValueDescription}
                        label="Описание подарка"
                        placeholder="Введите описание подарка"
                     />
                  </TextAreaContainer>
                  <ButtonContainer>
                     <ButtonCancel onClick={navigateToWishPage}>
                        Отмена
                     </ButtonCancel>
                     <ButtonAdd onClick={sendingData}>Сохранить</ButtonAdd>
                  </ButtonContainer>
               </BottomPart>
            </InnerContainer>
         </WrapperInner>
         <HolidayModal
            isOpen={modal === 'CREATE-HOLIDAY'}
            onClose={onCloseModal}
         />
      </Div>
   )
}
export default InnerHolidayEdit

const WrapperInner = styled('div')`
   background-color: #ffffff;
   border-radius: 10px;
   padding-top: 15px;
   height: 100vh;
   width: 100%;
`
const Div = styled.div`
   height: 100vh;
   padding: 90px 40px 0 314px;
   background: #f7f8fa;
   width: 100%;
   display: flex;
   flex-direction: column;
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
