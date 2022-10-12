import * as React from 'react'
import TextareaAutosize from '@mui/material/TextareaAutosize'

function EmptyTextarea({ inputText }) {
   return (
      <TextareaAutosize
         aria-label="empty textarea"
         placeholder={inputText}
         style={{
            width: 808,
            height: 111,
            border: '1px solid #BDBDBD',
            borderRadius: '6px',
            color: '#8D949E',
            fontSize: '16px',
            fontFamily: 'inter',
            outline: 'none',
            padding: '16px 8px',
         }}
      />
   )
}

export default EmptyTextarea
