import React from 'react';
import img_one from "../assets/bag_1.png";

function Product ({ image, price, description, banner }) {
    return (
        <article>
            <span>{banner}</span>
            <img src={image}/>
            <p>{description}  </p>
            <h4>{price}</h4>
        </article>
    );
}

export default Product