import React, {useState} from 'react'
import Card from 'react-bootstrap/Card'
import Photos from '../../models/photos'
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../../useAuthCtx';
import { Button, Stack, Modal, Form } from 'react-bootstrap';
import { deletePhotoAction } from '../../actions/photoActions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { usersLoader } from "../../loaders/usersLoader";
import { sharedToLoader } from "../../loaders/shareLoader";
import SharedTo from '../../models/sharedTo';
import { shareAction, unshareAction } from '../../actions/shareActions';

export const PhotoCard: React.FC<{photo: Photos, onDelete: (photoDeleted: Photos) => void}> = props => {
    const navigate = useNavigate();
    const {photo, onDelete} = {...props};

    const { url, currentUser } = useAuthContext(); 
    const imagePath: string = photo.imageUrl ? photo.imageUrl : ''; 
    const [showModal, setShowModal] = useState(false);
    const [sharedTos, setSharedTos] = useState<SharedTo[]>([]);

    const imgClick = (event: React.MouseEvent<HTMLImageElement>) => {
        event.preventDefault();
        navigate(`/${currentUser?.id}/myphotos/${photo.id}`);
    }

    const showShare = (event: React.MouseEvent<HTMLButtonElement>) => {
        setShowModal(true);
        sharedToLoader(url!, photo.id!)
        .then((friendIds) => 
        {
            usersLoader(url!).then((users) => {
                const sharedTos: SharedTo[] = users.filter((user => user.id !== currentUser?.id)).map((user) => {
                    return {
                        photoId: photo.id!,
                        user: user,
                        isShared: friendIds.some(id => id === user.id)
                    }
                })
                setSharedTos(sharedTos);
            });
        });
      }
    
      const hideShare = () => {
        setShowModal(false);
      }

      const handleShare = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        const shares: string[] = sharedTos.filter(shared => shared.isShared).map((sharedTo) => {
            return sharedTo.user.id
        });

        const unshares = sharedTos.filter(unshared => !unshared.isShared).map((unsharedTo) =>{
            return unsharedTo.user.id
        })

        shareAction({url, photoId: photo.id!, friendIds: shares })
        unshareAction({url, photoId: photo.id!, friendIds: unshares})
        hideShare();
      }

    const deleteClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        if(photo.id)
        {
            deletePhotoAction({url, photoId: photo.id}).then(() => {
                onDelete(photo);
            });
        }
    }

    const shareChanged = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(event.target.id);
        console.log(event.target.value);
        const updatedSharedTos = sharedTos.map((sharedTo) => {
            return {...sharedTo,
                isShared: sharedTo.user?.id === event.target.id ? !sharedTo.isShared : sharedTo.isShared
            }
        })

        setSharedTos(updatedSharedTos);
    }

    return (
        <>
        <Card className="shadow-sm">
            <Card.Img variant="top" src={imagePath} alt={photo.imageName || 'user photo'} onClick={imgClick}/>
            <Card.Body>
                {photo.imageName && <Card.Title>{photo.imageName}</Card.Title>}
                <Card.Text>{photo.caption}</Card.Text>
                {!photo.isSharedPhoto &&
                <Stack direction="horizontal" gap={2}>
                <Button variant='primary' onClick={showShare}>Share</Button>
                <Button variant='secondary' onClick={deleteClick}>Delete</Button>
                <FontAwesomeIcon icon={faHeart}/>
                </Stack>
                }
                {photo.isSharedPhoto && <Card.Text>Shared From: {photo.sharedFrom}</Card.Text>}
            </Card.Body>
        </Card>
        <Modal show={showModal} onHide={hideShare} backdrop='static' size='sm' centered>
        <Modal.Header closeButton>
           <Modal.Title>Share Image</Modal.Title>
         </Modal.Header>
         <Modal.Body>
            <Form>
                {sharedTos.map((sharedTo) => {
                    return (<Form.Check type='switch' id={sharedTo.user?.id} label={sharedTo.user?.name} checked={sharedTo.isShared} onChange={shareChanged}>
                    </Form.Check>)
                })}
            </Form>
         </Modal.Body>
        <Modal.Footer>
        <Stack direction="horizontal" gap={2}>
          <Button variant='secondary' onClick={hideShare}>Close</Button>
          <Button variant='primary' onClick={handleShare}>Share</Button>
        </Stack>
        </Modal.Footer>
    </Modal>
    </>
    )
}

export default PhotoCard
