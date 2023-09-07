import React, { useState } from "react";
import './login.css';
import { Link } from 'react-router-dom';

function Login() {
  const [email, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const response = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.status === 200) {
        
        console.log("Login successful");
      } else {
        
        console.error("Login failed");
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  return (
    <section className='login bg-G'>
      <div className='container'>
        <div className='row justify-content-center align-items-center'>
          <div className='col-md-5'>
            <div className='card login_card border-0'>
              <div className='card-body'>
                <h4 className='text-center'>Login to your account</h4>
                <p className='text-center'>Enter your credentials below.</p>
                <form className='mt-5 mb-4'>
                  <div className='row'>
                    <div className='col-12'>
                      <label className="form-label">Email<span className='requred'>*</span></label>
                      <div className="input-group input-group-lg mb-3">
                        <input
                          type="text"
                          className="form-control"
                          placeholder='User Name'
                          value={email}
                          onChange={(e) => setUserName(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className='col-12'>
                      <label className="form-label">Password <span className='requred'>*</span></label>
                      <div className="input-group input-group-lg mb-3">
                        <input
                          type="password"
                          className="form-control"
                          placeholder='Password'
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className='col-12 mt-3'>
                      <button
                        className='btn btn-01 w-100'
                        type="button"
                        onClick={handleLogin}
                      >
                        Sign in
                      </button>
                    </div>
                  </div>
                </form>
              
                <p className='mb-0'>Haven’t an account? <Link to="/" className='link'>Sign up</Link> here.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
