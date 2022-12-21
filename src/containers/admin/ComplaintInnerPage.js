import styled from '@emotion/styled'
import Avatar from '@mui/material/Avatar'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

import BreadCrumbs from '../../components/UI/BreadCrumbs'
import Button from '../../components/UI/Button'
import {
   blockedCharity,
   deleteCharity,
   getComplaintsById,
   unBlockedCharity,
} from '../../store/slices/complaints/complaints'

const ComplaintInnerPage = () => {
   const dispatch = useDispatch()
   const { id } = useParams()
   const { complaints } = useSelector((state) => state.complaints)

   const blockedCharityHandler = (wishId) => {
      dispatch(blockedCharity({ wishId })).unwrap()
   }
   const unBlockedHandler = (wishId) => {
      dispatch(unBlockedCharity({ wishId })).unwrap()
   }
   const [data, setData] = useState({
      complainerId: '',
      complainerPhoto: '',
      complainerFirstName: '',
      complainerLastName: '',
      createdAt: '',
      firstName: '',
      holidayName: '',
      id: '',
      lastName: '',
      reason: '',
      userId: '',
      userPhoneNumber: '',
      userPhoto: '',
      wishName: '',
      wishPhoto: '',
      isBLock: '',
      wishId: '',
   })
   const setDataHandler = (result) => {
      console.log(result, 'resultsss')
      setData({
         ...data,
         complainerId: result.complainerId,
         complainerPhoto: result.complainerPhoto,
         complainerFirstName: result.complainerFirstName,
         complainerLastName: result.complainerLastName,
         createdAt: result.createdAt,
         firstName: result.firstName,
         holidayName: result.holidayName,
         id: result.id,
         lastName: result.lastName,
         reason: result.reason,
         userId: result.userId,
         userPhoneNumber: result.userPhoneNumber,
         userPhoto: result.userPhoto,
         wishName: result.wishName,
         wishPhoto: result.wishPhoto,
         isBLock: result.isBLock,
         wishId: result.wishId,
      })
   }

   useEffect(() => {
      dispatch(getComplaintsById(id))
         .unwrap()
         .then((result) => {
            setDataHandler(result)
         })
   }, [id])

   const deleteMyCharity = (wishId) => {
      dispatch(deleteCharity({ wishId })).unwrap()
      navigate('/admin/complaints')
   }
   const deleteHandler = (wishId) => {
      return (
         <Button
            variant="transparent"
            style={{ color: '#8D949E' }}
            onClick={() => deleteMyCharity(wishId)}
         >
            Удалить
         </Button>
      )
   }
   const isBlockHandler = (wishId) => {
      if (complaints.isBLock === false) {
         return (
            <Button
               variant="outlined"
               onClick={() => blockedCharityHandler(wishId)}
            >
               Блокировать
            </Button>
         )
      }
      if (complaints.isBLock === true) {
         return (
            <Button onClick={() => unBlockedHandler(wishId)} variant="outlined">
               Разблокировать
            </Button>
         )
      }
      return null
   }

   const path = [
      {
         name: 'Жалобы',
         to: '/admin/complaints',
      },
      {
         name: data.wishName,
      },
   ]

   const navigate = useNavigate()
   return (
      <Container>
         <ToastContainer />
         <BreadCrumbsDiv>
            <BreadCrumbs paths={path} />
         </BreadCrumbsDiv>
         <Div>
            <ImageInnerPage src={data?.wishPhoto} />
            <WrapperDiv>
               <User>
                  <StyledAvatar
                     src={data?.reservImage}
                     onClick={() => navigate(`/user/friends/${data.userId}`)}
                  />
                  <UserName>
                     {data.firstName} {data.lastName}
                  </UserName>
                  <Status>
                     {(data.status === 'WAIT' && 'В ожидании') ||
                        (data.status === 'RESERVED' ? (
                           <ReserveContainer>
                              <Avatar
                                 style={{ height: '23px', width: '25px' }}
                                 src={data?.reservoirImage}
                                 onClick={() =>
                                    navigate(`/user/friends/${data.reservId}`)
                                 }
                              />
                              Забронирован
                           </ReserveContainer>
                        ) : (
                           'Забронирован анонимно'
                        ))}
                  </Status>
                  <DivTopPart>
                     <DateGift>
                        <span>Название праздника:</span>
                        <NameGift>{data.holidayName}</NameGift>
                     </DateGift>

                     <DateGift>
                        <span>Дата праздника:</span>
                        <DateCondition>{data.createdAt}</DateCondition>
                     </DateGift>
                  </DivTopPart>
               </User>
               <Name>{data.wishName}</Name>
               <Description>{data.despcription || 'Нет описание'}</Description>
               <ButtonWrapper>
                  <WrapperNameGiftAndDate key={data?.complainerId}>
                     <StyledAvatar
                        src={data?.complainerPhoto}
                        alt={data?.complainerFirstName}
                     />
                     <UserComplainedName>
                        <span>{data?.complainerFirstName}</span>
                        <span>{data?.complainerLastName}</span>
                     </UserComplainedName>

                     <Reason>{data.reason}</Reason>
                  </WrapperNameGiftAndDate>
                  <WrapperButton>
                     {deleteHandler(complaints.wishId)}
                     {isBlockHandler(complaints.wishId)}
                  </WrapperButton>
               </ButtonWrapper>
            </WrapperDiv>
         </Div>
      </Container>
   )
}
export default ComplaintInnerPage

