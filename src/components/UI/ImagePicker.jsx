import React from 'react'
import styled from 'styled-components'

function ImagePicker({ addingImage, addText }) {
   return (
      <div>
         <Container>
            <img src={addingImage} alt="" />
            <p>{addText}</p>
         </Container>
      </div>
   )
}

export default ImagePicker

const Container = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   background: #f6f6f9;
   width: 217px;
   height: 217px;
   border: 1px solid #dcdce4;
   border-radius: 8px;
`
