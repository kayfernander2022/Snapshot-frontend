import Photos from "../models/photos";
import { LoaderFunctionArgs } from 'react-router-dom';

const URL = 'https://snapshot-f9oq.onrender.com';


//loader for the index route all photos//
export const userPhotosLoader = async ({params}: LoaderFunctionArgs):Promise<Photos[]> => {
  
  const response = await fetch(`${URL}/api/photos/user/${params.userId}`);

  const photos: Photos[] = await response.json();

  const sharedPhotoResponse = await fetch(`${URL}/api/sharedTos/friend/${params.userId}`);

  const sharedPhotos: Photos[] = await sharedPhotoResponse.json();

  console.log(JSON.stringify(photos));
  console.log(JSON.stringify(sharedPhotos));

  sharedPhotos.forEach((sharedPhoto) => {
    sharedPhoto.isSharedPhoto = true;
    photos.push(sharedPhoto);
  })

  return photos;
}



//loader for the show//
export const photoLoader = async({params}: LoaderFunctionArgs):Promise<Photos> => {

  const response = await fetch(`${URL}/api/photos/${params.photoId}`);

  const photo: Photos = await response.json();

  console.log(JSON.stringify(photo));

  return photo;
}