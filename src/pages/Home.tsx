import React from "react";

export interface IHomeProps {
  
}
 
const Home: React.FunctionComponent<IHomeProps> = () => {
  return (<div style={{justifyContent:'center', alignItems:'center', display:'flex', position:'absolute', width:'100%', height:'100%'}}><p>This is Home</p></div>);
}
 
export default Home;