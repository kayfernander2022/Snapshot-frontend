import React from 'react'
import Card from 'react-bootstrap/Card'
import Photos from '../../models/photos'
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../../useAuthCtx';
import { Button } from 'react-bootstrap';

export const PhotoCard: React.FC<Photos> = props => {
    const navigate = useNavigate();
    const { currentUser } = useAuthContext(); 
    const imagePath: string = props.imageUrl ? props.imageUrl : ''; //props.image ? 'img/' + props.image : sampleImage

    const imgClick = (event: React.MouseEvent<HTMLImageElement>) => {
        event.preventDefault();
        navigate(`/${currentUser?.id}/myphotos/${props.id}`);
    }

    const shareClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        navigate(`/${currentUser?.id}/myphotos/${props.id}/share`);
    }

    return (
        <Card className="shadow-sm">
            <Card.Img variant="top" src={imagePath} alt={props.imageName || 'user photo'} onClick={imgClick}/>
            <Card.Body>
                {props.imageName && <Card.Title>{props.imageName}</Card.Title>}
                <Card.Text>{props.caption}</Card.Text>
                <Button onClick={shareClick}>Share</Button>
            </Card.Body>
        </Card>
    )
}

export default PhotoCard
