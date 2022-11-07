import React from "react";
import loaderCard from "../../assets/logo/logo.png";
import "./Preloader.css";

function Preloader({ visible }) {
    return (
        <>
            <div
                className={`preloader ${!visible ? "hidePreloader" : ""}`}
                id="preloader"
            >
                <img src={loaderCard} alt="Card"></img>
            </div>
        </>
    );
}

export default Preloader;
