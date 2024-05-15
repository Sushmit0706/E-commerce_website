import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { Footer, Navbar } from '../components';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [address, setAddress] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }
  
    try {
      const response = await axios.post('/api/register', { name, email, password, address, mobileNumber });
      console.log('Registration successful:', response.data);
      navigate('/login');
    } catch (error) {
      console.error('Error registering user:', error);
      if (error.response) {
        console.log('Server error response:', error.response.data);
      }
    }
  };

  return (
    <>
      <Navbar />
      <div className="container my-3 py-3">
        <h1 className="text-center">Register</h1>
        <hr />
        <div className="row my-4 h-100">
          <div className="col-md-4 col-lg-4 col-sm-8 mx-auto">
            <form onSubmit={handleSubmit}>
              <div className="form my-3">
                <label htmlFor="Name">Full Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="Name"
                  placeholder="Enter Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="form my-3">
                <label htmlFor="Email">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="Email"
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="form my-3">
                <label htmlFor="Password">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="Password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <div className="form my-3">
                <label htmlFor="ConfirmPassword">Confirm Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="ConfirmPassword"
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
              </div>
              <div className="form my-3">
                <label htmlFor="Address">Address</label>
                <input
                  type="text"
                  className="form-control"
                  id="Address"
                  placeholder="Enter Your Address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  required
                />
              </div>
              <div className="form my-3">
                <label htmlFor="MobileNumber">Mobile Number</label>
                <input
                  type="text"
                  className="form-control"
                  id="MobileNumber"
                  placeholder="Enter Your Mobile Number"
                  value={mobileNumber}
                  onChange={(e) => setMobileNumber(e.target.value)}
                  required
                />
              </div>
              <div className="my-3">
                <p>Already have an account? <Link to="/login" className="text-decoration-underline text-info">Login</Link></p>
              </div>
              <div className="text-center">
                <button className="my-2 mx-auto btn btn-dark" type="submit">
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Register;
