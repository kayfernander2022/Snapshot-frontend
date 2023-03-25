import React from "react";
import User from '../models/user';
import { useAuthContext } from "../useAuthCtx";
import { useNavigate } from 'react-router-dom';

export interface ILoginPageProps {
  
}


const LoginPage: React.FunctionComponent<ILoginPageProps> = () => {
// Destructuring the global state and the setter function from the GlobalCtx context
const navigate = useNavigate();
const {url, setUserContext } = useAuthContext();

const [hasAccount, setHasAccount ] = React.useState(true);

// Setting an initial state for the form to be empty
const blank: User = {
  username: "",
  password: "",
  name:""
}

// Using the useState hook to create a state variable for the form and a setter function
const [form, setForm] = React.useState(blank)

// Function for handling changes to the form inputs
const handleChange = (event: any) => {
  setForm({ ...form, [event.target.name]: event.target.value })
}

// Function for handling form submission
const handleLogin = (event: any) => {
  // Preventing the default form submission behavior
  event.preventDefault()

  // Making a post request to the server using fetch with the username and password in the body
  fetch(`${url}/api/users/login`, {
      method: "post",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify(form)
  })
  // Parsing the response as json
  .then(response => response.json())
  .then(data => {
      // Logging the data from the response
      console.log(data)
     
      // Updating the global state with the token
      setUserContext({...data})

      window.localStorage.setItem('currentUser', JSON.stringify({id: data.id, token: data.token, name: data?.name || 'guest'}));

      // Clearing the form state
      setForm(blank)
      // Navigating to the home page
      navigate('/home');
  })
}

// handleSubmit function is called when the form is submitted
    // it sends a post request to the server to create a new user account
    const handleSignup = (event: any) => {
      event.preventDefault() // prevent the default form submission behavior
      
      fetch(`${url}/api/users`, {
          method: "post", // request method is set to "post"
          headers: {
              "Content-Type": "application/json" // set the request headers
          },
          body: JSON.stringify(form) // send the form data in the request body
      })
      .then(response => response.json()) // parse the response as JSON
      .then(data => {
          console.log(data) // log the server response to the console
          setForm(blank) // reset the form
          setHasAccount(!hasAccount);
          navigate('/login');
      })
  }

  return (
  <>
    {hasAccount && <div className='login'>
      <form onSubmit={handleLogin}>
            <h5>Log In</h5>
                <input
                    type="text"
                    name="username"
                    onChange={handleChange}
                    placeholder="Username"
                />
                <input
                    type="password"
                    name="password"
                    onChange={handleChange}
                    placeholder='Password'
                />
                <input type="submit" value="Login" />
            </form>
            <button onClick={() => setHasAccount(!hasAccount)}>Sign-up</button>
      </div>}
    {!hasAccount && <div className='signup'>
    <form onSubmit={handleSignup}>
          <h5>Sign Up</h5>
              <input
                  type="text"
                  name="username"
                  onChange={handleChange}
                  placeholder="Username"
              />
              <input
                  type="password"
                  name="password"
                  onChange={handleChange}
                  placeholder='Password'
              />
              <input type="submit" value="Signup" />
        </form>
      </div>}  
      </>
)
}

export default LoginPage;