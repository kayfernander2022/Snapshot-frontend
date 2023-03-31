import React, { useRef, useState } from 'react'
import Photos from '../../models/photos'
import Card from 'react-bootstrap/Card'
import { Button, Col, Container, InputGroup, Row, Stack } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../../useAuthCtx';
import { updatePhotoAction, deletePhotoAction } from '../../actions/photoActions';
import { IKContext, IKUpload } from "imagekitio-react";
import { imageKitAuthUrl } from '../../urls';
import { UploadResponse } from "imagekit";

export const ViewPhoto: React.FC<{ photo: Photos}> = props => {
  const {photo} = {...props};
  const navigate = useNavigate();
  const { url, currentUser } = useAuthContext(); 
  const [formData, setFormData] = useState(photo);
  const [showModal, setShowModal] = useState(false);
  const [currImg, setCurrImg] = useState(photo.imageUrl);
  const isSharedPhoto = currentUser?.id !== photo.userId;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    if(event.target.value){
      setFormData((formData) => ({...formData, [event.target.name]:event.target.value}))
    }
  }

  

  const showUpdate = (event: React.MouseEvent<HTMLButtonElement>) => {
    setShowModal(true);
    // navigate(`/${currentUser?.id}/myphotos/${photo.id}/update`);
  }

  const hideUpdate = () => {
    setShowModal(false);
  }

  const deleteClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if(photo.id)
    {
        deletePhotoAction({url, photoId: photo.id});
        navigate(`/${currentUser?.id}/myphotos`);
    }
  }

  const handleSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    console.log(JSON.stringify(formData));
    if(currentUser)
    {
      updatePhotoAction({url, photo: formData})
    }
    hideUpdate();
    navigate(`/${currentUser?.id}/myphotos`);
  }

  function onError(err: Error):void{
    console.log(err);
  }

  function onSuccess(response: UploadResponse){
    setCurrImg(response.url)
    console.log(response.url)
    setFormData((formData) => ({...formData, imageUrl:response.url}))
  }

  function goBackClick(event: React.MouseEvent<HTMLButtonElement>){
    navigate(`/${currentUser?.id}/myphotos`);
  }

  const inputRefTest = useRef<HTMLInputElement>(null);
  const ikUploadRefTest = useRef(null);

  return (
    
    <Stack>
    <div style={{width:'100%', marginTop:'100px'}}>
    <Button style={{width:'100%', borderRadius:'0', border:'none', backgroundColor:'rgb(211, 137, 0)'}} onClick={goBackClick}>Back to My Photos</Button>
    </div>
    <Container className="section-wrapper" style={{justifyContent:'center', alignItems:'center', display:'flex', position:'relative', marginRight:'1800px'}}>
      <Row>
        <Col>
    <Card className="shadow-sm" style={{width:'500px', justifyContent:'center', alignItems:'center', display:'flex', position:'absolute'}}>
      <Card.Img variant="top" src={photo.imageUrl} alt={photo.imageName || 'user photo'} style={{height:'400px', width:'490px'}}/>
      <Card.Body>
          {photo.imageName && <Card.Title>{photo.imageName}</Card.Title>}
          <Card.Text>{photo.caption}</Card.Text>
          {!isSharedPhoto &&
          <Stack direction="horizontal" gap={2}>
            <Button variant='primary' onClick={showUpdate}>Update</Button>
            <Button variant='secondary' onClick={deleteClick}>Delete</Button>
          </Stack>}
      </Card.Body>
  </Card>
 
    <Modal show={showModal} onHide={hideUpdate} backdrop='static' size='lg' centered>
       <Modal.Header closeButton>
          <Modal.Title>Update Image</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form.Floating className='mb-3'>
              <Form.Control id='imageName' name='imageName' type='input' defaultValue={photo.imageName} onChange={handleChange}/>
              <label htmlFor='imageName'>Image Name: </label>
            </Form.Floating>
            <IKContext publicKey="public_33FjszinEBzlgrIz8+HbC3JVASM=" urlEndpoint="https://ik.imagekit.io/jfpi8d5c5/capstone" authenticationEndpoint={imageKitAuthUrl}>
            <IKUpload style={{display:'none'}}
              folder={'/capstone'}
              onError={(error)=>{onError(error)}}
              onSuccess={(response)=>{onSuccess(response)}}
              inputRef={inputRefTest}
              ref={ikUploadRefTest}
            />
             </IKContext>
            <InputGroup className='mb-3'>
           
             {inputRefTest && <Button onClick={() => inputRefTest?.current?.click()}>
                  Upload
              </Button>}
         
         
            <Form.Floating>
              <Form.Control id='imageUrl' name='imageUrl' type='input' defaultValue={currImg} value={currImg} disabled/>
              <label htmlFor='imageUrl'>Image Url: </label>
            </Form.Floating>
            </InputGroup>
            <Form.Floating className='mb-3'>
              <Form.Control id='caption' name='caption' type='input' defaultValue={photo.caption} onChange={handleChange}/>
              <label htmlFor='caption'>Image Caption: </label>
            </Form.Floating>
        </Modal.Body>
        <Modal.Footer>
          <Stack direction="horizontal" gap={2}>
            <Button variant='secondary' onClick={hideUpdate}>Close</Button>
            <Button variant='primary' onClick={handleSubmit}>Save</Button>
          </Stack>
        </Modal.Footer>
    </Modal>
    </Col>
    </Row>
    </Container>
    </Stack>
  )
}

