import React from "react";

export interface ILoginPageProps {
  
}
 
const LoginPage: React.FunctionComponent<ILoginPageProps> = () => {
  return (<div style={{justifyContent:'center', alignItems:'center', display:'flex', position:'absolute', width:'100%', height:'100%'}}><p>This is Login Page</p></div>);
}
 
export default LoginPage;