import React, {useEffect} from "react";
import { Outlet } from 'react-router-dom';
import { GlobalCtx } from "../GlobalCtx";
import { TopNav } from "../components/topNav";
import 'normalize.css'
import 'animate.css/animate.css'
import '../styles.scss'

export interface IAppProps {
  
}
 
const App: React.FunctionComponent<IAppProps> = () => {
// Initialize state for token and global state
const [token, setToken] = React.useState<string | undefined>(undefined)
const { url } = React.useContext(GlobalCtx);

  useEffect(() => {
    // Get the token from local storage
    const localStorageToken = window.localStorage.getItem("token") ? JSON.parse(window.localStorage.getItem("token")!) : undefined;

    console.log(localStorageToken)
    // If token exists, set it in state
    if(localStorageToken) {
      setToken(localStorageToken.token)
    }
    
    const navbar = document.querySelector('.navbar') as HTMLElement
    if (!navbar) return
}, [token])


function setGlobalToken(token: string | undefined){
  setToken(token);
}

  return (
    <GlobalCtx.Provider value={{ url, token, setGlobalToken }} >
   <div
      data-spy="scroll"
      data-target=".navbar.fixed-top"
      data-offset="0"
    >
      <TopNav/>
      <div style={{justifyContent:'center', alignItems:'center', display:'flex', position:'absolute', width:'100%', height:'100%'}}>
        <Outlet/>
      </div>
    </div>
    </GlobalCtx.Provider>
  );
}

export default App