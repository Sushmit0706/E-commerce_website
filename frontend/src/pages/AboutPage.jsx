// import React from 'react'
// import { Footer, Navbar } from "../components";
// const AboutPage = () => {
//   return (
//     <>
//       <Navbar />
//       <div className="container my-3 py-3">
//         <h1 className="text-center">About Us</h1>
//         <hr />
//         <p className="lead text-center">
//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
//           facere doloremque veritatis odit similique sequi. Odit amet fuga nam
//           quam quasi facilis sed doloremque saepe sint perspiciatis explicabo
//           totam vero quas provident ipsam, veritatis nostrum velit quos
//           recusandae est mollitia esse fugit dolore laudantium. Ex vel explicabo
//           earum unde eligendi autem praesentium, doloremque distinctio nesciunt
//           porro tempore quis eaque labore voluptatibus ea necessitatibus
//           exercitationem tempora molestias. Ad consequuntur veniam sequi ullam
//           tempore vel tenetur soluta dolore sunt maxime aliquam corporis est,
//           quo saepe dolorem optio minus sint nemo totam dolorum! Reprehenderit
//           delectus expedita a alias nam recusandae illo debitis repellat libero,
//           quasi explicabo molestiae saepe, dolorem tempore itaque eveniet quam
//           dignissimos blanditiis excepturi harum numquam vel nihil? Ipsum
//         </p>

//         <h2 className="text-center py-4">Our Products</h2>
//         <div className="row">
//           <div className="col-md-3 col-sm-6 mb-3 px-3">
//             <div className="card h-100">
//               <img className="card-img-top img-fluid" src="https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" height={160} />
//               <div className="card-body">
//                 <h5 className="card-title text-centery">Mens's Clothing</h5>
//               </div>
//             </div>
//           </div>
//           <div className="col-md-3 col-sm-6 mb-3 px-3">
//             <div className="card h-100">
//               <img className="card-img-top img-fluid" src="https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" height={160} />
//               <div className="card-body">
//                 <h5 className="card-title text-center">Women's Clothing</h5>
//               </div>
//             </div>
//           </div>
//           <div className="col-md-3 col-sm-6 mb-3 px-3">
//             <div className="card h-100">
//               <img className="card-img-top img-fluid" src="https://images.pexels.com/photos/1927259/pexels-photo-1927259.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" height={160} />
//               <div className="card-body">
//                 <h5 className="card-title text-center">Jewelery</h5>
//               </div>
//             </div>
//           </div>
//           <div className="col-md-3 col-sm-6 mb-3 px-3">
//             <div className="card h-100">
//               <img className="card-img-top img-fluid" src="https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" height={160} />
//               <div className="card-body">
//                 <h5 className="card-title text-center">Electronics</h5>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </>
//   )
// }

// export default AboutPage

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Footer, Navbar } from "../components";


const AboutPage = () => {
  const [theme, setTheme] = useState("light");

  return (
    <div className={` ${theme}`}>
      <Navbar theme={theme} setTheme={setTheme} />
      <div className="background-image">
        <div className="container my-3 py-3">
          <h1 className="text-center text-black animate-heading">About Us</h1>
          <hr className="bg-white" />
          <p className="lead text-center text-black hover-text">
            Our journey began with a simple yet ambitious goal: to revolutionize
            the way people shop for clothes. We believe that style should be
            accessible, effortless, and enjoyable for everyone. At Kapdalelo, we
            offer a diverse collection of high-quality clothing that caters to
            all tastes and preferences. From trendy streetwear to timeless
            classics, our curated selection is designed to help you express your
            unique personality and style. We pride ourselves on providing an
            exceptional online shopping experience. Our user-friendly website,
            detailed product descriptions, and high-resolution images make it
            easy to find exactly what you’re looking for. Additionally, our
            secure checkout process and reliable shipping options ensure that
            your orders arrive safely and promptly. Customer satisfaction is at
            the heart of everything we do. Our dedicated customer service team
            is always ready to assist you with any questions or concerns,
            providing personalized support to ensure your shopping experience is
            nothing short of perfect.
          </p>

          <h2 className="text-center py-4 text-black animate-heading">
            Our Products
          </h2>
          <div className="row">
            <div className="col-md-3 col-sm-6 mb-3 px-3">
              <Link
                to="/products/mens-clothing"
                className="text-decoration-none"
              >
                <div className="card h-100 hover-effect">
                  <img
                    className="card-img-top img-fluid"
                    src="https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="Men's Clothing"
                    height={160}
                  />
                  <div className="card-body">
                    <h5 className="card-title text-center">Men's Clothing</h5>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-md-3 col-sm-6 mb-3 px-3">
              <Link
                to="/products/womens-clothing"
                className="text-decoration-none"
              >
                <div className="card h-100 hover-effect">
                  <img
                    className="card-img-top img-fluid"
                    src="https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="Women's Clothing"
                    height={160}
                  />
                  <div className="card-body">
                    <h5 className="card-title text-center">Women's Clothing</h5>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-md-3 col-sm-6 mb-3 px-3">
              <Link to="/products/jewelry" className="text-decoration-none">
                <div className="card h-100 hover-effect">
                  <img
                    className="card-img-top img-fluid"
                    src="https://images.pexels.com/photos/1927259/pexels-photo-1927259.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="Jewelry"
                    height={160}
                  />
                  <div className="card-body">
                    <h5 className="card-title text-center">Jewelry</h5>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-md-3 col-sm-6 mb-3 px-3">
              <Link to="/products/electronics" className="text-decoration-none">
                <div className="card h-100 hover-effect">
                  <img
                    className="card-img-top img-fluid"
                    src="https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="Electronics"
                    height={160}
                  />
                  <div className="card-body">
                    <h5 className="card-title text-center">Electronics</h5>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutPage;
