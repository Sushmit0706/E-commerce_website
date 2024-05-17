import React from "react";

const Footer = () => {
  return (
    <>
      <div className=" container">
        <div className="w-full h-[100vh]  ">
          <footer className="mb-0 text-center">
            <div className="d-flex align-items-center justify-content-center pb-5">
              <div className="col-md-6">
                <p className="mb-3 mb-md-0">
                  @2024 Kapda Lelo
                  {/* <a  href="https://sahibsingh.dev" className="text-decoration-underline text-dark fs-5" target="_blank" rel="noreferrer">Kapda Lelo</a> */}
                </p>
                {/* <a className="text-dark fs-4" href="https://github.com/ssahibsingh" target="_blank" rel="noreferrer">
              <i className="fa fa-github"></i>
            </a> */}
              </div>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
};

export default Footer;
