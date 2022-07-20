import React from "react";
import Card from "../../components/Card/card";
import Slider from "../../components/Slider/slider";
import SliderData from "../../data/SliderData";
import "./home.css";

// This is the home page of the web application
const Home = () => {
    return (
        <main>
            {/* One slide slider that introduces the web application */}
            <Slider slides={SliderData} />

            {/* The list of available billboards along with data filters */}
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