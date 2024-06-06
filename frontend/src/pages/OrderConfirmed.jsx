// import React from "react";
// import { Link } from "react-router-dom";
// import { Footer, Navbar } from "../components";

// const OrderConfirmed = () => {
//   return (
//     <>
//       <Navbar />
//       <div className="container d-flex flex-column justify-content-center align-items-center vh-100">
//         <h1 className="display-1 text-center mb-4">Order Confirmed</h1>
//         <div className="d-flex justify-content-center align-items-center mb-4">
//           <i className="fas fa-hand-holding-usd fa-2x me-2"></i>
//           <i className="fas fa-hand-holding-usd fa-2x"></i>
//         </div>
//         <Link to="/" className="btn btn-primary">
//           Return to Home Page
//         </Link>
//       </div>
//       <Footer />
//     </>
//   );
// };

// export default OrderConfirmed;

import React from "react";
import { Link } from "react-router-dom";
import { Footer, Navbar } from "../components";
import "animate.css";

const OrderConfirmed = () => {
  return (
    <>
      <Navbar />
      <div className="container d-flex flex-column justify-content-center align-items-center vh-100">
        <div className="ribbon animate__animated animate__tada">Order Confirmed</div>
        <div className="d-flex justify-content-center align-items-center mb-4">
          {/* <i className="fas fa-hand-holding-usd fa-2x me-2"></i>
          <i className="fas fa-hand-holding-usd fa-2x"></i> */}
        </div>
        <Link to="/" className="btn btn-primary">
          Return to Home Page
        </Link>
      </div>
      <Footer />
    </>
  );
};

export default OrderConfirmed;
