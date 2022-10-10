import styled from 'styled-components'
import { useDropzone } from 'react-dropzone'
import { useState } from 'react'
import image from '../../assets/icons/imagePicker/addingImage.svg'

function ImagePicker() {
   const [files, setFiles] = useState([])
   const [change, setChange] = useState(true)
   const { getRootProps, getInputProps } = useDropzone({
      accept: 'image/*',
      onDrop: (acceptedFiles) => {
         setFiles(
            acceptedFiles.map((file) =>
               Object.assign(file, {
                  preview: URL.createObjectURL(file),
               })
            )
         )
         setChange(false)
      },
   })

   const images = files.map((file) => (
      <div key={file.name}>
         <img src={file.preview} style={{ width: '217px' }} alt="preview" />
      </div>
   ))

   const handleChange = () => {
      setChange((prev) => !prev)
   }

   return (
      <Container onClick={handleChange} {...getRootProps()}>
         {change ? (
            <>
               <ToAddImg src={image} alt="" />
               <input {...getInputProps()} />
               <Text>Нажмите для добавления фотографии</Text>
            </>
         ) : (
            <div>{images}</div>
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
   cursor: pointer;
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
`
