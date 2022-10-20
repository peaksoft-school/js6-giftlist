import styled from 'styled-components'
import { useDropzone } from 'react-dropzone'
import { useState } from 'react'
import image from '../../assets/icons/imagePicker/addingImage.svg'

function ImagePicker({ seendingImage, openFile }) {
   const [files, setFiles] = useState(null)
   const onDrop = (acceptedFiles) => {
      setFiles(
         acceptedFiles.map((file) =>
            Object.assign(file, {
               preview: URL.createObjectURL(file),
            })
         )
      )
      seendingImage(acceptedFiles)
   }
   const { getRootProps, getInputProps } = useDropzone({
      accept: 'image/*',
      maxFiles: 1,
      onDrop,
   })
   return (
      <Container>
         {files ? (
            <ImageWrapper onClick={openFile}>
               <img
                  src={files[0].preview}
                  style={{
                     width: '100%',
                     height: '100%',
                     objectFit: 'cover',
                  }}
                  alt="preview"
               />
            </ImageWrapper>
         ) : (
            <DropContainer {...getRootProps()}>
               <ToAddImg src={image} alt="" />
               <form action="">
                  <input {...getInputProps()} />
               </form>
               <Text>Нажмите для добавления фотографии</Text>
            </DropContainer>
         )}
      </Container>
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
   position: relative;
   cursor: pointer;
`
const ImageWrapper = styled.div`
   width: 100%;
   height: 100%;
   display: flex;
   align-items: center;
   & > img {
      border-radius: 8px;
   }
`
const DropContainer = styled.div`
   position: absolute;
   width: 100%;
   height: 100%;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
`
const ToAddImg = styled.img``

const Text = styled.span`
   font-family: 'Inter';
   font-style: normal;
   font-weight: 400;
   font-size: 12px;
   line-height: 16px;
   color: #8e8ea9;
   margin-top: 16px;
   text-align: center;
`
