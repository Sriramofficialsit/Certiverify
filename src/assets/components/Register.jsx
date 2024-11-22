import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Nav from './Nav';

const Register = () => {
  const navigate = useNavigate();

 
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleButtonClick = () => {
    navigate("/login");
  };

  

  return (
    <>
      <Nav />
      <div className="h-screen flex items-center justify-center px-2">
        <div className=" flex flex-col gap-5 px-20 py-20 items-center justify-center shadow-2xl shadow-black rounded-lg backdrop-blur-md bg-slate-800">
          <h1 className="text-4xl mb-6 text-white font-playwrite">User Register</h1>
          {errorMessage && <p className="text-red-500">{errorMessage}</p>}

          <form >
            <div className='flex flex-col gap-6'>
              <div className="relative flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#000000" width="20" height="20" className="absolute left-3">
                  <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" clipRule="evenodd" />
                </svg>
                <input
                  type="text"
                  id="username"
                  className="rounded py-2 px-10 w-full"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>

              <div className="relative flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#000000" className="absolute left-3" width="20" height="20">
                  <path fillRule="evenodd" d="M12 1.5a5.25 5.25 0 0 0-5.25 5.25v3a3 3 0 0 0-3 3v6.75a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3v-6.75a3 3 0 0 0-3-3v-3c0-2.9-2.35-5.25-5.25-5.25Zm3.75 8.25v-3a3.75 3.75 0 1 0-7.5 0v3h7.5Z" clipRule="evenodd" />
                </svg>
                <input
                  type="password"
                  id="password"
                  className="rounded py-2 px-10 w-full"
                  placeholder="New Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <div className="relative flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#000000" className="absolute left-3" width="20" height="20">
                  <path fillRule="evenodd" d="M12 1.5a5.25 5.25 0 0 0-5.25 5.25v3a3 3 0 0 0-3 3v6.75a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3v-6.75a3 3 0 0 0-3-3v-3c0-2.9-2.35-5.25-5.25-5.25Zm3.75 8.25v-3a3.75 3.75 0 1 0-7.5 0v3h7.5Z" clipRule="evenodd" />
                </svg>
                <input
                  type="password"
                  id="confirmPassword"
                  className="rounded py-2 px-10 w-full"
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>
            </div>

            <div className="flex flex-col items-center justify-center mt-4">
              <button type="submit" className="text-white bg-red-600 px-16 py-1 rounded-xl cursor-pointer">Register</button>
            </div>
          </form>

          <div className="mt-5">
            <button className="text-white border px-8 lg:px-16 py-1 rounded-xl cursor-pointer" onClick={handleButtonClick}>Already a User</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
