import React from 'react'
import styled from 'styled-components'
import EditIcon from '../../assets/Images/Vector (1).svg'
import DeleteIcon from '../../assets/Images/Vector (2).svg'

const DeleteEdit = () => {
   return (
      <div>
         <Ul>
            <Li>
               <Icons src={EditIcon} alt="" /> Редактировать
            </Li>
            <Li>
               <Icons src={DeleteIcon} alt="" /> Удалить
            </Li>
         </Ul>
      </div>
   )
}

export default DeleteEdit

const Li = styled.li`
   list-style: none;
   font-family: 'Inter';
   font-style: normal;
   font-weight: 400;
   font-size: 14px;
   line-height: 24px;
`
const Icons = styled.img`
   margin-right: 11px;
   margin-left: 15px;
`

const Ul = styled.ul`
   width: 165px;
   height: 96px;
   display: flex;
   justify-content: space-evenly;
   align-items: flex-start;
   flex-direction: column;
   background-color: #ffffff;
   box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.16);
`
