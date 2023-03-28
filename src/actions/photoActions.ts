import Photos from "../models/photos";

export interface ICreateOrUpdatePhotoProps{
  url: string | undefined,
  photo: Photos
}

export interface IDeletePhotoProps{
  url: string | undefined,
  photoId: string
}


//Update Action
export const updatePhotoAction = async({url, photo}:ICreateOrUpdatePhotoProps) => {
 
  if(!url) return;

  await fetch(`${url}/api/photos/${photo.id}`, {
     method: "put",
     headers: {
        "Content-Type": "application/json"
     },
     body: JSON.stringify(photo) 
  })
}


//Create Action
export const createPhotoAction = async ({ url, photo}:ICreateOrUpdatePhotoProps):Promise<Photos | undefined> => {
  if(!url) return undefined;

  const response = await fetch(`${url}/api/photos`, {
      method: "POST",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify(photo)
  });

  const newPhoto: Photos = await response.json();

  return newPhoto;
}



//Delete Action
export const deletePhotoAction = async ({url, photoId}: IDeletePhotoProps) => {
  if(!url) return;
  await fetch(`${url}/api/${photoId}`, {
    method: "delete"
  });
}