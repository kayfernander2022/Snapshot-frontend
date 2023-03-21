import React from "react";
import { Outlet } from 'react-router-dom';

export interface IAppProps {
  
}
 
const App: React.FunctionComponent<IAppProps> = () => {
  return (
    <>
      <Outlet/>
    </>
  );
}

export default App