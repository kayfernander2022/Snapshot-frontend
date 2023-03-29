import React, { useState, useRef} from "react";
import { PhotoPortfolio } from "../components/photos";
import Photos from "../models/photos";
import Form from 'react-bootstrap/Form';
import { useLoaderData } from "react-router-dom";
import { Button, InputGroup, Stack } from "react-bootstrap";
import Modal from 'react-bootstrap/Modal';
import { useAuthContext } from "../useAuthCtx";
import { createPhotoAction } from "../actions/photoActions";
import { IKContext, IKUpload } from "imagekitio-react";
import { imageKitAuthUrl } from '../urls';
import { UploadResponse } from "imagekit";

export interface IPhotosPageProps {
  
}
 

const PhotosPage: React.FunctionComponent<IPhotosPageProps> = () => {
 
  const {url, currentUser} = useAuthContext();
  const blankFormState = {imageUrl:'', imageName:'', caption:'', userId: currentUser?.id};
  const photos = useLoaderData() as Photos[];
  const [formData, setFormData] = useState<Photos>(blankFormState);
  const [currImg, setCurrImg] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [currPhotos, setCurrPhotos] = useState<Photos[]>(photos);
  const inputRefTest = useRef<HTMLInputElement>(null);
  const ikUploadRefTest = useRef(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    if(event.target.value){
      setFormData((formData) => ({...formData, [event.target.name]:event.target.value}))
    }
  }

  const handleSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if(currentUser)
    {
      formData.userId = currentUser.id;
      createPhotoAction({url, photo: formData}).then((photo: Photos | undefined) => {
        if(photo)
        {
          setCurrPhotos([...currPhotos, {...photo}])
        }
      })
      
    }
    setFormData(blankFormState);
    setCurrImg('');
    hideCreate();
  }

  const showCreate = (event: React.MouseEvent<HTMLButtonElement>) => {
    setShowModal(true);
  }

  const hideCreate = () => {
    setFormData(blankFormState);
    setCurrImg('');
    setShowModal(false);
  }

  function onError(err: Error):void{
    console.log(err);
  }

  function onSuccess(response: UploadResponse){
    setCurrImg(response.url)
    console.log(response.url)
    setFormData((formData) => ({...formData, imageUrl:response.url}))
  }

  function onDelete(photoDeleted: Photos){
    setCurrPhotos(currPhotos.filter(photo => photo.id !== photoDeleted.id));
  }

  

  return (<div style={{justifyContent:'center', alignItems:'center', display:'flex', position:'absolute', width:'100%', height:'100%'}}>
    <Stack>
    <div style={{width:'100%', marginTop:'100px'}}>
    <Button style={{width:'100%'}} onClick={showCreate}>Upload New Photo</Button>
    </div>
    <div>
    <PhotoPortfolio photos={currPhotos} onDelete={onDelete}/>
    <Modal show={showModal} onHide={hideCreate} backdrop='static' size='lg' centered>
       <Modal.Header closeButton>
          <Modal.Title>Upload New Image</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form.Floating className='mb-3'>
              <Form.Control id='imageName' name='imageName' type='input'/>
              <label htmlFor='imageName'>Image Name: </label>
            </Form.Floating>
           
            <IKContext publicKey="public_33FjszinEBzlgrIz8+HbC3JVASM=" urlEndpoint="https://ik.imagekit.io/jfpi8d5c5/capstone" authenticationEndpoint={imageKitAuthUrl}>
            <IKUpload style={{display:'none'}}
              folder={'/capstone'}
              onError={(error)=>{onError(error)}}
              onSuccess={(response)=>{onSuccess(response)}}
              inputRef={inputRefTest}
              ref={ikUploadRefTest}
            /> </IKContext>
             <InputGroup className='mb-3'>
              {inputRefTest && <Button onClick={() => inputRefTest?.current?.click()}>
                  Upload
              </Button>}
             
              <Form.Floating>
              <Form.Control id='imageUrl' name='imageUrl' type='input' value={currImg} onChange={handleChange} disabled/>
              <label htmlFor='imageUrl'>Image Url: </label>
              </Form.Floating>
            </InputGroup>
            <Form.Floating className='mb-3'>
              <Form.Control id='caption' name='caption' type='input' onChange={handleChange}/>
              <label htmlFor='caption'>Image Caption: </label>
            </Form.Floating>
        </Modal.Body>
        <Modal.Footer>
        <Stack direction="horizontal" gap={2}>
          <Button variant='secondary' onClick={hideCreate}>Close</Button>
          <Button variant='primary' onClick={handleSubmit}>Save</Button>
        </Stack>
        </Modal.Footer>
    </Modal>
    </div>
    </Stack>
  </div>);
}
 
export default PhotosPage;