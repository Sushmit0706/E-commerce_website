import React from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { A11y, Autoplay, Pagination, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
const Home = () => {
  return (
    <>
      <div className="hero border-1 pb-3">
        <div className="card bg-dark text-white border-0 mx-3">
          <div className="card-img-overlay d-flex align-items-center">
            <div className="container">
              <h5 className="card-title fs-1 text fw-lighter">
                New Season Arrivals
              </h5>
            </div>
          </div>
        </div>
        <Swiper
          modules={[Pagination, Scrollbar, A11y, Autoplay]}
          spaceBetween={50}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 2000 }}
          loop={true}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          <SwiperSlide>
            <img src={require("../assets/img1.jpeg")} alt="imageee 1" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={require("../assets/img2.jpeg")} alt="imageee 2" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={require("../assets/img3.jpeg")} alt="imageee 3" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={require("../assets/img2.jpeg")} alt="imageee 4" />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default Home;
