import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./pages/App";
import Home from "./pages/Home";
import PhotosPage from "./pages/PhotosPage";
import FriendsPage from "./pages/FriendsPage";
import LoginPage from "./pages/LoginPage";
import LogoutPage from './pages/LogoutPage';
export interface IApplicationProps {
}

const Router : React.FunctionComponent<IApplicationProps> = (props: IApplicationProps) => {
  return (
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<App/>}>
            <Route path="home" element={<Home/>}/>
            <Route path="myphotos" element={<PhotosPage/>}/>
            <Route path="friends" element={<FriendsPage/>}/>
            <Route path="login" element={<LoginPage/>}/>
            <Route path="logout" element={<LogoutPage/>}/>
          </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Router;