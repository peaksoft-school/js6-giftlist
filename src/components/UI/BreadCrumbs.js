import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { Breadcrumbs, Typography, Link, styled } from '@mui/material'

function BreadCrumbs({ rolePaths = [] }) {
   const location = useLocation()
   const navigate = useNavigate()

   const pathnames = location.pathname.split('/').filter((x) => x)
   console.log(pathnames)
   const bread =
      rolePaths.filter((item) => pathnames.includes(item.path.split('/')[1])) ||
      []
   console.log(bread, 'breadd')
   const lastPath = `/${pathnames.pop()}`

   return (
      <LayoutBreadcrumbs>
         {bread.length !== 0 &&
            bread.map((item) => {
               return item.path === lastPath ? (
                  <Title key={item.pathName}>{item.pathName}</Title>
               ) : (
                  <LinkStyle
                     key={item.pathName}
                     onClick={() => navigate(item.path)}
                  >
                     {item.pathName}
                  </LinkStyle>
               )
            })}
      </LayoutBreadcrumbs>
   )
}

export default BreadCrumbs

const LayoutBreadcrumbs = styled(Breadcrumbs)`
   display: flex;
   align-items: center;
   & .css-4pdmu4-MuiBreadcrumbs-ol {
      display: flex;
      align-items: center;
      line-height: 17px;
      height: 18px;
   }
   & .css-1wuw8dw-MuiBreadcrumbs-separator {
      margin-left: 6px;
      margin-right: 6px;
      font-family: 'Open Sans';
      font-style: normal;
      font-weight: 600;
      color: black;
      font-size: 20px;
      margin-top: 0;
      margin-bottom: 0;
   }
`
const Title = styled(Typography)`
   font-family: 'Inter';
   font-style: normal;
   font-weight: 500;
   line-height: 17px;
   color: #000000;
   font-size: ${(props) => props.fontSize || '14px'};
   line-height: 17px;
`
const LinkStyle = styled(Link)`
   font-family: 'Inter';
   font-style: normal;
   font-weight: 500;
   line-height: 17px;
   font-size: ${(props) => props.fontSize || '14px'};
   text-decoration: none;
   cursor: pointer;
   color: ${(props) => props.colorlink || '#b4b4b4'};
`
