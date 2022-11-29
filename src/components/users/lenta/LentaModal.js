import React from 'react'
import styled from 'styled-components'
import Modal from '../../UI/modals/Modal'
import RadioButton from '../../UI/radioButton/RadioButton'
import Button from '../../UI/Button'

function LentaModal() {
   return (
      <Modal>
         <TitleModal>Пожаловаться</TitleModal>
         <TitleQuestion>
            Почему вы хотите пожаловаться на эту публикацию?
         </TitleQuestion>
         <ModalContainer>
            <ContainerCheckbox>
               <RadioButton />
               Жестокость и шокирующий контент
            </ContainerCheckbox>
            <ContainerCheckbox>
               <RadioButton />
               Проявление ненависти
            </ContainerCheckbox>
            <ContainerCheckbox>
               <RadioButton />
               Нелегальные действия или регламентированные товары
            </ContainerCheckbox>
            <ContainerCheckbox>
               <RadioButton />
               Спам
            </ContainerCheckbox>
            <ContainerCheckbox>
               <RadioButton />
               Призывы к насилию, опасные действия
            </ContainerCheckbox>
            <ContainerCheckbox>
               <RadioButton />
               Сцены порнографического характера
            </ContainerCheckbox>
            <ContainerCheckbox>
               <RadioButton />
               Прочее
            </ContainerCheckbox>
            <ButtonWrapper>
               <BtnSend>Отмена</BtnSend>
               <Btn>Отправить</Btn>
            </ButtonWrapper>
         </ModalContainer>
      </Modal>
   )
}

export default LentaModal

const Btn = styled(Button)`
   &.cOnipN.MuiButton-root.MuiButton-contained {
      border-radius: 6px;
      color: white;
      border: transparent;
      padding: 16px, 0px, 16px, 0px;
      background-color: rgba(134, 57, 181, 1);
      width: 232px;
   }
`
const BtnSend = styled(Button)`
   &.cOnipN.MuiButton-root.MuiButton-contained {
      border-radius: 6px;
      color: #8d949e;
      border: 1px solid #8d949e;
      padding: 16px, 0px, 16px, 0px;
      background-color: rgb(252, 252, 253);
      width: 232px;
   }
`
const ContainerCheckbox = styled('div')`
   display: flex;
   align-items: center;
   font-family: 'Inter';
   font-size: 14px;
   font-weight: 400;
   line-height: 16px;
   letter-spacing: 0em;
   text-align: left;
`
const ButtonWrapper = styled('div')`
   display: flex;
   justify-content: center;
   gap: 10px;
   padding-top: 39px;
`
const ModalContainer = styled('div')`
   display: flex;
   flex-direction: column;
`
const TitleQuestion = styled('h4')`
   font-family: 'Inter';
   font-size: 14px;
   font-weight: 500;
   line-height: 16px;
   letter-spacing: 0em;
   padding-bottom: 20px;
`
const TitleModal = styled('h4')`
   font-family: 'Inter';
   font-size: 24px;
   font-weight: 500;
   line-height: 32px;
   letter-spacing: 0em;
   text-align: left;
   padding-bottom: 30px;
`