const UserComplainedName = styled('p')`
   margin-left: 10px;
   margin-top: -4px;
   font-family: 'Inter';
   font-style: normal;
   span {
      padding: 3px;
   }
`

const ImageInnerPage = styled('img')`
   width: 343px;
   height: 343px;
   object-fit: cover;
   border-radius: 8px;
`
const ReserveContainer = styled('div')`
   display: flex;
   align-items: center;
   gap: 10px;
`
const Name = styled('h4')`
   font-family: 'Inter';
   font-style: normal;
   font-weight: 500;
   font-size: 24px;
   line-height: 29px;
   text-decoration-line: underline;
   color: #3774d0;
   padding-bottom: 16px;
`

const Description = styled('div')`
   max-width: 670px;
   font-family: 'Inter';
   font-style: normal;
   font-weight: 400;
   font-size: 16px;
   line-height: 130%;

   color: #000000;
`
const BreadCrumbsDiv = styled.div`
   margin-top: 40px;
   margin-bottom: 30px;
   margin-left: 20px;
`
const Container = styled('div')`
   height: 100vh;
   padding: 90px 40px 0 314px;
   background: #f7f8fa;
   width: 100%;
   display: flex;
   flex-direction: column;
`
const WrapperDiv = styled('div')`
   padding-left: 20px;
`
const User = styled('div')`
   align-items: center;
   display: grid;
   grid-template-columns: 48px 450px 140px;
   margin-bottom: 14px;
   width: 93%;
   padding-top: 35px;
`
const StyledAvatar = styled(Avatar)`
   width: 36px;
   height: 36px;
   cursor: pointer;
`
const UserName = styled('h2')`
   box-sizing: border-box;
   margin: 0;

   font-family: 'Inter';
   font-style: normal;
   font-weight: 500;
   font-size: 16px;
   line-height: 19px;
   letter-spacing: 0.02em;

   /* black */

   color: #020202;
`
const Status = styled('div')`
   display: flex;
   justify-content: flex-end;
   color: #3774d0;
   font-family: 'Inter';
   font-weight: 400;
   font-size: 14px;
`
const WrapperNameGiftAndDate = styled('div')`
   display: flex;
   gap: 10px;
   align-items: center;
`

const Reason = styled('div')`
   display: flex;
   flex-direction: column;
   font-family: 'Inter';
   font-style: normal;
   font-weight: 400;
   font-size: 14px;
   line-height: 17px;
   /* identical to box height */

   letter-spacing: 0.02em;

   color: #fd5200;
   span {
      font-family: 'Inter';
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 19px;
      letter-spacing: 0.02em;

      /* black */

      color: #020202;
   }
`
const NameGift = styled('p')`
   font-family: 'Inter';
   font-style: normal;
   font-weight: 400;
   font-size: 16px;
   line-height: 130%;
   color: #0ba360;
`
const DateGift = styled('div')`
   display: flex;
   flex-direction: column;
   gap: 6px;
   span {
      font-family: 'Inter';
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 130%;
      /* or 18px */
      width: 150px;
      color: #5c5c5c;
   }
`

const DateCondition = styled('p')`
   font-family: 'Inter';
   font-weight: 400;
   font-size: 16px;
   color: #000000;
   line-height: 130%;
`
const DivTopPart = styled('div')`
   display: flex;
   gap: 65px;
   padding-top: 22px;
`

const ButtonWrapper = styled('div')`
   display: flex;
   justify-content: flex-end;
   gap: 100px;
   padding-top: 40px;
   padding-right: 0px;
   margin-right: 40px;
`

const WrapperButton = styled('div')`
   display: flex;
   gap: 42px;
   div {
      display: flex;
      align-items: center;
      gap: 10px;
      font-family: 'Inter';
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 19px;

      color: #000000;
   }
`

const Div = styled('div')`
   display: flex;
   margin-left: 0px;
   width: 100%;
   padding: 20px;
   background-color: #ffffff;
   height: 100vh;
   border-radius: 10px;
`
