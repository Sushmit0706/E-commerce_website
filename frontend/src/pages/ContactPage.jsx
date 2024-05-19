// import React from "react";
// import { Footer, Navbar } from "../components";
// import "../index.css";
// const ContactPage = () => {

//   return (
//     <>
//       <Navbar />
//       <div className="container my-3 py-3">
//         <h1 className="text-center">Contact Us</h1>
//         <hr />
//         <div class="row my-4 h-100">
//           <div className="col-md-4 col-lg-4 col-sm-8 mx-auto">
//             <form>
//               <div class="form my-3">
//                 <label for="Name">Name</label>
//                 <input
//                   type="email"
//                   class="form-control"
//                   id="Name"
//                   placeholder="Enter your name"
//                 />
//               </div>
//               <div class="form my-3">
//                 <label for="Email">Email</label>
//                 <input
//                   type="email"
//                   class="form-control"
//                   id="Email"
//                   placeholder="name@example.com"
//                 />
//               </div>
//               <div class="form  my-3">
//                 <label for="Password">Message</label>
//                 <textarea
//                   rows={5}
//                   class="form-control"
//                   id="Password"
//                   placeholder="Enter your message"
//                 />
//               </div>
//               <div className="text-center">
//                 <button
//                   class="my-2 px-4 mx-auto btn btn-dark"
//                   type="submit"
//                   disabled
//                 >
//                   Send
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </>
//   );
// };

// export default ContactPage;

// import React from "react";
// import { useState } from "react";
// import { Footer, Navbar } from "../components";


// const ContactPage = () => {
//   const [theme, setTheme] = useState("light");
//   return (
//     <div className={` ${theme}`}>
//       <Navbar theme={theme} setTheme={setTheme} />
//       <div className="contact-bg">
//         <div className="container my-3 py-3">
//           <h1 className="text-center text-white">Contact Us</h1>
//           <hr className="bg-white" />
//           <div className="row my-4 h-100">
//             <div className="col-md-4 col-lg-4 col-sm-8 mx-auto">
//               <form>
//                 <div className="form my-3">
//                   <label htmlFor="Name" className="text-white">
//                     Name
//                   </label>
//                   <input
//                     type="text"
//                     className="form-control"
//                     id="Name"
//                     placeholder="Enter your name"
//                   />
//                 </div>
//                 <div className="form my-3">
//                   <label htmlFor="Email" className="text-white">
//                     Email
//                   </label>
//                   <input
//                     type="email"
//                     className="form-control"
//                     id="Email"
//                     placeholder="name@example.com"
//                   />
//                 </div>
//                 <div className="form my-3">
//                   <label htmlFor="Message" className="text-white">
//                     Message
//                   </label>
//                   <textarea
//                     rows={5}
//                     className="form-control"
//                     id="Message"
//                     placeholder="Enter your message"
//                   />
//                 </div>
//                 <div className="text-center">
//                   <button
//                     className="my-2 px-4 mx-auto btn btn-dark"
//                     type="submit"
//                     disabled
//                   >
//                     Send
//                   </button>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default ContactPage;

import React, { useState } from "react";
import emailjs from "emailjs-com";
import { Footer, Navbar } from "../components";

const ContactPage = () => {
  const [theme, setTheme] = useState("light");

  const sendEmail = (e) => {
    e.preventDefault();
  
    const name = e.target.name.value;
    const email = e.target.email.value;
    const message = e.target.message.value;
  
    if (!name || !email || !message) {
      alert("Please fill in all fields.");
      return;
    }
  
    emailjs
      .send(
        "service_wd1yi0h",
        "template_mirsnyr",
        {
          name,
          email,
          message
        },
        emailjs.init("d1w8IbEwnbcsSEBAb") // This is your user ID, not an init call
      )
      .then(
        (result) => {
          alert("Message sent successfully!");
          console.log(result.text);
        },
        (error) => {
          alert("Message sending failed. Please try again later.");
          console.log(error.text);
        }
      );
  
    e.target.reset();
  };
  
  

  return (
    <div className={` ${theme}`}>
      <Navbar theme={theme} setTheme={setTheme} />
      <div className="background-image">
        <div className="container my-3 py-3">
          <h1 className="text-center text-white">Contact Us</h1>
          <hr className="bg-white" />
          <div className="row my-4 h-100">
            <div className="col-md-4 col-lg-4 col-sm-8 mx-auto">
              <form onSubmit={sendEmail}>
                <div className="form my-3">
                  <label htmlFor="Name" className="text-white">
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="Name"
                    name="name"
                    placeholder="Enter your name"
                  />
                </div>
                <div className="form my-3">
                  <label htmlFor="Email" className="text-white">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="Email"
                    name="email"
                    placeholder="name@example.com"
                  />
                </div>
                <div className="form my-3">
                  <label htmlFor="Message" className="text-white">
                    Message
                  </label>
                  <textarea
                    rows={5}
                    className="form-control"
                    id="Message"
                    name="message"
                    placeholder="Enter your message"
                  />
                </div>
                <div className="text-center">
                  <button
                    className="my-2 px-4 mx-auto btn btn-dark"
                    type="submit"
                  >
                    Send
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactPage;

