import React from "react";
import { PhotoPortfolio } from "../components/photos";
import Photo from "../models/photos";
import { useLoaderData } from "react-router-dom";
import Photos from "../models/photos";

export interface IPhotosPageProps {
  
}
 
const PhotosPage: React.FunctionComponent<IPhotosPageProps> = () => {
  const photos = useLoaderData() as Photos[];

  return (<div style={{justifyContent:'center', alignItems:'center', display:'flex', position:'absolute', width:'100%', height:'100%'}}>
    <PhotoPortfolio photos={photos}/>
  </div>);
}
 
export default PhotosPage;