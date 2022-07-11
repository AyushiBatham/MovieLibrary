 
      
      <div className="form-body">
        
      <div className="Imagecontent">
        <img src="https://as2.ftcdn.net/v2/jpg/01/34/18/03/1000_F_134180328_siMnreIa3S9nYEtH6IL6tbevQGdtrtQa.jpg"/>
    </div>
    <form  name="form" action="regis_validate.php">
    
      <h2>Create Account</h2>

      <div className="each-input-block" >
          <label ><h3>Name</h3></label><br/>
          <input
            type="text"
            placeholder="Enter your name"
            size="40"
            value={name}
            onChange={(e) => setName(e.target.value)}
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
          />
      </div>
      <br/>
      
      <a href="#">
          <button onClick={(event) => printVal(name, email, password)}>
            Register
          </button>
        </a>
      <h5>Already have account ? <Link to="/">Login</Link></h5>
      </form>
    </div>
  </>