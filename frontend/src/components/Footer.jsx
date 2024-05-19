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
      <section class="row-10 footer mt-5">
        <div class="container">
          <div class="row footerContent">
            <div class="col-lg-3 pt-5  pt-lg-0 col-sm-6">
              <div class="logo pcLogo pb-3">
                {/* <Link to="https://www.thapar.edu/"> */}
                <img src={Logo} alt="logo" className="img-fluid" />
                {/* </Link> */}
              </div>
              <div class=" text-white pt-2 pb-3">
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

            <div class="col-lg-3 col-sm-6">
              <div class="contactContent pt-5 pt-lg-0 text-white ps-lg-3 pe-md-2">
                <h6 class="quickHeading fw-bold">Contact</h6>
                <div class=" pt-lg-5 pt-sm-5 pt-3 d-flex flex-column gap-4">
                  <div class="liWrapper d-flex justify-content-start align-items-center gap-3">
                    <i class="fa-solid fa-building"></i>
                    <h6>abcd ....</h6>
                  </div>
                  <div class="liWrapper d-flex justify-content-start align-items-center gap-3">
                    <i class="fa-solid fa-location-dot"></i>
                    <h6>abcd123@gmail.com</h6>
                  </div>
                  {/* <a href="mailto:training@thapar.edu"> */}
                  <h6 class="liWrapper mb-0 d-flex justify-content-start  align-items-center gap-3">
                    <i class="fa-solid fa-paper-plane"></i>
                  </h6>
                  <div class="social ms-4 ps-2">
                    <h6 className="text-white">Follow us</h6>
                    <div class="icons  d-flex align-items-start gap-3">
                      {/* <a href="https://www.facebook.com/officialTIET/"> */}
                      <i class="fa-brands fa-facebook-f"></i>
                      {/* </a> */}
                      {/* <a href="https://www.instagram.com/ctd_tiet/?hl=en"> */}
                      <i class="fa-brands fa-instagram"></i>
                      {/* </a> */}
                      {/* <a href="https://in.pinterest.com/pin/1061160730921621150/"> */}
                      <i class="fa-brands fa-linkedin"></i>
                      {/* </a> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-sm-6">
              <div class=" text-white pt-5 pt-lg-0 ps-lg-3">
                <h6 className="fw-bolder quickHeading">Modules</h6>
                <div class="pt-sm-5 pt-lg-5 pt-3 d-flex flex-column gap-4">
                  <Link to="/">
                    <h6 className="liWrapper d-flex justify-content-start  align-items-center gap-3">
                      <i class="fa-solid fa-file"></i>Home
                    </h6>
                  </Link>

                  <Link to="/product">
                    <h6 className=" d-flex justify-content-start  align-items-center gap-3">
                      <i class="fa-solid fa-file"></i>Products
                    </h6>
                  </Link>

                  <Link to="/about">
                    <h6 className=" d-flex justify-content-start  align-items-center gap-3">
                      <i class="fa-solid fa-file"></i>About us
                    </h6>
                  </Link>
                  <Link to="/contact">
                    <h6 className=" d-flex justify-content-start  align-items-center gap-3 mb-0">
                      <i class="fa-solid fa-file"></i> Contact us
                    </h6>
                  </Link>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-sm-6">
              <div class=" text-white pt-5 pt-lg-0  pe-md-2">
                <h6 class="quickHeading fw-bold">Any Technical Issue?</h6>
                <div class="pt-sm-5 pt-lg-5 pt-3 d-flex flex-column gap-4">
                  <a href="https://testknock.com/">
                    <div class="liWrapper d-flex justify-content-start align-items-center gap-3">
                      <i class="fa-solid fa-building"></i>
                      <h6>abcd....</h6>
                    </div>
                  </a>
                  <div class="liWrapper d-flex justify-content-start align-items-center gap-3">
                    <i class="fa-solid fa-location-dot"></i>
                    <h6>example</h6>
                  </div>
                  <a href="mailto:info@testknock.com">
                    <div class=" liWrapper mb-0 d-flex justify-content-start  align-items-center gap-3">
                      <i class="fa-solid fa-paper-plane"></i>
                      <h6>example@gamil.com</h6>
                    </div>
                  </a>
                  {/* <a href="tel:9953617456"> */}
                  <div class="liWrapper d-flex justify-content-start align-items-center gap-3">
                    <i class="fa-solid fa-phone-volume"></i>
                    <h6 className="d-flex justify-content-center align-items-center">
                      {/* +91- 9953617456<br></br> */}
                    </h6>
                  </div>
                  {/* </a> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="row-11 termsConditions mt-1 familyMont">
        <div class="container">
          <div class="row  text-white">
            <div class="col-md-12 ">
              <div class="row py-2">
                <div class="col-lg-4 order-3 order-md-1">
                  <h6 className="condition mb-0">
                    <i class="fa-regular fa-copyright"></i>
                    Kapda Lelo, {currentYear}
                  </h6>
                </div>
                <div class="col-lg-4 order-1 order-md-2 ">
                  <h6 class="  condition">
                    Terms and Conditions | Privacy Policy
                  </h6>
                </div>
                <div class="col-lg-4 order-2 order-md-3">
                  <h6 class="  condition">
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