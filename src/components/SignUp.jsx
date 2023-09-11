import React, { useState } from 'react'
import auth from '../services/auth';

function SignUp() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = (event) => {
    event.preventDefault();
    auth.signup({ name, email, password });
    console.log(name, email, password)
  }


  return (
    <div className='App'>
      <div className="auth-form-container">
        <h1>Register</h1>

        <form className="signup-form" onSubmit={handleSignUp}>
          <label className="signup-label">Name</label>
          <input className='signup-input' type='text' placeholder='Enter your name' value={name} onChange={(e) => setName(e.target.value)} />
          <br></br>
          <label className="signup-label">Email</label>
          <input className='signup-input' type='email' placeholder='Enter your email' value={email} onChange={(e) => setEmail(e.target.value)} />
          <br></br>
          <label className="signup-label">Password</label>
          <input className='signup-input' type='password' placeholder='Set password' value={password} onChange={(e) => setPassword(e.target.value)} />
          <br></br>
          <button className='signup-btn ' type='submit'>Sign Up</button>
        </form>
        <br></br>
        <div>
          <h3>Already have an acount?<a href="/signin"><h3>sign in</h3></a></h3>
        </div>
      </div>
    </div>
  )
}

export default SignUp;