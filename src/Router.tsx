import React from "react";
import { BrowserRouter, createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import App from "./pages/App";
import Home from "./pages/Home";
import PhotosPage from "./pages/PhotosPage";
import FriendsPage from "./pages/FriendsPage";
import LoginPage from "./pages/LoginPage";
import LogoutPage from './pages/LogoutPage';
import ViewPhotoPage from "./pages/ViewPhotoPage";
import { userPhotosLoader, photoLoader } from "./loaders/photosLoader";


export const Router = createBrowserRouter(
  createRoutesFromElements(
          <Route path='/' element={<App/>}>
            <Route path="home" element={<Home/>}/>
            <Route path=":userId/myphotos" element={<PhotosPage/>} loader={userPhotosLoader}/>
            <Route path=":userId/myphotos/:photoId" element={<ViewPhotoPage/>} loader={photoLoader}/>
            <Route path=":userId/myphotos/:photoId/share" element={<Home/>}/>
            <Route path=":userId/myphotos/:photoId/update" element={<Home/>}/>
            <Route path=":userId/myphotos/:photoId/delete" element={<Home/>}/>
            <Route path=":userId/friends" element={<FriendsPage/>}/>
            <Route path="login" element={<LoginPage/>}/>
            <Route path="logout" element={<LogoutPage/>}/>
          </Route>
          )
  )