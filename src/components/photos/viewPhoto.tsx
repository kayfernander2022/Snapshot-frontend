import React, { FormEvent, useState } from 'react'
import Photos from '../../models/photos'
import Card from 'react-bootstrap/Card'
import Button, { ButtonProps } from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../../useAuthCtx';
import { updatePhotoAction } from '../../actions/photoActions';

export const ViewPhoto: React.FC<{ photo: Photos}> = props => {
  const {photo} = {...props};
  const navigate = useNavigate();
  const { url, currentUser } = useAuthContext(); 
  const [formData, setFormData] = useState(photo);
  const [showModal, setShowModal] = useState(false);

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
    navigate(`/${currentUser?.id}/myphotos/${photo.id}/delete`);
  }

  const handleSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    console.log(JSON.stringify(formData));
    if(currentUser)
    {
      updatePhotoAction({url, userId: currentUser.id, photo: formData})
    }
    hideUpdate();
    navigate(`/${currentUser?.id}/myphotos`);
  }

  return (
    <>
    <Card className="shadow-sm">
      <Card.Img variant="top" src={photo.imageUrl} alt={photo.imageName || 'user photo'} style={{height:'500px'}}/>
      <Card.Body>
          {photo.imageName && <Card.Title>{photo.imageName}</Card.Title>}
          <Card.Text>{photo.caption}</Card.Text>
          <Button variant='primary' onClick={showUpdate}>Update</Button>
          <Button variant='secondary' onClick={deleteClick}>Delete</Button>
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
            <Form.Floating className='mb-3'>
              <Form.Control id='imageUrl' name='imageUrl' type='input' defaultValue={photo.imageUrl} onChange={handleChange}/>
              <label htmlFor='imageUrl'>Image Url: </label>
            </Form.Floating>
            <Form.Floating className='mb-3'>
              <Form.Control id='caption' name='caption' type='input' defaultValue={photo.caption} onChange={handleChange}/>
              <label htmlFor='caption'>Image Caption: </label>
            </Form.Floating>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={hideUpdate}>Close</Button>
          <Button variant='primary' onClick={handleSubmit}>Save</Button>
        </Modal.Footer>
    </Modal>
  </>
  )
}

