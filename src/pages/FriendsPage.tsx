import React from "react";

export interface IFriendsPageProps {
  
}
 
const FriendsPage: React.FunctionComponent<IFriendsPageProps> = () => {
  return (<div style={{justifyContent:'center', alignItems:'center', display:'flex', position:'absolute', width:'100%', height:'100%'}}><p>This is Friends Page</p></div>);
}
 
export default FriendsPage;