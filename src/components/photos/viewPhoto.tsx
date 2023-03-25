import React, { DetailedHTMLProps } from 'react'
import Photo from '../../models/photos'
import Card from 'react-bootstrap/Card'
import Button, { ButtonProps } from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../../useAuthCtx';

export const ViewPhoto: React.FC<{ photo: Photo}> = props => {
  const {photo} = {...props};

  const navigate = useNavigate();
  const { currentUser } = useAuthContext(); 

  const updateClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    navigate(`/${currentUser?.id}/myphotos/${photo.id}/update`);
  }

  const deleteClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    navigate(`/${currentUser?.id}/myphotos/${photo.id}/delete`);
  }

  return (
    <Card className="shadow-sm">
      <Card.Img variant="top" src={photo.imageUrl} alt={photo.imageName || 'user photo'} style={{height:'500px'}}/>
      <Card.Body>
          {photo.imageName && <Card.Title>{photo.imageName}</Card.Title>}
          <Card.Text>{photo.caption}</Card.Text>
          <Button onClick={updateClick}>Update</Button>
          <Button onClick={deleteClick}>Delete</Button>
      </Card.Body>
  </Card>
  )
}

