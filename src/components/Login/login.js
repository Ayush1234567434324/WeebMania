import React, { useState,useEffect } from 'react';

import './login.css'
import OtpInput from 'react-otp-input'
import { Videorender2 } from '../Pages/video/videorender';
export default function Login() {


  const [email, setEmail] = useState('');



  const divStyle = {
    backgroundColor: '#06121e',
    width: '100%',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'fixed', // Set the div to a relative position
  };

  const blackOverlayStyle = {
    position: 'absolute', // Position the black overlay absolutely
    top: 0,
    left: 0,
    width: '100%',
    height: '100vh',
    background: 'rgba(0, 0, 0, 0.7)', // Use a black background with some transparency
  };
  const [otp, setOtp] = useState('');
  const [Click , setClick] = useState(1)
  const [counter, setCounter] = useState(60);
  
  const click = ()=>
  {
      setClick(!Click);
      setCounter(60);
      const serverEndpoint = 'http://localhost:8000/api/send-email'; 

      fetch(serverEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: email }), // Replace with the actual email
      })
        .then((response) => {
          if (response.ok) {
            console.log('Email sent successfully');
          } else {
            console.error('Error sending email');
          }
        })
        .catch((error) => {
          console.error('Network error:', error);
        });
  }
  const tick =()=>
  {
      setCounter(60);
  }
  useEffect(() => {
    const timer = Click ? 60 : (counter > 0 && setInterval(() => setCounter(counter - 1), 1000));
    return () => clearInterval(timer);
  }, [counter, Click]);

  useEffect(() => {
    if (otp.length === 5) {
      const serverEndpoint = 'http://localhost:8000/api/verify'; 

      fetch(serverEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: email,
          otp:otp
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
      
            
    }
  }, [otp, email]);








  return (
    <>
      <div style={divStyle}>
        <Videorender2 video={'login.mp4'} />
        
        <div style={blackOverlayStyle}></div>
        <img className='vegeta-bhai' src='vegeta.png' style={{position:'absolute',height:'150px',top:0,left:0,filter:'brightness(50%)'}}/>
        <img className='weeb-bhai' src='weebmania.png' style={{position:'absolute',height:'350px',top:'-100px',alignItems:'center'}}/>
        {Click?
        <div style={{ position: 'absolute', zIndex: 10000, background: '#000000b2', paddingLeft:'70px',paddingRight:'70px',paddingTop:'40px',paddingBottom:'40px',borderRadius:'2%',border:'2px solid #eb3349'}}>
  <div class="mb-3" style={{ position: 'relative',gap:'5px' }}>
    <label for="exampleInputEmail1" style={{ color: '#eb3349', fontWeight: 700 ,fontSize:'30px' }}>Email address</label>
    <input
      type="email"
      className="form-control"
      id="exampleInputEmail1"
      aria-describedby="emailHelp"
      style={{ background: 'rgba(0, 0, 0, 0.65)', color: 'white' }}
      value={email} // Use the state variable as the value
      onChange={(e) => setEmail(e.target.value)} // Handle changes to the email value
    />
    <div id="emailHelp" class="form-text my-4" style={{ color: 'white', fontWeight: 400 }}>We'll never share your email with anyone else.</div>
    <button type="submit" class="btn btn-primary" style={{width:'100%',background:'#0f2133'}} onClick={click}>Submit</button>
  </div>

</div>
:
<div style={{position:'absolute', zIndex: 10000, background: '#000000b2', paddingLeft:'70px',paddingRight:'70px',paddingTop:'40px',paddingBottom:'40px',borderRadius:'2%',border:'2px solid #eb3349'}}>
<label class='my-3' for="exampleInputEmail1" style={{ color: '#eb3349', fontWeight: 700 ,fontSize:'30px',textAlign:'center',width:'100%' }}>OTP</label>
<p style={{position:'absolute',top:'10px',left:'20px',fontWeight:'700', border: '1px solid #eb3349',width:'25%',textAlign:'center',color:'#eb3349'}} onClick={click}>Edit-Email</p>
<OtpInput
      value={otp}
      onChange={setOtp}
      numInputs={5}
      inputStyle={{width:'3em',height:'3em',color:'white',background:'rgba(0, 0, 0, 0.65)',outline:'none',border:'2px solid grey'}}
      inputType='number'
      renderSeparator={<span>-</span>}
      renderInput={(props) => <input {...props} />}
    />
   <button type="submit" class="btn btn-primary my-5" style={{width:'100%',background:'#0f2133',}} onClick={tick}>{counter?'Submit':'Resend-OTP'}</button>
   <div className='my-3' style={{ color: '#eb3349', fontWeight: 400 ,fontSize:'30px',textAlign:'center',width:'100%' }}>{counter}</div>
  

</div>

}

      </div>
    </>
  );
}
