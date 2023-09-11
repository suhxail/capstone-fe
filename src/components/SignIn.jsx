import { useState } from "react";
import React from 'react'
import auth from "../services/auth";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Navigate } from "react-router-dom";


function SignIn() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");



  const navigate = useNavigate();

  const dispatch = useDispatch();
  const userProfile = useSelector(state => state.user);

  const handleSignIn = (event) => {
    event.preventDefault();

    const user = auth.signin({ email, password });
    console.log(email, password);

    if (user) {
      dispatch({
        type: 'SIGNIN_SUCCESS',
        payload: user
      });
      // console.log("from store", userProfile)
      navigate('/productlist');
    } 
  }





  return (
    <div className="App">
      {/* {
      userData.user && <Navigate to="/productlist" replace={true} />
  } */}
      <div className="auth-form-container">
        <h1>Welcome to ABC jewelleries</h1>
        <h3>Sign In</h3>
        <br></br>
        <form className="signin-form" onSubmit={handleSignIn}>
          <label className="signin-label">Email</label>
          <input className="signin-input" type='email' placeholder='Enter your email' value={email} onChange={(e) => setEmail(e.target.value)} />
          <br></br>
          <label className="signin-label">Password</label>
          <input className="signin-input" type='password' placeholder='Enter your password' value={password} onChange={(e) => setPassword(e.target.value)} />
          <br></br>
          <button className='signin-btn' type='submit' >Sign In</button>
        </form>
        <br></br>
        <div>
          <h3>Don't have an account?<a href="/signup"><h3>sign up!</h3></a></h3>

        </div>



      </div>
    </div>
  )
}

export default SignIn;