import React, {useState} from "react";
import {Container} from 'reactstrap';

import "bootstrap/dist/css/bootstrap.min.css";
import "./Cards.css";
import IndCard from "./IndCard";

function utcConverter(utcTime) {
    const d = new Date(0);
    d.setUTCSeconds(utcTime)
    const d2 = d.getDay()
    return d2;
}


const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
function dayConverter(dayNum) {
    return days[dayNum]
}




const Cards = (props) => {
    console.log(props)
    const cardStorage = []

    if (typeof props.weatherDaily != "undefined" && props.weatherDaily.daily) {
        props.weatherDaily.daily.forEach((daily, index) => {
            if (index > 0 && index < 6) {
                cardStorage.push(
                    <IndCard key={index} utcConverter={utcConverter} dayConverter={dayConverter} daily={daily} />
                )
            }
        })
    }
    return (
        <div>
            <Container className="card-container">
                {cardStorage}
            </Container>
        </div>
    )
}



export default Cards;




