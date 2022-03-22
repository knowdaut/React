import React, { useRef, useEffect, useState } from "react";
import { Collapse, Card, CardBody, CardText, CardTitle, Fade, Container, Row, Col } from 'reactstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import "./Cards.css";
import TextForCards from "./TextForCards";

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
    //var cardStorage = []

    // const [expanded, setExpanded] = useState(false);
    // const [accodionHeight, setAccodionHeight] = useState(0);
    // const ref = useRef(null);

    // const open = () => setExpanded(!expanded);

    // useEffect(() => {
    //     const getHeight = ref.current.scrollHeight;
    //     setAccodionHeight(getHeight);
    // }, [expanded]);

    // if (typeof props.weather2 != "undefined" && props.weather2.daily) {
    //     props.weather2.daily.forEach((daily, index) => {
    //         if (index > 0 && index < 6) {
    //             cardStorage.push(
    //                 <Col>
    //                     <Card key="firstCard"
    //                         tabIndex={0}
    //                         onClick={() => props.cardOneState()}>
    //                         <CardBody>
    //                             <CardTitle>
    //                                  {dayConverter(utcConverter(daily.dt))} 
    //                                 <span id="forecast-icon">
    //                                      {(typeof props.weather2 != "undefined") && props.weather2.current ? <img src={`http://openweathermap.org/img/w/${daily.weather[0].icon}.png`} /> : " error "} 
    //                                 </span>
    //                             </CardTitle>
    //                             <div>
    //                                  
    //                                       {toTitleCase(daily.weather[0].description)}  
    //                                       {Math.round(daily.temp.day)}&#176;F  
    //                                  
    //                             </div>
    //                             <Fade in={props.fade1} className="my-2">
    //                                 <CardText>
    //                                     <TextForCards cardNum={1} daily={daily} />
    //                                 </CardText>
    //                             </Fade>
    //                         </CardBody>
    //                     </Card>
    //                 </Col>
    //             )
    //         }
    //     })
    // }
    return (
        <div>
            <Container className="card-container">
                <Col>
                    <Row>

                        <Card key="firstCard" tabIndex={0} onClick={() => props.cardOneState()}>
                            <CardBody>
                                <CardTitle>
                                    {(typeof props.weather2 != "undefined") && props.weather2.current ? dayConverter(utcConverter(props.weather2.daily[1].dt)) : " error "}

                                    {(typeof props.weather2 != "undefined") && props.weather2.current ? <img src={`http://openweathermap.org/img/w/${props.weather2.daily[1].weather[0].icon}.png`} /> : " error "}
                                    {(typeof props.weather2 != "undefined") && props.weather2.current ? toTitleCase(props.weather2.daily[1].weather[0].description) : " error "}


                                </CardTitle>

                                <Fade in={props.fade1} className="my-2">
                                    <CardText>

                                        Low: {(typeof props.weather2 != "undefined") && props.weather2.current ? Math.round(props.weather2.daily[1].temp.min) : " error "}&#176;F


                                        High: {(typeof props.weather2 != "undefined") && props.weather2.current ? Math.round(props.weather2.daily[1].temp.max) : " error "}&#176;F


                                        {/* <TextForCards cardNum={1} props={props} /> */}
                                    </CardText>
                                </Fade>
                            </CardBody>
                        </Card>
                    </Row>
                    <Row>
                        <Card key="secondCard" tabIndex={0} onClick={() => props.cardTwoState()}>
                            <CardBody>
                                <CardTitle>
                                    {(typeof props.weather2 != "undefined") && props.weather2.current ? dayConverter(utcConverter(props.weather2.daily[2].dt)) : " error "}
                                    <span id="forecast-icon">
                                        {(typeof props.weather2 != "undefined") && props.weather2.current ? <img src={`http://openweathermap.org/img/w/${props.weather2.daily[2].weather[0].icon}.png`} /> : " error "}
                                    </span>
                                    {(typeof props.weather2 != "undefined") && props.weather2.current ? toTitleCase(props.weather2.daily[2].weather[0].description) : " error "}

                                </CardTitle>
                                <Fade in={props.fade2} className="my-2">
                                    <CardText>

                                        Low: {(typeof props.weather2 != "undefined") && props.weather2.current ? Math.round(props.weather2.daily[2].temp.min) : " error "}&#176;F


                                        High: {(typeof props.weather2 != "undefined") && props.weather2.current ? Math.round(props.weather2.daily[2].temp.max) : " error "}&#176;F

                                        {/* <TextForCards cardNum={2} props={props}/> */}
                                    </CardText>
                                </Fade>
                            </CardBody>
                        </Card>
                    </Row>
                    <Row>
                        <Card key="thirdCard" tabIndex={0} onClick={() => props.cardThreeState()}>
                            <CardBody>
                                <CardTitle>
                                    {(typeof props.weather2 != "undefined") && props.weather2.current ? dayConverter(utcConverter(props.weather2.daily[3].dt)) : " error "}

                                    {(typeof props.weather2 != "undefined") && props.weather2.current ? <img src={`http://openweathermap.org/img/w/${props.weather2.daily[3].weather[0].icon}.png`} /> : " error "}

                                    {(typeof props.weather2 != "undefined") && props.weather2.current ? toTitleCase(props.weather2.daily[3].weather[0].description) : " error "}

                                </CardTitle>
                                <Fade in={props.fade3} className="my-2">
                                    <CardText>

                                        Low: {(typeof props.weather2 != "undefined") && props.weather2.current ? Math.round(props.weather2.daily[3].temp.min) : " error "}&#176;F


                                        High: {(typeof props.weather2 != "undefined") && props.weather2.current ? Math.round(props.weather2.daily[3].temp.max) : " error "}&#176;F

                                        {/* <TextForCards cardNum={3} props={props}/> */}
                                    </CardText>
                                </Fade>
                            </CardBody>
                        </Card>
                    </Row>
                    <Row>
                        <Card key="fourthCard" tabIndex={0} onClick={() => props.cardFourState()}>
                            <CardBody>
                                <CardTitle>
                                    {(typeof props.weather2 != "undefined") && props.weather2.current ? dayConverter(utcConverter(props.weather2.daily[4].dt)) : " error "}

                                    {(typeof props.weather2 != "undefined") && props.weather2.current ? <img src={`http://openweathermap.org/img/w/${props.weather2.daily[4].weather[0].icon}.png`} /> : " error "}


                                    {(typeof props.weather2 != "undefined") && props.weather2.current ? toTitleCase(props.weather2.daily[4].weather[0].description) : " error "}


                                </CardTitle>
                                <Fade in={props.fade4} className="my-2">
                                    <CardText>

                                        Low: {(typeof props.weather2 != "undefined") && props.weather2.current ? Math.round(props.weather2.daily[4].temp.min) : " error "}&#176;F


                                        High: {(typeof props.weather2 != "undefined") && props.weather2.current ? Math.round(props.weather2.daily[4].temp.max) : " error "}&#176;F

                                        {/* <TextForCards cardNum={4} props={props}/> */}
                                    </CardText>
                                </Fade>
                            </CardBody>
                        </Card>
                    </Row>
                    <Row>
                        <Card key="fifthCard" tabIndex={0} onClick={() => props.cardFiveState()}>
                            <CardBody>
                                <CardTitle>
                                    {(typeof props.weather2 != "undefined") && props.weather2.current ? dayConverter(utcConverter(props.weather2.daily[5].dt)) : " error "}

                                    {(typeof props.weather2 != "undefined") && props.weather2.current ? <img src={`http://openweathermap.org/img/w/${props.weather2.daily[5].weather[0].icon}.png`} /> : " error "}


                                    {(typeof props.weather2 != "undefined") && props.weather2.current ? toTitleCase(props.weather2.daily[5].weather[0].description) : " error "}


                                </CardTitle>
                                <Fade in={props.fade5} className="my-2">
                                    <CardText>

                                        Low: {(typeof props.weather2 != "undefined") && props.weather2.current ? Math.round(props.weather2.daily[5].temp.min) : " error "}&#176;F


                                        High: {(typeof props.weather2 != "undefined") && props.weather2.current ? Math.round(props.weather2.daily[5].temp.max) : " error "}&#176;F

                                        {/* <TextForCards cardNum={5} props={props}/> */}
                                    </CardText>
                                </Fade>
                            </CardBody>
                        </Card>
                    </Row>
                </Col>
            </Container>
        </div>
    )
}



