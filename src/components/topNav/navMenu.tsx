import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'

export interface INavProps{

}

export const NavMenu: React.FC<INavProps> = props => {
  
  const loggedIn = false; // toggle the menu items based on if logged in or not

  return (
      <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end'>
          <Nav className="ml-auto" defaultActiveKey="#home">
            <LinkContainer to="/Home">
              <Nav.Link>
                 Home
              </Nav.Link>
            </LinkContainer>
            {loggedIn && <LinkContainer to="/MyPhotos">
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
            { loggedIn && <LinkContainer to="/Logout">
              <Nav.Link>
                 Logout
              </Nav.Link>
            </LinkContainer>}
          </Nav>
      </Navbar.Collapse>
  )
}

export default NavMenu