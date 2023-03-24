import React, {useEffect} from "react";
import { Outlet, useOutletContext } from 'react-router-dom';
import { AuthProvider } from "../useAuthCtx";
import { TopNav } from "../components/topNav";
import 'normalize.css'
import 'animate.css/animate.css'
import '../styles.scss'
import User from "../models/user";

export interface IAppProps {
  
}

type ContextType = { url?:string,
  currentUser: User | undefined,
  setUserContext: (user: User | undefined) => void
}

const App: React.FunctionComponent<IAppProps> = (props: IAppProps) => {

  return (
    <AuthProvider>
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
    </AuthProvider>
  );
}

export function useUserContext() {
  return useOutletContext<ContextType>();
}

export default App