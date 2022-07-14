import React from "react";
import Card from "../components/card/card";
import Slider from "../components/slider/silder";

const Home = () => {
    return (
        <main>
            <Slider />
            <div className="container">
                <div className="row">
                    <Card />
                    <Card />
                    <Card />
                </div>
            </div>
        </main>
    );
};

export default Home;