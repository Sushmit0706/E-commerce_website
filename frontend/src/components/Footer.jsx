import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/lightbag.png";
import "./footer/footer.css";

const Footer = () => {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <>
      <section className="row-10 footer mt-5">
        <div className="container">
          <div className="row footerContent">
            <div className="col-lg-3 pt-5 pt-lg-0 col-sm-6">
              <div className="logo pcLogo pb-3">
                <img src={Logo} alt="logo" className="img-fluid" />
              </div>
              <div className="text-white pt-2 pb-3">
                <h6 className="liWrapper">
                  Welcome to Kapdalelo - Your ultimate destination for
                  affordable fashion. Explore an extensive collection of stylish
                  clothing for men, women, and kids, all at unbeatable prices.
                  From trendy outfits to timeless classics, we have something
                  for every fashion lover.Shop now and elevate your wardrobe
                  without breaking the bank!.
                </h6>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="contactContent pt-5 pt-lg-0 text-white ps-lg-3 pe-md-2">
                <h6 className="quickHeading fw-bold">Contact</h6>
                <div className="pt-lg-5 pt-sm-5 pt-3 d-flex flex-column gap-4">
                  <div className="liWrapper d-flex justify-content-start align-items-center gap-3">
                    <i className="fa-solid fa-building"></i>
                    <h6>abcd ....</h6>
                  </div>
                  <div className="liWrapper d-flex justify-content-start align-items-center gap-3">
                    <i className="fa-solid fa-location-dot"></i>
                    <h6>abcd123@gmail.com</h6>
                  </div>
                  <h6 className="liWrapper mb-0 d-flex justify-content-start align-items-center gap-3">
                    <i className="fa-solid fa-paper-plane"></i>
                  </h6>
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
                <h6 className="fw-bolder quickHeading">Modules</h6>
                <div className="pt-sm-5 pt-lg-5 pt-3 d-flex flex-column gap-4">
                  <Link to="/">
                    <h6 className="liWrapper d-flex justify-content-start align-items-center gap-3">
                      <i className="fa-solid fa-file"></i>Home
                    </h6>
                  </Link>
                  <Link to="/product">
                    <h6 className="d-flex justify-content-start align-items-center gap-3">
                      <i className="fa-solid fa-file"></i>Products
                    </h6>
                  </Link>
                  <Link to="/about">
                    <h6 className="d-flex justify-content-start align-items-center gap-3">
                      <i className="fa-solid fa-file"></i>About us
                    </h6>
                  </Link>
                  <Link to="/contact">
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
                  <a href="https://testknock.com/">
                    <div className="liWrapper d-flex justify-content-start align-items-center gap-3">
                      <i className="fa-solid fa-building"></i>
                      <h6>abcd....</h6>
                    </div>
                  </a>
                  <div className="liWrapper d-flex justify-content-start align-items-center gap-3">
                    <i className="fa-solid fa-location-dot"></i>
                    <h6>example</h6>
                  </div>
                  <a href="mailto:info@testknock.com">
                    <div className="liWrapper mb-0 d-flex justify-content-start align-items-center gap-3">
                      <i className="fa-solid fa-paper-plane"></i>
                      <h6>example@gamil.com</h6>
                    </div>
                  </a>
                  <div className="liWrapper d-flex justify-content-start align-items-center gap-3">
                    <i className="fa-solid fa-phone-volume"></i>
                    <h6 className="d-flex justify-content-center align-items-center">
                      {/* +91- 9953617456<br></br> */}
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
