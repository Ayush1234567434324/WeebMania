import React, { useState } from 'react';
import Login from '../Login/login';
import { Videorender2 } from '../Pages/video/videorender';
import './LoginSignup.css';

const LoginSignup = () => {
  const [action, setAction] = useState("Sign Up");
  const [otp , setotp] = useState(true)
  // State for input values
  const [info, setInfo] = useState({
    name: "",
    email: "",
    password: "",
    country: "",
    mobile: ""
  });
  const divStyle = {
    background: '#06121e',
    width: '100%',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'fixed', 
    opacity:'0.7'
  
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value
    }));
  };

  const handleSignUp = () => {
    // Log or use the input values for Sign Up
    console.log("User Info:", info);
    setAction('Sign Up');

    if(action==='Sign Up')
    setotp(false) 
    // Additional logic for Sign Up
  };

  const handleLogin = () => {
    // Log or use the input values for Login
    console.log("User Info:", info);

    const serverEndpoint = 'https://universe-tau.vercel.app/api/verify2'; 

    fetch(serverEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email: info.email,
        password:info.password
       }), // Replace with the actual email
    })
      .then((response) => {
        
        if (response.ok) {
          response.json().then(data => {
            document.cookie = `userInfo=${JSON.stringify(data)}; max-age=604800; path=/`;
            window.location.reload();
          });


        }
         else {
          console.error('not verified');
        }
      })
      .catch((error) => {
        console.error('Network error:', error);
      });
    setAction('Login');


    // Additional logic for Login
  };
  const blackOverlayStyle = {
    position: 'absolute', // Position the black overlay absolutely
    top:'3%',
  
    width: '60%',
    height: 'auto',
    background: 'rgba(0, 0, 0, 0.7)', // Use a black background with some transparency
  };


  return (
    
    <div style={divStyle} >
        
         <img className='vegeta-bhai' src='vegeta.png' style={{position:'absolute',height:'150px',top:0,left:0,filter:'brightness(50%)'}}/>
        <img className='weeb-bhai' src='weebmania.png' style={{position:'absolute',height:'350px',top:'-100px',alignItems:'center'}}/>
       
    <Videorender2 video={'login.mp4'} />
    
   { otp?(<>
    <div className="container1 login" style={blackOverlayStyle}>
        
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>

      <div className="inputs">
        {action === "Sign Up" ? (

        
          <div className="inputs">
            <div className="input">
              <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M144 144v48H304V144c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192V144C80 64.5 144.5 0 224 0s144 64.5 144 144v48h16c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64H80z"/></svg>
              <input
                type="text"
                placeholder='Name'
                name="name"
                value={info.name}
                onChange={handleInputChange}
                style={{width:'100%'}}
              />
            </div>

            <div className="input">
              <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M144 144v48H304V144c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192V144C80 64.5 144.5 0 224 0s144 64.5 144 144v48h16c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64H80z"/></svg>
              <input
                type="email"
                placeholder='Email ID'
                name="email"
                value={info.email}
                onChange={handleInputChange}
                style={{width:'100%'}}
              />
            </div>

            <div className="input">
              <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M144 144v48H304V144c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192V144C80 64.5 144.5 0 224 0s144 64.5 144 144v48h16c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64H80z"/></svg>
              <input
                type="text"
                placeholder='Country'
                name="country"
                value={info.country}
                onChange={handleInputChange}
                style={{width:'100%'}}
              />
            </div>

            <div className="input">
              <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M144 144v48H304V144c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192V144C80 64.5 144.5 0 224 0s144 64.5 144 144v48h16c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64H80z"/></svg>
              <input
                type="password"
                placeholder='Password'
                name="password"
                value={info.password}
                onChange={handleInputChange}
                style={{width:'100%'}}
              />
            </div>

            <div className="input">
              <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M80 192V144C80 64.5 144.5 0 224 0s144 64.5 144 144v48h16c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64H80z"/></svg>
              <input
                type="tel"
                placeholder='Mobile No.'
                name="mobile"
                value={info.mobile}
                onChange={handleInputChange}
                style={{width:'100%'}}
              />
            </div>
          </div>

        ) : (
          <div className="inputs">
            <div className="input">
              <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M144 144v48H304V144c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192V144C80 64.5 144.5 0 224 0s144 64.5 144 144v48h16c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64H80z"/></svg>
              <input
                type="email"
                placeholder='Email ID'
                name="email"
                value={info.email}
                onChange={handleInputChange}
                style={{width:'100%'}}
              />
            </div>

            <div className="input">
              <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M144 144v48H304V144c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192V144C80 64.5 144.5 0 224 0s144 64.5 144 144v48h16c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64H80z"/></svg>
              <input
                type="password"
                placeholder='Password'
                name="password"
                value={info.password}
                onChange={handleInputChange}
                style={{width:'100%'}}
              />
            </div>
          </div>
        )}
      </div>

      <div className="submit-container my-3">
        <div className= {action === "Login" ? "submit gray" : "submit"} style={action === "Login" ? { position: 'absolute', top: '10px', right: '10px' } : {}} onClick={handleSignUp}>Sign Up</div>
        <div className=  {action === "Sign Up" ? "submit gray" : "submit"} style={action === "Sign Up" ? { position: 'absolute', top: '10px', right: '10px' } : {}} onClick={handleLogin}>Login</div>
      </div>
    </div>
    </>):
    (
        <Login info={info}></Login>
    )}
    </div>
  );
};

export default LoginSignup;
