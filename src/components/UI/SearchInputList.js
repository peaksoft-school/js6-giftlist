import { InputBase, IconButton, Paper, styled, Avatar } from '@mui/material'
import { ReactComponent as IconSearch } from '../../assets/svg/search.svg'

export default function SearchInputList({ options, onChange, value, onClick }) {
   const results = () => {
      if (options?.length > 0) {
         return options?.map((user) => {
            return (
               <ContentDiv
                  key={user.userId}
                  onClick={() => {
                     onClick(user.userId)
                  }}
               >
                  <StyledAvatar alt={user.fullName} src={user.image} />
                  <FullName>{user.fullName}</FullName>
               </ContentDiv>
            )
         })
      }
      return <span>Такого пользователя не существует</span>
   }

   return (
      <>
         <StyledDiv>
            <IconButton>
               <IconSearch />
            </IconButton>
            <MuiInputBase
               placeholder="Введите имя"
               value={value}
               onChange={onChange}
            />
         </StyledDiv>
         {value.trim().length >= 1 && (
            <ResultDiv>
               <StyledTitle>Результаты поиска</StyledTitle>
               <hr />
               <ContentTitle>{results()}</ContentTitle>
            </ResultDiv>
         )}
      </>
   )
}

const ResultDiv = styled('div')`
   background-color: white;
   border-radius: 8px;
   position: absolute;
   height: auto;
   top: 69px;
   width: 20%;
   z-index: 99;
`

const StyledDiv = styled(Paper)`
   box-sizing: border-box;
   display: flex;
   justify-content: flex-end;
   align-items: center;
   padding: 2px;
   gap: 18px;
   width: 100%;
   height: 40px;
   border: 1px solid #bdbdbd;
   border-radius: 8px;
`

const MuiInputBase = styled(InputBase)`
   width: 100%;
   height: 17px;
   font-style: normal;
   font-weight: 400;
   font-size: 14px;
   line-height: 17px;
   display: flex;
   align-items: center;
   letter-spacing: 0.02em;
   color: #8d949e;
   flex: auto;
`

const StyledTitle = styled('p')`
   font-family: 'Inter';
   font-style: normal;
   font-weight: 500;
   font-size: 18px;
   line-height: 22px;
   letter-spacing: 0.2px;
   color: #020202;
   margin: 16px 0px 16px 18px;
`

const FullName = styled('span')`
   padding: 5px;
   cursor: pointer;
   color: black;
   z-index: 99;
`

const ContentDiv = styled('div')`
   display: flex;
   justify-content: flex-start;
   align-items: center;
   margin: 15px;
   gap: 12px;
   border: 2px solid white;
`

const ContentTitle = styled('span')`
   height: 19px;
   font-family: 'inter';
   font-style: normal;
   font-weight: 500;
   font-size: 16px;
   line-height: 19px;
   letter-spacing: 0.2px;
   color: #020202;
`

const StyledAvatar = styled(Avatar)`
   width: 40px;
   height: 40px;
`
