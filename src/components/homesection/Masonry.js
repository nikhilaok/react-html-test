import React from "react";
import './Masonry.css';
import {Helmet} from "react-helmet";

const Masonry = (props)=>{
    return(
        <div className="item product-item">
            <div className="content card">
                <img src="images/products/shoes.png" className="photothumb"/>
                <div className="prod-desc">
                    <div className="pd-title">
                    <h3>{props.title}</h3>
                    </div>
                    <p>{props.description}</p>
                    <h6 className="price">Rs.{props.amount}</h6>
                    <div className="grow">
                        <button className="add-to-cart">Add to cart</button>
                    </div>
                </div>
                <Helmet>
                    <script src="assets/js/masonry-grid.js" type="text/javascript" />
                </Helmet>
            </div>
        </div>
    );

}
export default Masonry;