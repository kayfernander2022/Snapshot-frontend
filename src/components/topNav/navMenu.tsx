import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'
import { useAuthContext } from '../../useAuthCtx'

export interface INavProps{
}

export const NavMenu: React.FC<INavProps> = (props: INavProps) => {
  const { currentUser, setUserContext } = useAuthContext();
  const [loggedIn, setLoggedIn] = React.useState(false); // toggle the menu items based on if logged in or not

  const logoutOnClick = () => {
    window.localStorage.removeItem('currentUser');
    setUserContext(undefined);
  }

  React.useEffect(()=>{
    if(!currentUser){
      const localStoreUser = window.localStorage.getItem('currentUser') !== null ? JSON.parse(window.localStorage.getItem('currentUser')!) : undefined;
      if(localStoreUser)
      {
        setUserContext({id: localStoreUser.id, username:'masked', password:'masked', token: localStoreUser.token, name:localStoreUser.name})
      }
    }
    setLoggedIn(currentUser ? currentUser?.token !== undefined : false)
  }, [currentUser, currentUser?.token, setUserContext])

  return (
      <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end'>
          <Nav className="ml-auto" defaultActiveKey="#home">
            {loggedIn && 
            <LinkContainer to="/">
              <Nav.Link>
                Home
              </Nav.Link>
          </LinkContainer>}
          {loggedIn && 
            <LinkContainer to={`${currentUser?.id}/MyPhotos`}>
              <Nav.Link>
                 My Photos
              </Nav.Link>
            </LinkContainer> }
            { loggedIn && <LinkContainer to={`${currentUser?.id}/Friends`}>
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