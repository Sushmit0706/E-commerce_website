import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import loggo from "../assets/logoji.jpeg";
import "../index.css";

const Footer = () => {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  const handleContactClick = (event, type) => {
    event.preventDefault();
    const message =
      type === "phone"
        ? "Do you want to call this number?"
        : "Do you want to send an email to this address?";
    const isConfirmed = window.confirm(message);
    if (isConfirmed) {
      if (type === "phone") {
        window.location.href = `tel:${event.target.innerText}`;
      } else {
        window.location.href = `mailto:${event.target.innerText}`;
      }
    }
  };

  return (
    <>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Noto+Serif:ital,wght@0,100..900;1,100..900&display=swap');
          .navbar-brand {
            font-family: 'Noto Serif', serif;
          }
        `}
      </style>
      <section className="row-10 footer mt-5">
        <div className="container">
          <div className="row footerContent">
            <div className="col-lg-3 pt-5 pt-lg-0 col-sm-6">
              <div className="logo pcLogo pb-3 d-flex align-items-center">
                <img
                  src={loggo}
                  alt="logo"
                  className="img-fluid"
                  style={{ height: "60px", marginTop: "10px" }}
                />
                <h3 className="navbar-brand" style={{ marginLeft: "20px" }}>
                  KAPDA LELO
                </h3>
              </div>
              <div className="text-white pt-2 pb-3">
                <h6 className="liWrapper text-justify">
                  Welcome to Kapdalelo - we're on a mission to transform the way
                  you shop for clothes, jewelry, electronics, and more.Our
                  commitment to excellence extends beyond our products.Shop with
                  confidence at Kapdalelo, where your style and satisfaction are
                  our top priorities.
                </h6>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6 ">
              <div className="contactContent pt-5 pt-lg-0 text-white ps-lg-3 pe-md-2 ">
                <h6 className="quickHeading fw-bold mt-8">Contact</h6>
                <div className="pt-lg-5 pt-sm-5 pt-3 d-flex flex-column gap-4">
                  <div className="liWrapper d-flex justify-content-start align-items-center gap-3">
                    <i className="fa-solid fa-building"></i>
                    <h6 onClick={(e) => handleContactClick(e, "phone")}>
                      +91 7041574985
                    </h6>
                  </div>
                  <div className="liWrapper d-flex justify-content-start align-items-center gap-3">
                    <i className="fa-solid fa-location-dot"></i>
                    <h6 onClick={(e) => handleContactClick(e, "email")}>
                      kapda123@gmail.com
                    </h6>
                  </div>
                  <div className="social ms-4 ps-2">
                    <h6 className="text-white">Follow us</h6>
                    <div className="icons d-flex align-items-start gap-3">
                      <i className="fa-brands fa-facebook-f"></i>
                      <i className="fa-brands fa-instagram"></i>
                      <i className="fa-brands fa-linkedin"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="text-white pt-5 pt-lg-0 ps-lg-3">
                <h6 className="fw-bolder quickHeading ">Modules</h6>
                <div className="pt-sm-5 pt-lg-5 pt-3 d-flex flex-column gap-4">
                  <Link to="/" className="no-underline">
                    <h6 className="liWrapper d-flex justify-content-start align-items-center gap-3">
                      <i className="fa-solid fa-file"></i>Home
                    </h6>
                  </Link>
                  <Link to="/product" className="no-underline">
                    <h6 className="d-flex justify-content-start align-items-center gap-3">
                      <i className="fa-solid fa-file"></i>Products
                    </h6>
                  </Link>
                  <Link to="/about" className="no-underline">
                    <h6 className="d-flex justify-content-start align-items-center gap-3">
                      <i className="fa-solid fa-file"></i>About us
                    </h6>
                  </Link>
                  <Link to="/contact" className="no-underline">
                    <h6 className="d-flex justify-content-start align-items-center gap-3 mb-0">
                      <i className="fa-solid fa-file"></i>Contact us
                    </h6>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="text-white pt-5 pt-lg-0 pe-md-2">
                <h6 className="quickHeading fw-bold">Any Technical Issue?</h6>
                <div className="pt-sm-5 pt-lg-5 pt-3 d-flex flex-column gap-4">
                  <div className="no-underline">
                    <div className="liWrapper d-flex justify-content-start align-items-center gap-3">
                      <i className="fa-solid fa-building"></i>
                      <h6 onClick={(e) => handleContactClick(e, "phone")}>
                        +91 6388488698
                      </h6>
                    </div>
                  </div>
                  <div className="liWrapper d-flex justify-content-start align-items-center gap-3">
                    <i className="fa-solid fa-location-dot"></i>
                    <h6>280 Block E beta 1 greater nodia</h6>
                  </div>
                  <div className="no-underline">
                    <div className="liWrapper mb-0 d-flex justify-content-start align-items-center gap-3">
                      <i className="fa-solid fa-paper-plane"></i>
                      <h6 onClick={(e) => handleContactClick(e, "email")}>
                        tripathiyojana640@gmail.com
                      </h6>
                    </div>
                  </div>
                  <div className="liWrapper d-flex justify-content-start align-items-center gap-3">
                    <i className="fa-solid fa-phone-volume"></i>
                    <h6 className="d-flex justify-content-center align-items-center">
                      +91 7041574985
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="row-11 termsConditions mt-1 familyMont">
        <div className="container">
          <div className="row text-white">
            <div className="col-md-12">
              <div className="row py-2">
                <div className="col-lg-4 order-3 order-md-1">
                  <h6 className="condition mb-0">
                    <i className="fa-regular fa-copyright"></i>
                    Kapda Lelo, {currentYear}
                  </h6>
                </div>
                <div className="col-lg-4 order-1 order-md-2">
                  <h6 className="condition">
                    Terms and Conditions | Privacy Policy
                  </h6>
                </div>
                <div className="col-lg-4 order-2 order-md-3">
                  <h6 className="condition">
                    Website Designed by{" "}
                    <Link to="#" target="_blank">
                      Kapda Lelo
                    </Link>
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
