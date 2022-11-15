import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import styled from 'styled-components'
import { ReactComponent as Plus } from '../../assets/svg/plus.svg'
import Button from '../UI/Button'
import WishCard from '../UI/card/WishCard'
import WishModal from './WishModal'
import board from '../../assets/svg/viewIcon.svg'
import listIcon from '../../assets/svg/listIcons.svg'
import IconButton from '../UI/IconButton'
import notIcon from '../../assets/svg/notFoundIcon.svg'

function WishListPage() {
   const wish = useSelector((state) => state.wishGift.wish)
   console.log(wish)
   const navigate = useNavigate()
   // const [params, setParams] = useSearchParams()

   // const { modal } = Object.fromEntries(params)
   // console.log(modal)

   //    const dispatch = useDispatch()

   const openModalForAddition = () => {
      navigate(`add`)
   }

   //    useEffect(() => {
   //       dispatch(getHoliday())
   //    }, [dispatch])

   //    const openDeleteModal = (id) => dispatch(deleteHoliday(id))

   //    const openEdditModal = (id) => setParams({ modal: 'EDDIT-HOLIDAY', id })

   //    const onCloseModalForAddition = () => setParams({})

   return (
      <Container>
         <ToastContainer />
         <Title>Список желаний</Title>
         {wish.length ? (
            <TopPart>
               <TopPartBtnContainer>
                  <IconWrapper>
                     <BtnBorder>
                        <IconButton image={board} />
                     </BtnBorder>
                     <BtnBorder>
                        <IconButton image={listIcon} />
                     </BtnBorder>
                  </IconWrapper>
                  <BtnAdded onClick={openModalForAddition}>
                     <Plus fill="#currentcolor" /> Добавить желание
                  </BtnAdded>
               </TopPartBtnContainer>
            </TopPart>
         ) : (
            ''
         )}

         <CardContainer>
            {wish.length ? (
               wish?.map((item) => (
                  <WishCard
                     src={item.image}
                     key={item.id}
                     title={item.name}
                     date={item.dateOfHoliday}
                     id={item.id}
                     //  openModalDelete={openDeleteModal}
                     //  openEdditModal={openEdditModal}
                  />
               ))
            ) : (
               <WrapperNotGift>
                  <NotFoundHolidays>
                     <img src={notIcon} alt="notImage" />
                     <h4>Вы пока не добавили желание!</h4>
                  </NotFoundHolidays>
                  <BtnWrapper>
                     <BtnAdded onClick={openModalForAddition}>
                        {' '}
                        <Plus fill="#currentcolor" /> Добавить желание
                     </BtnAdded>
                  </BtnWrapper>
               </WrapperNotGift>
            )}
            <WishModal />
         </CardContainer>
      </Container>
   )
}

export default WishListPage

const Container = styled('div')`
   height: 100vh;
   padding: 90px 40px 0 314px;
   background: rgba(247, 248, 250, 1);
   width: 100%;
`

const WrapperNotGift = styled('div')`
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   width: 100%;
   gap: 44px;
`
const BtnWrapper = styled('div')`
   padding-left: 48px;
`
const BtnBorder = styled('div')`
   border: 1px solid #ebeaed;
   filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
   border-radius: 4px 0px 0px 4px;
   height: 39px;
   width: 41px;
   display: flex;
   justify-content: center;
`
const TopPart = styled('div')`
   display: flex;
   justify-content: space-between;
   margin-top: 30px;
   margin-bottom: 24px;
`
const NotFoundHolidays = styled('div')`
   font-weight: bold;
   font-size: 30px;
   display: flex;
   flex-direction: column;
   gap: 30px;
   h4 {
      font-family: 'Inter';
      font-size: 16px;
      font-weight: 400;
      line-height: 19px;
      letter-spacing: 0.20000000298023224px;
      text-align: center;
      color: black;
   }
`
const CardContainer = styled('div')`
   display: flex;
   flex-wrap: wrap;
   gap: 36px;
   justify-content: start;
`
const TopPartBtnContainer = styled('div')`
   background-color: #fbfafc;
   display: flex;
   gap: 16px;
`
const IconWrapper = styled('div')`
   display: flex;
`
const Title = styled('h4')`
   font-family: 'Inter';
   font-style: normal;
   font-weight: 500;
   font-size: 20px;
   line-height: 24px;
   display: flex;
   align-items: center;
   letter-spacing: 0.2px;
   padding-top: 27px;
`

const BtnAdded = styled(Button)`
   &.MuiButtonBase-root {
      border: 1px solid rgba(141, 148, 158, 1);
   }
   &.cOnipN.MuiButton-root.MuiButton-contained {
      background: rgba(134, 57, 181, 1);
      width: 232px;
      color: #ffffff;
      margin-right: 40px;
   }
`
