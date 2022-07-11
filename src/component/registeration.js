import React, { useState } from "react";
import {Link } from "react-router-dom";
import "./registeration.css";
import { Users } from "./Users";



function Registeration() {
  
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  function printVal(event, name, email, password) {
    localStorage.setItem("username",JSON.stringify(name));
    const user = {
      name: name,
      email: email,
      password: password,
    };
    Users.push(user);
    localStorage.setItem("usersArray", Users);
    console.log(Users);
    setName("");
    setEmail("");
    setPassword("");
    
   
  }

    return(
      <>
      
      
      <div className="form-body">
        
        <div className="Imagecontent">
          <img src="https://as2.ftcdn.net/v2/jpg/01/34/18/03/1000_F_134180328_siMnreIa3S9nYEtH6IL6tbevQGdtrtQa.jpg"/>
      </div>
      <div  className="form" >
      
        <h2>Create Account</h2>

        <div className="each-input-block" >
            <label ><h3>Name</h3></label><br/>
            <input
              type="text"
              placeholder="Enter your name"
              size="40"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
        </div><br/>
        <div className="each-input-block">
            <label ><h3>Email</h3></label><br/>
            <input
              type="email"
              placeholder="Enter your email"
              size="40"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
        </div>
        <br/>
        <div className="each-input-block">
            <label ><h3>Password</h3></label><br/>
            <input
              type="password"
              placeholder="Password"
              size="40"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
        </div>
        <br/>
        
        <a href="/MovieCatelogue">
            <button onClick={(event) => printVal(name, email, password)}>
              Register
            </button>
          </a>
        <h5>Already have account ? <Link to="/login">Login</Link></h5>
        </div>
      </div>
    </>
  );
}

export default Registeration;