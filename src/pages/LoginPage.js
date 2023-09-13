import React from 'react';
import styled from 'styled-components';
import Logo1 from './logo2-removebg-preview.png'
import './login.css';



function App() {
  return  <MainContainer>
    <img className='login--logo' src={Logo1} alt='Britam Logo'/>

    <h2 className='welcome--text'>Welcome to ideas Portal</h2>
    <h3 className='logindesc'>Please enter your details</h3>
<div className='wrapper'>
    <form action='#'>
      <div className='input-box'>
        <input type='text' placeholder='Enter your email'/>
      </div>
      <div className='input-box'>
        <input type='password' placeholder='Enter your password'/>
      </div>
      <div className='checker'>
    <input type="checkbox" id="Remember me" name="Remember me"  />
    <label htmlFor="Rememeber me">Remember me for 30 days?</label>
  </div>
  <div className=''>
        <button className='login--button' type='submit' value='Register now'>
        sign in
        </button>
      </div>
      
             </form>

    </div>

    


  </MainContainer>
    
}

const MainContainer = styled.div`

display: flex;
align-items: center;
flex-direction: column;
height: 55vh;
width: 50vh;
border-radius: 12px;
background: rgba(102, 96, 96, 0.65);
box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.06), 0px 1px 3px 0px rgba(16, 24, 40, 0.10);
`;




export default App;
