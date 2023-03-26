import React from "react";
import User from '../models/user';
import { useAuthContext } from "../useAuthCtx";
import { useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import { Button, Stack } from 'react-bootstrap';
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

  const handleSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    // console.log(JSON.stringify(formData));
    // if(currentUser)
    // {
    //   updatePhotoAction({url, photo: formData})
    // }
    // hideUpdate();
    // navigate(`/${currentUser?.id}/myphotos`);
  }
//   <Form.Floating className='mb-3'>
//   <Form.Control id='name' name='name' type='input' onChange={handleChange}/>
//     <label htmlFor='name'>Display Name: </label>
// </Form.Floating>
  return (
  <>
    {hasAccount && <div className='login'>
        <Form.Floating className='mb-3'>
            <Form.Control id='username' name='username' type='input' onChange={handleChange}/>
              <label htmlFor='username'>Username: </label>
        </Form.Floating>
        <Form.Floating className='mb-3'>
            <Form.Control id='password' name='password' type='input' onChange={handleChange}/>
              <label htmlFor='password'>Password: </label>
        </Form.Floating>
        <div className='float-right'>
        <Stack direction="horizontal" gap={2}>
        <Button variant='primary' onClick={handleLogin}>Login</Button>
        <Button variant='secondary' onClick={() => setHasAccount(!hasAccount)}>Sign-up</Button>
        </Stack>
        </div>
      </div>}
    {!hasAccount && <div className='signup'>
    <Form.Floating className='mb-3'>
    <Form.Control id='name' name='name' type='input' onChange={handleChange}/>
    <label htmlFor='name'>Display Name: </label>    
     </Form.Floating>
    <Form.Floating className='mb-3'>
            <Form.Control id='username' name='username' type='input' onChange={handleChange}/>
              <label htmlFor='username'>Username: </label>
        </Form.Floating>
        <Form.Floating className='mb-3'>
            <Form.Control id='password' name='password' type='input' onChange={handleChange}/>
              <label htmlFor='password'>Password: </label>
        </Form.Floating>
        <Button variant='primary' onClick={handleSignup}>Sign-up</Button>
      </div>}  
      </>
)
}

export default LoginPage;