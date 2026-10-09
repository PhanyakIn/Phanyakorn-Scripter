import React from "react";
import Detail from "./Detail";
import './css/Catalog.css';

import product1 from './images/test1.jpg';

function Catalog() {
    return (
        <div className="Catalog">
        <Detail />
        <ul className="product-grid">

            <li className="card-wrapper" id="prod1">
                <span className="card-badge-status">Sale</span>    
                <img src= {product1} alt="product1" className="prod2-img" id="prod1-img"/>
                <div className="small-detail">
                    <h2 className="product-label" id="prod1-label">Product 1</h2>
                    <div className="price-content">
                        <p className="price-label">Price 
                        <span className="product-price" id="prod1-price">1,000</span>฿THB</p>
                    </div>
                </div>
                <hr />
            </li>

            <li className="card-wrapper" id="prod2">
                <span className="card-badge-status">Sale</span>    
                <img src= {product1} className="prod2-img" alt="product2" id="prod2-img" />
                <div className="small-detail">
                    <h2 className="product-label" id="prod2-label">Product 2</h2>
                    <div className="price-content">
                        <p className="price-label">Price 
                        <span className="product-price" id="prod2-price">1,000</span>฿THB</p>
                    </div>
                </div>
                <hr />
            </li>

        </ul>
        </div>
    );
}

export default Catalog