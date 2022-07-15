import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./slider.css";

// import required modules
import { Pagination, Navigation } from "swiper";

import slider1 from "../../assets/slider1.jpg";
import slider2 from "../../assets/slider2.jpg";
import slider3 from "../../assets/slider3.jpg";

const Slider = () => {
    return (
        <>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src={slider1} alt="slider" />
                    <div className="slider-text">
                        Your text here
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slider2} alt="slider" />
                    <div className="slider-text">
                        Your text here
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slider3} alt="slider" />
                    <div className="slider-text">
                        Your text here
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    );
}

export default Slider;