export default Cards;

{/* <Col>
<Card key="firstCard"
    tabIndex={0}
    onClick={() => props.cardOneState()}>
    <CardBody>
        <CardTitle>
             {(typeof props.weather2 != "undefined") && props.weather2.current ? dayConverter(utcConverter(props.weather2.daily[1].dt)) : " error "} 
            <span id="forecast-icon">
                 {(typeof props.weather2 != "undefined") && props.weather2.current ? <img src={`http://openweathermap.org/img/w/${props.weather2.daily[1].weather[0].icon}.png`} /> : " error "} 
            </span>
        </CardTitle>
        <div>
               {Math.round(props.weather.main.temp)}&#176;F   
        </div>
        <Fade in={props.fade1} className="my-2">
            <CardText>
                <TextForCards cardNum={1} props={props} />
            </CardText>
        </Fade>
    </CardBody>
</Card>
</Col>
<Col>
<Card key="secondCard"
    tabIndex={0}
    onClick={() => props.cardTwoState()}>
    <CardBody>
        <CardTitle>
             {(typeof props.weather2 != "undefined") && props.weather2.current ? dayConverter(utcConverter(props.weather2.daily[2].dt)) : " error "} 
            <span id="forecast-icon">
                 {(typeof props.weather2 != "undefined") && props.weather2.current ? <img src={`http://openweathermap.org/img/w/${props.weather2.daily[2].weather[0].icon}.png`} /> : " error "} 
            </span>
        </CardTitle>
        <div>
               {(typeof props.weather2 != "undefined") && props.weather2.current ? Math.round(props.weather2.daily[2].temp.day) : " error "}&#176;F   
        </div>
        <Fade in={props.fade2} className="my-2">
            <CardText>
                <TextForCards cardNum={2} props={props}/>
            </CardText>
        </Fade>
    </CardBody>
</Card>
</Col>
<Col>
<Card key="thirdCard"
    tabIndex={0}
    onClick={() => props.cardThreeState()}>
    <CardBody>
        <CardTitle>
             {(typeof props.weather2 != "undefined") && props.weather2.current ? dayConverter(utcConverter(props.weather2.daily[3].dt)) : " error "} 
            <span id="forecast-icon">
                 {(typeof props.weather2 != "undefined") && props.weather2.current ? <img src={`http://openweathermap.org/img/w/${props.weather2.daily[3].weather[0].icon}.png`} /> : " error "} 
            </span>
        </CardTitle>
        <div>
               {(typeof props.weather2 != "undefined") && props.weather2.current ? Math.round(props.weather2.daily[3].temp.day) : " error "}&#176;F   
        </div>
        <Fade in={props.fade3} className="my-2">
            <CardText>
                <TextForCards cardNum={3} props={props}/>
            </CardText>
        </Fade>
    </CardBody>
</Card>
</Col>
<Col>
<Card key="fourthCard"
    tabIndex={0}
    onClick={() => props.cardFourState()}>
    <CardBody>
        <CardTitle>
             {(typeof props.weather2 != "undefined") && props.weather2.current ? dayConverter(utcConverter(props.weather2.daily[4].dt)) : " error "} 
            <span id="forecast-icon">
                 {(typeof props.weather2 != "undefined") && props.weather2.current ? <img src={`http://openweathermap.org/img/w/${props.weather2.daily[4].weather[0].icon}.png`} /> : " error "} 
            </span>
        </CardTitle>
        <div>
               {(typeof props.weather2 != "undefined") && props.weather2.current ? Math.round(props.weather2.daily[4].temp.day) : " error "}&#176;F   
        </div>
        <Fade in={props.fade4} className="my-2">
            <CardText>
                <TextForCards cardNum={4} props={props}/>
            </CardText>
        </Fade>
    </CardBody>
</Card>
</Col>
<Col>
<Card key="fifthCard"
    tabIndex={0}
    onClick={() => props.cardFiveState()}>
    <CardBody>
        <CardTitle>
             {(typeof props.weather2 != "undefined") && props.weather2.current ? dayConverter(utcConverter(props.weather2.daily[5].dt)) : " error "} 
            <span id="forecast-icon">
                 {(typeof props.weather2 != "undefined") && props.weather2.current ? <img src={`http://openweathermap.org/img/w/${props.weather2.daily[5].weather[0].icon}.png`} /> : " error "} 
            </span>
        </CardTitle>
        <div>
               {(typeof props.weather2 != "undefined") && props.weather2.current ? Math.round(props.weather2.daily[5].temp.day) : " error "}&#176;F   
        </div>
        <Fade in={props.fade5} className="my-2">
            <CardText>
                <TextForCards cardNum={5} props={props}/>
            </CardText>
        </Fade>
    </CardBody>
</Card>
</Col> */}

{/* <Container className="card-container">
<Row>
    {cardStorage}

</Row>
</Container> */}