// import React from "react";
// import "animate.css";
// import teamImg from "../assets/team.jpeg"; // Import images
// import teamImg1 from "../assets/team2.jpeg";
// import teamImg2 from "../assets/team3.jpeg";
// import teamImg3 from "../assets/team6.jpeg";


// const Teampage = () => {
//   return (
//     <div className="team-bg">
//       <div className="container">
//         <h1 className="text-center my-5 text-black">Our Team</h1>
//         <div className="row">
//           <div className="col-lg-3 col-md-6 mb-4 d-flex">
//             <div className="card h-100 animate__animated animate__fadeInLeft">
//               <img src={teamImg} className="card-img-top" alt="Team Member 1" />
//               <div className="card-body">
//                 <h5 className="card-title">Sushmit Srivastava</h5>
//                 <p className="card-text">Student</p>
//               </div>
//             </div>
//           </div>
//           <div className="col-lg-3 col-md-6 mb-4 d-flex">
//             <div className="card h-100 animate__animated animate__fadeInUp">
//               <img src={teamImg3} className="card-img-top" alt="Team Member 2" />
//               <div className="card-body">
//                 <h5 className="card-title">Punit Saini</h5>
//                 <p className="card-text">Student</p>
//               </div>
//             </div>
//           </div>
//           <div className="col-lg-3 col-md-6 mb-4 d-flex">
//             <div className="card h-100 animate__animated animate__fadeInDown">
//               <img
//                 src={teamImg2}
//                 className="card-img-top"
//                 alt="Team Member 3"
//               />
//               <div className="card-body">
//                 <h5 className="card-title">Gaurav Kumar</h5>
//                 <p className="card-text">Student</p>
//               </div>
//             </div>
//           </div>
//           <div className="col-lg-3 col-md-6 mb-4 d-flex">
//             <div className="card h-100 animate__animated animate__fadeInRight">
//               <img
//                 src={teamImg1}
//                 className="card-img-top"
//                 alt="Team Member 4"
//               />
//               <div className="card-body">
//                 <h5 className="card-title">Yojana Tripathi</h5>
//                 <p className="card-text">Student</p>
//               </div>
//             </div>
//           </div>
//           {/* Add more team members as needed */}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Teampage;

import React from "react";
import "animate.css";
import teamImg from "../assets/team.jpeg"; // Import images
import teamImg1 from "../assets/team2.jpeg";
import teamImg2 from "../assets/team3.jpeg";
import teamImg3 from "../assets/team6.jpeg";


const Teampage = () => {
  return (
    <div className="team-bg">
      <div className="container">
        <h1 className="text-center my-5 text-black">Our Team</h1>
        <div className="row">
          <div className="col-lg-3 col-md-6 mb-4 d-flex">
            <div className="card h-100 animate__animated animate__fadeInLeft">
              <img
                src={teamImg}
                className="card-img-top fixed-img"
                alt="Team Member 1"
              />
              <div className="card-body">
                <h5 className="card-title">Sushmit Srivastava</h5>
                <p className="card-text">Fullstack Developer</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 mb-4 d-flex">
            <div className="card h-150 animate__animated animate__fadeInUp">
              <img
                src={teamImg3}
                className="card-img-top fixed-img"
                alt="Team Member 2"
              />
              <div className="card-body">
                <h5 className="card-title">Punit Saini</h5>
                <p className="card-text">Graphic Designer</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 mb-4 d-flex">
            <div className="card h-100 animate__animated animate__fadeInDown">
              <img
                src={teamImg2}
                className="card-img-top fixed-img"
                alt="Team Member 3"
              />
              <div className="card-body">
                <h5 className="card-title">Gaurav Kumar</h5>
                <p className="card-text">Manual Tester</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 mb-4 d-flex">
            <div className="card h-100 animate__animated animate__fadeInRight">
              <img
                src={teamImg1}
                className="card-img-top fixed-img"
                alt="Team Member 4"
              />
              <div className="card-body">
                <h5 className="card-title">Yojana Tripathi</h5>
                <p className="card-text">Frontend Developer</p>
              </div>
            </div>
          </div>
          {/* Add more team members as needed */}
        </div>
      </div>
    </div>
  );
};

export default Teampage;
