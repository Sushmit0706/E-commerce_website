import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../redux/action/authActions";
import { Footer, Navbar } from "../components";


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/login", { email, password });
      console.log("Login successful:", response.data);
      dispatch(login());
      navigate("/");
    } catch (error) {
      console.error("Error logging in:", error);
      alert(error.response.data.error);
    }
  };

  return (
    <>
      <Navbar />
      <div className="login-bg">
        <div className="container my-3 py-3">
          <h1 className="text-center text-white">Login</h1>
          <hr className="bg-light" />
          <div className="row my-4 h-100">
            <div className="col-md-4 col-lg-4 col-sm-8 mx-auto">
              <form onSubmit={handleSubmit}>
                <div className="my-3">
                  <label htmlFor="email" className="text-white">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="name@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="my-3">
                  <label htmlFor="password" className="text-white">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="my-3">
                  <p className="text-white">
                    New Here?{" "}
                    <Link
                      to="/register"
                      className="text-decoration-underline text-info text-white"
                    >
                      Register
                    </Link>
                  </p>
                </div>
                <div className="text-center">
                  <button className="my-2 mx-auto btn btn-dark" type="submit">
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
