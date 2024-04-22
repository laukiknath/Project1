import React from 'react'
import { useState } from 'react'
import {Link,useNavigate} from 'react-router-dom'
import axios from 'axios'
import './Signup.css'
export default function Signup() {

    const [errors, setErrors] = useState({});
  const navigation = useNavigate();
  
  function clearErrors() {
    setErrors({});
  }
  
  function handleSubmit(event) {
    event.preventDefault();

      const username = event.target.user.value;
      const email = event.target.email.value;
      const pass = event.target.pass.value;
    const repass = event.target.rpass.value;
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    var validPass= /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&^])[A-Za-z\d@.#$!%*?&]{5,15}$/;

    const newErrors = {};

    if (username.length < 8) {
      newErrors.username = '*Username should be at least 8 characters long';
    }
    if( !email.match(validRegex) )
    {
        newErrors.email = '*Provide email in correct format'
    }
    if(!pass.match(validPass))
    {
        newErrors.pass= "*Password should contain atleast one lowercase,one Uppercase,numeric value,special character,and length should be between 5-15 charaters"
    }
    if(repass != pass && pass !== "")
    {
        newErrors.repass= "*Password Doesn't match"
    }
   

    
    setErrors(newErrors);

    axios.post('http://localhost:5000/register', { username, email,pass })
      .then(result => {
        console.log(result);
        window.alert("Signed Up successfully");
        navigation("/");
      })
      .catch(err => console.log(err));
    if (Object.keys(newErrors).length === 0) {

    }

  }
  return (
    <div className='lbody'>
      <div className='lcontainer'>
        <h1> Sign Up </h1>
        <form onSubmit={handleSubmit}>
          <input type='text' placeholder='Name' name='user' id='user' />
          <span className='error'>{errors.username}</span>
            <input type="text" placeholder="Email-id" name=" email" id="email"/><span class="error" >{errors.email}</span>
            <input type="password" placeholder="Password" name=" pass" id="pass"/><span class="error" >{errors.pass}</span>
            <input type="password" placeholder="Re-Enter Password" name=" rpass" id="rpass"/><span class="error" >{errors.repass}</span>

          <div className='terms'>
            <input type='checkbox' id='check' />
            <label htmlFor='check'>
              I agree to the these <a href='#'>Terms & condition</a>
            </label>
            <span className='error'>{errors.checkbox}</span>
          </div>
          <input type='submit' value='Sign Up' className='sub' />
          <div className='register'>
            Already have an account? <Link to='/'>Login Here</Link>
          </div>
        </form>
      </div>
    </div>
  )
}
