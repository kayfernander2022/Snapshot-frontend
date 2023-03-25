import Photos from "../models/photos";
import { LoaderFunctionArgs } from 'react-router-dom';

const URL = 'http://localhost:4040';

export const userPhotosLoader = async ({params}: LoaderFunctionArgs):Promise<Photos[]> => {
  
  const response = await fetch(`${URL}/api/photos/user/${params.userId}`);

  const photos: Photos[] = await response.json();

  console.log(JSON.stringify(photos));

  return photos;
}

export const photoLoader = async({params}: LoaderFunctionArgs):Promise<Photos> => {

  const response = await fetch(`${URL}/api/photos/${params.photoId}`);

  const photo: Photos = await response.json();

  console.log(JSON.stringify(photo));

  return photo;
}