import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginUser } from './store';
import './signing.css'; // This file is defined below

function Signing() {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const myfunc = (data) => {
    dispatch(loginUser(data));
    navigate("/home");
  };

  return (
  <div className="signin-wrapper">
    <div className="signin-container">
      <h2>User Sign In</h2>
      <form onSubmit={handleSubmit(myfunc)} className="signin-form">
        <input type="text" placeholder="Username" {...register("userName")} />
        <input type="password" placeholder="Password" {...register("password")} />
        <button type="submit">Sign In</button>
      </form>
      <p className="signup-text">
        New User? <a href="/signup">Sign Up</a>
      </p>
    </div>
  </div>
);

}

export default Signing;
