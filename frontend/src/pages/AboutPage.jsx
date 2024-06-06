// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { Footer, Navbar } from "../components";


// const AboutPage = () => {
//   const [theme, setTheme] = useState("light");

//   return (
//     <div className={` ${theme}`}>
//       <Navbar theme={theme} setTheme={setTheme} />
//       <div className="background-image">
//         <div className="container my-3 py-3">
//           <h1 className="text-center text-black animate-heading">About Us</h1>
//           <hr className="bg-white" />
//           <p className="lead text-center text-black ">
//             Our journey began with a simple yet ambitious goal: to revolutionize
//             the way people shop for clothes. We believe that style should be
//             accessible, effortless, and enjoyable for everyone. At Kapdalelo, we
//             offer a diverse collection of high-quality clothing that caters to
//             all tastes and preferences. From trendy streetwear to timeless
//             classics, our curated selection is designed to help you express your
//             unique personality and style. We pride ourselves on providing an
//             exceptional online shopping experience. Our user-friendly website,
//             detailed product descriptions, and high-resolution images make it
//             easy to find exactly what you’re looking for. Additionally, our
//             secure checkout process and reliable shipping options ensure that
//             your orders arrive safely and promptly. Customer satisfaction is at
//             the heart of everything we do. Our dedicated customer service team
//             is always ready to assist you with any questions or concerns,
//             providing personalized support to ensure your shopping experience is
//             nothing short of perfect.
//           </p>

//           <h2 className="text-center py-4 text-black animate-heading">
//             Our Products
//           </h2>
//           <div className="row">
//             <div className="col-md-3 col-sm-6 mb-3 px-3">
//               <Link
//                 to="/products/mens-clothing"
//                 className="text-decoration-none"
//               >
//                 <div className="card h-100 hover-effect">
//                   <img
//                     className="card-img-top img-fluid"
//                     src="https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&w=600"
//                     alt="Men's Clothing"
//                     height={160}
//                   />
//                   <div className="card-body">
//                     <h5 className="card-title text-center">Men's Clothing</h5>
//                   </div>
//                 </div>
//               </Link>
//             </div>
//             <div className="col-md-3 col-sm-6 mb-3 px-3">
//               <Link
//                 to="/products/womens-clothing"
//                 className="text-decoration-none"
//               >
//                 <div className="card h-100 hover-effect">
//                   <img
//                     className="card-img-top img-fluid"
//                     src="https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=600"
//                     alt="Women's Clothing"
//                     height={160}
//                   />
//                   <div className="card-body">
//                     <h5 className="card-title text-center">Women's Clothing</h5>
//                   </div>
//                 </div>
//               </Link>
//             </div>
//             <div className="col-md-3 col-sm-6 mb-3 px-3">
//               <Link to="/products/jewelry" className="text-decoration-none">
//                 <div className="card h-100 hover-effect">
//                   <img
//                     className="card-img-top img-fluid"
//                     src="https://images.pexels.com/photos/1927259/pexels-photo-1927259.jpeg?auto=compress&cs=tinysrgb&w=600"
//                     alt="Jewelry"
//                     height={160}
//                   />
//                   <div className="card-body">
//                     <h5 className="card-title text-center">Jewelry</h5>
//                   </div>
//                 </div>
//               </Link>
//             </div>
//             <div className="col-md-3 col-sm-6 mb-3 px-3">
//               <Link to="/products/electronics" className="text-decoration-none">
//                 <div className="card h-100 hover-effect">
//                   <img
//                     className="card-img-top img-fluid"
//                     src="https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=600"
//                     alt="Electronics"
//                     height={160}
//                   />
//                   <div className="card-body">
//                     <h5 className="card-title text-center">Electronics</h5>
//                   </div>
//                 </div>
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default AboutPage;

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
          <p className="lead  text-black  text-justify">
            At Kapdalelo, we're on a mission to transform the way you shop for
            clothes, jewelry, electronics, and more. With a focus on
            accessibility, ease, and enjoyment, we offer a diverse range of
            high-quality products that cater to every taste and preference. With
            a user-friendly website, detailed product descriptions, and
            high-resolution images, finding exactly what you need is a breeze.
            And when it comes to checkout and shipping, rest assured that your
            orders are handled securely and promptly, ensuring a seamless
            shopping experience from start to finish. At the heart of our
            business is customer satisfaction. Our dedicated support team is
            here to assist you with any questions or concerns, providing
            personalized assistance to ensure your shopping journey with us is
            nothing short of exceptional. Shop with confidence at Kapdalelo,
            where your style and satisfaction are our top priorities.
          </p>

          <h2 className="text-center py-4 text-black animate-heading">
            Our Products
          </h2>
          <div className="row">
            <div className="col-md-3 col-sm-6 mb-3 px-3">
              <Link to="/product" className="text-decoration-none">
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
              <Link to="/product" className="text-decoration-none">
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
              <Link to="/product" className="text-decoration-none">
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
              <Link to="/product" className="text-decoration-none">
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
          <div className="text-center mt-4 p-8">
            <Link to="/team" className="btn btn-primary">
              Meet Our Team
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutPage;
