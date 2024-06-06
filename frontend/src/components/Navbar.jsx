import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import logoji from "../assets/logoji.jpeg";
import toogle_dark from "../assets/day.png";
import toogle_light from "../assets/night.png";
import "../index.css";
import { logout } from "../redux/action/authActions";

const Navbar = ({ theme, setTheme, cartCount }) => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();
  const navigate = useNavigate(); 
  
  const toggle_mode = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  return (
    <nav className={`navbar ${theme} navbar-expand-lg py-3 sticky-top`}>
      <div className="container">
        <img
          src={logoji}
          alt="Logo"
          className="logo"
          style={{ height: "60px" }}
        />
        <NavLink className="navbar-brand fw-bold fs-4 px-2" to="/">
          Kapda lelo
        </NavLink>
        <button
          className="navbar-toggler mx-2"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav m-auto my-2 text-center">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/product">
                Products
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contact">
                Contact
              </NavLink>
            </li>
          </ul>
          <div className="buttons text-center">
            {isAuthenticated ? (
              <button
                onClick={handleLogout}
                className="btn btn-outline-dark m-2"
              >
                <i className="fa fa-sign-out-alt mr-1"></i> Logout
              </button>
            ) : (
              <>
                <NavLink to="/login" className="btn btn-outline-dark m-2">
                  <i className="fa fa-sign-in-alt mr-1"></i> Login
                </NavLink>
                <NavLink to="/register" className="btn btn-outline-dark m-2">
                  <i className="fa fa-user-plus mr-1"></i> Register
                </NavLink>
              </>
            )}
            <NavLink to="/cart" className="btn btn-outline-dark m-2 position-relative">
              <i className="fa fa-cart-shopping mr-1"></i> Cart
              {cartCount > 0 && (
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  {cartCount}
                </span>
              )}
            </NavLink>
            <img
              onClick={toggle_mode}
              src={theme === "light" ? toogle_light : toogle_dark}
              alt="Toggle Theme"
              style={{ height: "40px" }}
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
