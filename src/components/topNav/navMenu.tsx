import React, { useContext } from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'
import { GlobalCtx } from '../../GlobalCtx'

export interface INavProps{

}

export const NavMenu: React.FC<INavProps> = props => {
  
  const { token, setGlobalToken } = useContext(GlobalCtx);
  const [loggedIn, setLoggedIn] = React.useState(false); // toggle the menu items based on if logged in or not

  const logoutOnClick = () => {
    window.localStorage.removeItem("token");
    setGlobalToken(undefined);
  }

  React.useEffect(()=>{
    setLoggedIn(token!==undefined)
  }, [token])
  return (
      <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end'>
          <Nav className="ml-auto" defaultActiveKey="#home">
            {loggedIn && 
            <LinkContainer to="/Home">
              <Nav.Link>
                Home
              </Nav.Link>
          </LinkContainer>}
          {loggedIn && 
            <LinkContainer to="/MyPhotos">
              <Nav.Link>
                 My Photos
              </Nav.Link>
            </LinkContainer> }
            { loggedIn && <LinkContainer to="/Friends">
              <Nav.Link>
                 Friends
              </Nav.Link>
            </LinkContainer>}
            {  !loggedIn && <LinkContainer to="/Login">
              <Nav.Link>
                 Login / Signup
              </Nav.Link>
            </LinkContainer>}
            { loggedIn && <LinkContainer to="/Logout" onClick={logoutOnClick}>
              <Nav.Link>
                 Logout
              </Nav.Link>
            </LinkContainer>}
          </Nav>
      </Navbar.Collapse>
  )
}

export default NavMenu