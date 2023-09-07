import React, { useState } from "react";
import './signup.css';
import { Link } from "react-router-dom";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async () => {
    try {
      const response = await fetch("http://localhost:3000/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.status === 200) {
        console.log("Signup successful");
      } else {
        console.error("Signup failed");
      }
    } catch (error) {
      console.error("Error during signup:", error);
    }
  };

  return (
    <section className='register bg-G'>
      <div className='container'>
        <div className='row justify-content-center align-items-center'>
          <div className='col-md-5'>
            <div className='card register_card border-0'>
              <div className='card-body'>
                <h4 className='text-center'>Create your account</h4>
                <p className='text-center'>All fields are required.</p>
                <form className='mt-5 mb-4'>
                  <div className='row'>
                    <div className='col-12'>
                      <label className="form-label">Email <span className='requred'>*</span></label>
                      <div className="input-group input-group-lg mb-3">
                        <input
                          type="email"
                          className="form-control"
                          placeholder='Email'
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
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
                        onClick={handleSignup}
                      >
                        Create account
                      </button>
                    </div>
                  </div>
                </form>
                <p className='mb-0'>Already have an account? <Link to="/Login" className='link'>Sign in</Link> here.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Signup;
