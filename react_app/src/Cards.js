import React, { useRef, useEffect, useState } from "react";
import { Card, CardBody, CardText, CardTitle, Fade, Container, Row, Col } from 'reactstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import "./Cards.css";
import './Fontawesome/all.css';
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
    //                                 <center>{dayConverter(utcConverter(daily.dt))}</center>
    //                                 <span id="forecast-icon">
    //                                     <center>{(typeof props.weather2 != "undefined") && props.weather2.current ? <img src={`http://openweathermap.org/img/w/${daily.weather[0].icon}.png`} /> : " error "}</center>
    //                                 </span>
    //                             </CardTitle>
    //                             <div>
    //                                 <center>
    //                                     <p>{toTitleCase(daily.weather[0].description)}</p>
    //                                     <p>{Math.round(daily.temp.day)}&#176;F</p>
    //                                 </center>
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
                <Row>
                    <Col>
                        <Card key="firstCard" tabIndex={0} onClick={() => props.cardOneState()}>
                            <CardBody>
                                <CardTitle>
                                    <center>{(typeof props.weather2 != "undefined") && props.weather2.current ? dayConverter(utcConverter(props.weather2.daily[1].dt)) : " error "}</center>
                                    <span id="forecast-icon">
                                        <center>{(typeof props.weather2 != "undefined") && props.weather2.current ? <img src={`http://openweathermap.org/img/w/${props.weather2.daily[1].weather[0].icon}.png`} /> : " error "}</center>
                                    </span>
                                </CardTitle>
                                    <div>
                                        <center><p>{Math.round(props.weather.main.temp)}&#176;F</p></center>
                                    </div>
                                <Fade in={props.fade1} className="my-2">
                                    <CardText>
                                        <p>{(typeof props.weather2 != "undefined") && props.weather2.current ? props.weather2.daily[1].temp.night : " error "}</p>
                                        <TextForCards cardNum={1} props={props} />
                                    </CardText>
                                </Fade>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col>
                        <Card key="secondCard" tabIndex={0} onClick={() => props.cardTwoState()}>
                            <CardBody>
                                <CardTitle>
                                    <center>{(typeof props.weather2 != "undefined") && props.weather2.current ? dayConverter(utcConverter(props.weather2.daily[2].dt)) : " error "}</center>
                                    <span id="forecast-icon">
                                        <center>{(typeof props.weather2 != "undefined") && props.weather2.current ? <img src={`http://openweathermap.org/img/w/${props.weather2.daily[2].weather[0].icon}.png`} /> : " error "}</center>
                                    </span>
                                </CardTitle>
                                    <div>
                                        <center><p>{(typeof props.weather2 != "undefined") && props.weather2.current ? Math.round(props.weather2.daily[2].temp.day) : " error "}&#176;F</p></center>
                                    </div>
                                <Fade in={props.fade2} className="my-2">
                                    <CardText>
                                        <p>{(typeof props.weather2 != "undefined") && props.weather2.current ? props.weather2.daily[2].temp.night : " error "}</p>
                                        {/* <TextForCards cardNum={2} props={props}/> */}
                                    </CardText>
                                </Fade>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col>
                        <Card key="thirdCard" tabIndex={0} onClick={() => props.cardThreeState()}>
                            <CardBody>
                                <CardTitle>
                                    <center>{(typeof props.weather2 != "undefined") && props.weather2.current ? dayConverter(utcConverter(props.weather2.daily[3].dt)) : " error "}</center>
                                    <span id="forecast-icon">
                                        <center>{(typeof props.weather2 != "undefined") && props.weather2.current ? <img src={`http://openweathermap.org/img/w/${props.weather2.daily[3].weather[0].icon}.png`} /> : " error "}</center>
                                    </span>
                                </CardTitle>
                                <div>
                                    <center><p>{(typeof props.weather2 != "undefined") && props.weather2.current ? Math.round(props.weather2.daily[3].temp.day) : " error "}&#176;F</p></center>
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
                        <Card key="fourthCard" tabIndex={0} onClick={() => props.cardFourState()}>
                            <CardBody>
                                <CardTitle>
                                    <center>{(typeof props.weather2 != "undefined") && props.weather2.current ? dayConverter(utcConverter(props.weather2.daily[4].dt)) : " error "}</center>
                                    <span id="forecast-icon">
                                        <center>{(typeof props.weather2 != "undefined") && props.weather2.current ? <img src={`http://openweathermap.org/img/w/${props.weather2.daily[4].weather[0].icon}.png`} /> : " error "}</center>
                                    </span>
                                </CardTitle>
                                <div>
                                    <center><p>{(typeof props.weather2 != "undefined") && props.weather2.current ? Math.round(props.weather2.daily[4].temp.day) : " error "}&#176;F</p></center>
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
                        <Card key="fifthCard" tabIndex={0} onClick={() => props.cardFiveState()}>
                            <CardBody>
                                <CardTitle>
                                    <center>{(typeof props.weather2 != "undefined") && props.weather2.current ? dayConverter(utcConverter(props.weather2.daily[5].dt)) : " error "}</center>
                                    <span id="forecast-icon">
                                        <center>{(typeof props.weather2 != "undefined") && props.weather2.current ? <img src={`http://openweathermap.org/img/w/${props.weather2.daily[5].weather[0].icon}.png`} /> : " error "}</center>
                                    </span>
                                </CardTitle>
                                <div>
                                    <center><p>{(typeof props.weather2 != "undefined") && props.weather2.current ? Math.round(props.weather2.daily[5].temp.day) : " error "}&#176;F</p></center>
                                </div>
                                <Fade in={props.fade5} className="my-2">
                                    <CardText>
                                        <TextForCards cardNum={5} props={props}/>
                                    </CardText>
                                </Fade>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
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
            <center>{(typeof props.weather2 != "undefined") && props.weather2.current ? dayConverter(utcConverter(props.weather2.daily[1].dt)) : " error "}</center>
            <span id="forecast-icon">
                <center>{(typeof props.weather2 != "undefined") && props.weather2.current ? <img src={`http://openweathermap.org/img/w/${props.weather2.daily[1].weather[0].icon}.png`} /> : " error "}</center>
            </span>
        </CardTitle>
        <div>
            <center><p>{Math.round(props.weather.main.temp)}&#176;F</p></center>
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
            <center>{(typeof props.weather2 != "undefined") && props.weather2.current ? dayConverter(utcConverter(props.weather2.daily[2].dt)) : " error "}</center>
            <span id="forecast-icon">
                <center>{(typeof props.weather2 != "undefined") && props.weather2.current ? <img src={`http://openweathermap.org/img/w/${props.weather2.daily[2].weather[0].icon}.png`} /> : " error "}</center>
            </span>
        </CardTitle>
        <div>
            <center><p>{(typeof props.weather2 != "undefined") && props.weather2.current ? Math.round(props.weather2.daily[2].temp.day) : " error "}&#176;F</p></center>
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
            <center>{(typeof props.weather2 != "undefined") && props.weather2.current ? dayConverter(utcConverter(props.weather2.daily[3].dt)) : " error "}</center>
            <span id="forecast-icon">
                <center>{(typeof props.weather2 != "undefined") && props.weather2.current ? <img src={`http://openweathermap.org/img/w/${props.weather2.daily[3].weather[0].icon}.png`} /> : " error "}</center>
            </span>
        </CardTitle>
        <div>
            <center><p>{(typeof props.weather2 != "undefined") && props.weather2.current ? Math.round(props.weather2.daily[3].temp.day) : " error "}&#176;F</p></center>
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
            <center>{(typeof props.weather2 != "undefined") && props.weather2.current ? dayConverter(utcConverter(props.weather2.daily[4].dt)) : " error "}</center>
            <span id="forecast-icon">
                <center>{(typeof props.weather2 != "undefined") && props.weather2.current ? <img src={`http://openweathermap.org/img/w/${props.weather2.daily[4].weather[0].icon}.png`} /> : " error "}</center>
            </span>
        </CardTitle>
        <div>
            <center><p>{(typeof props.weather2 != "undefined") && props.weather2.current ? Math.round(props.weather2.daily[4].temp.day) : " error "}&#176;F</p></center>
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
            <center>{(typeof props.weather2 != "undefined") && props.weather2.current ? dayConverter(utcConverter(props.weather2.daily[5].dt)) : " error "}</center>
            <span id="forecast-icon">
                <center>{(typeof props.weather2 != "undefined") && props.weather2.current ? <img src={`http://openweathermap.org/img/w/${props.weather2.daily[5].weather[0].icon}.png`} /> : " error "}</center>
            </span>
        </CardTitle>
        <div>
            <center><p>{(typeof props.weather2 != "undefined") && props.weather2.current ? Math.round(props.weather2.daily[5].temp.day) : " error "}&#176;F</p></center>
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