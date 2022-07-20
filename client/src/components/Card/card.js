import React from "react";
import { Link } from "react-router-dom";
import thumbnail from "../../assets/ElonMusk.jpg";
import "./card.css";

const Card = props => {
    // This is a billboard card component. You can view it in a grid format. 
    // It contains its title, description, price and thumbnail image
    return (
        <div className="col-12 col-sm-6 col-md-4 item-container">
            <Link to="/details">
                <div className="image-container">
                    <img src={thumbnail} alt="item-thumbnail" />
                </div>
                <p className="title">Title</p>
                <p className="description">Description</p>
                <p className="price">Price</p>
            </Link>
        </div>
    )
}

export default Card;