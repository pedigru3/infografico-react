import React from "react";
import TitleCard from "../../TitleCard";
import './style.css'

export default function DistributedGeneration(){
    return (
        <div className="distributed-generation-container">
            <TitleCard subtitle="State Ranking" source="Source: ANEEL/ABSOLAR, 2022." >
                Distributed Generation</TitleCard>
        </div>
    );
}