import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./pages/App";
import Home from "./pages/Home";

export interface IApplicationProps {
}

const Router : React.FunctionComponent<IApplicationProps> = (props) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App/>}>
          <Route path="home" element={<Home/>}/>
          <Route path="myphotos" element={<Home/>}/>
          <Route path="friends" element={<Home/>}/>
          <Route path="login" element={<Home/>}/>
          <Route path="logout" element={<Home/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Router;