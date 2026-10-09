import React from "react";
import Detail from "./Detail";
import './css/Catalog.css';


function Catalog() {
    return (
        <div className="Catalog">
            <Detail />
            <div className="product" id="prod1">
                <h1 className="product-name">Product 1</h1>
                <img src="" alt="" />
            </div>
        </div>
    );
}

export default Catalog