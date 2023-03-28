import React from "react";

export interface ILogoutPageProps {
  
}
 
const LogoutPage: React.FunctionComponent<ILogoutPageProps> = () => {
  return (<div style={{justifyContent:'center', alignItems:'center', display:'flex', position:'absolute', width:'100%', height:'100%'}}><p>You are now logged out</p></div>);
}
 
export default LogoutPage;