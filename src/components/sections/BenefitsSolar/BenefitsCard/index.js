import React from "react";
import './style.css'

export default function BenefitsCard(props) {
    return (
        <div className="card-benefit-container">
            <img className="card-benefit-img" src={props.src}></img>
            <p>{props.children}</p>
        </div>
    )
};