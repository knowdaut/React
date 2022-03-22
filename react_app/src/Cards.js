import React from "react";
import { Collapse, Card, CardBody, CardText, CardTitle, Container, Row, Col } from 'reactstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import "./Cards.css";
// import TextForCards from "./TextForCards";

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
    const [isOpen1, setIsOpen1] = React.useState(false);
    const [isOpen2, setIsOpen2] = React.useState(false);
    const [isOpen3, setIsOpen3] = React.useState(false);
    const [isOpen4, setIsOpen4] = React.useState(false);
    const [isOpen5, setIsOpen5] = React.useState(false);

    return (
        <div>
            <Container className="card-container">
                <Col>
                    <Row>
                        <Card key="firstCard" tabIndex={0} onClick={() => { setIsOpen1(!isOpen1) }}>
                            <CardBody>
                                <CardTitle>
                                    {(typeof props.weather2 != "undefined") && props.weather2.current ? dayConverter(utcConverter(props.weather2.daily[1].dt)) : " error "}
                                </CardTitle>
                                <Collapse isOpen={isOpen1}>
                                    <CardText>
                                        {(typeof props.weather2 != "undefined") && props.weather2.current ? <img src={`http://openweathermap.org/img/w/${props.weather2.daily[1].weather[0].icon}.png`} /> : " error "}
                                        <p>{(typeof props.weather2 != "undefined") && props.weather2.current ? toTitleCase(props.weather2.daily[1].weather[0].description) : " error "}</p>
                                        <p>Low: {(typeof props.weather2 != "undefined") && props.weather2.current ? Math.round(props.weather2.daily[1].temp.min) : " error "}&#176;F</p>
                                        <p>High: {(typeof props.weather2 != "undefined") && props.weather2.current ? Math.round(props.weather2.daily[1].temp.max) : " error "}&#176;F</p>
                                        {/* <TextForCards cardNum={1} props={props} /> */}
                                    </CardText>
                                </Collapse>
                            </CardBody>
                        </Card>
                    </Row>
                    <Row>
                        <Card key="secondCard" tabIndex={0} onClick={() => { setIsOpen2(!isOpen2) }}>
                            <CardBody>
                                <CardTitle>
                                    {(typeof props.weather2 != "undefined") && props.weather2.current ? dayConverter(utcConverter(props.weather2.daily[2].dt)) : " error "}
                                    

                                </CardTitle>
                                <Collapse isOpen={isOpen2}>
                                    <CardText>
                                        {(typeof props.weather2 != "undefined") && props.weather2.current ? <img src={`http://openweathermap.org/img/w/${props.weather2.daily[2].weather[0].icon}.png`} /> : " error "}
                                        <p>{(typeof props.weather2 != "undefined") && props.weather2.current ? toTitleCase(props.weather2.daily[2].weather[0].description) : " error "}</p>
                                        <p>Low: {(typeof props.weather2 != "undefined") && props.weather2.current ? Math.round(props.weather2.daily[2].temp.min) : " error "}&#176;F</p>
                                        <p>High: {(typeof props.weather2 != "undefined") && props.weather2.current ? Math.round(props.weather2.daily[2].temp.max) : " error "}&#176;F</p>

                                        {/* <TextForCards cardNum={2} props={props}/> */}
                                    </CardText>
                                </Collapse>
                            </CardBody>
                        </Card>
                    </Row>
                    <Row>
                        <Card key="thirdCard" tabIndex={0} onClick={() => { setIsOpen3(!isOpen3) }}>
                            <CardBody>
                                <CardTitle>
                                    {(typeof props.weather2 != "undefined") && props.weather2.current ? dayConverter(utcConverter(props.weather2.daily[3].dt)) : " error "}
                                </CardTitle>
                                <Collapse isOpen={isOpen3}>
                                    <CardText>
                                        {(typeof props.weather2 != "undefined") && props.weather2.current ? <img src={`http://openweathermap.org/img/w/${props.weather2.daily[3].weather[0].icon}.png`} /> : " error "}
                                        <p>{(typeof props.weather2 != "undefined") && props.weather2.current ? toTitleCase(props.weather2.daily[3].weather[0].description) : " error "}</p>
                                        <p>Low: {(typeof props.weather2 != "undefined") && props.weather2.current ? Math.round(props.weather2.daily[3].temp.min) : " error "}&#176;F</p>
                                        <p>High: {(typeof props.weather2 != "undefined") && props.weather2.current ? Math.round(props.weather2.daily[3].temp.max) : " error "}&#176;F</p>

                                        {/* <TextForCards cardNum={3} props={props}/> */}
                                    </CardText>
                                </Collapse>
                            </CardBody>
                        </Card>
                    </Row>
                    <Row>
                        <Card key="fourthCard" tabIndex={0} onClick={() => { setIsOpen4(!isOpen4) }}>
                            <CardBody>
                                <CardTitle>
                                    {(typeof props.weather2 != "undefined") && props.weather2.current ? dayConverter(utcConverter(props.weather2.daily[4].dt)) : " error "}
                                </CardTitle>
                                <Collapse isOpen={isOpen4}>
                                    <CardText>
                                        {(typeof props.weather2 != "undefined") && props.weather2.current ? <img src={`http://openweathermap.org/img/w/${props.weather2.daily[4].weather[0].icon}.png`} /> : " error "}
                                        <p>{(typeof props.weather2 != "undefined") && props.weather2.current ? toTitleCase(props.weather2.daily[4].weather[0].description) : " error "}</p>
                                        <p>Low: {(typeof props.weather2 != "undefined") && props.weather2.current ? Math.round(props.weather2.daily[4].temp.min) : " error "}&#176;F</p>
                                        <p>High: {(typeof props.weather2 != "undefined") && props.weather2.current ? Math.round(props.weather2.daily[4].temp.max) : " error "}&#176;F</p>
                                        {/* <TextForCards cardNum={4} props={props}/> */}
                                    </CardText>
                                </Collapse>
                            </CardBody>
                        </Card>
                    </Row>
                    <Row>
                        <Card key="fifthCard" tabIndex={0} onClick={() => { setIsOpen5(!isOpen5) }}>
                            <CardBody>
                                <CardTitle>
                                    {(typeof props.weather2 != "undefined") && props.weather2.current ? dayConverter(utcConverter(props.weather2.daily[5].dt)) : " error "}
                                </CardTitle>
                                <Collapse isOpen={isOpen5}>
                                    <CardText>
                                        {(typeof props.weather2 != "undefined") && props.weather2.current ? <img src={`http://openweathermap.org/img/w/${props.weather2.daily[5].weather[0].icon}.png`} /> : " error "}
                                        <p>{(typeof props.weather2 != "undefined") && props.weather2.current ? toTitleCase(props.weather2.daily[5].weather[0].description) : " error "}</p>
                                        <p>Low: {(typeof props.weather2 != "undefined") && props.weather2.current ? Math.round(props.weather2.daily[5].temp.min) : " error "}&#176;F</p>
                                        <p>High: {(typeof props.weather2 != "undefined") && props.weather2.current ? Math.round(props.weather2.daily[5].temp.max) : " error "}&#176;F</p>
                                        {/* <TextForCards cardNum={5} props={props}/> */}
                                    </CardText>
                                </Collapse>
                            </CardBody>
                        </Card>
                    </Row>
                </Col>
            </Container>
        </div>
    )
}



export default Cards;

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
    //                             <Collapse in={props.Collapse1} className="my-2">
    //                                 <CardText>
    //                                     <TextForCards cardNum={1} daily={daily} />
    //                                 </CardText>
    //                             </Collapse>
    //                         </CardBody>
    //                     </Card>
    //                 </Col>
    //             )
    //         }
    //     })
    // }