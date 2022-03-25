import React, {useState} from "react";
import {Container} from 'reactstrap';

import "bootstrap/dist/css/bootstrap.min.css";
import "./Cards.css";
import IndCard from "./IndCard";

function utcConverter(utcTime) {
    var d = new Date(0);
    d.setUTCSeconds(utcTime)
    var d2 = d.getDay()
    return d2;
}


let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
function dayConverter(dayNum) {
    console.log(days[dayNum])
    return days[dayNum]
}

function toTitleCase(str) {
    return str.replace(/\w\S*/g, function (txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
}


const Cards = (props) => {
    console.log(props)
    const cardStorage = []

    if (typeof props.weatherDaily != "undefined" && props.weatherDaily.daily) {
        props.weatherDaily.daily.forEach((daily, index) => {
            if (index > 0 && index < 6) {
                cardStorage.push(
                    <IndCard key={index} utcConverter={utcConverter} dayConverter={dayConverter} daily={daily} toTitleCase={toTitleCase}/>
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




