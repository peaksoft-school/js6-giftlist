import React, { useState } from 'react'
import styled from '@emotion/styled'
import { createTheme, ThemeProvider } from '@mui/material'
import Menu from '@mui/material/Menu'
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state'

const SizePopUp = (props) => {
   const [text, setText] = useState([])
   const [styled, setStyled] = useState('')

   const [valueState, setValueState] = useState(false)

   const popupHandler = (e) => {
      setText(e.text)
      setValueState(true)
      props.getValue(e.text)
      setStyled(e.id)
   }
   return (
      <ThemeProvider
         theme={createTheme({
            palette: {
               primary: { main: '#8639B5' },
               action: {
                  hover: 'rgba(134, 57, 181, 0.2)',
               },
               '&.MuiTouchRipple-root': {
                  backgroundColor: '#8639B5',
               },
            },
            components: {
               MuiMenuItem: {
                  styleOverrides: {
                     root: {
                        '&.Mui-selected': {
                           backgroundColor: 'rgba(134, 57, 181, 0.4)',
                        },
                     },
                  },
               },
            },
         })}
      >
         <PopupState variant="popover" popupId="demo-popup-menu">
            {(popupState) => (
               <>
                  <MenuDiv variant="contained" {...bindTrigger(popupState)}>
                     <PopUpDiv>
                        <p>{valueState ? text : props.placeholder}</p>
                     </PopUpDiv>
                  </MenuDiv>
                  <Menu {...bindMenu(popupState)}>
                     <DivOptions
                        defaultValue={props.placeholder}
                        onClick={popupState.close}
                     >
                        {props.options.map((el) => {
                           if (el.id === styled) {
                              return (
                                 <ChooseBtn onClick={() => popupHandler(el)}>
                                    {el.text}
                                 </ChooseBtn>
                              )
                           }
                           return (
                              <Button onClick={() => popupHandler(el)}>
                                 {el.text}
                              </Button>
                           )
                        })}
                     </DivOptions>
                     <MenuItem onClick={popupState.close} />
                  </Menu>
               </>
            )}
         </PopupState>
      </ThemeProvider>
   )
}

export default SizePopUp

const MenuDiv = styled('div')`
   width: 396px;
   height: 40px;
   display: flex;
   align-items: center;

   p {
      margin-left: 6px;
   }
`
const MenuItem = styled('div')`
   display: flex;
   width: 120px;
   height: 44px;
   font-family: 'Inter', sans-serif;
   align-items: center;
   p {
      margin-left: 10px;
      font-family: 'Inter', sans-serif;
   }
`

const PopUpDiv = styled('div')`
   background: #ffffff;
   display: flex;
   border: 1px solid #bdbdbd;
   border-radius: 6px;
   width: 396px;
   height: 35px;
   padding-left: 4px;
   justify-content: space-between;
   :active {
      border: 1px solid #8639b5;
   }
   padding-right: 15px;
   P {
      color: #000000;
      margin-top: 8px;
   }
`
const DivOptions = styled('div')`
   display: flex;
   flex-wrap: wrap;
   width: 400px;
   padding: 4px;
   height: 108px;
`
const Button = styled('button')`
   width: 54px;
   height: 32px;
   gap: 10px;
   margin: 5px;
   background: #fbfbfb;
   border: 1px solid #d5d5d5;
   border-radius: 6px;
   text-align: center;
   :hover {
      background: #8639b5;
      color: white;
   }
   :active {
      color: white;
      background: #ab62d8;
   }
   :focus-within {
      color: #8639b5;
      border: 1px solid #8639b5;
   }
`
const ChooseBtn = styled('button')`
   width: 54px;
   height: 32px;
   gap: 10px;
   margin: 5px;
   background: #f3f3f3;
   border: 1px solid #8639b5;
   border-radius: 6px;
   color: #8639b5;
   text-align: center;
   :hover {
      background: #8639b5;
      color: white;
   }
   :active {
      color: white;
      background: #ab62d8;
   }
   :focus-within {
      color: #8639b5;
      border: 1px solid #8639b5;
   }
`
