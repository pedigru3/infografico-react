import React from "react";
import './style.css'

export default function TitleCard(props){
    return (
        <div className="title-container limitar-secao">
            <h1> {props.children } </h1>
            <h2> {props.subtitle} </h2>
            <hr></hr>
            <p className="source">{ props.source }</p>
        </div>
    )
}