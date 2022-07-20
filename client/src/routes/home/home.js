import React from "react";
import Card from "../../components/card/card";
import Slider from "../../components/slider/silder";
import { SwiperSlide } from "swiper/react";
import "./home.css";

// Import images
import slider1 from "../../assets/slider1.jpg";
import slider2 from "../../assets/slider2.jpg";
import slider3 from "../../assets/slider3.jpg";

const Home = () => {
    const HomeSlides = [
        {
            image: slider1,
            title: "Feature 1",
            subtitle: "Feature 1 description."
        },
        {
            image: slider2,
            title: "Feature 2",
            subtitle: "Feature 2 description."
        },
        {
            image: slider2,
            title: "Feature 3",
            subtitle: "Feature 3 description."
        },
    ];

    return (
        <main>
            <Slider slides={HomeSlides} />
            <div className="container">
                <div className="row" id="filters">
                    <div className="col-12 col-sm-6 col-lg-3 filter-container">
                        Price range
                        <select className="form-select" aria-label="Select price range">
                            <option defaultValue="0">All</option>
                            <option value="1">Range 1</option>
                            <option value="2">Range 2</option>
                            <option value="3">Range 3</option>
                        </select>
                    </div>
                    <div className="col-12 col-sm-6 col-lg-3 filter-container">
                        Area
                        <select className="form-select" aria-label="Select area">
                            <option defaultValue="0">All</option>
                            <option value="1">Area 1</option>
                            <option value="2">Area 2</option>
                            <option value="3">Area 3</option>
                        </select>
                    </div>
                </div>
                <div className="row" id="items">
                    <Card />
                    <Card />
                    <Card />
                </div>
            </div>
        </main>
    );
};

export default Home;