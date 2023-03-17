import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import style from "../assets/style/seconSlider.module.css";

// import required modules
import { Pagination, Navigation } from "swiper";

const SecondSlider = () => {
  return (
    <>
      <div className={style.section}>
        <Swiper
          pagination={{
            type: "fraction",
          }}
          navigation={false}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="row">
              <div className="col-12">
                <div className={style.title}>
                  <h1 className=" ms-4 d-flex justify-content-start">
                    Who we are
                  </h1>
                </div>
              </div>
              <div className="col-12">
                <h5>Technology Company</h5>
              </div>
              <p
                style={{ fontSize: "14px", marginLeft: "15px", width: "380px" }}
              >
                Sed ut perspiciatis unde omnis iste natus sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="row">
              <div className="col-12">
                <div className={style.title}>
                  <h1 className=" ms-4 d-flex justify-content-start">
                    What we do
                  </h1>
                </div>
              </div>
              <div className="col-12">
                <h5>Professional Brand Management</h5>
              </div>
              <p>
                Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
                consectetur, adipisci velit, sed quia non numquam eius modi
                tempora incidunt ut labore et dolore magnam aliquam quaerat
                voluptatem.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="row">
              <div className="col-12">
                <h1 className=" ms-4 d-flex justify-content-start">
                  How we do
                </h1>
              </div>
              <div className="col-12">
                <h5>Strategize, Design, Collaborate</h5>
              </div>
              <p>
                Ut enim ad minima veniam, quis nostrum exercitationem ullam
                corporis suscipit laboriosam, nisi ut aliquid ex ea commodi
                consequatur? Quis autem vel eum iure reprehenderit qui in ea
                voluptate velit esse sequam nihil molestiae consequatur.
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default SecondSlider;
