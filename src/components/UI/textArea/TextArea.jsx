import * as React from 'react'
import styled from 'styled-components'
import TextareaAutosize from '@mui/material/TextareaAutosize'

function Textarea({ onchange, value, inputText }) {
   return (
      <TextStyle value={value} onChange={onchange} placeholder={inputText} />
   )
}

export default Textarea

const TextStyle = styled(TextareaAutosize)`
   width: 808px;
   min-height: 111px;
   border: 1px solid #bdbdbd;
   border-radius: 6px;
   outline: none;
   font-family: 'Inter';
   font-style: normal;
   font-weight: 300;
   font-size: 16px;
   line-height: 19px;
   color: #8d949e;
`
