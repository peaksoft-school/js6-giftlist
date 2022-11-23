import React, { useState } from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import Input from '../components/UI/Inputs'
import ImagePicker from '../components/UI/ImagePicker'
import Button from '../components/UI/Button'
import TextArea from '../components/UI/TextArea'
import BreadCrumbs from '../components/UI/BreadCrumbs'
import SelectCharity from '../components/UI/charity/SelectCharity'
import { postCharity } from '../store/slices/charityActions'
import { showError } from '../utils/helpers/helpers'

function CharityInnerPage() {
   const charity = useSelector((state) => state.charity)
   console.log(charity)
   const dispatch = useDispatch()
   const navigate = useNavigate()
   const data = [
      {
         name: 'электроника',
         id: '1',
      },
      {
         name: 'одежда',
         id: '2',
      },
      {
         name: 'школа',
         id: '3',
      },
      {
         name: 'дом и сад',
         id: '4',
      },
      {
         name: 'обувь',
         id: '5',
      },
      {
         category: 'транспорт',
         id: '6',
      },
   ]
   const condition = [
      {
         name: 'Б/У',
         id: '1',
      },
      {
         name: 'Новый',
         id: '2',
      },
   ]
   const [values, setValues] = useState({
      name: '',
      condition: '',
      category: '',
      subCategory: '',
      description: '',
   })

   const [image, setImage] = useState(null)
   const sendingData = () => {
      const formIsEmpty = Object.values({ ...values, image }).some((v) => !v)
      if (formIsEmpty) {
         return showError('Заполните все поля')
      }
      dispatch(
         postCharity({
            image,
            name: values.name,
            condition: values.condition,
            category: values.category,
            subCategory: values.subCategory,
            description: values.description,
         })
      )
      return navigate('/user/charity')
   }

   const onGiftNameHandler = (e) =>
      setValues({ ...values, name: e.target.value })
   const onConditionHandler = (value) =>
      setValues({ ...values, condition: value })
   const textareaChangeHandler = (e) => {
      setValues({ ...values, description: e.target.value })
   }
   const getSubCategory = (value) => {
      setValues({ ...values, subCategory: value })
   }

   const getOptionValue = (id, date) => {
      setValues({ ...values, date })
   }

   const navigateToWishList = () => navigate('/user/wishlist')
   const rolePaths = {
      charity: 'Благотворительность',
      fdsadfasdfsa: 'sdadfs',
   }
   return (
      <Div>
         <ToastContainer />
         <BreadCrumbsContainer>
            <BreadCrumbs translate={rolePaths} />
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
                           value={values.name}
                           width="396px"
                        />
                     </InputDistance>
                     <InputDistance>
                        <Label>Состояние</Label>
                        <SelectCharity
                           width="396px"
                           placeholder="Укажите состояние"
                           setValue={onConditionHandler}
                           value={values.condition}
                           options={condition}
                           getOptionValue={getOptionValue}
                        />
                     </InputDistance>
                  </InputInner>
                  <InputInner>
                     <InputDistance>
                        <Label>Категория</Label>
                        <SelectCharity
                           value={values.category}
                           setValue={(value) =>
                              setValues({ ...values, category: value })
                           }
                           placeholder="Выберите праздник"
                           getOptionValue={getOptionValue}
                           options={data}
                        />
                     </InputDistance>
                     <InputDistance>
                        <Label>Подкатегория</Label>
                        <SelectCharity
                           placeholder="Выберите подкатегорию"
                           setValue={getSubCategory}
                           value={values.subCategory}
                           getOptionValue={getOptionValue}
                           width="396px"
                           options={
                              values?.category === 'электроника'
                                 ? [
                                      {
                                         name: 'телефон',
                                         id: '1',
                                      },
                                      {
                                         name: 'dfsadf',
                                         id: '2',
                                      },
                                      {
                                         name: 'fdasfdsa',
                                         id: '3',
                                      },
                                   ]
                                 : []
                           }
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
