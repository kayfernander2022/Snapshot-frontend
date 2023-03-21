import React, {useEffect} from "react";
import { Outlet } from 'react-router-dom';
import { TopNav } from "../components/topNav";
import 'normalize.css'
import 'animate.css/animate.css'
import '../styles.scss'

export interface IAppProps {
  
}
 
const App: React.FunctionComponent<IAppProps> = () => {

  useEffect(() => {
    const navbar = document.querySelector('.navbar') as HTMLElement
    if (!navbar) return
})

  return (
   <div
      data-spy="scroll"
      data-target=".navbar.fixed-top"
      data-offset="0"
    >
      <TopNav/>
      <Outlet/>
    </div>
  );
}

export default App