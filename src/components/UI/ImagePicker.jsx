import { useDropzone } from 'react-dropzone'
import styled from 'styled-components'
import { useState } from 'react'
import image from '../../assets/icons/imagePicker/addingImage.svg'

export default function ImagePicker({ onGetImage }) {
   const [file, setFile] = useState(null)
   const onDrop = (file) => {
      setFile(
         Object.assign(file[0], {
            preview: URL.createObjectURL(file[0]),
         })
      )
      onGetImage(file[0])
   }
   const { getRootProps, getInputProps } = useDropzone({
      accept: 'image/jpeg,image/png,image/gif',
      maxFiles: 1,
      onDrop,
   })
   return (
      <Container>
         {file ? (
            <ImageWrapper>
               <SizedImage src={file.preview} alt="preview" />
            </ImageWrapper>
         ) : (
            <DropContainer {...getRootProps()}>
               <img src={image} alt="not found" />
               <input {...getInputProps()} />
               <Text>Нажмите для добавления фотографии</Text>
            </DropContainer>
         )}
      </Container>
   )
}

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
const SizedImage = styled.img`
   width: 100%;
   height: 100%;
   object-fit: cover;
`
