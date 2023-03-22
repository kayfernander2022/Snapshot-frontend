import React from "react";

export interface IPhotosPageProps {
  
}
 
const PhotosPage: React.FunctionComponent<IPhotosPageProps> = () => {
  return (<div style={{justifyContent:'center', alignItems:'center', display:'flex', position:'absolute', width:'100%', height:'100%'}}><p>This is Photos Page</p></div>);
}
 
export default PhotosPage;