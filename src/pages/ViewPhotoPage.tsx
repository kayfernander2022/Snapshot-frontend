import React from "react";
import Photo from "../models/photos";
import { useLoaderData } from "react-router-dom";
import { ViewPhoto } from "../components/photos/viewPhoto";

export interface IViewPhotoPageProps {
  
}
 
const ViewPhotoPage: React.FunctionComponent<IViewPhotoPageProps> = () => {
  const photo = useLoaderData() as Photo;

  return (<div style={{justifyContent:'center', alignItems:'center', display:'flex', position:'absolute', width:'100%', height:'100%'}}>
    <ViewPhoto photo={photo}/>
  </div>);
}
 
export default ViewPhotoPage;