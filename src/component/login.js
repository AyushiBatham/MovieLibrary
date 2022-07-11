import React from 'react'
import "./login.css";

function Loginn() {
  return (
    <>
    <div className="form-body-login">
        
        <div className="Imagecontent">
          <img src="https://as2.ftcdn.net/v2/jpg/01/34/18/03/1000_F_134180328_siMnreIa3S9nYEtH6IL6tbevQGdtrtQa.jpg"/>
      </div>
      <div  className="form" >
      
        <h2>Login</h2>

        
        <div className="each-input-block-login">
            <label ><h3>Email</h3></label><br/>
            <input
              type="email"
              placeholder="Enter your email"
              size="30"
              
            />
        </div>
        <br/>
        <div className="each-input-block-login">
            <label ><h3>Password</h3></label><br/>
            <input
              type="password"
              placeholder="Password"
              size="30"
             
            />
        </div>
        <br/>
        
        <a href="/MovieCatelogue">
            <button >
              Login
            </button>
          </a>
        
        </div>
      </div>
    </>
  )
}

export default Loginn
