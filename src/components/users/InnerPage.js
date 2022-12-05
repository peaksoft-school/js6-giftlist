import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import Input from '../UI/Inputs'
import ImagePicker from '../UI/ImagePicker'
import Button from '../UI/Button'
import TextArea from '../UI/TextArea'
import BreadCrumbs from '../UI/BreadCrumbs'
import SelectCharity from '../UI/charity/SelectCharity'
import { getCharityById, putCharity } from '../../store/slices/charityActions'
import { data, filteredArray, condition } from '../../utils/constants/constants'

function InnerPage() {
   const dispatch = useDispatch()
   const { id } = useParams()
   const navigate = useNavigate()

   const [values, setValues] = useState({
      name: '',
      condition: '',
      category: '',
      subCategory: '',
      description: '',
   })

   const [image, setImage] = useState(null)
   const onSaveTheChange = () => {
      dispatch(
         putCharity({
            id,
            body: {
               image,
               name: values.name,
               condition: values.condition,
               category: values.category,
               subCategory: values.subCategory,
               description: values.description,
            },
         })
      )

      return navigate(-1)
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
   const getValueCategory = (value) => {
      setValues({ ...values, category: value })
   }

   const getOptionValue = (date) => {
      setValues({ ...values, date })
   }

   const navigateToWishList = () => navigate('/user/charity')
   const rolePaths = {
      charity: 'Благотворительность',
      charities: 'ДОбавить подарок',
   }
   const subCats =
      filteredArray.find((cat) => cat.name === values.category)?.subCategory ||
      []

   useEffect(() => {
      dispatch(getCharityById(id))
         .unwrap()
         .then((result) => {
            setValues({
               ...values,
               name: result.name,
               condition: result.condition,
               category: result.category,
               subCategory: result.subCategory,
               description: result.description,
            })
            setImage(result.image)
         })
   }, [])

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
                           setValue={getValueCategory}
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
                           disabled={!values.category}
                           width="396px"
                           options={subCats.map((value) => ({ name: value }))}
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
                     <ButtonAdd onClick={onSaveTheChange}>Сохранить</ButtonAdd>
                  </ButtonContainer>
               </BottomPart>
            </InnerContainer>
         </WrapperInner>
      </Div>
   )
}
export default InnerPage

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
