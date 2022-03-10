import React from "react";
import { Card, CardBody, CardText, CardTitle, Fade, Container, Row, Col } from 'reactstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import "./Cards.css";
import './Fontawesome/all.css';
import TextForCards from "./TextForCards";

function utcConverter(utcTime){
    var d = new Date(0);
    d.setUTCSeconds(utcTime)
    var d2 = d.getDay()
    return d2;
}

let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
function dayConverter(dayNum){
    console.log(days[dayNum])
    return days[dayNum]
}

const Cards = (props) => {
    var cardStorage = []
    // if(typeof props.weather2 != "undefined" && props.weather2.daily){
    //     props.weather2.daily.slice(0,5).forEach(daily => {
    //         cardStorage.push(
    //         <Col>
    //             <Card key="firstCard"
    //                 tabIndex={0}
    //                 onClick={() => props.cardOneState()}>
    //                 <CardBody>
    //                     <CardTitle>
    //                         <center>{dayConverter(utcConverter(daily.dt))}</center>
    //                         <span id="forecast-icon">
    //                             <center><i className="fas fa-cloud fa-2x"></i></center>
    //                         </span>
    //                     </CardTitle>
    //                     <div>
    //                         <center><p>{props.weather2.daily.temp}</p></center>
    //                     </div>
    //                     <Fade in={props.fade1} className="my-2">
    //                         <CardText>
    //                             <TextForCards cardNum={1} />
    //                         </CardText>
    //                     </Fade>
    //                 </CardBody>
    //             </Card>
    //         </Col>
    //         )
    //     })
    // }
    return (
        <div>
            <Container className="card-container">
                <Row>
                    {/* {cardStorage} */}
                    <Col>
                        <Card key="firstCard"
                            tabIndex={0}
                            onClick={() => props.cardOneState()}>
                            <CardBody>
                                <CardTitle>
                                    <center>{(typeof props.weather2 != "undefined") && props.weather2.current ? dayConverter(utcConverter(props.weather2.daily[1].dt)) : " error "}</center>
                                    <span id="forecast-icon">
                                        <center><i className="fas fa-cloud fa-2x"></i></center>
                                        {/* <center><img src={`http://openweathermap.org/img/w/${props.weather2.daily[0].weather.icon}.png`} /></center> */}
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
                                        <center><i className="fas fa-cloud fa-2x"></i></center>
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
                                        <center><i className="fas fa-cloud fa-2x"></i></center>
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
                                        <center><i className="fas fa-cloud fa-2x"></i></center>
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
                                        <center><i className="fas fa-cloud fa-2x"></i></center>
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