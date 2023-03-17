import React, { useRef, useState } from "react";
import { Card, Image } from "react-bootstrap";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "../assets/style/swiper.css";
import style from "../assets/style/slider.module.css";

// import required modules
import { EffectCoverflow, Pagination } from "swiper";

import Exhausts from "../assets/img/Exhaust.svg";
import Acc from "../assets/img/Accesories.svg";
import Speed from "../assets/img/Speed.svg";

export default function Slider() {
  return (
    <div className={style.section}>
      <div className="row">
        <div className="col-12 mb-3"></div>
        <div className="col-12"></div>
      </div>
      <div className={style.card}>
        <Card className="m-3">
          <div className="row">
            <div className="col-12">
              <h1>OUR SPECIALITY</h1>
              <p className="m-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                euismod libero vel leo auctor, in venenatis nulla consequat. Sed
                commodo nunc sit amet congue aliquam.
              </p>
            </div>
          </div>
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            pagination={true}
            modules={[EffectCoverflow, Pagination]}
            className="mySwiper"
          >
            <div className={style.swip}>
              <SwiperSlide>
                <Image src={Exhausts} alt="exh" height="150px" />
                <p className="mt-3 d-flex justify-content-center">Exhausts</p>
                <p
                  className="mt-4 ms-4"
                  style={{ textAlign: "center", width: "307px" }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                  euismod libero vel leo auctor, in venenatis nulla consequat.
                  Sed commodo nunc sit amet congue aliquam.
                </p>
              </SwiperSlide>
              <SwiperSlide>
                <Image src={Speed} alt="speed" height="150px" />
                <p className="mt-3 d-flex justify-content-center">
                  Speed Improvement
                </p>
                <p
                  className="mt-4 ms-4"
                  style={{ textAlign: "center", width: "307px" }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                  euismod libero vel leo auctor, in venenatis nulla consequat.
                  Sed commodo nunc sit amet congue aliquam.
                </p>
              </SwiperSlide>
              <SwiperSlide>
                <Image src={Acc} alt="acc" height="150px" />
                <p className="mt-3 d-flex justify-content-center">Accesories</p>
                <p
                  className="mt-4 ms-4"
                  style={{ textAlign: "center", width: "307px" }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                  euismod libero vel leo auctor, in venenatis nulla consequat.
                  Sed commodo nunc sit amet congue aliquam.
                </p>
              </SwiperSlide>
            </div>
          </Swiper>
        </Card>
      </div>
    </div>
  );
}
