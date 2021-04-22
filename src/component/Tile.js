import React from 'react';
import brand_img from "../assets/brand.png";

function Tile ({ title, image, children}) {
    return (
        <section>
            <h2>{title}</h2>
            {children}
            <img src={image}/>
        </section>
    )
}
export default Tile