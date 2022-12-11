import { useDropzone } from 'react-dropzone'
import styled from 'styled-components'
import { useState } from 'react'
import notFoundImage from '../../assets/icons/imagePicker/addingImage.svg'

export default function ImagePicker({ setImage, image, width, heigth }) {
   const [file, setFile] = useState(null)
   const onDrop = (file) => {
      setFile(
         Object.assign(file[0], {
            preview: URL.createObjectURL(file[0]),
         })
      )
      setImage(file[0])
   }
   const { getRootProps, getInputProps, open } = useDropzone({
      accept: 'image/jpeg,image/png,image/gif/svg',
      maxFiles: 1,
      onDrop,
   })
   return (
      <Container width={width} heigth={heigth}>
         {file || image ? (
            <ImageWrapper onClick={open}>
               <SizedImage src={file?.preview || image} alt="preview" />
            </ImageWrapper>
         ) : (
            <DropContainer {...getRootProps()}>
               <img src={notFoundImage} alt="not found" />
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
   width: ${(p) => p.width || '217px'};
   height: ${(p) => p.heigth || '217px'};
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
