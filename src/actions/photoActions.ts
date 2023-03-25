import Photos from "../models/photos";

export interface IUpdatePhotoProps{
  url: string | undefined,
  userId: string | undefined,
  photo: Photos
}

export const updatePhotoAction = async({url, userId, photo}:IUpdatePhotoProps) => {
 
  if(!url || !userId) return;

  await fetch(`${url}/api/photos/${photo.id}`, {
     method: "put",
     headers: {
        "Content-Type": "application/json"
     },
     body: JSON.stringify(photo) 
  })
}